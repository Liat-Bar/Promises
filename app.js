const btnOneGrabber= document.getElementById("btnOne");
const btnTwoGrabber= document.getElementById("btnTwo");
const btnThreeGrabber= document.getElementById("btnThree");

btnOneGrabber.addEventListener("click",()=>{
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("Charging completed successfully!!!"); }, 3000);
      });
      
      myPromise.then(function(value) {
        document.getElementById("statusOne").innerHTML = value;
        setInterval(myTimer, 1000);
        function myTimer() {
          const date = new Date();
         console.log(date.toLocaleTimeString())
        };
      }); 
})


btnTwoGrabber.addEventListener("click",()=>{
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() {myResolve("Charging completed successfully!!!")}, 5000);
      });
      
      myPromise.then(function(value) {
        document.getElementById("statusTwo").innerHTML = value;
      })
      const myInterval = setInterval(myTimer, 1000);
      function myTimer() {
        const date = new Date();
        console.log(date.toLocaleTimeString())
      }
function stopInterval(){
  clearInterval(myInterval);
}

})

btnThreeGrabber.addEventListener("click",()=>{
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("Charging completed successfully!!!"); }, 10000);
      });
      
      myPromise.then(function(value) {
        document.getElementById("statusThree").innerHTML = value;
      })
      setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  console.log(date.toLocaleTimeString())
}
})