primeCheck = function() {

	var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103]
	var finalPrimeList = []
	var count = 0
	var resultFound = false
	var input = document.getElementById("primeNum").value

	while(!isPrime(input)) {
		while(count<primes.length && !resultFound) {
			if (input % primes[count] == 0){
				finalPrimeList.push(primes[count])
				resultFound = true
				input = input/ primes[count]
			}
			count = count + 1
		}
		count = 0
		resultFound = false
	}
	finalPrimeList.push(input)
	document.write(finalPrimeList)
}


var isPrime = function(num) {
	for (i=2; i<num; i++) {
		if ((num % 1) == 0){
			return false
		}
	}
	return true
}