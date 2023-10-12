import { useContext} from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <p>please login</p>
      </div>
    );
  }

  return <div>
    <p>Wellcome {user.username}</p>
  </div>;
};

export default Profile;
