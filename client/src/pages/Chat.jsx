import { useEffect, useRef, useState } from 'react';
import {
  Send,
  AtSign,
  Pencil,
  Trash2,
  Users,
  MessageCircle,
} from 'lucide-react';
import { get, post, put, del } from '../services/api';
import { Toast } from '../components/UI';
import { useWorkspace } from '../context/WorkspaceContext';
import { useAuth } from '../context/AuthContext';
import { io } from 'socket.io-client';

const base =
  import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000';

export default function Chat() {
  const { current } = useWorkspace();
  const { user } = useAuth();
  const canWrite = current?.role !== 'GUEST';

  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);
  const [text, setText] = useState('');
  const [mentionOpen, setMentionOpen] = useState(false);
  const [mentionAll, setMentionAll] = useState(false);
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState('');
  const [connected, setConnected] = useState(false);
  const end = useRef(null);

  const load = async () => {
    try {
      const [chat, users] = await Promise.all([get('/chat'), get('/users')]);
      setMessages(Array.isArray(chat) ? chat : []);
      setMembers(Array.isArray(users) ? users : []);
    } catch (error) {
      setToast(error.response?.data?.message || 'Unable to load workspace chat');
    }
  };

  useEffect(() => {
    if (!current?._id) return undefined;

    load();

    const socket = io(base);

    socket.on('connect', () => setConnected(true));
    socket.on('disconnect', () => setConnected(false));

    socket.on('chat:new', (message) => {
      setMessages((items) => {
        if (items.some((item) => item._id === message._id)) return items;
        return [...items, message];
      });
    });

    socket.on('chat:updated', (message) => {
      setMessages((items) =>
        items.map((item) => (item._id === message._id ? message : item))
      );
    });

    socket.emit('join:workspace', current._id);

    return () => socket.disconnect();
  }, [current?._id]);

  useEffect(() => {
    end.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    if (!canWrite || !text.trim()) return;

    try {
      const mentions = members
        .filter((member) => text.includes(`@${member.name}`))
        .map((member) => member._id);

      if (editing) {
        const updated = await put(`/chat/${editing._id}`, { message: text });
        setMessages((items) =>
          items.map((item) =>
            item._id === editing._id ? updated || { ...item, message: text, edited: true } : item
          )
        );
        setEditing(null);
        setToast('Message updated');
      } else {
        const created = await post('/chat', {
          message: text,
          mentions,
          mentionAll,
        });
        if (created?._id) {
          setMessages((items) =>
            items.some((item) => item._id === created._id)
              ? items
              : [...items, created]
          );
        }
      }

      setText('');
      setMentionAll(false);
      setMentionOpen(false);
    } catch (error) {
      setToast(error.response?.data?.message || 'Unable to send message');
    }
  };

  const remove = async (message) => {
    if (!canWrite) return;
    if (!window.confirm('Delete this message for everyone?')) return;

    try {
      const updated = await del(`/chat/${message._id}`);
      if (updated?._id) {
        setMessages((items) =>
          items.map((item) => (item._id === message._id ? updated : item))
        );
      } else {
        setMessages((items) =>
          items.map((item) =>
            item._id === message._id
              ? { ...item, deleted: true, message: '' }
              : item
          )
        );
      }
      setToast('Message deleted for everyone');
    } catch (error) {
      setToast(error.response?.data?.message || 'Unable to delete message');
    }
  };

  return (
    <>
      <div className="page-head chat-head">
        <div>
          <span className="eyebrow">WORKSPACE COLLABORATION</span>
          <h1>Team chat</h1>
          <p>Discuss work, share updates and mention the people who need to act.</p>
        </div>
        <div className="chat-member-count">
          <Users size={15} /> {members.length} members
        </div>
      </div>

      <div className="chat-shell card">
        <div className="chat-top">
          <div className="chat-title-icon">
            <MessageCircle />
          </div>
          <div>
            <b>{current?.name || 'Workspace chat'}</b>
            <span>
              Workspace group conversation · {connected ? 'Live' : 'Reconnecting…'}
            </span>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((message) => {
            const mine = String(message.sender?._id) === String(user?._id);

            return (
              <div className={`chat-row ${mine ? 'mine' : ''}`} key={message._id}>
                <div className="avatar">
                  {message.sender?.avatar ? (
                    <img src={base + message.sender.avatar} alt="" />
                  ) : (
                    message.sender?.name?.[0] || '?'
                  )}
                </div>

                <div className="bubble-wrap">
                  <div className="chat-meta">
                    <b>{message.sender?.name || 'Workspace member'}</b>
                    <small>
                      {new Date(message.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </small>
                  </div>

                  <div className={`chat-bubble ${message.deleted ? 'deleted' : ''}`}>
                    {message.deleted ? (
                      'Message deleted for everyone.'
                    ) : (
                      <>
                        <span>{message.message}</span>
                        {message.edited && <small className="edited">edited</small>}
                        {current?.role === 'ADMIN' && message.originalMessage && (
                          <small className="chat-original">
                            Original: {message.originalMessage}
                          </small>
                        )}
                      </>
                    )}
                  </div>

                  {mine && !message.deleted && canWrite && (
                    <div className="chat-actions">
                      <button
                        type="button"
                        onClick={() => {
                          setEditing(message);
                          setText(message.message);
                        }}
                      >
                        <Pencil size={12} /> Edit
                      </button>
                      <button type="button" onClick={() => remove(message)}>
                        <Trash2 size={12} /> Delete for everyone
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div ref={end} />

          {!messages.length && (
            <div className="chat-empty">
              <MessageCircle size={35} />
              <b>Start the conversation</b>
              <span>Share an update or tag a teammate with @name.</span>
            </div>
          )}
        </div>

        {canWrite && (
          <div className="chat-compose">
            <div className="mention-menu-wrap">
              <button
                type="button"
                className={`icon ${mentionOpen ? 'selected' : ''}`}
                onClick={() => setMentionOpen((value) => !value)}
                title="Mention someone"
              >
                <AtSign />
              </button>

              {mentionOpen && (
                <div className="mention-menu">
                  <button
                    type="button"
                    onClick={() => {
                      setMentionAll(true);
                      setText((value) => `${value} @everyone`);
                      setMentionOpen(false);
                    }}
                  >
                    <b>@everyone</b>
                    <small>Notify the whole workspace</small>
                  </button>

                  {members.map((member) => (
                    <button
                      type="button"
                      key={member._id}
                      onClick={() => {
                        setText((value) => `${value} @${member.name}`);
                        setMentionOpen(false);
                      }}
                    >
                      <div className="avatar small">
                        {member.avatar ? (
                          <img src={base + member.avatar} alt="" />
                        ) : (
                          member.name?.[0] || '?'
                        )}
                      </div>
                      <div>
                        <b>{member.name}</b>
                        <small>{member.role?.replaceAll('_', ' ')}</small>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  send();
                }
              }}
              placeholder={editing ? 'Edit your message…' : 'Write a message…'}
            />

            <button type="button" className="btn primary chat-send" onClick={send}>
              <Send size={16} />
            </button>
          </div>
        )}
      </div>

      {!canWrite && (
        <div className="chat-readonly">
          Guest access is read-only. You can view workspace conversation but cannot send,
          edit or delete messages.
        </div>
      )}

      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  );
}
