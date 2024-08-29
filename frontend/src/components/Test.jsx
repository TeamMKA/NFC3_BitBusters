import { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('https://fastapi-4rdr.onrender.com');
        setNews(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {news.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p key={index}>{item.news}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;