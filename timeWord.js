// @param {string} time 
function timeWord(time) {
    let [hour, min, meridiem] = time.split(':');
    if(hour === '00' && min === '00') return 'midnight';
    if(hour === '12' && min === '00') return 'noon';

    (hour < 12) ? meridiem = 'am' : meridiem = 'pm'; 
    
    hour = normalizeHour(hour);
    hour = getHourWord(hour);
    let minutes = getMinWord(min);

    if(min === '00') minutes = "o'clock";
    
    return `${hour} ${minutes} ${meridiem}`;
}

function normalizeHour(hour) {
    let [tens, ones] = hour.split('');
    tens = parseInt(tens);
    ones = parseInt(ones);
    if(tens === 1 && ones > 2) {
        ones = ones - 2;
        tens = 0;
    } else if(tens > 1) {
        ones = `${tens}${ones}` - 12;
    } else if(tens) {
        return `${tens}${ones}`;
    }
    return ones+'';
}

function getHourWord(hour) {
    switch(hour) {
        case ('0'):
            return 'twelve';
        case ('1'): 
            return 'one';
        case ('2'):
            return 'two';
        case ('3'):
            return 'three';
        case ('4'):
            return 'four';
        case ('5'):
            return 'five';
        case ('6'):
            return 'six';
        case ('7'):
            return 'seven';
        case ('8'):
            return 'eight';
        case ('9'):
            return 'nine';
        case ('10'):
            return 'ten';
        case ('11'):
            return 'eleven';
        case ('12'):
            return 'twelve';
        default:
            return 'not valid';
    }
};

function getMinWord(min) {
    let [tens, ones] = min.split('');
    switch(tens) {
        case ('0'):
            tens = 'oh';
            break;
        case ('1'):
            // makes sure output don't contain a whitespace
            ones = null;
        case ('2'):
            tens = 'twenty';
            break;
        case ('3'):
            tens = 'thirty';
            break;
        case ('4'):
            tens = 'forty';
            break;
        case ('5'):
            tens = 'fifty';
    };
    
    // handles 1 - 19 case
    if(parseInt(min) > 0 && parseInt(min) < 20) {
        switch(min) {
            case ('01'):
                ones = 'one';
                break;
            case ('02'):
                ones = 'two';
                break;
            case ('03'):
                ones = 'three';
                break;
            case ('04'):
                ones = 'four';
                break;
            case ('05'):
                ones = 'five';
                break;
            case ('06'):
                ones ='six';
                break;
            case ('07'):
                ones ='seven';
                break;
            case ('08'):
                ones = 'eight';
                break;
            case ('09'):
                ones = 'nine';
                break;
            case ('10'):
                tens = 'ten';
                break;
            case ('11'):
                tens = 'eleven';
                break;
            case ('12'):
                tens = 'twelve';
                break;
            case ('13'):
                tens = 'thirteen';
                break;
            case ('14'):
                tens = 'fourteen';
                break;
            case ('15'):
                tens = 'fifteen';
                break;
            case ('16'):
                tens ='sixteen';
                break;
            case ('17'):
                tens ='seventeen';
                break;
            case ('18'):
                tens = 'eighteen';
                break;
            case ('19'):
                tens = 'nineteen';
                break;
        }
    };

    // handles 20 - 59 case keeps the tens string
    if(parseInt(min) > 20 && parseInt(min) < 60) {
        switch(ones) {
            case ('1'):
                ones = 'one';
                break;
            case ('2'):
                ones = 'two';
                break;
            case ('3'):
                ones = 'three';
                break;
            case ('4'):
                ones = 'four';
                break;
            case ('5'):
                ones = 'five';
                break;
            case ('6'):
                ones ='six';
                break;
            case ('7'):
                ones ='seven';
                break;
            case ('8'):
                ones = 'eight';
                break;
            case ('9'):
                ones = 'nine';
                break;
        };
    };

    // avoids whitespace
    if(ones === null) return tens;
    if(ones === '0') return tens;

    return `${tens} ${ones}`;
}

module.exports = timeWord;