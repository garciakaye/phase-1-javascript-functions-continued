function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`;
}

function wrapAdjective(param1 = '*'){
    return function(adj = 'special') {
        return `You are ${param1}${adj}${param1}!`
    }
}


// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"