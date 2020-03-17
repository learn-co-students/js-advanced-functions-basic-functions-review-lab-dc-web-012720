// Your code here

function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective( wrapAroundChar = '*' ){
  return function(adjective = "special"){
    return `You are ${wrapAroundChar}${adjective}${wrapAroundChar}!`
  }
}

const Calculator = {
  add: function(a,b) {return a + b},
  subtract: function(a,b) {return a - b},
  multiply: function(a,b) {return a * b},
  divide: function(a,b) {return a / b}
}

function actionApplyer(startInt, arr_of_fn){
  let a = startInt
  if (arr_of_fn.length === 0){
    return a
  } else {
    for (let i = 0; i < arr_of_fn.length; i++){
      a = arr_of_fn[i](a)
    }
    return a
  }
}