import { useRef, createContext, useMemo, useState } from 'react';

export const ControlsContext = createContext(null);

export default function ControlsProvider({ children }) {
  const [dimensions, setDimensions] = useState(false);
  const topRef = useRef();
  const contactRef = useRef();
  const votivesRef = useRef();

  const handleViewTop = () => {
    topRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  const handleVotives = () => {
    votivesRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      votivesRef,
      dimensions,
      handleViewTop,
      handleContact,
      handleOpenModal,
      handleVotives,
    }),
    [topRef, contactRef, votivesRef, dimensions]
  );

  return (
    <ControlsContext.Provider value={controls}>
      {children}
    </ControlsContext.Provider>
  );
}
