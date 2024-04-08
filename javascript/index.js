
const objetHTML = [
    new HTML(findElementVal("typebalise"), findElementVal("contenu"), findElementVal("backgroundimageurl"), findElementVal("backgroundcolor"), findElementVal("couleurcontenu"), findElementVal("padding"), findElementVal("stylecustom"))
];

/// Ma fonction pour rapidement trouver les valeurs d'ID html
function findElementVal(nom) {
    return $("#" + nom).val();
}




// Mini intro infortatif qui apparait toujours sur la page principale du générateur
alert("Bienvenu chez HTML Generator ! Entrez simplement les paramètres désirés afin de générer votre balise/code HTML!");




/// Simple méthode qui valide la licence ect.. avant la génération
function validation(){

    // Nous validons la licence dabord
    let licenceValide = $("#licence").val();
    if(!licenceValide) {
        $(erreurLicence).text("*Une licence valide est requise!");
        return; // invalide so bye
    }
    $(erreurLicence).text("");
    // Tout est good, on generate
    generate();
};




/// Cette méthode sert à générer le code html de l'utilisateur à partir des champs qu'il a rempli
function generate() {
    const objetHTML = [
        new HTML(findElementVal("typebalise"), findElementVal("contenu"), findElementVal("backgroundimageurl"), findElementVal("backgroundcolor"), findElementVal("couleurcontenu"), findElementVal("padding"), findElementVal("stylecustom"))
    ];

    localStorage.setItem("HTML", JSON.stringify(objetHTML));
    
    console.log(objetHTML.toString());
    document.location.href = "generation.html";
}
