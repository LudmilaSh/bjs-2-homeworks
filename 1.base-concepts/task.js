"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b**2) - 4 * a * c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant) ) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant) ) / (2 * a);
    arr = [x1, x2];
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;
		if (isNaN(percent)) {
		return false;
	} else if (isNaN(contribution)) {
		return false;
	} else if (isNaN(amount)) {
		return false;
	} 	
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / (( Math.pow((1 + P), countMonths) - 1))));
  totalAmount = payment * countMonths;
  return Number(totalAmount.toFixed(2));
  
}
