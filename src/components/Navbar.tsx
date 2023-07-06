// import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  // consct {currentUser, logout} = UserAuth();
  const handlelogout = async () => {
    
  }
  return (
    <div className=" navbar bg-primary text-primary-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">hackAChat</a>
        <button onClick={handlelogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
