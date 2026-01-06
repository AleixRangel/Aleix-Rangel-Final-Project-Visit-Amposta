import ampostaImg2 from '../assets/amposta2.jpg';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${ampostaImg2})` }}>
      <nav className="nav">
        <span className="logo">Amposta</span>
        <ul>
          <li><a href="#video-presentation">Presentation</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#ambient">Ambient</a></li>
          <li><a href="#activities">Activities</a></li>
        </ul>
      </nav>

      <div className="title">
        <h1>Amposta</h1>
        <h2>Nature, river and tradition</h2>
        <button>Discober Amposta</button>
      </div>
    </header>
  );
}

export default Header;
