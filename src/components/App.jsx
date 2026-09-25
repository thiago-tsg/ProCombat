import { Routes, Route } from 'react-router-dom';

// components
import Layout from './Layout';
import Header from './Header';
import Main from './main/Main';
import Eventos from './evento/Evento';
import Sobre from './Sobre';
import ButtonWhats from './ButtonWhats';
import Admin from './admin/Admin';
import Cadastro from '../pages/cadastro/Cadastro';
import Login from '../pages/login/Login';
import CompletarCadastro from '../pages/completar-cadastro/CompletarCadastro';
import Perfil from '../pages/perfil/Perfil';


const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <ButtonWhats />
    </>
  );
};


const App = () => {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/eventos"
          element={<Eventos />}
        />

        <Route
          path="/eventos/:id"
          element={<Eventos />}
        />

        <Route
          path="/sobre"
          element={<Sobre />}
        />

        <Route
          path="/perfil"
          element={<Perfil />}
        />

      </Route>


      <Route
        path="/admin"
        element={<Admin />}
      />

      <Route
        path="/cadastro"
        element={<Cadastro />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/completar-cadastro"
        element={<CompletarCadastro />}
      />

    </Routes>
  );
};


export default App;