import dei from "../../img/dei.png";
import { Button } from "../Button";
import { useState } from "react";

export const NewsCard = ({ imgSrc, title, content }) => {
  const [showMore, setShowMore] = useState(false);

  console.log(showMore);

  const getDescription = () => {
    if (showMore === true) {
      return content;
    } else {
      return content?.slice(0, 100) + "...";
    }
  };

  return (
    <div className="news-card">
      <img src={imgSrc} alt="dei logo" />
      <div className="new">
        <h3>{title}</h3>
        <p>{getDescription()}</p>
        {content?.length >= 100 && (
          <Button
            text={showMore ? "SEE LESS..." : "SEE MORE..."}
            variant="secondary"
            onClick={() => setShowMore(!showMore)}
          />
        )}
      </div>
    </div>
  );
};
