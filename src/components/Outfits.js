import jacquemus from "../Images/jacquemus-top copy.jpg";
import gucci from "../Images/gucci-trousers.webp";
import otto from "../Images/otto.webp";
import louie from "../Images/louie.webp";
import sandals from "../Images/sandals.webp";
import nensi from "../Images/nensi.webp";
import furry from "../Images/furry.webp";
import marine from "../Images/marine.webp";

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
          <a
            href="https://www.ssense.com/en-us/women/product/balenciaga/black-fetish-heeled-sandals/8245331"
            target="_blank"
            rel="'noreferrer"
          >
            <img src={sandals} alt="balenciaga-sandals" width="200" />
          </a>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/balenciaga/black-fetish-heeled-sandals/8245331"
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
          <p>revival mule</p>
          <br />
          <br />
          <a
            href="https://us.louisvuitton.com/eng-us/products/revival-mule-nvprod3250037v/1A9PHP"
            target="_blank"
            rel="noreferrer"
          >
            <img src={louie} alt="louie-mules" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://us.louisvuitton.com/eng-us/products/revival-mule-nvprod3250037v/1A9PHP"
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
          LOOK 03
          <br />
          <br />
          <p>nensi dojaka</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/nensi-dojaka/ssense-exclusive-black-double-bra-bodysuit/8139511"
            target="_blank"
            rel="noreferrer"
          >
            <img src={nensi} alt="nensi-top" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/nensi-dojaka/ssense-exclusive-black-double-bra-bodysuit/8139511"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>marine serre</p>
          <br />
          <br />
          <a
            href="https://www.farfetch.com/shopping/women/marine-serre-crescent-moon-print-leather-trousers-item-18023610.aspx?storeid=9359"
            target="_blank"
            rel="noreferrer"
          >
            <img src={marine} alt="marine-serre" width="250" />
          </a>
          <br />
          <br />
          <br />
          <a
            href="https://www.farfetch.com/shopping/women/marine-serre-crescent-moon-print-leather-trousers-item-18023610.aspx?storeid=9359"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>alexander wang</p>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/black-lulu-sandals/8576561"
            target="_blank"
            rel="'noreferrer"
          >
            <img src={furry} alt="balenciaga-sandals" width="200" />
          </a>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/black-lulu-sandals/8576561"
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
