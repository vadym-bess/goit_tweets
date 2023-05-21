import "../App.css";
import { UserCard } from "../components/follovers";

export const Main = () => {
  return (
    <>
      <div className="container">
        <div>
          <img className="logo" src="../../public/goit.svg" />
        </div>
        <img className="heroImage" src="../../public/picture2 1.png" />

        <img className="boy" src="../../public/Boy.png" />

        <div className="boysLine"></div>
        <div className="tweetsCount">
          <p className="tweetsCountText">777 tweets</p>
        </div>
        <UserCard />
      </div>
    </>
  );
};
