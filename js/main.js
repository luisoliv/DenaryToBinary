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
    console.log('Page loaded');
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
            //modified because i do not use it anymore
            // swal({
            //     title: "Wrong type!",
            //     text: "it must be a number!",
            //     icon: "warning",
            //     button: "Understood",
            //   }).then(function (value) {
            //       $('#modalInputToBin').val(0);
            //   });
    
            //   $('#modalInputToBin').val(0);
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
        }while(denary > 0);
        
        binary = binary.reverse().join('');
        document.getElementById('results').innerText = binary;
    }    
}

function convertToDenary() {
    let binary = validateInput(true, document.getElementById('modalInputToDen').value);
    console.log('the binary input gives', binary, typeof(binary));
    if(binary) {
        binary = binary.toString();
        document.getElementById('results').innerText = binary;
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