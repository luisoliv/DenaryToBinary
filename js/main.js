/*
    The purpose of this project is reimplementing basic algorithm of converting and deconverting between Decimals and Binary base systems
    instead of using native convertion functions such as toString(2); && toString(10) 
*/

'use strict';

function openToBinaryModal() {
    hideModalContents();
    $('#modalWorkspace').load('./views/toBinary.html');
    $('#toBinaryModal').modal('show');
}

function openToDenaryModal() {
    hideModalContents();
    $('#modalWorkspace').load('./views/toDenary.html');
    $('#toBinaryModal').modal('show');
}

function openToBase64Modal() {
    hideModalContents();
    $('#modalWorkspace').load('./views/base64.html');
    $('#toBinaryModal').modal('show');
}

function openToBase10Modal() {
    hideModalContents();
    $('#modalWorkspace').load('./views/base10.html');
    $('#toBinaryModal').modal('show');
}

function main() {
    console.log('DOM loaded');
    if($()) {
        console.log('JQuery was loaded')
    } else {
        console.log('Error, JQuery was NOT loaded')
    }
}

function validateInput(isBin, modalValue) {
    if(isBin) { 
        if(!modalValue) {
            return null;
        } else {
            return Number(modalValue);
        }
    } else if (!isBin) {
        if(!modalValue) {
            return null;
        } else {
            return Number(modalValue);
        }
    }
}

function convertToBinary() {
    let denary = validateInput(false, document.getElementById('modalInputToBin').value);

    if(denary) {
        let binary = [];

        do {
            binary.push(parseInt(denary % 2) );
            denary = parseInt(denary / 2);
        } while(denary > 0);
        
        binary = binary.reverse().join('');
        document.getElementById('results').value = binary;
    }    
}

function isBinary(number) {
    for(var i in number) {
        if(number[i] !== '0' && number[i] !== '1')
            return false;
    }

    return true;
}

function convertToDenary() {
    let binary = validateInput(true, document.getElementById('modalInputToDen').value);
  
    if(binary === null)
        return false;
    else {
        binary = binary.toString();
        if(isBinary(binary) ) {
            document.getElementById('results').value = parseInt(binary, 2);
            return true;
        }    

        return false;
    }
}

function convertToBase64() {
    let text = document.getElementById('modalInputToBase64').value;

    if(text) {
        document.getElementById('results').value = btoaUTF16(text);
    }
}

function convertToBase10() {
    let text = document.getElementById('modalInputToBase10').value;

    if(text) {
        document.getElementById('results').value = atobUTF16(text);
    }
}

function copyToClipboard() {
    document.getElementById('results').select();
    document.execCommand('copy');
}

//hides all the inputs of the diff. modals
function hideModalContents() {
    $('#modalWorkspace').empty();
    document.getElementById('results').value = '';
}