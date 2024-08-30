import InteractiveCard from "../utils/widgets/InteractiveCard";
import { news_list } from '../assets/assets';

const Cabinet = () => {
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
          />
        ))}
      </div>
    </>
  );
};

export default Cabinet;