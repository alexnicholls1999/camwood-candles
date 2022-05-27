import { createContext } from 'react';

export const ContentContext = createContext(null);

export default function ContentProvider({ children, content }) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}
