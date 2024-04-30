let btn = document.querySelector('#btn'); //der Variabel btn wird der Wert vom Element mir der id btn zugewiesem
let sidebar = document.querySelector('.sidebar'); //der Variabel sidebar wird der Wert vom Element mir der id sidebar zugewiesem

btn.onclick = function () { // funktion, wenn der buttin gedrückt wird 
    sidebar.classList.toggle('active'); //der sidebar wird die klasse active hinzugefügt
};
