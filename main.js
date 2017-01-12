$('form').submit((e) => {
  var email =  $('input[type="email"]').val()
  // set to h1
  $('.main-page h1').text(`Welcome ${email}`)
  $('.login-page').addClass('hidden')
  $('.main-page').removeClass('hidden')
  e.preventDefault()

})
  firebase.initializeApp({
    apiKey: "AIzaSyD2NMaJ5Is0KaIFXPuR50bo7qB320cmWMM",
    authDomain: "fir-auto-ai.firebaseapp.com",
    databaseURL: "https://fir-auto-ai.firebaseio.com",
    storageBucket: "fir-auto-ai.appspot.com",
    messagingSenderId: "781941044326"
  });

$('form').submit((e) => {
  var email = $('input[type="email"]').val()
  var password =  $('input[type="password"]').val()

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
        $('.main-page h1').text(`Welcome ${email}`)
        $('.login-page').addClass('hidden')
        $('.main-page').removeClass('hidden')
  })

  e.preventDefault()
})
