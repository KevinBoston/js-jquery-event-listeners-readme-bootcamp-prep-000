//define functions here
function getIt (){
  return $(document).on('click', function(){
    alert('Hey!');
  } );
}
function frameIt(){
  return $(document).on('load', function(){
    
  });
}
$(document).ready(function(){

// call functions here
getIt();

});
