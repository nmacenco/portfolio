import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import { useEffect, useState } from "react";
import { node, javascript, react } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Node");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "Node",
      title: "Node",
    },
    // {
    //   id: "javascript",
    //   title: "Javascript",
    // },
  ];
  useEffect(() => {
    switch (selected) {
      case "Node":
        setData(node);
        break;
      case "javascript":
        setData(javascript);
        break;
      case "react":
        setData(react);
        break;
      default:
        setData(node);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="projectsContainer">
        {data.map((d) => (
          <div key={d.id} className="container">
              <a href= {d.url}  className="item" >
              <img
                src= {d.img}
                width={"150px"}
                height= {'150px'}
                alt=""
              />

              <h3> {d.title} </h3>
              </a>
          </div>
        ))}
      </div>
    </div>
  );
}
