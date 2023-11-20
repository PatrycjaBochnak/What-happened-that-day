import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="App">
      <Nav />

      {children}

      <Footer />
    </div>
  );
};
