import { useState } from 'react';
import { Search, MapPin, Calendar, User, HeadphonesIcon, ArrowRightLeft } from 'lucide-react';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redBus" />
          </div>
          <nav className="nav-links">
            <a href="#" className="active">Bus Tickets</a>
            <a href="#">Cab Booking</a>
            <a href="#">Train Tickets</a>
          </nav>
          <div className="user-actions">
            <button className="header-btn">
              <HeadphonesIcon size={20} /> Help
            </button>
            <button className="header-btn">
              <User size={20} /> Account
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1>India's No. 1 Online Bus Ticket Booking Site</h1>
          
          <div className="search-container">
            <div className="search-field">
              <div className="icon-wrap"><MapPin size={24} /></div>
              <div className="input-wrap">
                <input 
                  type="text" 
                  placeholder="From" 
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
            </div>
            
            <button className="exchange-btn" onClick={handleSwap}>
              <ArrowRightLeft size={20} />
            </button>
            
            <div className="search-field">
              <div className="icon-wrap"><MapPin size={24} /></div>
              <div className="input-wrap">
                <input 
                  type="text" 
                  placeholder="To" 
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
            </div>
            
            <div className="search-field date-field">
              <div className="icon-wrap"><Calendar size={24} /></div>
              <div className="input-wrap">
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            
            <button className="search-btn">
              SEARCH BUSES
            </button>
          </div>
        </div>
      </section>

      {/* Trending Offers */}
      <section className="trending-offers container">
        <div className="section-header">
          <h2>Trending Offers</h2>
          <button className="view-all">View All</button>
        </div>
        <div className="offers-grid">
          <div className="offer-card blue">
            <div className="offer-badge">Bus</div>
            <div className="offer-info">
              <h3>Save up to Rs 250 on bus tickets</h3>
              <p>Valid till 31 May</p>
              <div className="offer-code-wrap">
                <span className="code">FIRST</span>
              </div>
            </div>
          </div>
          <div className="offer-card green">
            <div className="offer-badge">Bus</div>
            <div className="offer-info">
              <h3>20% off on specific operators</h3>
              <p>Valid till 15 Jun</p>
              <div className="offer-code-wrap">
                <span className="code">SUPERHIT</span>
              </div>
            </div>
          </div>
          <div className="offer-card red">
            <div className="offer-badge">Bus</div>
            <div className="offer-info">
              <h3>Cashback up to Rs 300</h3>
              <p>Valid till 20 May</p>
              <div className="offer-code-wrap">
                <span className="code">CASHBACK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-col brand-col">
              <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redBus" className="footer-logo" />
              <p>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</p>
            </div>
            <div className="footer-col">
              <h4>About redBus</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Mobile version</a></li>
                <li><a href="#">redBus on mobile</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Offers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Info</h4>
              <ul>
                <li><a href="#">T&C</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Bus operator registration</a></li>
                <li><a href="#">Agent registration</a></li>
                <li><a href="#">Insurance partner</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Global Sites</h4>
              <ul>
                <li><a href="#">India</a></li>
                <li><a href="#">Singapore</a></li>
                <li><a href="#">Malaysia</a></li>
                <li><a href="#">Indonesia</a></li>
                <li><a href="#">Peru</a></li>
                <li><a href="#">Colombia</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Redbus India Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
