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

### 🔄 Task Workflow

```text
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   TODO       │ ──▶ │ IN PROGRESS  │ ──▶ │    REVIEW    │ ──▶ │     DONE     │
│              │     │              │     │              │     │              │
│ New Tasks    │     │ Active Work  │     │ Testing /    │     │ Completed    │
│              │     │              │     │ Verification │     │ Tasks        │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘

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
- 🔎 Search and filter issues
- 🔐 Workspace and project-level access control

### 🔄 Issue Lifecycle

```text
┌────────────┐
│    OPEN    │
└─────┬──────┘
      │
      ▼
┌────────────┐
│ IN PROGRESS│
└─────┬──────┘
      │
      ▼
┌────────────┐
│   REVIEW   │
└─────┬──────┘
      │
      ▼
┌────────────┐
│  RESOLVED  │
└─────┬──────┘
      │
      ▼
┌────────────┐
│   CLOSED   │
└────────────┘

A unified workspace for modern software teams.
