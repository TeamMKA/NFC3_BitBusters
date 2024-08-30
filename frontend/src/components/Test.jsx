import { useEffect, useState } from "react";
import { news_list } from "../assets/assets";
import RatingComp from "../utils/widgets/RatingComp";

const Test = () => {
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    let sum = 0;
    let count = 0;

    news_list.forEach((news) => {
      news.news.forEach((article) => {
        sum += article.sentiment.score;
        count++;
      });
    });

    setAvg(sum / count);
  }, []);

  return (
    <div className="container">
      <div className="details">
        <h1>News</h1>

        <ul>
          {news_list.map((news) => (
            <li key={news.constituency} className="news-section">
              <div className="news-item">
                <h2>{news.candidate}</h2>
                <div>
                  <img src={news.photo} alt={news.candidate} />
                </div>
                <div className="details-grid">
                  <div className="one">
                    <p>
                      <strong>Party:</strong> {news.party}
                    </p>
                    <p>
                      <strong>Criminal Cases:</strong> {news.criminalCase}
                    </p>
                    <p>
                      <strong>Education:</strong> {news.education}
                    </p>
                  </div>
                  <p>
                    <strong>Total Assets:</strong> {news.totalAssets}
                  </p>
                  <p>
                    <strong>Liabilities:</strong> {news.liabilities}
                  </p>
                  <p>
                    <strong>Details Constituency:</strong>{" "}
                    {news.details__constituency}
                  </p>
                  <p>
                    <strong>Average Sentiment Score:</strong> 
                    <br/>
                    {avg}
                    <br/>
                    <RatingComp value={avg} maxRating={5} />
                  </p>
                  <p>
                    <strong>Profession:</strong> {news.Profession}
                  </p>
                </div>
              </div>
              <div className="news-articles">
                <ul>
                  {news.news.map((article, index) => (
                    <li key={index}>
                      <p>
                        <strong>Description:</strong> <br /> {article.description}
                      </p>
                      <p>
                        <strong>Link:</strong> <br />
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {article.link}
                        </a>
                      </p>
                      <p>
                        <strong>Sentiment:</strong> <br /> (Label:{" "}
                        {article.sentiment.label}) (Score:{" "}
                        {article.sentiment.score})
                      </p>
                      <RatingComp
                        score={article.sentiment.score}
                        name={`rating-${index}`}
                        highlightSelectedOnly={true}
                      />
                      {article.image && <img src={article.image} alt="news" />}
                      <p>
                        <strong>Summary:</strong> <br /> {article.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;