// Define the chatbot responses
const chatbotResponses = {
  "hi": "Hello!",
  "hello": "Hello! How can I assist you today?",
  "how are you": "I'm an AI, so I don't have feelings, but thank you for asking!",
  "what is your name": "I'm Simple AI, a basic AI chatbot.",
  "who are you made by": "I am made by Wish! He said to enjoy Simple AI :)",
  "credits": "Maintainer: Wish Code/Bug Fixes: Chat GPT (thanks OpenAI!)",
  "make a smiley emoticon": ":)",
  "i need help": "Oh no! Please look up your emergency number, or if your having a mental health crisis, call 988.",
  "dev": "Why are you not updating? and Thanks for helping us.",
  "Why are you not updating?": "You have to update the code with something before the previous code will appear!",
  "Thanks for helping us": "Awwww, your welcome! :) Thanks for making me",
  "updater": "add number to updater to update",
  "default": "This command has most likely not been added. If you want it added, make an issue and tag it with enhancement."
};

// Function to process user input and generate chatbot response
function processInput() {
  const userInput = document.getElementById("userinput").value.trim();
  const chatlog = document.getElementById("chatlog");

  // Check for empty user input
  if (userInput === "") {
    return;
  }

  let chatbotResponse = chatbotResponses["default"];

  // Check for matching user input in chatbotResponses
  for (const input in chatbotResponses) {
    const regex = new RegExp(`\\b${input}\\b`, "i");
    if (regex.test(userInput)) {
      chatbotResponse = chatbotResponses[input];
      break;
    }
  }

  // Display user input and chatbot response in the chatlog
  const userMessage = document.createElement("p");
  userMessage.innerText = "You: " + userInput;
  chatlog.appendChild(userMessage);

  const chatbotMessage = document.createElement("p");
  chatbotMessage.innerText = "Simple AI: " + chatbotResponse;
  chatlog.appendChild(chatbotMessage);

  // Clear the user input field
  document.getElementById("userinput").value = "";
}

// Process user input when Enter key is pressed
document.getElementById("userinput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    processInput();
  }
});
