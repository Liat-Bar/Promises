const btnOneGrabber = document.getElementById("btnOne");
const btnTwoGrabber = document.getElementById("btnTwo");
const btnThreeGrabber = document.getElementById("btnThree");
const btnArray = [btnOneGrabber,btnTwoGrabber,btnThreeGrabber]
function myTimer() {
	const date = new Date();
	console.log(date.toLocaleTimeString());
}
function stopInterval(interval) {
	clearInterval(interval);
}
btnArray.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		let interval = setInterval(myTimer, 1000);
		let num = +prompt("Enter a random number:")
		console.log(num)
		let myPromise = new Promise(function (myResolve, myReject) {
			setTimeout(function () {
				clearInterval(interval);
				myResolve("Charging completed successfully!!!");
			}, num * 1000);
		});
		myPromise.then((value)=> {
			switch (e.target.id) {
				case "btnOne":
					document.getElementById("statusOne").innerHTML = value;
					break;
				case "btnTwo":
					document.getElementById("statusTwo").innerHTML = value;
					break;
				case "btnThree":
					document.getElementById("statusThree").innerHTML = value;
					break;
			
				default:
					break;
			}
		}) 
	})	
});
