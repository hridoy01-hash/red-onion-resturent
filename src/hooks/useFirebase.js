import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import {getAuth,signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";


initializeAuthentication();
const useFirebase =()=>{
    const [user,setUser] = useState({});
    const [password,setPassword] = useState({});
    const [email,setEmail] = useState({});
    const [name,setName] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    //google Signin
    const sighInWithGoogle=()=>{
      return  signInWithPopup(auth,googleProvider);
       /*  .then(result =>{
            setUser(result.user);
        })  */  

    }

    //github Signin

    const githubSignin =()=>{
        signInWithPopup(auth, githubProvider)
       .then((result) => {
       setUser(result.user)
  })
    }
  
    //make new user
    const handlePassword =(e)=>{
       
        setPassword(e.target.value);

    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleName =(e)=>{
        setName(e.target.value);
    }

    const handleRegister=()=>{
        createUserWithEmailAndPassword(auth, email, password,name)
        .then((result) => {
        const user = result.user;
        // return user; 
        console.log(user);
  });
              
    }

    //handle login
   
    const handleLogin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
     
       const user = userCredential.user;
       console.log(user);
  })
    }

    //manage user state change
    useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
       if (user) {
           setUser(user);
       }else{
           setUser({});
       }
   })
    },[]);
   
    //Logut
    const logout =()=>{
        signOut(auth)
        .then(() => {
            setUser({});
          })
    }


    return {
        user,
        sighInWithGoogle,
        logout,
        githubSignin,
        handlePassword,
        handleEmail,
        handleRegister,
        handleName,
        handleLogin,

    }


}
export default useFirebase;