import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext } from "react";
import docApp from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(docApp)

const AuthProvider = ({children}) => {  
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;