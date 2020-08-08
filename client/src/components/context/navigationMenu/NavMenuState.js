import React, { useReducer } from "react";
import NavMenuContext from "./NavMenuContext";
import NavMenuReducer from "./NavMenuReducer";

const NavMenuState = (props) => {
  const initalState = {
    menuTrigger: false,
    menuCounter: -220,
  };

  const [state, dispatch] = useReducer(NavMenuReducer, initalState);

  return (
    <NavMenuContext.Provider
      value={{
        menuTrigger: state.menuTrigger,
        menuCounter: state.menuCounter,
      }}
    >
      {props.children}
    </NavMenuContext.Provider>
  );
};

export default NavMenuState;
