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

# 📋 Kanban Board

NEXORA includes a drag-and-drop Kanban workflow.

Typical workflow:

```text
TODO
  ↓
IN PROGRESS
  ↓
IN REVIEW
  ↓
DONE

# 🐞 Issue & Bug Tracking

The issue tracking system allows teams to manage software defects and project issues.

Features include:

- Issue creation
- Issue assignment
- Issue priorities
- Issue status
- Issue verification
- Issue comments
- Issue history
- Issue-task relationships
- Tester workflow

---

# 💬 Real-Time Collaboration

NEXORA includes real-time collaboration powered by Socket.io.

### Collaboration features

- Workspace group chat
- Real-time messages
- @mentions
- @everyone mentions
- Message editing
- Message deletion
- Real-time updates
- Online/offline presence
- Comments
- Activity updates

This allows project members to communicate without leaving the project workspace.

---

# 🔔 Notifications

The notification system provides real-time workspace updates.

Notifications can be generated for events such as:

- Task assignments
- Project activity
- Mentions
- Comments
- Issue updates
- Workspace activity

Users can:

- View notifications
- Mark notifications as read
- Delete notifications

---

# 📅 Calendar

NEXORA includes a workspace calendar for organizing project-related events.

Features include:

- Monthly calendar view
- Event creation
- Event management
- Workspace-specific events
- Project planning support

---

# 🎯 Milestones

Milestones provide a way to track major project objectives.

Teams can:

- Create milestones
- Assign milestones to projects
- Track milestone progress
- Monitor completion
- View milestone information

---

# 📈 Reports & Analytics

NEXORA provides project-specific reporting and analytics.

Reports can help visualize:

- Task distribution
- Task completion
- Issue statistics
- Sprint progress
- Project activity
- Team workload
- Overall project progress

The platform also includes print-ready report layouts for project reporting.

---

# 🔎 Global Search

The global search system allows users to search workspace data.

Search can cover resources such as:

- Projects
- Tasks
- Issues
- Users
- Other workspace-related information

Example API:

```text
/api/search?q=keyword
# 📎 File Attachments

NEXORA supports file attachments for project collaboration.

Attachments can be associated with relevant workspace objects such as:

- Tasks
- Issues
- Comments
- Profiles

The backend uses Multer for handling uploads.

---

# 👤 User Profiles

Users can maintain richer workspace profiles.

Profile functionality includes:

- Name
- Profile information
- Department
- Skills
- Profile photo
- Workspace roles
- Account information

---

# ⚙️ Settings

NEXORA includes configurable user and workspace settings.

Features include:

- Account management
- Profile management
- Workspace settings
- Role management
- Dark mode
- Responsive interface preferences

---

# 🌓 Dark Mode

NEXORA provides a polished dark-mode interface designed for long working sessions.

The UI follows a modern SaaS design approach inspired by products such as:

- Linear
- Notion
- GitHub
- Vercel

---

# 📱 Responsive Design

The application is designed to work across different screen sizes.

The interface adapts to:

- Desktop
- Laptop
- Tablet
- Smaller screens

---

# 🏗️ System Architecture

```text
                    ┌───────────────────────┐
                    │       NEXORA          │
                    │     React + Vite      │
                    └───────────┬───────────┘
                                │
                         Axios / Socket.io
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Node.js + Express   │
                    │      REST API         │
                    └───────────┬───────────┘
                                │
                ┌───────────────┼────────────────┐
                │               │                │
                ▼               ▼                ▼
          JWT / RBAC       Socket.io          Multer
                │               │                │
                └───────────────┼────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │       Mongoose        │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │        MongoDB        │
                    │     MongoDB Atlas     │
                    └───────────────────────┘

🛠️ Technology Stack
Frontend
React.js
Vite
JavaScript
HTML5
CSS3
React Router
Axios
Context API / state management
Socket.io Client
Recharts
Lucide React
dnd-kit
Backend
Node.js
Express.js
JavaScript
REST APIs
JWT
bcryptjs
Socket.io
Multer
dotenv
CORS
Database
MongoDB
Mongoose
MongoDB Atlas
🗄️ Database Structure

Major entities include:

User
Workspace
WorkspaceMember
Project
ProjectMember
Task
Sprint
Issue
Comment
Notification
Activity
Milestone
Attachment

Relationships connect users, workspaces, projects, tasks, issues, comments, notifications, activity records and attachments.

Workspace-level isolation ensures that project and collaboration data belongs to the currently selected workspace.

🔌 Core API Structure
Module	Endpoint
Authentication	/api/auth
Projects	/api/projects
Tasks	/api/tasks
Sprints	/api/sprints
Issues	/api/issues
Comments	/api/comments
Notifications	/api/notifications
Activity	/api/activity
Milestones	/api/milestones
Reports	/api/reports
Search	/api/search
Users	/api/users
Attachments	/api/attachments
Authentication endpoints
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
🚀 Getting Started
Prerequisites

Make sure you have:

Node.js 18+
npm
MongoDB 6+ or MongoDB Atlas
Git
VS Code or another development environment
📥 Installation

Clone the repository:

git clone https://github.com/Meigirishwar/NEXORA.git
cd NEXORA
Backend Setup

Navigate to the server:

cd server

Install dependencies:

npm install

Create your environment file:

copy .env.example .env

For macOS/Linux:

cp .env.example .env

Configure the environment variables:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
CLIENT_URL=http://localhost:5173
UPLOAD_DIR=uploads

Start the backend:

npm run dev

The API will run locally on:

http://localhost:5000
💻 Frontend Setup

Open another terminal:

cd client

Install dependencies:

npm install

Create a frontend environment file if required:

VITE_API_URL=http://localhost:5000/api

Start the frontend:

npm run dev

Open:

http://localhost:5173
🏢 Creating a Workspace

NEXORA does not require public demo credentials.

To use the platform:

Open the application.
Select Create a workspace.
Create your workspace.
The creator becomes the workspace ADMIN.
Add members from workspace administration.
Assign appropriate workspace roles.
Create projects and begin managing work.

A user can belong to multiple workspaces and can have different roles in different workspaces.

👥 Adding Team Members

Workspace administrators can add members with information such as:

Name
Email
Initial password
Department
Skills
Workspace role

Workspace members can then participate in the projects and collaboration features available to their assigned role.

🔐 Environment Variables

Never commit your real .env files, passwords, database credentials, API keys or secrets to GitHub.

Backend
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secure_secret
CLIENT_URL=http://localhost:5173
UPLOAD_DIR=uploads
Frontend
VITE_API_URL=http://localhost:5000/api

For production, replace the local URLs with your deployed frontend and backend URLs.

📧 Password Recovery

NEXORA supports an optional Gmail SMTP password-reset workflow.

SMTP configuration is not required for normal authentication and workspace functionality.

If email-based password recovery is enabled, configure a Gmail App Password:

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=your-email@gmail.com

Never use or commit your normal Gmail password.

🌍 Deployment

NEXORA can be deployed using a separate frontend and backend architecture.

Frontend
React + Vite
      ↓
    Vercel
Backend
Node.js + Express
      ↓
    Render
Database
MongoDB
   ↓
MongoDB Atlas
Production Flow
User
 │
 ▼
Vercel
 │
 │ HTTPS API requests
 ▼
Render
 │
 │ Mongoose
 ▼
MongoDB Atlas
🧪 Testing Checklist

Before considering a deployment complete, verify:

Authentication
 Registration
 Login
 Logout
 Protected routes
 Password recovery if configured
Workspace
 Create workspace
 Workspace selector
 Add members
 Remove members
 Change roles
 Workspace isolation
Projects
 Create project
 Edit project
 Archive project
 Add project members
Tasks
 Create task
 Assign task
 Update task
 Change priority
 Change status
 Drag Kanban cards
Sprints
 Create sprint
 Start sprint
 Assign tasks
 Track progress
Issues
 Create issue
 Assign issue
 Update issue
 Verify issue
 Add comments
Collaboration
 Real-time chat
 Mentions
 Message editing
 Message deletion
 Online/offline presence
Notifications
 Receive notifications
 Mark as read
 Delete notifications
Reports
 Dashboard statistics
 Project reports
 Charts
 Activity reports
 Print layouts
Files
 Upload attachments
 Profile photo upload
 Access uploaded files
UI
 Responsive layout
 Dark mode
 Navigation
 Error handling
🔒 Security Considerations

NEXORA follows several application security practices:

Password hashing with bcrypt
JWT authentication
Protected API routes
Server-side authorization
Role-Based Access Control
Workspace membership validation
Environment-based secrets
CORS configuration
File upload validation
Separation of frontend and backend configuration
Important

Do not commit:

.env
.env.local
MongoDB credentials
JWT secrets
SMTP passwords
API keys
private credentials
📂 Project Structure
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
🎓 Academic Value

NEXORA demonstrates practical implementation of several full-stack software engineering concepts:

MERN architecture
REST API development
Authentication
Authorization
Role-Based Access Control
MongoDB data modeling
Mongoose relationships
Real-time communication
WebSocket-based updates
State management
Drag-and-drop interfaces
File handling
Data visualization
Search functionality
Project management workflows
Responsive SaaS UI design
Cloud deployment
💡 Why NEXORA?

Traditional project communication often becomes fragmented across:

Messaging applications
Spreadsheets
Separate task trackers
Email
File-sharing platforms
Issue trackers

NEXORA combines these workflows into a unified workspace where teams can:

PLAN
  ↓
BUILD
  ↓
TRACK
  ↓
COLLABORATE
  ↓
ANALYZE
📸 Screenshots

Add screenshots of the following sections here:

<img width="1886" height="926" alt="image" src="https://github.com/user-attachments/assets/ac9d237f-c9f1-4126-895e-0ff281492eec" />


Add screenshot

Dashboard

Add screenshot

Project Management

Add screenshot

Kanban Board

Add screenshot

Sprint Management

Add screenshot

Issue Tracking

Add screenshot

Real-Time Chat

Add screenshot

Reports & Analytics

Add screenshot

Workspace Management

Add screenshot

🗺️ Future Improvements

Potential future enhancements include:

Advanced analytics
Calendar integrations
Email notification services
Cloud object storage for attachments
CI/CD automation
Automated testing pipelines
Advanced project templates
Third-party integrations
Activity export
Advanced search and filtering
Custom workspace branding
👨‍💻 Author
Meigirishwar V R

B.Tech Information Technology

Full-Stack Developer | Software Engineering Enthusiast

GitHub:
https://github.com/Meigirishwar

📄 License

This project is developed for academic, learning, and portfolio purposes.

⭐ NEXORA

Plan. Build. Track. Collaborate.

A unified workspace for modern software teams.
