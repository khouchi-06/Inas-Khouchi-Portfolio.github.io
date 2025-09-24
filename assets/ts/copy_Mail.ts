document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copy_Mail") as HTMLButtonElement;
  const mail = "inaskhouchi06@gmail.com"; // 👉 remplace par ton mail

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(mail);
      copyBtn.textContent = "✔";
      setTimeout(() => 2000);
    } catch (err) {
      console.error("Erreur lors de la copie :", err);
    }
  });
});