import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CreateTicket.css';
import axios from "axios";

function CreateTicket() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('Open');

    let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/tickets", { name, email, subject, status, description })
      .then(() => {
        alert("Booking successful!");
        setName("");
        setEmail("");
        setSubject("");
        setDescription("");
      })
      .catch(() => {
        alert("Failed to submit ticket. Please try again.");
      });
    };

  return (
    <div className="create-ticket-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Create New Ticket</h2>
          <p>Fill out the details below to submit a new support request.</p>
        </div>

         {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Customer Name Field */}
          <div className="form-group">
            <label htmlFor="customer_name">Customer Name *</label>
            <input
              type="text"
              id="customer_name"
              name="customer_name"
              placeholder="e.g. John Doe"
              value = {name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Customer Email Field */}
          <div className="form-group">
            <label htmlFor="customer_email">Customer Email *</label>
            <input
              type="email"
              id="customer_email"
              name="customer_email"
              placeholder="e.g. customer@example.com"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Subject Field */}
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Brief summary of the issue"
              value = {subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          {/* Description Field */}
          <div className="form-group">
            <label htmlFor="description">Issue Description *</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Provide full details about the issue..."
              value = {description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <Link to="/" className="btn-cancel">
              Cancel
            </Link>
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Ticket'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTicket;