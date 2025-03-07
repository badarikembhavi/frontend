import { useContext } from "react";
import JWTContext from "../contexts/JWTContext";

const useAuth = () => {
    const context = useContext(JWTContext);

    if(!context) throw new Error ('context must be inside provider')
    return context;
}
export default useAuth;