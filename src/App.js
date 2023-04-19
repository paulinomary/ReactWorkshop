import "./styles.css";
import { NewsCard } from "./components/NewsCard";
import dei from "./img/dei.png";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const url =
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        response.json().then((news) => {
          setData(news.articles);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>My news app</h1>
      <div className="news-grid">
        {data.map((article, index) => {
          return (
            <NewsCard
              key={index}
              imgSrc={article.urlToImage}
              title={article.title}
              content={article.description}
            />
          );
        })}
      </div>
    </div>
  );
}

//<NewsCard
//imgSrc={dei}
//title = "News 1"
//content ="Impedit sit sunt quaerat, odit,
//tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
//sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
//recusandae alias error harum maxime adipisci amet laborum."
///>
