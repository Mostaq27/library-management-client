import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //password create user  
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //password login

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout 

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //google login 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    //current user loader
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);

            // get and set token
           
            setLoading(false)

            if (currentUser) {
                axios.post('https://library-management-system-server-bay.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('https://library-management-system-server-bay.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }


        })
        return () => {
            return unsubscribe();
        }

    }, [])

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;