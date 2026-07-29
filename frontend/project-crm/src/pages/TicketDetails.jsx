import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './TicketDetails.css';

function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);

  // Fetch ticket details when component mounts or ID changes
  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(`http://localhost:9000/api/tickets/${id}`);
        setTicket(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || 'Failed to fetch ticket details.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTicketDetails();
  }, [id]);

  // Handle status update
  const handleStatusChange = async (newStatus) => {
    try {
      setUpdating(true);
      const response = await axios.put(`http://localhost:9000/api/tickets/${id}`, {
        status: newStatus,
      });

      // Update state with updated ticket or update status locally
      setTicket((prev) => ({
        ...prev,
        status: response.data?.status || newStatus,
      }));
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update ticket status.');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="details-status-msg">Loading ticket details...</div>;
  if (error) return <div className="details-status-msg error">{error}</div>;
  if (!ticket) return <div className="details-status-msg">Ticket not found.</div>;

  const currentStatus = ticket.status || 'Open';

  return (
    <div className="ticket-details-container">
      {/* Navigation Header */}
      <div className="top-bar">
        <Link to="/" className="back-btn">
          ← Back to All Tickets
        </Link>
      </div>

      {/* Main Ticket Details Card */}
      <div className="details-card">
        {/* Header Section */}
        <div className="details-header">
          <div className="header-meta">
            <span className="ticket-id-tag">#{ticket._id || ticket.ticket_id}</span>
            <span className={`status-badge ${currentStatus.toLowerCase().replace(' ', '-')}`}>
              {currentStatus}
            </span>
          </div>

          <h1 className="ticket-subject">{ticket.subject || 'No Subject Provided'}</h1>

          {ticket.createdAt && (
            <p className="created-date">
              Created on: {new Date(ticket.createdAt).toLocaleString()}
            </p>
          )}
        </div>

        <hr className="divider" />

        {/* Customer Information */}
        <div className="customer-info-section">
          <h3>Customer Details</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Name</label>
              <p>{ticket.name || ticket.customer_name || 'N/A'}</p>
            </div>

            <div className="info-item">
              <label>Email</label>
              <p>{ticket.email || ticket.customer_email || 'N/A'}</p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* Issue Description */}
        <div className="description-section">
          <h3>Issue Description</h3>
          <div className="description-box">
            <p>{ticket.description || 'No description provided.'}</p>
          </div>
        </div>

        <hr className="divider" />

        {/* Quick Actions (Update Status) */}
        <div className="actions-section">
          <h3>Update Ticket Status</h3>
          <div className="status-buttons">
            <button
              className={`status-btn open ${currentStatus === 'Open' ? 'active' : ''}`}
              onClick={() => handleStatusChange('Open')}
              disabled={updating || currentStatus === 'Open'}
            >
              Mark as Open
            </button>

            <button
              className={`status-btn in-progress ${currentStatus === 'In Progress' ? 'active' : ''}`}
              onClick={() => handleStatusChange('In Progress')}
              disabled={updating || currentStatus === 'In Progress'}
            >
              Mark as In Progress
            </button>

            <button
              className={`status-btn closed ${currentStatus === 'Closed' ? 'active' : ''}`}
              onClick={() => handleStatusChange('Closed')}
              disabled={updating || currentStatus === 'Closed'}
            >
              Mark as Closed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;