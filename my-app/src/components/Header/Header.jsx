import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="stats">stats</h1>
      <h2 className="goal">Goal</h2>
      <button className="logOut">logOut</button>
      <button className="profile">profile</button>
    </header>
  );
}

export default Header;
