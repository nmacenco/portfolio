import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import { useEffect, useState } from "react";
import { html, javascript, react } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("html");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "html",
      title: "HTML",
    },
    {
      id: "javascript",
      title: "Javascript",
    },
    {
      id: "react",
      title: "React",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "html":
        setData(html);
        break;
      case "javascript":
        setData(javascript);
        break;
      case "react":
        setData(react);
        break;
      default:
        setData(html);
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
      {data.map((d) => (
        <div key={d.id} className="container">
            <a href= {d.url} target = '_blank' className="item" >
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
  );
}
