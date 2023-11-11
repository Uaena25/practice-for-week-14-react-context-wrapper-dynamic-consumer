import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  return (
    <div>
      {match ? <h4>Match: {sign.match}</h4> : null}
      <button onClick={() => setMatch(!match)}>Match</button>
    </div>
  );
};

export default Match;
