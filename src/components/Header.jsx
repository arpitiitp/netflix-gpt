import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeuser } from "../utils/userSlice";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showselectx, setshowselect] = useState(false);
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  const handleGptSearchView = () => {
    dispatch(toggleGptSearchView());
    setshowselect(!showselectx);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in/sign up
        const { uid, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
          })
        );
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handlelanguagechange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-3 py-2 bg-gradient-to-b from-black w-full h-16 flex justify-between items-center z-20">
      <img className="w-56" src={LOGO} alt="Netflix Logo" />
      {user && ( // Only show the sign-out button if the user is logged in
        <div className="flex p-2">
          {showselectx && (
            <select
              className="py-2 px-4 mx-4 my-2 bg-blue-500 text-white rounded-lg cursor-pointer"
              onChange={handlelanguagechange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-700 text-white rounded-lg cursor-pointer"
            onClick={handleGptSearchView}
          >
            {showselectx ? "HOME":"GPT Search" }
          </button>
          <button
            className="py-2 px-4 mx-4 my-2 bg-red-700 text-white rounded-lg cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
