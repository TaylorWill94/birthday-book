import jacquemus from "../Images/jacquemus-top copy.jpg";
import gucci from "../Images/gucci-trousers.webp";
import otto from "../Images/otto.webp";

function Outfits() {
  return (
    <div className="outfits">
      Birthday Outfits
      <section className="outfit-sec">
        <br />
        <div className="column">
          <br />
          LOOK 01
          <br />
          <br />
          <p>jacquemus top</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/jacquemus/black-le-bandeau-beijo-bra/9006301"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jacquemus} alt="jacquemus-top" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/jacquemus/black-le-bandeau-beijo-bra/9006301"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>gucci trousers</p>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/gucci/brown-gg-canvas-trousers/9421431"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gucci} alt="gucci-trousrs" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/gucci/brown-gg-canvas-trousers/9421431"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
        </div>
        <br />
        <div className="column">
          <br />
          LOOK 02
          <br />
          <br />
          <p>ottolinger dress</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/ottolinger/orange-and-green-recycled-polyester-mini-dress/9549421"
            target="_blank"
            rel="noreferrer"
          >
            <img src={otto} alt="ottolinger-dress" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/ottolinger/orange-and-green-recycled-polyester-mini-dress/9549421"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>gucci trousers</p>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/gucci/brown-gg-canvas-trousers/9421431"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gucci} alt="gucci-trousrs" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/gucci/brown-gg-canvas-trousers/9421431"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
        </div>
      </section>
    </div>
  );
}

export default Outfits;
