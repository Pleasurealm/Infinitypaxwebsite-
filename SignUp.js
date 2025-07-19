import React, { useState } from 'react';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', surname: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Thank you for signing up!");
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h1>Sign Up</h1>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="surname" placeholder="Surname" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
      <button type="submit">ENTER</button>
    </form>
  );
};

export default SignUp;