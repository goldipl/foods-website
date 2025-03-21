import Image from "next/image";
import Link from "next/link";
import cartIcon from "./../../../public/icons/header/cart.svg";

const Topbar = () => {
  return (
    <div id="topbar" className="topbar">
      <div className="topbar-wrapper">
        <p>
          Kod <strong>10%</strong> zniżki <code>Karola10GTX</code> w sklepie
          <Link target="_blank" href="https://sklep.glutenex.com.pl/">
            Glutenex
            <Image
              className="cart-icon"
              src={cartIcon}
              width={24}
              height={24}
              alt="koszyk"
            ></Image>
          </Link>
        </p>
        <p>
          Kod <strong>10%</strong> zniżki <code>bezglutenowakarola10</code> w
          sklepie
          <Link target="_blank" href="https://www.sunday-natural.pl/">
            Sunday Natural
            <Image
              className="cart-icon"
              src={cartIcon}
              width={24}
              height={24}
              alt="koszyk"
            ></Image>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
