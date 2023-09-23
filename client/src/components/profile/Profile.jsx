import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import me from "../../assets/user.png";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import { logoutUser, selectLoggedInuser } from "../auth/authSlice"; // Replace with the actual path to your Redux slice

const Profile = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  const user = useSelector(selectLoggedInuser);
  const dispatch = useDispatch(); // Get the dispatch function

  // Define a function to handle the logout
  const handleLogout = () => {
    // logoutUser.actions.logout()
    localStorage.removeItem('user');
    localStorage.setItem('failed', 'failed');
    dispatch(logoutUser());
    // Navigate("/login")
  };

  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="User" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          {user.email}
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            to="/dash"
            style={{
              borderRadius: 0,
              backgroundColor: "rgb(40,40,40)",
            }}
          >
            <MdDashboard /> Dashboard
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/">back to home</Link>
        </motion.div>

        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          onClick={handleLogout} // Call the handleLogout function on button click
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
