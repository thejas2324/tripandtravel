import "../index.css";
import HolidayHome from "../Component/Holiday_COMPONENTS/Home/HolidayHome";
import Maincontent from "../Component/Main_content/Main_content";
import Footer from "../Component/footer/Footer";
import CorporateTravel from "../Component/Holiday_COMPONENTS/CorporateTravel";
import { Routes, Route, Navigate } from "react-router-dom";
import CarHome from "../Component/Car_components/Home/CarHome";
import About from "../Component/About/About";
import NotFound from "../Component/NotFound/Car_NotFound";
import Loginpage from "../Component/Login/RegisterPage";
import Signup from "../Component/Login/Login";
import From from "../From";
import CustomizedHolidays from "../Component/Holiday_COMPONENTS/CustomizedHolidays";
import CabSelections from "../Component/Car_components/CabSelections";
import Booking from "../Component/Car_components/Booking";
import Contactus from "../Component/Main_content/Contact_us";
import Navbar from "../Component/Navbar/Navbar";
import Parvicypolicy from "../Component/Policypages/Parvicypolicy";
import TermsConditions from "../Component/Policypages/TermsConditions";
import ProtectedRoute from "../routers/ProtectedRoute";
import { useAuth } from "../Component/AuthContext/AuthContext";
import PackPage from "../Component/Holiday_COMPONENTS/packages";
import PackageHome from "../Component/Holiday_COMPONENTS/packagehome";
import BookingDetails from "../Component/Holiday_COMPONENTS/Bookingdetails";
import Profile from "../Component/ProfilePage/Profile";
import BookingProfile from "../Component/ProfilePage/Cabprofile";
// import UpComingBookingProfile from "../Component/ProfilePage/Upcomingprofile";
import Whatsapp from "../Component/icons/whatsapp";
import PackageBooking from "../Component/ProfilePage/Packagebooking";

const Routers = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />

      <Whatsapp/>
      <Routes>
        <Route path="/" element={<Maincontent />} />
        <Route path="/HoldayHome" element={<HolidayHome />} />
        <Route path="/CarHome" element={<CarHome />} />
        <Route path="/About" element={<About />} />
        <Route path="/RegisterPage" element={<Loginpage />} />
        <Route
          path="/LogIn"
          element={user === null ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/CorporateTravel" element={<CorporateTravel />} />

        <Route path="/From" element={<From />} />
        <Route path="/CustomizedHolidays" element={<CustomizedHolidays />} />

        <Route path="/packagehome" element={<PackageHome />} />

        <Route path="/select-cabs/:tripType" element={<CabSelections />} />
        <Route
          path="/select-cabs/:tripType/:id"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cabprofile" element={<BookingProfile />} />
        <Route path="/packageprofile" element={<PackageBooking />} />
        <Route path="/Parvicypolicy" element={<Parvicypolicy />} />
        <Route path="/Terms&Conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/packages/:id/:slug" element={ <PackPage />}
          //element={user != null ? <PackPage /> : <Signup />}
        />

        <Route path="/Bookingdetails/:id" element={user != null ? <BookingDetails /> : <Signup />} />

        <Route path="/packagehome/:destinationName" element={<PackageHome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routers;
