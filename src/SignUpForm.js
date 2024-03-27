import React, { useState } from 'react';
import './SignUpForm.css'; // Import CSS file for custom styling

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePasswordStrength = (password) => {
    // Password strength criteria: At least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character.
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (!validatePasswordStrength(event.target.value)) {
      setPasswordError('Password must be strong and include a mix of letters, numbers, and special characters.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation checks for firstName, lastName, email, password, and confirmPassword can be added here

    // Perform further actions (e.g., submit form) if all validations pass
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" className="large-input" />
          </div>
          <div>
            <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" className="large-input" />
          </div>
          <div>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email Address" className="large-input" />
          </div>
          <div>
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" className="large-input" />
          </div>
          <div>
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <div>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" className="large-input" />
          </div>
          <div>
            {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
