import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import authInitialization from "../firebase/firebase.init";
authInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;

            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false)

        })
    }, []);

    const logout = () => {
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        })
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        signInUsingGoogle,
        logout,
        setIsLoading,
        isLoading
    }
}
export default useFirebase;