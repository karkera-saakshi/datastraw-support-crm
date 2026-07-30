import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TicketList.css';

function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all tickets once on mount (or when status filter changes)
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await axios.get('http://localhost:9000/api/tickets', {
          params: {
            ...(status && { status }),
          },
        });

        setTickets(response.data);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || err.message || 'Something went wrong while loading tickets.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [status]);

  // Instant client-side search across ID, Customer Name, Email, Subject, & Description
  const filteredTickets = tickets.filter((ticket) => {
    if (!search.trim()) return true;

    const query = search.toLowerCase().trim();
    const ticketId = (ticket._id || ticket.ticket_id || '').toLowerCase();
    const customerName = (ticket.name || ticket.customer_name || '').toLowerCase();
    const customerEmail = (ticket.customer_email || ticket.email || '').toLowerCase();
    const subject = (ticket.subject || ticket.title || '').toLowerCase();
    const description = (ticket.description || '').toLowerCase();

    return (
      ticketId.includes(query) ||
      customerName.includes(query) ||
      customerEmail.includes(query) ||
      subject.includes(query) ||
      description.includes(query)
    );
  });

  return (
    <div className="ticket-list-container">
      {/* Header Section */}
      <div className="page-header">
        <h1>All Tickets</h1>
        <p>View, search, and filter customer support tickets</p>
      </div>

      {/* Live Search & Filter Bar */}
      <div className="controls-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by ID, name, email, subject, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-box">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Loading & Error States */}
      {loading && <p className="status-msg">Loading tickets...</p>}
      {error && <p className="status-msg error">{error}</p>}

      {/* Ticket List View */}
      {!loading && !error && (
        <div className="tickets-grid">
          {filteredTickets.length === 0 ? (
            <p className="no-results">No tickets found matching your search.</p>
          ) : (
            filteredTickets.map((ticket) => (
              <div key={ticket._id || ticket.ticket_id} className="ticket-card">
                <div className="card-header">
                  <span className={`status-badge ${(ticket.status || 'open').toLowerCase().replace(' ', '-')}`}>
                    {ticket.status || 'Open'}
                  </span>
                  <span className="ticket-id">
                    #{ticket._id ? ticket._id.slice(-6) : ticket.ticket_id}
                  </span>
                </div>

                <h3 className="card-title">{ticket.subject || ticket.title || 'Untitled Ticket'}</h3>

                <p className="card-customer">
                  <strong>Customer:</strong> {ticket.name || ticket.customer_name || 'N/A'}
                </p>
                <p className="card-email">
                  <strong>Email:</strong> {ticket.customer_email || ticket.email}
                </p>

                <p className="card-description">
                  {ticket.description?.length > 90
                    ? `${ticket.description.substring(0, 90)}...`
                    : ticket.description}
                </p>

                <div className="card-footer">
                  <Link to={`/tickets/${ticket._id || ticket.ticket_id}`} className="view-btn">
                    View Details →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default TicketList;