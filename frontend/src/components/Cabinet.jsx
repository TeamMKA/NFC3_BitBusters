import InteractiveCard from "../utils/widgets/InteractiveCard";
import { news_list } from '../assets/assets';

const Cabinet = () => {
  const handleCardClick = (link) => {
    window.location.href = link;
    console.log("Navigating to:", link);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>

      <div className="profile">
        {news_list.map((newsItem, index) => (
          <InteractiveCard
            key={index}
            image={newsItem.photo}
            title={newsItem.title}
            description={newsItem.description}
            criminalCase={newsItem.criminalCase}
            constituency={newsItem.constituency}
            selfProfession={newsItem.Profession}
            education={newsItem.education}
            totalAssets={newsItem.totalAssets}
            onClick={() => handleCardClick(newsItem.news[0].link)}
          />
        ))}
      </div>
    </>
  );
};

export default Cabinet;