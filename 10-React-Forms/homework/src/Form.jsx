import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
}
export default function Form() {

  const [inputs, setInputs] = React.useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value
      }));
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Submit</button>
      ...
    </form>)
}
