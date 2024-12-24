import React, { useState } from 'react';
import '../App.css';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const isFormValid = () => name.trim() && email.trim() && message.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError(true);
      setSuccess(false);
      return;
    }

    setError(false);

    const mailToLink = `mailto:sanathkumar.job@email.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailToLink;

    // Reset form state
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Me</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="contact-us-label" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="contact-us-input"
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="contact-us-label" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="contact-us-input"
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="contact-us-label" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            className="contact-us-textarea"
            id="message"
            placeholder="Enter your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message"
            rows={4}
            required
          />
        </div>
        <button
          className={`contact-us-button ${isFormValid() ? 'active' : 'disabled'}`}
          type="submit"
          disabled={!isFormValid()}
        >
          Send Message
        </button>
        {success && (
          <p className="contact-us-message contact-us-success">
            Your message has been sent successfully!
          </p>
        )}
        {error && (
          <p className="contact-us-message contact-us-error">
            Please fill out all required fields.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUsPage;
