import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Social from "./Components/Social";
export default function App() {
  const [data, setdata] = useState([]);
  const [loadmore, setloadmore] = useState(0);

  useEffect(() => {
    // Pass in a callback function!
    axios.get("https://randomuser.me/api").then((res) => {
      // console.table(res.data.results);
      return setdata([...data, res.data.results]);
    });
  }, [loadmore]);
  // console.log(data);
  return (
    <div className="App">
      <h1>REACT Task</h1>
      <h2>
        Getting data from an Api and dumping it on screen using react Custom
        Component{" "}
      </h2>
      <button onClick={() => setloadmore(loadmore + 1)}>Load More</button>
      <div>
        {data.map((res, index) => {
          return <Social key={res[0].id.value} propdata={res}></Social>;
        })}
      </div>
    </div>
  );
}
