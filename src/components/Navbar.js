import { useContext } from "react";
import horoscopesObj from "../data/horoscopes";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Navbar = () => {
  // console.log("Navbar is rerendering");
  const { setCurrentSign } = useContext(HoroscopeContext);
  const horoscopes = Object.keys(horoscopesObj);

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span onClick={() => setCurrentSign(sign)} key={sign}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
