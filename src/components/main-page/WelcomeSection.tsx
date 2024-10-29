import Image from "next/image";
import React from "react";
import karolaImg from "./../../../public/img/welcome/karola.jpg";

const WelcomeSection = () => {
  return (
    <div id="welcome-section" className="welcome-section">
      <div className="welcome-section-wrapper">
        <div className="img-text-box">
          <div className="img-box">
            <Image
              className="border-img"
              src={karolaImg}
              alt="bezglutenowa Karola"
              width={400}
              height={491}
            ></Image>
          </div>
          <div className="text-box">
            <h2>Codziennie swieże informacje i pyszne przepisy</h2>
            <h1>
              Bezglutenowa Karola - bezglutenowe życie pełne smaków i aromatów
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              ullam rem repudiandae laudantium, voluptatem dolorem cum quia ea
              facere, officia iure perferendis vero, iusto distinctio laboriosam
              animi non eius itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              ullam rem repudiandae laudantium, voluptatem dolorem cum quia ea
              facere, officia iure perferendis vero, iusto distinctio laboriosam
              animi non eius itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              ullam rem repudiandae laudantium, voluptatem dolorem cum quia ea
              facere, officia iure perferendis vero, iusto distinctio laboriosam
              animi non eius itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              ullam rem repudiandae laudantium, voluptatem dolorem cum quia ea
              facere, officia iure perferendis vero, iusto distinctio laboriosam
              animi non eius itaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
