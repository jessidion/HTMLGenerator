class Licence{
    constructor(nom, prix, id){
        this.nom = nom;
        this.prix = prix;
        this.id = id;
    }


    toString(){

        return this.nom + "\n" + this.prix;

    };


    equals(n) {
        return n === this.nom;
    }

}


/// Simple simulation d'achat qui donne une licence
function achat() {
    alert("Merci pour votre achat ! Voici votre licence: ABCD-ABCD-ABCD");
    document.location.href = "index.html";
}


// Ma liste pour stocker les items crées pour différencier de ceux déjà sur MockAPI
const licencesLocal = [

]




/// Cette méthode sert à ajouter un item localement (licencesLocal) et dans MockAPI
function ajouter(){

    let prix = $("#prix").val();
    let nom = $("#nom").val();
    const licence = new Licence(nom, prix)

    fetch('https://660c05393a0766e85dbd2d6e.mockapi.io/html/licence', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(licence)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        // do something
        //location.reload();
        licencesLocal.push(licence); // sauvegarde localement aussi comme demandé: Cela permet de distinguer les objets ajoutés par l’utilisateur de ceux qui étaient déjà présents sur MockAPI
        AdminFetch();
    }).catch(error => {
        // handle error
    })
    alert("Ajouté " + licence.nom + " pour " + licence.prix + "$ !");
}




/// Pour append et afficher un item SANS le bouton supprimer
function creerCarte(licence){
    $('#licences').append(`<li class="card col-3 m-2" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-titl h2">${licence.nom}</h2> <!-- les licences auraient un nom du genre "Annual License" ou "Lifetime License" -->
    <h3 class="card-titl h3 py-1">${licence.prix}$</h3>
    <div class="card-text">
    </div>
    <button class="btn btn-success mt-2" onclick="achat()">Acheter</button> <br>
  </div>
</li>`);
}




/// Pour append et afficher un item AVEC le bouton supprimer
function creerCarteAdmin(licence){
    $('#licences').append(`<li class="card col-3 m-2" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-titl h2">${licence.nom}</h2> <!-- les licences auraient un nom du genre "Annual License" ou "Lifetime License" -->
    <h3 class="card-titl h3 py-1">${licence.prix}$</h3>
    <div class="card-text">
    </div>
    <button class="btn btn-success mt-2" onclick="achat()">Acheter</button> <br>
    <button class="btn btn-secondary mt-2" onclick="supprimer(${licence.id})">Supprimer</button>
  </div>
</li>`);
}




/// Fonction pour supprimer un item de mockAPI et local list
function supprimer(id){
    let confirmation = confirm("Êtes-vous certain de vouloir supprimer cet item?");
    if (!confirmation) return;
    fetch('https://660c05393a0766e85dbd2d6e.mockapi.io/html/licence/'+id, {
        method: 'DELETE',
        headers: {'content-type':'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(licence => {
        // Do something
        //location.reload();
        AdminFetch();
        licencesLocal.filter(li => li.nom !== licence.nom); // On supprime si nous l'avons localement
    }).catch(error => {
        // handle error
        //$('.alert').text(error.message).removeClass('d-none');
    })
    alert("Supprimé avec succès !");
}



let firstLoad = true;
// facon jQuery pour fetch les items de MockAPI
if(firstLoad) {
    fetch('https://660c05393a0766e85dbd2d6e.mockapi.io/html/licence', {
        method: 'GET',
        headers: {'content-type':'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(tasks => {
        // Do something with the list of tasks
        tasks.forEach(function(licence){
            creerCarte(licence);
        })
    }).catch(error => {
        // handle error
    })
firstLoad = false;
}



/// Méthode un peu différente du fetch initial qui affiche les items locaux avec un bouton supprimer
function AdminFetch() {
//$("#titre").text("Acheter Une Licence (vue d'administrateur)");
$("#licences").empty();

fetch('https://660c05393a0766e85dbd2d6e.mockapi.io/html/licence', {
    method: 'GET',
    headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then(tasks => {
    // Do something with the list of tasks
    tasks.forEach(function(licence) {
        console.log(licencesLocal.length);
        for (let li of licencesLocal) {
            if (li.equals(licence.nom)) {
                creerCarteAdmin(licence); // On affiche avec le bouton supprimer si nous l'avons localement
                break;
            }
            else creerCarte(licence);
        }
    })
}).catch(error => {
    // handle error
})
}