
function openToBinaryModal() {
    $('#toBinaryModal').modal('show');
    document.getElementById('toBinModalInput').value = 0;
}

function convertToDenary() {
}

function main() {
    console.log('Page loaded');
    if($()) {
        console.log('JQuery was loaded')
    } else {
        console.log('Error, JQuery was NOT loaded')
    }
}

function validateInput() {
    let denary = document.getElementById('toBinModalInput').value;
    if(!denary) {
        // swal({
        //     title: "Wrong type!",
        //     text: "it must be a number!",
        //     icon: "warning",
        //     button: "Understood",
        //   }).then(function (value) {
        //       $('#toBinModalInput').val(0);
        //   });

        //   $('#toBinModalInput').val(0);
        return null;
    } else {
        denary = Number(denary);
        return denary;
    }
}

function convertToBinary() {
    let denary = validateInput();

    if(denary) {
        let binary = [];

        do {
            binary.push(parseInt(denary % 2) );
            denary = parseInt(denary / 2);
        }while(denary > 0);
        
        binary = binary.reverse().join('');
        document.getElementById('toBinaryResult').innerText = binary;
    }    
}