import 'bootstrap/dist/css/bootstrap.min.css';      //adding bootstrap as global css
import '../styles/globals.css';

//Toastify
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
// Import ToastContainer only here, and use toast() anywhere by importing it

//context
import AuthState from "../src/context/AuthState.js";  
// If there is single default element exported, than don't use curly braces {AuthState} while exporting

//Layout
import Header from "../src/layout/header.js";
import Footer from "../src/layout/footer.js";


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthState>
          <ToastContainer position="bottom-right" />
          <Header />
            <Component {...pageProps} />
          <Footer />
      </AuthState>
    </div>
  );
}

export default MyApp;


// The Component prop is the active page, 
// so whenever you navigate between routes, 
// Component will change to the new page. 
// Therefore, any props you send to Component
//  will be received by the page.