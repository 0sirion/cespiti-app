import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1>Finmatica</h1>

      <ul className="Links">
        <Link to="/">Home</Link>
        <Link to="/Lista">Lista</Link>
        {/* <Link to="/ItemSpecs">
          <li>Specs</li>
        </Link> */}
      </ul>
    </div>
  );
}
