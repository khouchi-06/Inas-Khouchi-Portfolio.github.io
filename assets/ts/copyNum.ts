document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copy_Num") as HTMLButtonElement;
  const num = "+33 7 45 18 15 85"; 

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(num);
      copyBtn.textContent = "✔";
      setTimeout(() => 2000);
    } catch (err) {
      console.error("Erreur lors de la copie :", err);
    }
  });
});