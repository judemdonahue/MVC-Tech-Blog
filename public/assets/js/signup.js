const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const user = document.querySelector('#userInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

altBtn.addEventListener('click', () => {
  window.location.href = '/login';
});

document
  .querySelector('.loginBtn')
  .addEventListener('submit', loginFormHandler);