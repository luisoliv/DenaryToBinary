/*
    The purpose of this project is reimplementing basic algorithm of converting and deconverting between Decimals and Binary base systems
    instead of using native convertion functions such as toString(2); && toString(10) 
*/

'use strict';

function openToBinaryModal() {
    hideModalContents();
    document.getElementById('modalInputToBin').style.display = 'unset';
    $('#toBinaryModal').modal('show');
}

function openToDenaryModal() {
    hideModalContents();
    document.getElementById('modalInputToDen').style.display = 'unset';
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
        document.getElementById('results').innerText = binary;
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
            document.getElementById('results').innerText = parseInt(binary, 2);
            return true;
        }    

        return false;
    }
}

//hides all the inputs of the diff. modals
function hideModalContents() {
    document.getElementById('modalInputToBin').style.display = 'none';
    document.getElementById('modalInputToDen').style.display = 'none';
    document.getElementById('modalInputToBin').value = null;
    document.getElementById('modalInputToDen').value = null;
    document.getElementById('results').innerText = '';
}