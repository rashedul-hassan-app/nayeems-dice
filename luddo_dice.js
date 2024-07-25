function namPoreDibo() {
	luddo_dice_1.innerText = '';
	let math_box = Math.random();
	let result = math_box * 5 + 1;
	result = Math.trunc(result); //function work for 1st dice
	setTimeout(() => {
		luddo_dice_1.innerText = result;
	}, 1000);
	// console.log('dice 1 '+result);
	return result;
}

function namPoreDibo2() {
	luddo_dice_2.innerText = '';
	let math_box = Math.random();
	let result = math_box * 5 + 1;
	result = Math.trunc(result); //fucntion work for 2nd dice
	setTimeout(() => {
		luddo_dice_2.innerText = result;
	}, 1000);

	// console.log('dice 2 '+result);
	return result;
}
function Sum_of_dices() {
	StatusBar.innerText = ' ';
	outcome_box.innerText = '';
	let final_result = [namPoreDibo2(), namPoreDibo()];
	let dice_one_result_variable = final_result[0];
	let dice_two_variable = final_result[1];
	final_result = dice_one_result_variable + dice_two_variable;
	console.log('hello' + final_result);

	setTimeout(() => {
		outcome_box.innerText = final_result;
		StatusBar.style.backgroundColor = 'transparent';
		if (dice_one_result_variable == dice_two_variable) {
			outcome_box.innerText = final_result;
			StatusBar.innerText = 'Please Re-Roll';
			StatusBar.style.backgroundColor = 'palegoldenrod';
			console.log('please re-roll');
		}
	}, 1000);
}
const luddo_dice_1 = document.getElementById('luddo_dice');
luddo_dice_1.addEventListener('click', namPoreDibo);
document.addEventListener('keyup', namPoreDibo); //for first dice

const luddo_dice_2 = document.getElementById('luddo_dice2');
document.addEventListener('keyup', namPoreDibo2);
luddo_dice_2.addEventListener('click', namPoreDibo2); //for 2nd dice

const outcome_box = document.getElementById('final_outcome_box');
document.addEventListener('keyup', Sum_of_dices);

outcome_box.addEventListener('click', Sum_of_dices);

const StatusBar = document.getElementById('status_bar');

// console.log('FR   '+final_result);
