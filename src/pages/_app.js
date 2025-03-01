import '../assets/css/io.css'
import '../assets/css/colors/default.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/materialdesignicons.min.css'
import '../assets/css/style.css'
import Navbar from './components/nav'
import Footer from './components/footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  // if (typeof window !== "undefined") {
  //   window.addEventListener("keydown", (event) => {
  //     if (
  //       (event.ctrlKey && event.shiftKey && event.keyCode === 73) ||
  //       (event.ctrlKey && event.keyCode === 85)
  //     ) {
  //       event.preventDefault();
  //       toast.error('Unauthorized Action !', {
  //         position: "bottom-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         });
  //     }
  //   });
  //   window.addEventListener("contextmenu", (event) => {
  //     event.preventDefault();
  //   });
  // }
  
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />

    <ToastContainer
          position="top-right"
          autoClose={1500}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
  </>
  )
}
