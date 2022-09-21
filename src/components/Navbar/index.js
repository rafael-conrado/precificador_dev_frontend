import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav class="container row">
      <div class="item">Precificador</div>
      <div class="item">Service</div>
      <div class="item">contatos</div>
    </nav>
  );
}

export default Navbar;
