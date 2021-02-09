module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }
    number = number.toString();
    let result = '';
    let units = {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };
    let oneDozen = {
        '0': 'ten',
        '1': 'eleven',
        '2': 'twelve',
        '3': 'thirteen',
        '4': 'fourteen',
        '5': 'fifteen',
        '6': 'sixteen',
        '7': 'seventeen',
        '8': 'eighteen',
        '9': 'nineteen',
    };
    let tens = {
        '0': '',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    };
    if(number.length === 3) {
        result += units[number[0]] + ' hundred ' + (number[1] === '1' ? oneDozen[number[2]] : tens[number[1]] + ' ' + units[number[2]]);
    } else if (number.length === 2) {
        result += number[0] === '1' ? oneDozen[number[1]] : tens[number[0]] + ' ' + units[number[1]];
    } else {
        result += units[number[0]];
    }
    return result.replace(/ +/g, ' ').trim();
}

