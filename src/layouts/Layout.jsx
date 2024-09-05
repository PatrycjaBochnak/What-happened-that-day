import Nav from "../components/Nav"
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
  return ( 
    <div>
      <Nav />
    <div className="pt-16">
      {children}
      </div>
      <Footer />
    </div>
  );
};
