module.exports = function toReadable (number) {
 number = number.toString();
 if (number === '0') return 'zero';
 let readableNumber;
 if (number.length === 0) { };
 if (number.length === 1) {return readUnits(number[0])};
 if (number.length === 2) {return readTwoNumbers(number) };
 if (number.length === 3) {
	
	const lastTwoNumbers = number.split("").slice(1,3).join("");
	if (number[1] === '0') return readHundreds(number[0]) + readTwoNumbers(lastTwoNumbers);
	return readHundreds(number[0]) + " " + readTwoNumbers(lastTwoNumbers);

 }; 
 return readableNumber; 
}



function readUnits (numb) {
 
 if (numb === '1') return 'one';
 if (numb === '2') return 'two';
 if (numb === '3') return 'three';
 if (numb === '4') return 'four';
 if (numb === '5') return 'five';
 if (numb === '6') return 'six';
 if (numb === '7') return 'seven';
 if (numb === '8') return 'eight';
 if (numb === '9') return 'nine';
}


function readDec (numb) {
 if (numb === '0') return '';
 if (numb === '2') return 'twenty';
 if (numb === '3') return 'thirty';
 if (numb === '4') return 'forty';
 if (numb === '5') return 'fifty';
 if (numb === '6') return 'sixty';
 if (numb === '7') return 'seventy';
 if (numb === '8') return 'eighty';
 if (numb === '9') return 'ninety';
}

function readHundreds (numb) {

 if (numb === '1') return 'one hundred';
 if (numb === '2') return 'two hundred';
 if (numb === '3') return 'three hundred';
 if (numb === '4') return 'four hundred';
 if (numb === '5') return 'five hundred';
 if (numb === '6') return 'six hundred';
 if (numb === '7') return 'seven hundred';
 if (numb === '8') return 'eight hundred';
 if (numb === '9') return 'nine hundred';
}
 

function readTwoNumbers(number) {
 if (number === '10') return 'ten';
 if (number === '11') return 'eleven';
 if (number === '12') return 'twelve';
 if (number === '13') return 'thirteen';
 if (number === '14') return 'fourteen';
 if (number === '15') return 'fifteen';
 if (number === '16') return 'sixteen';
 if (number === '17') return 'seventeen';
 if (number === '18') return 'eighteen';
 if (number === '19') return 'nineteen';
 if (!readUnits(number[1])) return readDec(number[0]);
 if (readUnits(number[1])) return readDec(number[0]) + " " + readUnits(number[1]);
}

