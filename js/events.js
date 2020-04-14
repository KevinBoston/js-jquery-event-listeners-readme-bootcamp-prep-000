//define functions here
function getIt (){
  return $(document).on('click', function(){
    alert('Hey!');
  } );
}
function frameIt(){
  return $('img').on('load', function(){
    $('img').append('class=tasty');
  });
}
function pressIt(){
  return $(document).on('keydown', function(){
    
  });
}
$(document).ready(function(){

// call functions here
getIt();

});
