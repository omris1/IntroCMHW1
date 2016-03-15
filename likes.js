var music = [];
function like(){
	
	FB.api('/me/music', function(response){
	for(var k=0; k<response.data.length; k++){
             // Do some stuff with the data
//           document.getElementById('music').innerHTML =
//        'music you like, ' + response.music + '!'; 
    music.push(response.data[k]);
              
   //            document.getElementById("status").innerHTML = music[k];
//$.get('http://developer.echonest.com/api/v4/artist/suggest?api_key=WIMBATM4FSS9PBEVB&name=coldplay&results=100', function(responseText) {
//    console.log(responseText);
//});
    }

	// console.log(response)});
}    
//  FB.api('/me','GET',{"fields":"id,name,context"},
// function(response) {
      // Insert your code here
//console.log(response);
  


