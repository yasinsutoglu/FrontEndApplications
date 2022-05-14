let calc = function(a, b, operator) {
    switch(operator) {
        case 'sum':
            return a + b;
        break;
        
        case 'subtraction':
            return a - b;
        break;

        case 'multiply':
            return a * b;
        break;

        case 'bol':
            return a / b;
        break;

        case 'mod':
            return a % b;
        break;

        case 'expo':
            return a**b;
        break;

        case 'ext':
            return a**(1/b);
        break;

        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(calc(23, 14, 'expo'));  
console.log(calc(10, 3, 'ext'));     