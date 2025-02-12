import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth"
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase/config'; // Ensure you have initialized Firestore and exported `db`

function App() {
  const handleClick = async () => {
    const colRef = collection(db, 'users');
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, "sajithmohanplavalappil@gmail.com", "Mohan1992@");
      console.log("User signed up:", userCredential.user);

      const usersCredential = await signInWithEmailAndPassword(auth,  "sajithmohanplavalappil@gmail.com", "Mohan1992@");
      console.log("User signed in:", usersCredential.user);
      const snapshot = await getDocs(colRef);
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });


    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;