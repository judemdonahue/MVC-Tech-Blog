const loginFormHandler = async (event) => {
  event.preventDefault();

  const user = document.querySelector('#userInput');
  const password = document.querySelector('#passwordInput');

  if (user && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        console.error('Failed to log in:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login request:', error);
    }
  }
};

altBtn.addEventListener('click', () => {
  window.location.href = '/signup';
});

document
  .querySelector('#loginBtn')
  .addEventListener('click', loginFormHandler);
