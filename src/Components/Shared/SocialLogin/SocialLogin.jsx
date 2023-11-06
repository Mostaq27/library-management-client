
// import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
 
   
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
        //   onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;