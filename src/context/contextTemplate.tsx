import { createContext, FC } from "react";

export const ContextTemplate = createContext({
  updateState: () => {},
});
const ContextTemplateProvider: FC<any> = ({children}) => {
  const updateState = () => {
    //
    console.log('updateState')
  };
  return (
    <ContextTemplate.Provider value={{ updateState }}>
      {children}
    </ContextTemplate.Provider>
  );
};
export default ContextTemplateProvider;
