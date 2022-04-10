let fajr = document.querySelector('.fajrTime')
let dhuhr = document.querySelector('.dhuhrTime')
let asr = document.querySelector('.asrTime')
let maghrib = document.querySelector('.maghribTime')
let isha = document.querySelector('.ishaTime')
let sunrise = document.querySelector('.sunrise')
let sunset = document.querySelector('.sunset')
//buttons
let dhaka = document.querySelector('.dhaka')
let saudi = document.querySelector('.saudi')
let dubai = document.querySelector('.dubai')
let london = document.querySelector('.london')

let display = document.querySelector('h2')
// input
let userDate = document.querySelector('.date')
let date = new Date()
let address = 'dhaka'
// event listening
userDate.addEventListener('input', () => {
	date = userDate.value
	fetching()
	display.innerHTML = 'Results for ' + address
})
dhaka.addEventListener('click', () => {
	address = 'Dhaka'
	fetching()
	display.innerHTML = 'Results for Dhaka'
})
saudi.addEventListener('click', () => {
	address = 'Saudi'
	fetching()
	display.innerHTML = 'Results for Saudi Arab'
})
dubai.addEventListener('click', () => {
	address = 'Dubai'
	fetching()
	display.innerHTML = 'Results for Dubai'
})
london.addEventListener('click', () => {
	address = 'London'
	fetching()
	display.innerHTML = 'Results for London'
})

function fetching() {
	fetch(`https://api.aladhan.com/v1/timingsByAddress/${date}?address=${address},UAE&method=8`)
	.then(response => response.json())
	.then(data => {
		fajr.innerHTML = data.data.timings.Fajr;
		dhuhr.innerHTML = data.data.timings.Dhuhr;
		asr.innerHTML = data.data.timings.Asr;
		maghrib.innerHTML = data.data.timings.Maghrib;
		isha.innerHTML = data.data.timings.Isha;
		sunrise.innerHTML = data.data.timings.Sunrise;
		sunset.innerHTML = data.data.timings.Sunset;
	})
}
fetching()
if (userDate.value === '') {
	display.innerHTML = 'Results for Dhaka'
	address = 'dhaka'
}
