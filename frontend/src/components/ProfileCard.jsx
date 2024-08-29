import { minister_list } from "../assets/assets";
import InteractiveCard from "../utils/widgets/InteractiveCard";


const ProfileCard = () => {

  
  return (
    <div className="profile">
      {minister_list.map((minister, index) => (
        <InteractiveCard
          key={index}
          image={minister.details.photo}
          title={minister.candidate}
          description={minister.party}
          criminalCase={minister.criminalCase}
          constituency={minister.details.constituency}
          selfProfession={minister.details.selfProfession}
          education={minister.education}
          totalAssets={minister.totalAssets}
        />
      ))}
    </div>
  );
};

export default ProfileCard;