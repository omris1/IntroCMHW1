var music = [];
function getLike(){
	FB.api('/me/music', function(response){
	for(var k=0; k<response.data.length; k++){
    music.push(response.data[k]);
    }
})
}
//  FB.api('/me','GET',{"fields":"id,name,context"},
// function(response) {
      // Insert your code here
//console.log(response);
  
   //            document.getElementById("status").innerHTML = music[k];
//$.get('http://developer.echonest.com/api/v4/artist/suggest?api_key=WIMBATM4FSS9PBEVB&name=coldplay&results=100', function(responseText) {
//    console.log(responseText);
//});

