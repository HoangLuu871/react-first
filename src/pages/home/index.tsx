import './styles.css';
import logo from '../../assets/images/logo.svg'

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <p>
          Home Page
        </p>
        <a
          className="home-link"
          href="/signin"
          rel="noopener noreferrer"
        >
          Click to navigate to sign page
        </a>
      </header>
    </div>
  );
}

export default Home;
