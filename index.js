// Your code here
function saturdayFun(activity= 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
saturdayFun("bathe my dog")

function mondayWork(activity= 'go to the office') {
    return `This Monday, I will ${activity}.`
}
mondayWork()
mondayWork("work from home")

function wrapAdjective(flair= '*') {
    // let result = wrapAdjective()
    // let emphatic = result()
    return function (adjective= "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b
    },

    subtract: function(a, b) {
        return a - b 
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }