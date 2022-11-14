import React, { createContext, useContext, useMemo, useState } from 'react';

const LayoutContext = createContext({});

const LayoutProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const value = useMemo(() => ({ toggle, setToggle }), [toggle]);

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext);

export default LayoutProvider;
