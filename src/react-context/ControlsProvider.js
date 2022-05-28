import { useRef, createContext, useMemo } from 'react';

export const ControlsContext = createContext(null);

export default function ControlsProvider({ children }) {
  const topRef = useRef();
  const contactRef = useRef();

  const handleViewTop = () => {
    topRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  const handleContact = () => {
    contactRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  const controls = useMemo(
    () => ({
      topRef,
      contactRef,
      handleViewTop,
      handleContact,
    }),
    [topRef, contactRef]
  );

  return (
    <ControlsContext.Provider value={controls}>
      {children}
    </ControlsContext.Provider>
  );
}
