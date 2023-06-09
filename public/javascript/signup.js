const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      //check the response status
      if (response.ok) {
        console.log("succeess!!");
        alert("signed in successfully!!");
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
    else {
        alert("please enter username,email and password");
    }
  };

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  