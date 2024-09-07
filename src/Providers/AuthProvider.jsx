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
import useAxiosPublic from '../Hook/useAxiosPublic'; // Import your axios instance

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track errors
  const axiosPublic = useAxiosPublic(); // Axios instance for API requests

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
            setLoading(false);
            return userCredential;
          })
          .catch((error) => {
            console.error('Error updating profile:', error);
            setError(error.message);
            setLoading(false);
            throw error;
          });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        setError(error.message);
        setLoading(false);
        throw error;
      });
  };

  const signInUser = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((signInError) => {
        console.error('Error signing in:', signInError);
        setError(signInError.message);
        // setLoading(false);
        throw signInError;
      });
  };

  const signInWithGoogle = () => {
    // setLoading(true);
    return signInWithPopup(auth, provider)
      .catch((googleSignInError) => {
        console.error('Error signing in with Google:', googleSignInError);
        setError(googleSignInError.message);
        // setLoading(false);
        throw googleSignInError;
      });
  };

  const logOut = () => {
    // setLoading(true);
    return signOut(auth)
      .catch((signOutError) => {
        console.error('Error signing out:', signOutError);
        setError(signOutError.message);
        // setLoading(false);
        throw signOutError;
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('current value of the user', currentUser);
      setUser(currentUser); // Ensure user state is updated with current user data
      setLoading(false);
      
      // JWT Token setup
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token);
            } else {
              localStorage.removeItem('access-token');
            }
            // setLoading(false);
          })
          .catch((tokenError) => {
            console.error('Error obtaining JWT token:', tokenError);
            setError(tokenError.message);
            // setLoading(false);
          });
      }
    });

    return () => unSubscribe();
  }, [axiosPublic]);

  // const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, logOut };
  const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, logOut };
  console.log('username', user);

  return (
    <AuthContext.Provider value={authInfo}>
      {/* {loading ? <p>Loading...</p> : children} */}
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
