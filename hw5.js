let selectedAction = prompt("What do you want to do? (add, sub, mult, div)");
let x = +prompt("please enter the first summand");
let y = +prompt("please enter the second summand");

switch (selectedAction) {
    case 'add':
        alert(`${x}+${y}=${x+y}`);
        break;
    case 'sub':
        alert(`${x}-${y}=${x-y}`);
        break;
    case 'mult':
        alert(`${x}*${y}=${x*y}`);
        break;
    case 'div':
        alert(`${x}/${y}=${x/y}`);
        break;
    default:
        alert(`${selectedAction} is not supported. Please try again`);              
}




