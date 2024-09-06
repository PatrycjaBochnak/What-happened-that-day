import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      {/* Fixed navbar */}
      <div className="fixed w-full z-50">
        <Nav />
      </div>

      {/* Main content with padding */}
      <div className="pt-20">{children}</div>

      {/* Footer */}
      <Footer />
    </>
  );
};
