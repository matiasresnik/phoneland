import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Phoneland</a>
      <img src="/laptop.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Telefonos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tablets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Computadoras</a>
          </li>
          <li class="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
