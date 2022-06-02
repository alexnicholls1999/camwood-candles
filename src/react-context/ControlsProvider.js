import { useRef, createContext, useMemo, useState } from 'react';
import Menu from '../Components/Organisms/Menu';

export const ControlsContext = createContext(null);

export default function ControlsProvider({ children }) {
  const [dimensions, setDimensions] = useState(false);
  const topRef = useRef();
  const contactRef = useRef();

  const handleViewTop = () => {
    topRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  const handleContact = () => {
    contactRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  const handleOpenModal = () => {
    setDimensions(!dimensions);
  };

  const controls = useMemo(
    () => ({
      topRef,
      contactRef,
      dimensions,
      handleViewTop,
      handleContact,
      handleOpenModal,
    }),
    [topRef, contactRef, dimensions]
  );

  return (
    <ControlsContext.Provider value={controls}>
      {children}
    </ControlsContext.Provider>
  );
}
