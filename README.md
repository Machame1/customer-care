# ComplaintCare

A full-stack complaint management solution built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## Project Structure

```
code/
├── backend/
│   ├── config.js
│   ├── index.js
│   ├── package.json
│   └── Schema.js
└── frontend/
    ├── package.json
    ├── public/
    └── src/
        ├── App.js
        ├── App.css
        ├── index.js
        └── components/
```

---

## Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB (local or Atlas)

---

## Backend Setup

1. **Install dependencies:**

   ```sh
   cd backend
   npm install
   ```

2. **Configure MongoDB:**

   - Update the connection string in `config.js` if needed.

3. **Start the backend server:**

   ```sh
   npm start
   ```

   The backend runs on [http://localhost:8000](http://localhost:8000).

---

## Frontend Setup

1. **Install dependencies:**

   ```sh
   cd frontend
   npm install
   ```

2. **Start the frontend app:**

   ```sh
   npm start
   ```

   The frontend runs on [http://localhost:3000](http://localhost:3000).

---

## Tailwind CSS Setup

Tailwind CSS is already installed and configured.

- Use Tailwind utility classes in your React components.
- See [`src/App.css`](src/App.css) for the Tailwind import.

**Example:**

```jsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
```

---

## Features

- User registration and login (Admin, Agent, Ordinary)
- Complaint submission and status tracking
- Admin dashboard for managing users and agents
- Agent dashboard for handling assigned complaints
- Real-time chat for complaints

---

## Scripts

- `npm start` — Start the development server
- `npm run build` — Build for production (frontend)
- `npm test` — Run tests (frontend)

---

## Notes

- The frontend uses both Bootstrap and Tailwind CSS. You can remove Bootstrap if you want to use only Tailwind.
- Update API endpoints in the frontend if your backend runs on a different port or host.

---

## License

MIT
