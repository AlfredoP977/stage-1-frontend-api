import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>NewsExplorer</h1>
      <button className="HOME">Home</button>
      //toggle sign in
      <button className="signIn">Sign in</button>
    </header>
  );
}

export default Header;
