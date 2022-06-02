import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Hamburger from './Components/Atoms/Iconography/Hamburger';
import Menu from './Components/Organisms/Menu';
import { useState } from 'react';
import NotFound from './Pages/404NotFound';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
      </Routes>

      <Hamburger onClick={handleToggleMenu} />
      <Menu show={openMenu} onClose={handleToggleMenu} />
    </>
  );
}

export default App;
