import stella from "../Images/white-dress-stella.webp";
import bottega from "../Images/bottega-veneta-heels.jpg";
import alexander from "../Images/alexander-wang-halter.jpg";
import skirt from "../Images/leather-skirt.webp";
import givenchy from "../Images/givenchy-heels.webp";

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
        <div className="column">
          <br />
          LOOK 02
          <br />
          <br />
          <p>alexander wang halter top</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/silver-cowl-crop-halter-top/8573631"
            target="_blank"
            rel="noreferrer"
          >
            <img src={alexander} alt="alexander-wang-halter-top" width="250" />
          </a>
          <br />
          {/* <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/jumpsuits-for-women/faille-jumpsuit-with-g-buckle-belt-p-674467Z8AUI1000"
            target="_blank"
            ref="noreferrer"
          ></a> */}
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/silver-cowl-crop-halter-top/8573631"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <p>aleksandre akhalkatsishvili</p>
          <p>skirt</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/aleksandre-akhalkatsishvili/black-faux-leather-mini-skirt/9769951"
            target="_blank"
            rel="noreferrer"
          >
            <img src={skirt} alt="black-leather-skirt" width="200" />
            <br />
          </a>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/aleksandre-akhalkatsishvili/black-faux-leather-mini-skirt/9769951"
            target="_blank"
            rel="noreferrer"
          >
            <button className="purchase">PURCHASE</button>
          </a>
          <br />
          <br />
          <br />
          <br />
          <p>givenchy heels</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/givenchy/black-triple-toes-horn-heeled-sandals/7174281"
            target="_blank"
            rel="noreferrer"
          >
            <img src={givenchy} alt="givenchy-heels" width="200" />
            <br />
          </a>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/givenchy/black-triple-toes-horn-heeled-sandals/7174281"
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
