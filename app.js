  var btn = document.getElementById("btn");
  var audio = document.getElementById("myAudio")
  var music = document.getElementById("music")
  var range = document.getElementById("range");
  var ms = document.getElementById('ms')
  var stop = document.getElementById("stop");
   range.addEventListener('input',function(){
          if(this.value < 40){
            audio.volume = 0.2;
            console.log('low')
        } 
          else if(this.value > 60){
            audio.volume = 1.0;
        }
          if(this.value == 0){
            audio.volume = 0.0;
            console.log('silent')
        }
           if(this.value == 50){
           audio.volume = 0.4;
        }
    });

  btn.addEventListener("click",function(){
    audio.play();
  })
  audio.addEventListener("timeupdate",function(){
    timer();
  })
  function timer(){
    var x = Math.floor(audio.currentTime * (100/audio.duration)) 
    ms.innerHTML = x +  "%";
    ms.value = x;
    ms.innerHTML = ms ;   
  }
  stop.addEventListener("click",function(){
    audio.pause();
  })
