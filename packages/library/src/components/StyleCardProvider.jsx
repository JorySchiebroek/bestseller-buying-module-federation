import React from "react";

import { createContext } from "react";

const StyleCardContext = createContext({ openStyleNumber: undefined, setOpenStyleNumber: (newStyleNumber) => undefined });

// const useStyleCard = () => {
//   const context = useContext(StyleCardContext);
//   if (!context) new Error("useStyleCard must be used within a StyleCardProvider");
//   return context;
// };

// const StyleCardProvider = ({ children }) => {
//   const [openStyleNumber, setOpenStyleNumberRaw] = useState();

//   const setOpenStyleNumber = (styleNumber) => {
//     console.log('StyleCardProvider says hello!');
//     setOpenStyleNumberRaw(styleNumber);
//   };

//   return (
//     <StyleCardContext.Provider value={{ openStyleNumber, setOpenStyleNumber }}>
//       {children}
//     </StyleCardContext.Provider>
//   );
// }

export { StyleCardContext };
