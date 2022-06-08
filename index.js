function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun(Daven);

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}
mondayWork("run");

function wrapAdjective(flair = "*"){
    return function(emphatic = "special"){
        return `You are ${flair}${emphatic}${flair}!`
    }
    };
    const encouragingPromptFunction = wrapAdjective("!!!");