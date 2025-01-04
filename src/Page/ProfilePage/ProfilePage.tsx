import { useState } from "react";
import SlideBar from "./Components/SlideBar";
import Profile from "./Components/Profile";
import Payment from "./Components/Payment";

const ProfilePage = () => {
  const [content, setContent] = useState<string>("Trang cá nhân");

  const renderContent = () => {
    switch (content) {
      case "Trang cá nhân":
        return <Profile></Profile>;
      default:
        return <Payment></Payment>;
    }
  };

  return (
    <div className="flex">
      <SlideBar setContent={setContent}></SlideBar>
      <div className="w-full">{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;
