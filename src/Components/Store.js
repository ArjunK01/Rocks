import React from "react";
import "../Styles/Store.css";
import Rock from "./Rock";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

const Store = () => {
  React.useEffect(() => {
    axios
      .get("https://uva-cs4750-api.herokuapp.com/getStoreData?store_id=0")
      .then(r => setRocks(r.data.storeRocks));
  }, []);

  const { user } = React.useContext(UserContext);

  const [rocks, setRocks] = React.useState([]);
  return (
    <div className="inventory">
      <div className="sub">Avaliable Rocks to Purchase</div>
      <div className="sub" style={{ marginTop: "32px" }}>
        Liked Rocks
      </div>

      <div className="your-rocks">
        {user.likedRocks
          .filter(r => rocks.some(x => x.rock_id === r.rock_id))
          .map(rock => (
            <Rock store={true} rock={rock} />
          ))}
      </div>
      {user.likedRocks.filter(r => rocks.some(x => x.rock_id === r.rock_id))
        .length === 0 && <p style={{ marginBottom: 24 }}>No Liked Rocks</p>}
      <hr />
      <div className="your-rocks">
        {rocks
          .filter(r => !user.likedRocks.some(x => x.rock_id === r.rock_id))
          .map(rock => (
            <Rock store={true} rock={rock} />
          ))}
      </div>
    </div>
  );
};

export default Store;
