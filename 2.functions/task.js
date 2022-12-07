function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((currentValue, currentIndex) => currentValue + currentIndex, 0);
  let avg = (sum / arr.length).toFixed(2);
  

  return { min: min, max: max, avg: Number(avg) };
}

function summElementsWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  let sum = arr.reduce((currentValue, currentIndex) => currentValue + currentIndex, 0);

  return sum;

}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = Math.abs(max - min);

  return difference;


}

function differenceEvenOddWorker(...arr) {
  // let EvenElement = arr.filter(elem => elem % 2 ===0);
  // let OddElement = arr.filter(elem => elem % 2 !== 0);
  if (arr.length == 0){
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i=0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        sumEvenElement += arr[i];
    } else if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    }
  }
  let difference;

    return difference = sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      countEvenElement += 1;
      sumEvenElement += arr[i];
    }
  }
  let average = sumEvenElement / countEvenElement;
  return average;

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
      const result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) {
          maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
  

}
