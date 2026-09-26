# NEXORA

### Plan. Build. Track. Collaborate.

> A full-stack software project management and collaboration platform designed to bring projects, teams, tasks, communication, and progress tracking into one unified workspace.

[![Live Demo](https://img.shields.io/badge/Live-Demo-2563EB?style=for-the-badge)](https://nexora-peach-eight.vercel.app)
[![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Real-Time](https://img.shields.io/badge/Real--Time-Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)

---

## 🌐 Live Application

**NEXORA:**  
https://nexora-peach-eight.vercel.app

NEXORA is deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

# 📌 Overview

NEXORA is a modern, full-stack Software Project Management and Collaboration Platform built using the MERN stack.

It is designed to provide a centralized environment where teams can:

- Create and manage workspaces
- Organize software projects
- Manage teams and members
- Create and assign tasks
- Plan and manage sprints
- Track issues and bugs
- Use Kanban workflows
- Communicate through real-time chat
- Receive real-time notifications
- Track project activity
- Manage milestones
- Analyze project performance
- Search across workspace data
- Upload and manage files
- Manage user profiles
- Control permissions through role-based access

Instead of relying on multiple disconnected tools, NEXORA brings these workflows together into a single workspace.

---

# ✨ Key Features

## 🔐 Authentication & Security

- User registration
- Secure login
- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Role-based authorization
- Workspace-level authorization
- Session persistence
- Password recovery flow
- Secure environment-based configuration

---

## 🏢 Multi-Workspace Architecture

NEXORA supports multiple isolated workspaces from a single user account.

### Workspace capabilities

- Create a new workspace
- Join existing workspaces
- Workspace-specific roles
- Workspace member management
- Workspace selector
- Isolated project data
- Isolated tasks and issues
- Workspace-specific notifications
- Workspace-specific activity logs
- Workspace-specific reports

Each workspace maintains its own project ecosystem while allowing users to participate in multiple workspaces with different roles.

---

# 👥 Role-Based Access Control

NEXORA provides four primary workspace roles:

### ADMIN

Responsible for workspace administration.

Capabilities include:

- Manage workspace members
- Manage workspace roles
- Manage workspace settings
- Control workspace access
- Manage workspace-level resources

### PROJECT MANAGER

Responsible for project planning and management.

Capabilities include:

- Create and manage projects
- Manage project members
- Create and assign tasks
- Manage sprints
- Manage issues
- Manage milestones
- View project reports
- Track project progress

### DEVELOPER

Focused on assigned development work.

Capabilities include:

- View assigned tasks
- Update task progress
- Work with Kanban boards
- Participate in discussions
- Add comments
- Upload attachments
- Update issues

### TESTER

Focused on software quality and issue verification.

Capabilities include:

- Create and manage issues
- Verify bugs
- Update issue status
- Add comments
- Track testing-related work
- Participate in project collaboration

> Authorization is enforced on the server side. Frontend UI restrictions are only an additional convenience layer.

---

# 📊 Dashboard

The NEXORA dashboard provides a centralized overview of workspace activity.

It includes information such as:

- Active projects
- Task statistics
- Sprint progress
- Issue status
- Team information
- Recent activity
- Notifications
- Project performance
- Workspace activity

---

# 📁 Project Management

Projects act as the central unit for organizing software development work.

Project management includes:

- Project creation
- Project editing
- Project archiving
- Project members
- Project progress tracking
- Project milestones
- Project-specific tasks
- Project-specific issues
- Project-specific reports
- Project activity

Archived projects remain stored but are removed from the active project view.

---

# ✅ Task Management

NEXORA provides a complete task management workflow.

### Task capabilities

- Create tasks
- Assign tasks
- Set priorities
- Set due dates
- Update status
- Add descriptions
- Add comments
- Attach files
- Track task activity
- View task details

---

# 🏃 Sprint Management

Teams can organize development work into sprints.

Features include:

- Create sprints
- Start sprints
- Track sprint progress
- Assign tasks to sprints
- View sprint statistics
- Manage sprint tasks
- Track completion

---

## 📌 Kanban Board

NEXORA includes an interactive Kanban board for visual task management and workflow tracking.

### ✨ Features

- 🗂️ Organize tasks into workflow columns
- 🖱️ Drag and drop tasks between columns
- 🔄 Automatically update task status
- 👤 Assign tasks to team members
- 🚦 Set task priority
- 📅 Track task due dates
- 🏷️ Display task labels and metadata
- 🔍 Filter and manage tasks efficiently
- ⚡ Real-time task updates across the workspace
- 🔐 Workspace-based access control

## 🐞 Issue & Bug Tracking

NEXORA provides a dedicated issue tracking system for reporting, assigning, and resolving software issues.

### ✨ Features

- 🐛 Create and track bugs
- 📝 Add issue descriptions
- 👤 Assign issues to team members
- 🚦 Set issue priority
- 📊 Track issue status
- 💬 Add comments and discussions
- 🔄 Update issue lifecycle
- 🔍 Search and filter issues
- 🔐 Workspace and project-level access control

### 🔄 Issue Lifecycle

```text
OPEN → IN PROGRESS → REVIEW → RESOLVED → CLOSED
```

---

## 💬 Real-Time Collaboration

NEXORA includes real-time communication features powered by Socket.io.

### ✨ Features

- 💬 Real-time project chat
- ⚡ Instant message delivery
- 👥 Team-based conversations
- 🟢 Online/presence indicators
- @️⃣ User mentions
- ✏️ Edit messages
- 🗑️ Delete messages
- 🔔 Real-time notifications
- 🔄 Live updates without page refresh

### 🔌 Real-Time Architecture

```text
React Client
     │
     │ Socket.io
     ▼
Node.js + Express
     │
     ▼
MongoDB
```

---

## 🔔 Notifications

NEXORA provides centralized notifications to keep team members informed about important project activity.

### ✨ Features

- 🔔 Task assignment notifications
- 🐛 Issue-related notifications
- 💬 Collaboration notifications
- 📢 Project updates
- 👥 Workspace-related notifications
- 📅 Deadline-related updates
- ✅ Mark notifications as read
- 🗑️ Delete notifications
- ⚡ Real-time notification delivery

---

## 📅 Calendar

The Calendar module provides a centralized view of important project activities and deadlines.

### ✨ Features

- 📅 View upcoming tasks
- 🏁 Track project milestones
- ⏰ Monitor deadlines
- 🗓️ Centralized project schedule
- 🔎 Quickly identify upcoming activities
- 🔗 Connect project activities with their respective modules

---

## 🏁 Milestones

Milestones allow teams to divide projects into important delivery checkpoints.

### ✨ Features

- 🎯 Create project milestones
- 📝 Add milestone descriptions
- 📅 Set target dates
- 📊 Track milestone progress
- 🔗 Associate milestones with projects
- 📈 Monitor project completion

---

## 📊 Reports & Analytics

NEXORA includes reporting and analytics capabilities for understanding project performance.

### ✨ Features

- 📈 Project statistics
- 📊 Task distribution
- 🐛 Issue statistics
- 🏁 Milestone progress
- 👥 Team activity
- 📋 Activity reports
- 📉 Project performance visualization
- 🖨️ Print-friendly report layouts

### 📌 Report Categories

| Report | Purpose |
|---|---|
| Project Reports | Monitor overall project progress |
| Task Reports | Analyze task distribution and status |
| Issue Reports | Track bugs and issue resolution |
| Activity Reports | Review team and project activity |
| Milestone Reports | Monitor milestone completion |
| Dashboard Analytics | Provide visual project insights |

---

## 🔎 Global Search

NEXORA provides centralized search functionality across the platform.

### ✨ Features

- 🔍 Search across workspace data
- 📁 Find projects
- ✅ Find tasks
- 🐛 Find issues
- 👥 Find team members
- 🏁 Find milestones
- ⚡ Quickly navigate to relevant results

---

## 📎 File Attachments

NEXORA supports file attachments for project-related collaboration.

### ✨ Features

- 📁 Upload project files
- 📎 Attach files to relevant records
- 👤 Profile photo uploads
- 🔐 Protected file access
- 📂 Organized file handling
- 🛡️ File upload validation

---

## 👤 User Profiles

Each user has a dedicated profile containing their workspace and professional information.

### ✨ Features

- 👤 Profile information
- 📸 Profile photo
- 📧 Email information
- 🏢 Department
- 💻 Skills
- 🎭 Workspace roles
- 📊 User-related project information

---

## ⚙️ Settings

NEXORA provides centralized settings for managing user preferences and application configuration.

### ✨ Features

- 👤 Profile settings
- 🔐 Account-related settings
- 🎨 Appearance preferences
- 🌙 Dark mode
- 🔔 Notification preferences
- 🏢 Workspace-related configuration

---

## 🌙 Dark Mode

NEXORA supports a dedicated dark mode for improved usability in different lighting environments.

### ✨ Features

- 🌙 Dark theme
- ☀️ Light theme
- 🔄 Theme switching
- 💾 Persistent theme preference
- 🎨 Consistent UI styling across modules

---

## 📱 Responsive Design

NEXORA is designed to work across different screen sizes.

### ✨ Supported Interfaces

- 💻 Desktop
- 🖥️ Laptop
- 📱 Mobile
- 📟 Tablet

The interface adapts layouts, navigation, dashboards, tables, Kanban boards, and other components according to the available screen size.

---

## 🏗️ System Architecture

```text
                         ┌───────────────────────┐
                         │       NEXORA          │
                         │     React + Vite      │
                         └───────────┬───────────┘
                                     │
                       ┌─────────────┴─────────────┐
                       │                           │
                    Axios                     Socket.io
                       │                           │
                       ▼                           ▼
             ┌─────────────────────────────────────────┐
             │          Node.js + Express.js            │
             │                                          │
             │  REST APIs │ JWT │ RBAC │ Socket.io     │
             │            │ Multer │ CORS              │
             └───────────────────┬─────────────────────┘
                                 │
                              Mongoose
                                 │
                                 ▼
                         ┌─────────────────┐
                         │  MongoDB Atlas  │
                         └─────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, Vite, JavaScript, HTML5, CSS3 |
| Routing | React Router |
| HTTP Client | Axios |
| State Management | Context API |
| Real-Time | Socket.io Client |
| Charts | Recharts |
| Icons | Lucide React |
| Drag & Drop | dnd-kit |
| Backend | Node.js, Express.js |
| Authentication | JWT, bcryptjs |
| Real-Time Backend | Socket.io |
| File Uploads | Multer |
| Database | MongoDB |
| ODM | Mongoose |
| Cloud Database | MongoDB Atlas |
| Deployment | Vercel + Render |

---

## 🗄️ Database Structure

NEXORA uses MongoDB with Mongoose for database management.

### Main Collections

| Collection | Purpose |
|---|---|
| `User` | Stores user accounts and profile information |
| `Workspace` | Stores workspace information |
| `WorkspaceMember` | Manages workspace membership and roles |
| `Project` | Stores project information |
| `ProjectMember` | Manages project members |
| `Task` | Stores project tasks |
| `Sprint` | Stores sprint information |
| `Issue` | Stores bugs and issues |
| `Comment` | Stores comments and discussions |
| `Notification` | Stores user notifications |
| `Activity` | Stores activity and audit records |
| `Milestone` | Stores project milestones |
| `Attachment` | Stores uploaded file information |

---

## 🔌 Core API Structure

| Module | Base Endpoint |
|---|---|
| Authentication | `/api/auth` |
| Projects | `/api/projects` |
| Tasks | `/api/tasks` |
| Sprints | `/api/sprints` |
| Issues | `/api/issues` |
| Comments | `/api/comments` |
| Notifications | `/api/notifications` |
| Activity | `/api/activity` |
| Milestones | `/api/milestones` |
| Reports | `/api/reports` |
| Search | `/api/search` |
| Users | `/api/users` |
| Attachments | `/api/attachments` |

### Authentication Endpoints

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- MongoDB 6+ or MongoDB Atlas
- Git
- Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/Meigirishwar/NEXORA.git
cd NEXORA
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
CLIENT_URL=http://localhost:5173
UPLOAD_DIR=uploads
```

Start the backend:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
```

Create the frontend environment variable:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 🏢 Creating a Workspace

NEXORA uses a workspace-based architecture.

1. Open the application.
2. Create a new workspace.
3. The workspace creator becomes the `ADMIN`.
4. Add team members.
5. Assign appropriate workspace roles.
6. Create projects.
7. Add project members.
8. Start managing tasks, sprints, issues, and milestones.

Users can belong to multiple workspaces and may have different roles in different workspaces.

All workspace-specific data is scoped to the currently selected workspace.

---

## 👥 Adding Team Members

Workspace administrators can add members by providing:

- Name
- Email
- Initial password
- Department
- Skills
- Workspace role

Available workspace roles:

```text
ADMIN
PROJECT_MANAGER
DEVELOPER
TESTER
```

---

## 🔐 Environment Variables

Never commit environment variables containing secrets.

### Backend

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
CLIENT_URL=http://localhost:5173
UPLOAD_DIR=uploads
```

### Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

For production deployments, replace local URLs with the deployed frontend and backend URLs.

> ⚠️ Never commit `.env`, `.env.local`, MongoDB credentials, JWT secrets, SMTP passwords, API keys, or other private credentials.

---

## 📧 Password Recovery

Password recovery can optionally be configured using Gmail SMTP.

SMTP is **not required for normal authentication or workspace usage**.

Example configuration:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=your-email@gmail.com
```

For Gmail, use a **Google App Password** rather than your normal Gmail password.

---

## ☁️ Deployment

NEXORA is deployed using:

| Component | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

### Production Architecture

```text
                    ┌──────────────────────┐
                    │        User          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Vercel         │
                    │   React + Vite       │
                    └──────────┬───────────┘
                               │
                         HTTPS / API
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Render         │
                    │ Node + Express API   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   MongoDB Atlas      │
                    │      Database        │
                    └──────────────────────┘
```

### Live Application

**Frontend:**  
https://nexora-peach-eight.vercel.app

**Backend:**  
https://nexora-12uy.onrender.com

---

## 🧪 Testing Checklist

### Authentication

- [ ] User registration
- [ ] User login
- [ ] User logout
- [ ] Protected routes
- [ ] Password recovery when SMTP is configured

### Workspace

- [ ] Create workspace
- [ ] Workspace selector
- [ ] Add members
- [ ] Remove members
- [ ] Change member roles
- [ ] Workspace data isolation

### Projects

- [ ] Create project
- [ ] Edit project
- [ ] Archive project
- [ ] Add project members

### Tasks

- [ ] Create task
- [ ] Assign task
- [ ] Update priority
- [ ] Update status
- [ ] Drag and drop Kanban tasks

### Sprints

- [ ] Create sprint
- [ ] Start sprint
- [ ] Assign tasks
- [ ] Track sprint progress

### Issues

- [ ] Create issue
- [ ] Assign issue
- [ ] Update issue
- [ ] Verify issue
- [ ] Add comments

### Collaboration

- [ ] Real-time chat
- [ ] User mentions
- [ ] Edit messages
- [ ] Delete messages
- [ ] Presence indicators

### Notifications

- [ ] Receive notifications
- [ ] Mark as read
- [ ] Delete notifications

### Reports

- [ ] Dashboard statistics
- [ ] Project reports
- [ ] Charts and visualizations
- [ ] Activity reports
- [ ] Print layouts

### Files

- [ ] Upload attachments
- [ ] Upload profile photo
- [ ] Access uploaded files

### UI

- [ ] Responsive layout
- [ ] Dark mode
- [ ] Navigation
- [ ] Error handling

---

## 🔒 Security Considerations

NEXORA implements several security mechanisms:

- 🔐 Password hashing using bcrypt
- 🎫 JWT-based authentication
- 🛡️ Protected API routes
- 👥 Role-based access control
- 🏢 Workspace-level authorization
- 🔑 Environment-based secrets
- 🌐 Configured CORS
- 📁 File upload validation
- 🔒 Server-side authorization checks
- 🧩 Frontend/backend separation

### Sensitive Information

Never commit:

```text
.env
.env.local
MongoDB credentials
JWT secrets
SMTP passwords
API keys
Private credentials
```

---

## 📁 Project Structure

```text
NEXORA/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## 🎓 Academic & Technical Value

NEXORA demonstrates practical implementation of:

- MERN stack development
- REST API architecture
- JWT authentication
- Role-Based Access Control
- Multi-workspace authorization
- MongoDB data modeling
- Mongoose ODM
- Real-time communication
- WebSocket-based updates
- State management
- Drag-and-drop interfaces
- File upload handling
- Data visualization
- Global search
- Project management workflows
- Responsive SaaS UI development
- Cloud deployment

---

## 💡 Why NEXORA?

Modern software teams often rely on multiple disconnected tools for:

- 💬 Messaging
- ✅ Task Tracking
- 📋 Project Management
- 🐛 Issue Tracking
- 📎 File Sharing
- 👥 Team Collaboration
- 📊 Reports

NEXORA brings these workflows together into one centralized platform:

**PLAN → BUILD → TRACK → COLLABORATE → ANALYZE**

---

## 🖼️ Screenshots

### Landing Page

<img width="1886" height="926" alt="NEXORA Landing Page" src="https://github.com/user-attachments/assets/ac9d237f-c9f1-4126-895e-0ff281492eec" />

### Dashboard

<img width="1861" height="926" alt="image" src="https://github.com/user-attachments/assets/07fecef4-c9dc-48da-be77-1b2f6f0886ed" />


### Project Management

<img width="1883" height="915" alt="image" src="https://github.com/user-attachments/assets/c56a01e1-d168-468f-b230-f19b753c41aa" />


### Kanban Board

<img width="1867" height="902" alt="image" src="https://github.com/user-attachments/assets/7541ea31-27b1-4291-b914-72e1630c0e14" />


### Sprint Management

<img width="1873" height="920" alt="image" src="https://github.com/user-attachments/assets/6b73c74f-2cbd-4ee7-9633-dce6c5e4b3bd" />


### Issue Tracking

<img width="1882" height="928" alt="image" src="https://github.com/user-attachments/assets/71b041df-4d33-44fb-9f09-06c6e8ad2420" />


### Real-Time Chat

<img width="1867" height="911" alt="image" src="https://github.com/user-attachments/assets/82a76104-b11a-4f50-a756-cea53a2c10f1" />


### Reports & Analytics

<img width="1876" height="911" alt="image" src="https://github.com/user-attachments/assets/b646a1b3-ce69-4215-9a89-59d5922bf74c" />


### Workspace Management

<img width="1882" height="931" alt="image" src="https://github.com/user-attachments/assets/402ff5bf-7e36-4e8e-b638-a4a153e0e0f6" />


---

## 🚀 Future Improvements

- 📊 Advanced analytics
- 📅 Calendar integrations
- 📧 Email notifications
- ☁️ Cloud object storage
- 🔄 CI/CD pipelines
- 🧪 Automated testing
- 📋 Project templates
- 🔗 Third-party integrations
- 📤 Activity export
- 🔍 Advanced search and filtering
- 🎨 Workspace branding

---

## 👨‍💻 Author

**Meigirishwar V R**

B.Tech Information Technology  
Full-Stack Developer | Software Engineering Enthusiast

**GitHub:**  
https://github.com/Meigirishwar

---

## 📄 License

This project is developed for **academic, learning, and portfolio purposes**.

---

<div align="center">

### ⭐ NEXORA

**Plan. Build. Track. Collaborate.**

*A unified workspace for modern software teams.*

</div>


A unified workspace for modern software teams.
