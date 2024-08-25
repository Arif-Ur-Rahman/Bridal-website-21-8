import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    GoogleAuthProvider
  } from 'firebase/auth';
  import PropTypes from 'prop-types';
  import { createContext, useEffect, useState } from 'react';
  import auth from '../firebase/firebase.config'; // Ensure this path is correct
  
  export const AuthContext = createContext(null);
  const provider = new GoogleAuthProvider();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (name, photoURL, email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          return updateProfile(userCredential.user, {
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            setUser({ ...userCredential.user, displayName: name, photoURL: photoURL }); // Manually update the state
            return userCredential;
          })
          .catch((error) => {
            console.error('Error updating profile:', error);
            throw error;
          });
        })
        .catch((error) => {
          console.error('Error creating user:', error);
          throw error;
        });
    };
  
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log('current value of the user', currentUser);
          setUser(currentUser); // Ensure user state is updated with current user data
          setLoading(false);
        });
        return () => unSubscribe();
      }, []);
      
  
    const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, logOut };
    console.log('username', user);
  
    return (
      <AuthContext.Provider value={authInfo}>
        {loading ? <p>Loading...</p> : children}
      </AuthContext.Provider>
    );
  };
  
  AuthProvider.propTypes = {
    children: PropTypes.node,
  };
  
  export default AuthProvider;
  