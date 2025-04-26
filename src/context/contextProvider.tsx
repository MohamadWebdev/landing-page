import { createContext, useContext, useState } from "react";


export const Context = createContext({});

export const UseContext = () => useContext(Context);

const Provider = ({ children }: React.PropsWithChildren<{}>) => {
  const [toggle, setToggle] = useState(false)

  return (
    <Context.Provider value={{toggle, setToggle}}>
      {children}
    </Context.Provider>
  );
};

export default Provider;