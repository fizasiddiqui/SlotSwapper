# SlotSwapper

A full-stack web application for swapping time slots between users. Users can create events, mark them as swappable, and exchange slots with others through a marketplace interface.

## Features

- **User Authentication**: Secure login and registration system using JWT tokens
- **Event Management**: Create, view, and manage personal events with start/end times
- **Slot Swapping**: Mark events as swappable and browse available slots from other users
- **Marketplace**: Interactive marketplace to request swaps for available time slots
- **Swap Requests**: Send and manage swap requests between users
- **Responsive Design**: Modern, mobile-friendly UI built with React

## Tech Stack

### Backend
- **Node.js** with **Express.js** for the server
- **MongoDB** with **Mongoose** for data storage
- **JWT** for authentication
- **bcryptjs** for password hashing

### Frontend
- **React** for the user interface
- **React Router** for navigation
- **Axios** for API calls
- **CSS** for styling

## Project Structure

```
slotswapper/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Event.js
│   │   ├── SwapRequest.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── events.js
│   │   └── swaps.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.js
│   │   │   ├── Marketplace.js
│   │   │   ├── Marketplace.css
│   │   │   ├── Requests.js
│   │   │   └── Requests.css
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
├── public/
│   ├── index.html
│   └── manifest.json
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd slotswapper
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `backend` directory with the following:
   ```
   MONGO_URI=mongodb://localhost:27017/slotswapper
   JWT_SECRET=your-secret-key-here
   PORT=5000
   ```

5. **Start MongoDB:**
   Make sure MongoDB is running on your system.

6. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`

7. **Start the frontend development server:**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## Usage

1. **Register/Login**: Create an account or log in with existing credentials
2. **Create Events**: Add events to your calendar with specific start and end times
3. **Mark as Swappable**: Make your events available for swapping in the Dashboard
4. **Browse Marketplace**: View available slots from other users
5. **Request Swaps**: Select a slot you want and offer one of your own in exchange
6. **Manage Requests**: View and respond to incoming swap requests

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Events
- `GET /api/events` - Get user's events
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an event
- `DELETE /api/events/:id` - Delete an event

### Swaps
- `GET /api/swaps/swappable-slots` - Get all swappable slots
- `POST /api/swaps/swap-request` - Send a swap request
- `GET /api/swaps/requests` - Get user's swap requests
- `PUT /api/swaps/requests/:id` - Accept or reject a swap request

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built with React and Express.js
- Styled with CSS
- Database powered by MongoDB
