  // This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    //window.location.reload();
    testAPI();
    //like();
  //  music();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

 

  window.fbAsyncInit = function() {
  FB.init({
    // appId      : '986797334734077', // Sindhu ID
    appId      : '240278182982570', // Omri ID

    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

  // Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
  //foundMusic = getLike();
  getLike();
  //getMusic(foundMusic);
}

//  FB.api('/me','GET',{"fields":"id,name,context"},
// function(response) {
      // Insert your code here
//console.log(response);

function getLike(){
  allLiked = [];
  FB.api('/me/music', function(response){
    document.getElementById('music').innerHTML = ('Liked Music: ');
    for(var k=0; k<response.data.length; k++){
      console.log(response.data[k].name);
      //allLiked.push(response.data[k].name);
      document.getElementById('music').innerHTML += (response.data[k].name + '; ');
      }
  })
  //return allLiked();
}

function getMusic(musicList){
    console.log("called getMusic");
    console.log(musicList);
    // $.get('http://developer.echonest.com/api/v4/artist/suggest?api_key=WIMBATM4FSS9PBEVB&name=Coldplay&results=100', function(responseText) {
    //   console.log(responseText);
    // });
}
