// function namPoreDibo(){
//     let math_box = Math.random();
//     let result= (math_box * 5)+1;
//     result= Math.trunc(result);                //function work for 1st dice
//     luddo_dice_1.innerText= result;
//     console.log('dice 1 '+result);
//     return result;
// }

// function namPoreDibo2(){
//     let math_box = Math.random();
//     let result= (math_box * 5)+1;
//     result= Math.trunc(result);          //fucntion work for 2nd dice
//     luddo_dice_2.innerText= result;
    
//     console.log('dice 2 '+result);
//     return result;
// }

function CalculateRandom(htmlElement) {
    let math_box = Math.random();
    let result= (math_box * 5)+1;
    result= Math.trunc(result);          //fucntion work for 2nd dice
    htmlElement.innerText= result;
    
    console.log(htmlElement + result);
    return result;
}

const luddo_dice_1 = document.getElementById('luddo_dice');

luddo_dice_1.addEventListener('keyup', CalculateRandom);
// document.addEventListener('keyup',namPoreDibo);    //for first dice

// document.addEventListener('keyup', CalculateRandom);    //for first dice

const luddo_dice_2 = document.getElementById('luddo_dice2');
// document.addEventListener('keyup',namPoreDibo2);
// document.addEventListener('keyup',CalculateRandom);
// luddo_dice_2.addEventListener('click',namPoreDibo2);   //for 2nd dice


const outcome_box = document.getElementById('final_outcome_box');
document.addEventListener('keyup',Sum_of_dices);


let final_result;
console.log('FR   '+final_result);
function Sum_of_dices(){

    // final_result = [namPoreDibo2(),namPoreDibo()];
    final_result = [CalculateRandom(luddo_dice_1),CalculateRandom(luddo_dice_2)];
    final_result = final_result[0] + final_result[1];
    console.log('hello' + final_result[0]);
    outcome_box.innerText=final_result;
   
}

