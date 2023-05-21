import { useState, useEffect } from "react";
import "../App";

export const UserCard = () => {
  const initialFollowers = 500;
  const [followers, setFollowers] = useState(initialFollowers);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    localStorage.setItem("followers", followers.toString());
    localStorage.setItem("following", following.toString());
  }, [followers, following]);

  useEffect(() => {
    const savedFollowers = localStorage.getItem("followers");
    const savedFollowing = localStorage.getItem("following");
    if (savedFollowers && savedFollowing) {
      setFollowers(parseInt(savedFollowers));
      setFollowing(savedFollowing === "true");
    }
  }, []);

  const handleFollowClick = () => {
    if (following) {
      setFollowers((prevFollowers) => prevFollowers - 1);
    } else {
      setFollowers((prevFollowers) => prevFollowers + 1);
    }
    setFollowing((prevFollowing) => !prevFollowing);
  };

  return (
    <div className="followersThumb">
      <p className="followersThumbText">
        <span>100, </span>
        {followers.toLocaleString()} followers
      </p>
      <div
        className="button"
        onClick={handleFollowClick}
        style={{ backgroundColor: following ? "#5CD3A8" : "#EBD8FF" }}
      >
        {following ? "Following" : "Follow"}
      </div>
    </div>
  );
};

export default UserCard;
