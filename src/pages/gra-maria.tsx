import { useEffect } from "react";

const LegacyMariaGamePage = () => {
  useEffect(() => {
    window.location.replace("/gra-karola");
  }, []);

  return null;
};

export default LegacyMariaGamePage;
