import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      Choose your fit!
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/dinner">
        <button className="btn">birthday dinner looks</button>
      </Link>
      <br />
      <br />
      <br />
      <Link to="/outfits">
        {" "}
        <button className="btn">birthday looks</button>
      </Link>
      <br />
      <br />
      <br />
      <Link to="/vacation">
        <button className="btn">vacation looks</button>
      </Link>
      <br />
      <br />
      <br />
    </main>
  );
}

export default Home;
