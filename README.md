# NEXORA — Unified Software Project Management & Collaboration Platform

**Plan. Build. Track. Collaborate.**

A production-style MERN academic project for managing projects, teams, tasks, sprints, Kanban workflows, issues, collaboration, notifications, activity logs, milestones, reports, search, files, profiles and settings.

## Stack
React + Vite + JavaScript, Express + Node.js, MongoDB + Mongoose, JWT, bcryptjs, Socket.io, Multer, Axios, React Router, dnd-kit, Recharts, Lucide React.

## Architecture
React → Axios → Express REST API → Node.js services/controllers → Mongoose → MongoDB

Socket.io provides real-time notifications, comments, task/Kanban updates and activity refreshes.

## Requirements
- Node.js 18+
- MongoDB 6+ running locally or a MongoDB Atlas URI
- VS Code

## Install
```bash
cd server
npm install
copy .env.example .env
# edit .env if required
npm run seed
npm run dev
```
Open another terminal:
```bash
cd client
npm install
npm run dev
```
Open http://localhost:5173.

## Demo accounts
- admin@nexora.com / Admin@123
- lokesh@nexora.com / Lokesh@123
- midhun@nexora.com / Midhun@123
- nithesh@nexora.com / Nithesh@123
- mariyappa@nexora.com / Mariyappa@123
- meghaa@nexora.com / Meghaa@123

Seed passwords are hashed with bcryptjs.

## Environment
Server `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nexora
JWT_SECRET=replace_with_secure_secret
CLIENT_URL=http://localhost:5173
UPLOAD_DIR=uploads
```
Client can optionally use `VITE_API_URL=http://localhost:5000/api`.

## Core APIs
Auth: `/api/auth/register`, `/api/auth/login`, `/api/auth/me`
Projects: `/api/projects`
Tasks: `/api/tasks`
Sprints: `/api/sprints`
Issues: `/api/issues`
Comments: `/api/comments`
Notifications: `/api/notifications`
Activity: `/api/activity`
Milestones: `/api/milestones`
Reports: `/api/reports`
Search: `/api/search?q=`
Users: `/api/users`
Attachments: `/api/attachments`

## Role permissions
- ADMIN: system-wide administration.
- PROJECT_MANAGER: project, team, task, sprint, issue, milestone and reporting management.
- DEVELOPER: assigned work, comments, attachments and task/issue updates.
- TESTER: issue/bug lifecycle, verification and comments.

Server-side authorization is enforced in middleware; UI hiding is only a convenience.

## Database design
User references projects through `ProjectMember`; projects reference manager and members; tasks reference project/sprint/assignee/reporter; issues reference project/task/assignee/reporter; comments reference author plus project/task/issue; notifications reference recipient; activity logs reference actor and project/object; milestones reference project; attachments reference uploaded user and target object.

## Academic explanation
NEXORA demonstrates layered MERN architecture, RESTful APIs, JWT authentication, RBAC, MongoDB relationships, event-driven real-time collaboration, drag-and-drop persistence, analytics, validation, secure file uploads and responsive SaaS UI.

## Testing checklist
Run the seed, log in with each role, create a project, add members, create/assign tasks, drag Kanban cards, create/start a sprint, create and verify an issue, add comments, inspect notifications/activity, use reports/search, upload an attachment and toggle dark mode/responsive layouts.

## Multi-Workspace Architecture

NEXORA now supports multiple isolated workspaces from one account.

- The public home page offers **Create a workspace** and **Login to an existing workspace**.
- The person who creates a workspace becomes its **ADMIN**.
- The ADMIN can add members with name, email, initial password, department, skills and workspace role.
- A person can belong to multiple workspaces with different roles.
- After login, users with multiple memberships see a workspace selector.
- All project/task/sprint/issue/report/search data is scoped to the selected workspace.
- Only the workspace ADMIN can add/remove members or change workspace roles.
- Non-admin members can leave a workspace themselves.
- The ADMIN cannot remove or leave themselves; they can update account credentials, transfer admin role, or delete the workspace.

### Existing Database Migration

If you already seeded NEXORA before upgrading to multi-workspace support, do not run the destructive seed again. From `server` run:

```bash
npm run migrate:workspaces
```

This creates **NEXORA Demo Workspace**, adds the existing demo users to it, and attaches existing projects to that workspace.

For a fresh database, `npm run seed` now creates the demo workspace and memberships automatically.

### Demo Workspace

After migration, login with the existing demo credentials. The demo users will see the `NEXORA Demo Workspace` in their workspace list.

### Workspace isolation

The selected workspace ID is sent to the API through the `X-Workspace-Id` header. Express middleware verifies that the authenticated user is an active member before serving workspace-scoped resources.

## NEXORA Upgrade Notes

This build includes the polished workspace UX and collaboration layer:
- Separate animated public Home and About pages
- Redesigned login/recovery flow (no demo credentials shown)
- Optional Gmail SMTP password-reset email flow
- Workspace group chat with @mentions, @everyone, edit and delete-for-everyone
- Real-time notifications with read/delete controls
- Workspace calendar with month view and events
- Activity period filters and print-ready activity reports
- Profile photo upload and richer profiles
- Admin-only member/role management with Stakeholder role and Project Manager limit
- Online/offline presence indicators
- Task, sprint and issue permission enforcement
- Sprint/task/issue detail modals and polished interactions
- Project-specific reporting and print headers
- Dashboard/report print styling

### New server dependency
Run `npm install` inside `server` after replacing the project files.

### Gmail password reset
Password reset emails require Gmail SMTP configuration in `server/.env` using a Gmail App Password (not the normal Gmail account password):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=your-email@gmail.com
```

If SMTP is not configured, the normal login and workspace features still work; only the email-reset flow reports that email delivery is not configured.

## Current demo workspace
The seed creates one workspace named **NEXORA Demo Workspace** with these test accounts:

| Role | Name | Email | Password |
|---|---|---|---|
| ADMIN | Meigirishwar V R | admin@nexora.com | Admin@123 |
| PROJECT_MANAGER | Lokesh V | lokesh@nexora.com | Lokesh@123 |
| DEVELOPER | Midhun J S | midhun@nexora.com | Midhun@123 |
| DEVELOPER | Nithesh Kumar M | nithesh@nexora.com | Nithesh@123 |
| TESTER | Mariyappa Raja | mariyappa@nexora.com | Mariyappa@123 |
| GUEST | Meghaa | meghaa@nexora.com | Meghaa@123 |

`npm run seed` resets the demo database and recreates this single workspace and these accounts. If the database is already populated and you only need to repair/update these credentials, run `npm run repair:demo`; it preserves projects, tasks, chat, notifications and activity.

## Notes
- Archived projects are retained in MongoDB and hidden from the active project list; they are not automatically deleted.
- Guests have read-only access to chat and workspace delivery data.
- Only the workspace admin manages membership and workspace administration.
- Only one Project Manager is permitted per workspace.
- Gmail password reset requires a Gmail App Password in `.env` (`SMTP_USER` / `SMTP_PASS`).
