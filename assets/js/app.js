// running time countDown function
let totalSecond = 1629;

const runningCountDown = () => {
	if(totalSecond == 0) {
		return false;
	}
	// calulate time
	let hour = parseInt( totalSecond/3600 ) % 24;
	let minute = parseInt( totalSecond/60 ) % 60;
	let second = ( totalSecond % 60 );

	let output = (hour < 10 ? '0' + hour : hour) + ":" + (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second);
	document.querySelector('.running').innerHTML = output;
	totalSecond = totalSecond - 1;
}

setInterval( runningCountDown,1000)

// next running time counter function
let time = 6129;
const nextRunningCountDown = () => {
	if(time == 0) {
		return false;
	}
	// calulate time
	let hour = parseInt( time/3600 ) % 24;
	let minute = parseInt( time/60 ) % 60;
	let second = ( time % 60 );

	let output = (hour < 10 ? '0' + hour : hour) + ":" + (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second);
	document.querySelector('.next-run').innerHTML = output;
	time = time - 1;
}

setInterval( nextRunningCountDown,1000)



// PROBLEMS =>
	// have to make it easy to reuse for both of the countDown function
