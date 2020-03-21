const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let size = expr.length / 10;
    let morse_char, res = '', tmp_box, f = 0;
    for (let i = 0; i < size; i++){
        tmp_box = expr.substring(i*10,(i+1)*10);
        morse_char='';
        f = 0;
        for (let j = 0; j < 10; j++){
            if (tmp_box.charAt(j) == '*') {res+=' '; f = 1; break;} 
            else {
                if (tmp_box.charAt(j) == '0'){}
                else{
                    if (tmp_box.charAt(j) == '1') {
                        let m = j+1;
                        if (tmp_box.charAt(m) == '1') {morse_char+='-'; j++;}
                        else {if (tmp_box.charAt(m) == '0') {morse_char+='.';}}
                    }
                }
            }
        }
        if (f == 0) res+=MORSE_TABLE[morse_char];
    }
    return res;
}

module.exports = {
    decode
}