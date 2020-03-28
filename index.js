function mondayWork(string = "go to the office") {
  return `This Monday, I will ${string}.`
}

function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`
}

function wrapAdjective(punc = "*") {
  return function (string = "special") {
    return `You are ${punc}${string}${punc}!`
  }
}


const Calculator = {
  add: function(a, b){
    return a+b
  },
  subtract: function(a, b){
    return a-b
  },
  multiply: function(a, b){
    return a*b
  },
  divide: function(a, b){
    return a/b
  }
}

function actionApplyer(int, arr) {
  let sp = int
  for (let i=0; i<arr.length; i++){
    sp = arr[i](sp)
  }
  return sp
}