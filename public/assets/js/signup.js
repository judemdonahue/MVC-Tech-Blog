const signup = async (event) => {
  event.preventDefault(); // Prevent the form from submitting

  const userInput = document.querySelector('#userInput').value;
  const passwordInput = document.querySelector('#passwordInput').value;

  try {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: userInput, password: passwordInput })
    });

    console.log(response); // Log the response to the console

    if (response.ok) {
      // Redirect to the dashboard/home
      window.location.href = '/';
    } else {
      // Display an error message
      const error = await response.json();
      console.error(error.message);
    }
  } catch (error) {
    console.error('An error occurred during signup', error);
  }
};

const signupBtn = document.querySelector('#signUpBtn');
const altBtn = document.querySelector('#altBtn');

altBtn.addEventListener('click', () => {
  window.location.href = '/login';
});

signupBtn.addEventListener('click', signup);

