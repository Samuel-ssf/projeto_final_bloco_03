import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListarCategorias from "./components/categorias/listacategoria/ListaCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col min-h-[64vh] bg-gray-200 ">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App