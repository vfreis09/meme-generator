import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="left-section">
        <img src="./troll-face.png" className="logo"></img>
        <p>Meme Generator</p>
      </div>
      <div className="right-section">
        <p>React Course - Project 3</p>
      </div>
    </header>
  );
}

export default Header;
