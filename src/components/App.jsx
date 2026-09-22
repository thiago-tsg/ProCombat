import { Routes, Route } from 'react-router-dom';

// components
import Layout from './Layout';
import Header from './Header';
import Main from './main/Main';
import Eventos from './evento/Evento';
import Sobre from './Sobre';
import ButtonWhats from './ButtonWhats';

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
          path="/sobre"
          element={<Sobre />}
        />

      </Route>

    </Routes>
  );
};

export default App;