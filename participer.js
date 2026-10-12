const copyButton = document.querySelector('#copy-petition');
const status = document.querySelector('#copy-status');
if (copyButton && status) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('https://change.org/M1ValDeFontenay');
      status.textContent = 'Lien copié. Vous pouvez le partager.';
    } catch {
      status.textContent = 'Copiez le lien affiché juste au-dessus.';
    }
  });
}
