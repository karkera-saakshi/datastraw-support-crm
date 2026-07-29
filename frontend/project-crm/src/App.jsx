import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TicketList from './pages/TicketList';
import CreateTicket from './pages/CreateTicket';
import TicketDetail from './pages/TicketDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* Navigation Header */}
        <header style={{
          backgroundColor: '#1e293b',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>

          <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
              🎫 CRM Support
            </Link>
          </div>
    
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: 500 }}>
              All Tickets
            </Link>
            <Link to="/tickets/new" style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 500
            }}>
              + Create Ticket
            </Link>
          </nav>
        </header>

        {/* Main Content Viewport */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TicketList />} />
            <Route path="/tickets/new" element={<CreateTicket />} />
            <Route path="/tickets/:id" element={<TicketDetail />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;