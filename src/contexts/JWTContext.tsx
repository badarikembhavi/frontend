import { createContext, ReactElement, useEffect } from "react";
import { JWTContextType } from "../types/auth";
import axios from '../utils/axios'


const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({children}: {children: ReactElement}) => {

const SetPassword = async (data: any) => {
  const response = await axios.post('account/set-password', data);
    return response.data;
};

return (
    <JWTContext.Provider value={{
        SetPassword
    }}>
        {children}
    </JWTContext.Provider>
)
}
export default JWTContext;