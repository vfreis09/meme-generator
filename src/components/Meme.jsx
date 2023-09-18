import "../styles/Meme.css";

function Meme() {
  return (
    <main>
      <form className="meme-container">
        <input placeholder="top text" type="text" className="form-input" />
        <input placeholder="bottom text" type="text" className="form-input" />
        <button className="submit-button">Get a new meme image</button>
      </form>
    </main>
  );
}

export default Meme;
