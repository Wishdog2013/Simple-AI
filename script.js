// Define the chatbot responses
const chatbotResponses = {
  "hello": "Hello! How can I assist you today?",
  "how are you": "I'm an AI, so I don't have feelings, but thank you for asking!",
  "what is your name": "I'm just a simple AI chatbot.",
  "default": "I'm sorry, but I don't understand. Can you please rephrase?"
};

// Function to process user input and generate chatbot response
function processInput() {
  const userInput = document.getElementById("userinput").value.toLowerCase();
  const chatlog = document.getElementById("chatlog");
  const chatbotResponse = chatbotResponses[userInput] || chatbotResponses["default"];
  
  // Display user input and chatbot response in the chatlog
  const userMessage = document.createElement("p");
  userMessage.innerText = "You: " + userInput;
  chatlog.appendChild(userMessage);
  
  const chatbotMessage = document.createElement("p");
  chatbotMessage.innerText = "Chatbot: " + chatbotResponse;
  chatlog.appendChild(chatbotMessage);
  
  // Clear the user input field
  document.getElementById("userinput").value = "";
}

// Process user input when Enter key is pressed
document.getElementById("userinput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    processInput();
  }
});
