import { Home } from "../Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import  Todos  from "../TodoCompo/Todos";
import { SideBar } from "../SideBar/SideBar";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

const AppRouter = () => {
  return (
    <div className="app-router">
      <BrowserRouter>
        <Header />
        <SideBar />
        <section className="the-main">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/todos" element={<Todos />}></Route>
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
