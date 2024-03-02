// Chat developed with Node.js
// Samuel Parente

// Import required modules
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path'); // Add path module for file path operations

// MongoDB connection URI
const uri = "mongodb+srv://samuelparente:samuelparente@cluster0.zov42uq.mongodb.net/chatApp?retryWrites=true&w=majority";

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Define a Mongoose model for messages
const Message = mongoose.model("Message", { name: String, message: String });

// Route to get all messages
app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find({});
        res.send(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).send("Error fetching messages");
    }
});

// Route to post a new message
app.post('/messages', async (req, res) => {
    const message = new Message(req.body);
    try {
        await message.save();
        io.emit('message', req.body); // Emit message to all clients
        res.sendStatus(200);
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).send("Error saving message");
    }
});

// Serve socket.io.js
app.get('/socket.io/socket.io.js', (req, res) => {
    // Send the socket.io client-side library
    res.sendFile(path.join(__dirname, 'node_modules', 'socket.io', 'client-dist', 'socket.io.js'));
});

// Start the server on port 3000
http.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');
});
