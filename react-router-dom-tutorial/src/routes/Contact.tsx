import { Link } from "react-router-dom";

export const Contact = () => (
  <div>
    <h1>Contact</h1>
    {/* 5 - nested routes */}
    <p>
      <Link to="/contact/1">Format de contato 1</Link>
    </p>
    <p>
      <Link to="/contact/2">Format de contato 2</Link>
    </p>
    <p>
      <Link to="/contact/3">Format de contato 3</Link>
    </p>
  </div>
);
