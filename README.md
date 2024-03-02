# Real-Time Chat Application

This is a simple real-time chat application developed using Node.js, Express, MongoDB, and Socket.IO. Users can interact with each other in real-time by sending and receiving messages.

## Overview

The project consists of two main components:

1. **Server-Side** (Node.js):
   - Uses Express.js for the web server framework.
   - Establishes a connection to a MongoDB database using Mongoose for data storage.
   - Provides two API endpoints:
     - `GET '/messages'`: Retrieves all messages from the database.
     - `POST '/messages'`: Receives new messages, saves them to the database, and emits them to all connected clients using Socket.IO.
   - Serves the Socket.IO client-side library.
   - Logs connections and disconnections of clients.

2. **Client-Side** (HTML, Bootstrap, jQuery, Socket.IO):
   - Includes a simple HTML interface styled with Bootstrap for sending and displaying messages.
   - Uses jQuery for DOM manipulation and AJAX requests.
   - Sends new messages to the server via a POST request.
   - Fetches existing messages from the server on page load.
   - Receives and displays new messages in real-time using Socket.IO.

## Overall Functioning

1. Users open the HTML file in their browser to access the chat interface.
2. They can enter their name and message in the input fields.
3. When the "Send" button is clicked:
   - The message is sent to the server via a POST request.
   - The server saves the message to the MongoDB database.
   - The message is broadcasted to all connected clients using Socket.IO.
4. All connected clients receive the new message and display it in the chat interface.
5. Users can see their own messages and messages from others in real-time without needing to refresh the page.

## Languages and Frameworks Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web server framework for Node.js.
- **MongoDB**: NoSQL database for storing chat messages.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Socket.IO**: Real-time bidirectional event-based communication library.
- **Bootstrap**: Front-end framework for styling and components.
- **jQuery**: JavaScript library for DOM manipulation and AJAX requests.

## How to Run

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Make sure you have MongoDB installed and running locally.
4. Start the server using `node server.js`.
5. Open `index.html` in your browser to access the chat application.
