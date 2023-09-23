import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import CoursePage from "./pages/CoursesPage"

 import "./style/app.scss";
 import "./style/Header.scss";
 import "./style/Home.scss";
 import "./style/Courses.scss";
 import "./style/CourseDetail.scss";
 import "./style/Footer.scss";
 import "./style/Contact.scss";
 import "./style/About.scss";
import "./style/Login.scss"
import "./style/Signup.scss"
 import "./style/EnrollSuccess.scss";
 import "./style/Profile.scss";
 import "./style/UserDashboard.scss";
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import CourseDetailPage from "./pages/CourseDetailPage"
import EnrollSuccessPage from "./pages/EnrollSuccessPage"
import UnenrollSuccessPage from "./pages/UnenrollSuccessPage"
import Profile from "./components/profile/Profile"
import UserDashboardPage from "./pages/UserDashboardPage"
import Protected from './components/auth/Protected';
//routing 


  
 const router = createBrowserRouter(
  [ 
   { 
     path: "/", 
     element: <Protected><HomePage /></Protected> , 
   }, 
   { 
     path: "/courses", 
     element:<Protected><CoursePage /></Protected> , 
   }, 
   { 
     path: "/course-detail/:id", 
     element:<Protected><CourseDetailPage /></Protected> , 
   }, 
   { 
     path: "/success", 
     element: <Protected><EnrollSuccessPage /></Protected> , 
   }, 
   { 
     path: "/unenroll", 
     element:<Protected>< UnenrollSuccessPage/></Protected> , 
   }, 
   { 
     path: "/contact", 
     element:<Protected><ContactPage /></Protected> , 
   }, 
   { 
    path: "/about", 
    element: <AboutPage />, 
  },
  { 
    path: "/login", 
    element: <Login/>, 
  }, 
  { 
    path: "/signup", 
    element: <Signup/>, 
  }, 
  { 
    path: "/profile", 
    element: <Protected><Profile/></Protected>, 
  }, 
  { 
    path: "/dash", 
    element: <Protected><UserDashboardPage/></Protected>, 
  }, 
 ]) 
  
 const App = () => { 
   return ( 
       <RouterProvider router={router} /> 
   ) 
 } 
  
 export default App