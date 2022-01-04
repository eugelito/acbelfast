import { useEffect, useState } from "react";
import "./News.scss";

const News = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
     // fetch from Sheets   "https://sheet.best/api/sheets/4e331b1e-9993-4ffa-908f-d0d729b92a9e"
      );
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="section__container">
      <div className="card__container card__container--news--columnOne">
        <h2>News</h2>

     <div className="card">
          {data?.map((item, i) => (
            <div key={i}>
              <b className="card-date">{item.Date}</b>
              <h3>{item.Heading}</h3>
              <p className="card-description">{item.Description}</p>
              <hr className="card__news--divider"></hr>
            </div>
          ))}
        </div>)
        <div className="card">
            <div>
              <b className="card-date">25 Feburary 2022</b>
              <h3>Heading</h3>
              <p className="card-description">Lorem ipsum description is here.</p>
              <hr className="card__news--divider"></hr>
            </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default News;
