
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        signInWithPopup,
        GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

import { firebaseConfig } from "./firebase-config";

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




/* === UI === */

/* == UI - Elements == */

const signOutButtonEl = document.getElementById("sign-out-btn")
signOutButtonEl.addEventListener("click", authSignOut)

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")



// const imgElement = document.getElementById("user-profile-picture")

// const greetElement = document.getElementById("greeting")

// const textareaEl = document.getElementById("post-input")
// const postButtonEl = document.getElementById("post-btn")

/* == UI - Event Listeners == */


signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)





/* === Main Code === */
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        user.getIdToken().then(function(idToken) {
            // The ID token you need
            console.log(idToken);
            // Send the ID token to your server, etc.
        });
        
        showLoggedInView(user)
        showProfilePicture(imgElement, user)
        showUserGreeting(greetElement, user)
      // ...
    } else {
        showLoggedOutView()
    }
  });
  


/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithEmail() {
    console.log("Sign in with email and password")

    const email = emailInputEl.value
    const password = passwordInputEl.value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User signed in: ", user)
            clearAuthFields()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing in: ", errorMessage)
        });
}

function authCreateAccountWithEmail() {
    console.log('creating account...')
    const email = emailInputEl.value
    const password = passwordInputEl.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User created: ", user)
            clearAuthFields()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error creating user: ", errorMessage)
        });

}

function authSignOut() {
    console.log("User signed out")
    signOut(auth).then(() => {
        console.log("User signed out")
      }).catch((error) => {
        console.error(error.message)
      });
}


/* == Functions - UI Functions == */

function showLoggedOutView() {
    console.log("Show logged out view")
}

function showLoggedInView(user) {
    console.log("Show logged in view")
    console.log(user.uid)
    window.location.href = '/dashboard';

    
}


function clearInputField(field) {
	field.value = ""
}

function clearAuthFields() {
	clearInputField(emailInputEl)
	clearInputField(passwordInputEl)
}


