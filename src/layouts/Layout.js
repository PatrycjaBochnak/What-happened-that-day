import Nav from "./Nav";
import Footer from "./Footer";

export const Layout = ({children}) => {

  return(
    <div className="App">
      <Nav />

      {children}
      
      <Footer />
    </div>
  )
}