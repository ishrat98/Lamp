var massJohn = prompt('What is the mass of John?');
var heightJohn = prompt('Enter the height of John(in metre)');

var massMark = prompt('What is the mass of Mark?');
var heightMark = prompt('Enter the height of Mark(in metre)');

var BMI_John; var BMI_Mark;

BMI_John = massJohn/(heightJohn*heightJohn);

BMI_Mark = massMark/(heightMark*heightMark);

/*if(BMI_Mark>BMI_John)
console.log('')
*/

var IsMarkHasHigherBMI= BMI_Mark > BMI_John;
console.log('Mark has higher BMI than john- the statement is '+ IsMarkHasHigherBMI);
