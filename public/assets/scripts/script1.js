function toggleContent(id) {
  const content = document.getElementById(id);
  const isHidden = content.classList.contains('hidden');

  const allContents = document.querySelectorAll('.accordion-content');
  allContents.forEach(c => c.classList.add('hidden'));

  if (isHidden) {
    content.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelector('.bars');
  const body = document.body;

  bars.addEventListener('click', () => {
    body.classList.toggle('show-menu');
  });
});

function toggleChat() {
  var chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "none" || chatbox.style.display === "" ? "flex" : "none";
}

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatboxBody = document.getElementById('chatboxBody');
  
  const message = chatInput.value.trim();
  
  if (message) {
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    chatboxBody.appendChild(newMessage);
    
    chatInput.value = '';
  }
}
