import { Link } from 'react-router-dom'


export default function Navbar({ handleLogout, currentUser }) {
  // if the user is logged in
  const loggedIn = (
    <>
      {/* if the user is loggerd in..... */}
      <Link to="/">
        {/* todo: app function to logout */}
        <span onClick={handleLogout}>Log-out</span>
      </Link>

      <Link to="/profile"> Profile </Link>
    </>
  )

  // if the user is logged out
  const loggedOut = (
    <>
      {/* if the user in logged out..... */}
      <Link to="/register">Register</Link>

      <Link to="/login">Login</Link>
    </>
  )

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/navbar">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/document">Document</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pricing">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/logout" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>

      <Link to="/">User  </Link>

      {currentUser ? loggedIn : loggedOut}
    </nav>
  )
}