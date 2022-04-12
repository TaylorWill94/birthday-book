import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      Choose your fit!
      <br />
      <br />
      <Link to="/dinner">
        <button className="btn">BIRTHDAY DINNER LOOK</button>
      </Link>
      <br />
      <br />
      <Link to="/birthday">
        {" "}
        <button className="btn">BIRTHDAY LOOK</button>
      </Link>
      <br />
      <br />
      <Link to="/vacation">
        <button className="btn">VACATION LOOKS</button>
      </Link>
      <br />
      <br />
    </main>
  );
}

export default Home;
