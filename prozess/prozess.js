let btn = document.querySelector('#btn'); //der Variabel btn wird der Wert vom Element mir der id btn zugewiesem
let sidebar = document.querySelector('.sidebar'); //der Variabel sidebar wird der Wert vom Element mir der id sidebar zugewiesem

btn.onclick = function () { // funktion, wenn der buttin gedrückt wird 
    sidebar.classList.toggle('active'); //der sidebar wird die klasse active hinzugefügt
};

// Hover Funktionen

function changeClass() { // ändert die klasse von einem element beim hovern 
    document.getElementById("bell").className = 'bx bxs-bell bx-lg bx-tada';
}

function revertClass() { // setzt die klasse wieder zurück
    document.getElementById("bell").className = 'bx bxs-bell bx-lg';
}

function changeClass2() { // ändert die klasse von einem element beim hovern
    document.getElementById("export").className = 'bx bxs-file-export bx-lg bx-fade-right';
}

function revertClass2() { // setzt die klasse wieder zurück
    document.getElementById("export").className = 'bx bxs-file-export bx-lg';
}

function changeClass3() { // ändert die klasse von einem element beim hovern
    document.getElementById("load").className = 'bx bx-loader bx-lg bx-spin ';
}

function revertClass3() { // setzt die klasse wieder zurück
    document.getElementById("load").className = 'bx bx-loader bx-lg';
}

function changeClass4() { // ändert die klasse von einem element beim hovern
    document.getElementById("alarm").className = 'bx bxs-alarm-exclamation bx-lg bx-flashing';
}

function revertClass4() { // setzt die klasse wieder zurück
    document.getElementById("alarm").className = 'bx bxs-alarm-exclamation bx-lg';
}

function changeClass5() { // ändert die klasse von einem element beim hovern
    document.getElementById("import").className = 'bx bxs-file-import bx-lg bx-fade-left';
}

function revertClass5() { // setzt die klasse wieder zurück
    document.getElementById("import").className = 'bx bxs-file-import bx-lg';
}

function changeClass6() { // ändert die klasse von einem element beim hovern
    document.getElementById("wallet").className = 'bx bxs-wallet bx-lg bx-burst';
}

function revertClass6() { // setzt die klasse wieder zurück
    document.getElementById("wallet").className = 'bx bxs-wallet bx-lg';
}