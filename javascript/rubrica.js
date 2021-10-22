
const rubrica = [];


function subscribe(){
    let dati = prompt("Inserisci i tuoi dati separati da una virgola");
    let input = dati.split(',');
   
    let newUser = userCreation(input);
    addUser(newUser);
    console.log(rubrica)
}

function userCreation (arrData) {

    let user = {
        nome: arrData[0], //deve essere uguale al primo indice di arrData quindi [0]
        cognome: arrData[1],
        numero: arrData[2],
        email: arrData[3]
    }
    return user;
}

function addUser(user){
    rubrica.push(user)
}



