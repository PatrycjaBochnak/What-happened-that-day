import Nav from "../components/Nav"
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
  return ( 
    <div className="App">
      <Nav />

      {children}

      <Footer />
    </div>
  );
};
