import { useOutletContext } from "react-router-dom";
import jwt_decode from "jwt-decode";
import SeeMessages from "../components/SeeMessages";

const Profile = () => {

  const [token] = useOutletContext();
  const { username } = jwt_decode(token);
  // console.log(userData, "this is user data");

  return (
    <div>

      <h1>Welcome { username }!</h1>

      <div>
        
        <h2>All Messages</h2>

        <div>
          <SeeMessages token={token} />
        </div>
        
      </div>

    </div>
  )
};

export default Profile;