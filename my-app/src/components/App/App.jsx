//css
import "./App.css";
//components
import Header from "../Header/Header.jsx";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
//modals
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        {/* <Main />
        <Footer /> */}
      </div>
      {/* <RegisterModal />
      <LoginModal /> */}
    </div>
  );
}

export default App;
