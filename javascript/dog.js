function fetchRandomDogImage(){
    let xhrRequest = new XMLHttpRequest();
    
    xhrRequest.onload = function(){
    let responseJSON = JSON.parse(xhrRequest.response);
    let imageUrl = responseJSON.message;
    $('#dog-image').attr('src', imageUrl);
    };
    
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random' );
    xhrRequest.send();
   
   };
   
   
   
   
   
   $('#fetch-dog-image-button').on('click',fetchRandomDogImage);
$('#fetch-dog-image-button').on('click',function(){
    $('#dog-image').css({
        maxHeight:"550px",
        objectFit:"contain",
        border:"5px solid orange",
        boxShadow:"0.3rem 0.3rem 0.6rem #c8d0e7 , -0.2rem -0.2rem 0.5rem #FFFFFF",
        borderRadius: "5px"
    });
})