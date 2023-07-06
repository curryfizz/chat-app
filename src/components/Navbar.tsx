import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();
  const handlelogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" navbar bg-primary text-primary-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">hackAChat</a>
        {currentUser ? <button onClick={handlelogout}>Logout</button> : ""}
      </div>
    </div>
  );
};

export default Navbar;
