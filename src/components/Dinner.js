import gucci_suit from "../Images/Gucci-Jumpsuit.jpg";
import dolce from "../Images/dolce.jpg";
import area from "../Images/area-dress.jpg";
import ysl from "../Images/ysl-heels.jpg";
import laquan from "../Images/laquan.jpg";
import dolce_gabbana from "../Images/dolce_gabbana.jpg";
import gucci from "../Images/gucci-bra.webp";
import alexander from "../Images/alexander-wang-trousers.webp";
import bra from "../Images/gucci-black-bra copy.jpg";
import mugler from "../Images/mugler-pants.webp";

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
        <br />
        <div className="column">
          <br />
          LOOK 02
          <br />
          <br />
          <p>area crystal dress</p>
          <br />
          <a
            href="https://www.farfetch.com/shopping/women/area-crystal-embellished-mini-dress-item-17266847.aspx?storeid=13537"
            target="_blank"
            rel="noreferrer"
          >
            <img src={area} alt="area-dress" width="200" />
          </a>
          <br />
          <br />
          <a
            href="https://www.farfetch.com/shopping/women/area-crystal-embellished-mini-dress-item-17266847.aspx?storeid=13537"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>ysl heels</p>
          <a
            href="https://www.saksfifthavenue.com/product/saint-laurent-opyum-leather-sandals-0400099522701.html?dwvar_0400099522701_color=BLACK"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ysl} alt="ysl-heels" width="200" />
          </a>
          <br />
          <a
            href="https://www.saksfifthavenue.com/product/saint-laurent-opyum-leather-sandals-0400099522701.html?dwvar_0400099522701_color=BLACK"
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
          <p>laquan smith jumpsuit</p>
          <br />
          <a
            href="https://laquansmith.com/collections/catsuit/products/off-the-shoulder-sheer-and-velvet-catsuit"
            target="_blank"
            rel="noreferrer"
          >
            <img src={laquan} alt="laquan-smith" width="200" />
          </a>
          <br />
          <br />
          <a
            href="https://laquansmith.com/collections/catsuit/products/off-the-shoulder-sheer-and-velvet-catsuit"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>dolce & gabbana heels</p>
          <a
            href="https://www.saksfifthavenue.com/product/dolce-gabbana-sculpted-heel-patent-leather-sandals-0400012630540.html?dwvar_0400012630540_color=NERO"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dolce_gabbana} alt="dolce & gabbana heels" width="200" />
          </a>
          <br />
          <a
            href="https://www.saksfifthavenue.com/product/dolce-gabbana-sculpted-heel-patent-leather-sandals-0400012630540.html?dwvar_0400012630540_color=NERO"
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
          LOOK 04
          <br />
          <br />
          <p>gucci satin bra</p>
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/tops-shirts-for-women/tops-for-women/gg-embroidered-silk-top-p-681155ZAIDC7278"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gucci} alt="gucci-bra" width="200" />
          </a>
          <br />
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/tops-shirts-for-women/tops-for-women/gg-embroidered-silk-top-p-681155ZAIDC7278"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>alexander wang trousers</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/black-polyester-trousers/9374741"
            target="_blank"
            rel="noreferrer"
          >
            <img src={alexander} alt="alexander-wang-trousers" width="150" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/black-polyester-trousers/9374741"
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
          LOOK 05
          <br />
          <br />
          <p>gucci lace bra</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/gucci/black-gg-embroidered-tulle-bra/9421761"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bra} alt="gucci-lace-bra" width="200" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/gucci/black-gg-embroidered-tulle-bra/9421761"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>mugler jeans</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/mugler/blue-spiral-jeans/9125821"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mugler} alt="mugler-jeans" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/mugler/blue-spiral-jeans/9125821"
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
