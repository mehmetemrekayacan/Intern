import airbnblogo from "../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={airbnblogo} alt="React logo" className="nav-logo" />
    </nav>
  );
}
