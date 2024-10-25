import Link from "next/link";

const Topbar = () => {
  return (
    <div id="topbar" className="topbar">
      <div className="topbar-wrapper">
        <p>
          Kod <strong>-10%</strong> <code>Karola10GTX</code> na produkty w
          sklepie{" "}
          <Link target="_blank" href="https://glutenex.pl/">
            Glutenex
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
