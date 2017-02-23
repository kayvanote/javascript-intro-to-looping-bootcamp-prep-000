function forLoop(array) {

  for(var i = 0; i < 25; i++) {
    if(i === 1){ array[i] = "I am 1 strange loop.";}
    else if (i > 1) {array[i] = "I am ${i} strange loops.";}
  }
  return array;
  }




function whileLoop(n) {

  while(n) {
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(array) {
 function maybeTrue() {
   return Math.random() >= 0.5
}
  do {
      array.pop();

  } while(array.length > 0 && Math.random());

  return array;
}
