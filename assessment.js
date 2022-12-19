// Write your solutions here:

function frequency(arr, value) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            count += 1;
        }
    }
    return count;
}

function flipCase(str, letter) {
    return str.split('').map(l => {
      if(l.toLowerCase() === letter || l.toUpperCase() === letter){
        if(/^[A-Z]*$/.test(l)){
          l = l.toLowerCase();
        } else {
          l = l.toUpperCase();
        }   
        
      }
      return l
    }).join('');
}

function multiplyEvenNumbers(arr) {
    return arr.reduce((acc, curr) => curr % 2 === 0 ? acc * curr : acc)
}

function mode(arr) {

    const obj = {};

    arr.forEach(number => {
   
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    });
    
    let highestValue = 0;
    let highestValueKey = -Infinity;
  
    for (let key in obj) {
      const value = obj[key];
      if (value > highestValue) {
        highestValue = value;
        highestValueKey = key;
      }
    }

    return Number(highestValueKey);
}

function capitalizeWords(str) {
    let arr = str.split(' ');
    return arr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')   
}

function compact(arr) {
    return arr.filter(Boolean)
}

function partition(arr, cb) {
    function not(cb) {
      return function(n) {
        return !cb(n);
      }
    }
    return [arr.filter(cb), arr.filter(not(cb))]
}

function intersection(array1, array2) {
  return array1.filter(element => array2.includes(element))
}

/** BONUS PROBLEMS BELOW */

//const flip = fn => (...args) => fn(...args.reverse());

function flip(fn){
  return (...args) => fn(...args.reverse())
}

function once(fn) {  
  let run = true;
  return function(...args) {
      if (run) {
        run = false;
        return fn(...args);
      }
  };

}
