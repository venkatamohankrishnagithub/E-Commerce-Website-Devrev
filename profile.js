const firebaseConfig = {
    apiKey: "AIzaSyDYKQoGlfAnKM6zu02chkET04-niLIljpc",
    authDomain: "contactform-ecommerce.firebaseapp.com",
    databaseURL: "https://contactform-ecommerce-default-rtdb.firebaseio.com",
    projectId: "contactform-ecommerce",
    storageBucket: "contactform-ecommerce.appspot.com",
    messagingSenderId: "968751963901",
    appId: "1:968751963901:web:39f3c2151481af852ce894"
  };

  //initialize fire base
  firebase.initializeApp(firebaseConfig);

  //reference
  var firestore = firebase.firestore()

  const db=firestore.collection("profileForm")

  let submitButton = document.getElementById("submit")

  submitButton.addEventListener("click", (e) =>{
    e.preventDefault();
    let name=document.getElementById("name").value
    let nick_name=document.getElementById("nick_name").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let age=document.getElementById("age").value
    let phone=document.getElementById("phone").value
    let profession=document.getElementById("profession").value

    db.doc().set({
      name: name,
      nick_name: nick_name,
      email: email,
      dob: dob,
      age: age,
      phone: phone,
      profession: profession

    }).then( () => {
        console.log("Data Saved")
    }).catch((error) => {
        console.log(error)
    })
  })


/*
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgcontent = getElementVal("msgcontent");

    console.log(name, emailid, msgcontent);
  }

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };*/