// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword , getAuth,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js" ;


const firebaseConfig = {
  apiKey: "AIzaSyA_zsK4L-T4gwmeVUhStrQZJieMbp4YCzs",
  authDomain: "threadapplication2023.firebaseapp.com",
  projectId: "threadapplication2023",
  storageBucket: "threadapplication2023.appspot.com",
  messagingSenderId: "673457409812",
  appId: "1:673457409812:web:f110cd8fd924472a487c01",
  measurementId: "G-JV8MKW86XW"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let l_main=document.getElementById('l-main')
l_main.style.display="none"


let mainbox =document.getElementById('mainbox')
let login_link =document.getElementById('login-link')

login_link.addEventListener('click',function(){
    mainbox.style.display="none";
l_main.style.display="block"


})



let myBtn =document.getElementById('btn')
myBtn.addEventListener('click',function(){
    console.log("hi")
 



    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
       console.log("The ID is ",uid)
          // ...
        } else {
          // User is signed out
          // ...
       console.log("signed ouu")

        }
      });

    l_main.style.display="block"


    mainbox.style.display="none";

    
    
    
    let email =document.getElementById('email').value
    let password =document.getElementById('password').value
    
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
        alert("Good Command")
        

    })
    .catch((error) => {
        const errorCode = error.code;
        
        const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    alert("Error Occured! "+errorMessage)
  });

  
})
  


let btn_l_in =document.getElementById('btn-l-in')
btn_l_in.addEventListener('click',function(){
    
    let l_email =document.getElementById('l-email').value
    let l_pass =document.getElementById('l-pass').value
    
    
    signInWithEmailAndPassword(auth, l_email, l_pass)
      .then((userCredential) => {
        const user = userCredential.user;
    console.log(user.email)
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
})







// let a = document.getElementById("write")

// let sab =document.getElementById('sab')
// sab.style.backgroundColor='pink'

// document.body.appendChild(sab)

// // Step 1: Create a new div element
// const newDiv = document.createElement('div');

// // Step 2 (optional): Add content or attributes to the div
// newDiv.textContent = 'This is a new div created with JavaScript.';
// newDiv.style.backgroundColor = 'lightblue';
// newDiv.style.padding = '10px';

// // Step 3: Append the div element to the document body
// document.body.appendChild(newDiv);




// const newBox = document.createElement('p')

// newBox.style.backgroundColor='lightpink';
// newBox.textContent='Heloo chacha';

// document.body.appendChild(newBox)



        //  const createDivButton = document.getElementById('createDivButton');
        // const divContainer = document.getElementById('divContainer');

        // let divCount = 0;
        // createDivButton.style.float='right'
        // createDivButton.addEventListener('click', function() {
        //     // Step 1: Create a new div element
        //     const newDiv = document.createElement('div');



        //     // Step 2: Set content for the new div
        //     newDiv.textContent = `This is div number ${divCount + 1}.`;

        //     // Step 3: Append the new div to the container
        //     divContainer.appendChild(newDiv);

        //     // Step 4: Increase the divCount for the next div
        //     divCount++;
        // });
 


         let mainbody=document.getElementById('main-body')

         let login= document.getElementById('btn-l-in')

         mainbody.style.display="none";
 

         login.addEventListener('click',function(){
    
                

         if(mainbody.style.display="none")

         {
             mainbody.style.display="block";

        }

    })


    //let link = document.getElementById('login-link')

    //link.addEventListener('click', function(){

    //})






     
