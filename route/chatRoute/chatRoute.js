const express = require("express");
const {
  startChat,
  chat,
} = require("../../controller/chatController/chatController");

const router = express.Router();


router.post("/start", startChat);

/**
 * @route   POST /api/chat
 * @desc    Send message to Gemini AI and get response
 *          Available for all users (logged in or not)
 *          Supports multiple messages in one session
 * @access  Public
 * @body    { sessionId: string, message: string, conversationHistory?: array }
 * 
 * @example Request:
 * {
 *   "sessionId": "uuid-from-start-endpoint",
 *   "message": "What are the symptoms of flu?",
 *   "conversationHistory": [
 *     { "role": "user", "parts": [{"text": "Hello"}] },
 *     { "role": "model", "parts": [{"text": "Hi! How can I help?"}] }
 *   ]
 * }
 * 
 * @example Response:
 * {
 *   "success": true,
 *   "data": {
 *     "sessionId": "uuid",
 *     "userMessage": "What are the symptoms of flu?",
 *     "botResponse": "Common flu symptoms include...",
 *     "timestamp": "2025-11-02T10:30:00.000Z"
 *   }
 * }
 */
router.post("/", chat);

module.exports = router;
