import gucci_suit from "../Images/Gucci-Jumpsuit.jpg";
import dolce from "../Images/dolce.jpg";

function Dinner() {
  return (
    <div className="dinner">
      Birthday Dinner
      <section className="outfit-sec">
        <br />
        <div className="column">
          <br />
          LOOK 01
          <br />
          <br />
          <p>gucci jumpsuit</p>
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/jumpsuits-for-women/faille-jumpsuit-with-g-buckle-belt-p-674467Z8AUI1000"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gucci_suit} alt="gucci-jumpsuit" width="250" />
          </a>
          <br />
          {/* <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/jumpsuits-for-women/faille-jumpsuit-with-g-buckle-belt-p-674467Z8AUI1000"
            target="_blank"
            ref="noreferrer"
          ></a> */}
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/jumpsuits-for-women/faille-jumpsuit-with-g-buckle-belt-p-674467Z8AUI1000"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>dolce & gabbana heels</p>
          <a
            href="https://www.saksfifthavenue.com/product/dolce-gabbana-sculpted-heel-metallic-leather-sandals-0400013535394.html?dwvar_0400013535394_color=GOLD"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dolce} alt="dolce-gabbana-heels" width="200" />
          </a>
          <br />
          <a
            href="https://www.saksfifthavenue.com/product/dolce-gabbana-sculpted-heel-metallic-leather-sandals-0400013535394.html?dwvar_0400013535394_color=GOLD"
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

export default Dinner;
