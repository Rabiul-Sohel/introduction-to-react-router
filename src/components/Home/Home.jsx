import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";





const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <NavBar />
      {navigation.state === "loading" ? "Loading...." : <Outlet />}

      <Footer />
    </div>
  );
};

export default Home;