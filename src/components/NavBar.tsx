function NavBar() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Actions
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Create Inventory
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/update">
                Update Inventory
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
