document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#hello');
  const result = document.querySelector('#result');
  button.addEventListener('click', () => {
    result.textContent = 'JavaScript успішно підключено!';
  });
});
