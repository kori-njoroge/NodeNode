console.log('Hey Maahn everything will be fine')

var time = 0;
  /// sets of global variables
setTimeout(function(){
    console.log('3 seconds passed')
},3000)


 var timer  =setInterval(() => {
    time +=2;
    console.log(time + ' seconds have passsed')
    if(time >10){
        clearInterval(timer)
    }
}, 2000);


// node tells us of the directory we aare in as well as the fine 

console.log(__dirname)
console.log(__filename)


