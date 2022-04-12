import stella from "../Images/white-dress-stella.webp";
import bottega from "../Images/bottega-veneta-heels.jpg";

function Vacation() {
  return (
    <div className="vacation">
      Vacation
      <section className="outfit-sec">
        <br />
        <div className="column">
          <br />
          LOOK 01
          <br />
          <br />
          <p>stella dress</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/stella-mccartney/white-viscose-dress/9590061"
            target="_blank"
            rel="noreferrer"
          >
            <img src={stella} alt="stella-dress" width="250" />
          </a>
          <br />
          {/* <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/jumpsuits-for-women/faille-jumpsuit-with-g-buckle-belt-p-674467Z8AUI1000"
            target="_blank"
            ref="noreferrer"
          ></a> */}
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/stella-mccartney/white-viscose-dress/9590061"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>bottega veneta heels</p>
          <a
            href="https://www.saksfifthavenue.com/product/bottega-veneta-crochet-pinwheel-sandals-0400015482271.html?dwvar_0400015482271_color=KIWI"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bottega} alt="bottega-veneta-heels" width="200" />
          </a>
          <br />
          <a
            href="https://www.saksfifthavenue.com/product/bottega-veneta-crochet-pinwheel-sandals-0400015482271.html?dwvar_0400015482271_color=KIWI"
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

export default Vacation;
