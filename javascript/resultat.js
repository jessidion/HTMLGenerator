let $cardsContainer = $('#cards-container');
let $previewContainer = $('#preview-container');

//$previewContainer.empty();
//for(i = 0; i < localStorage.length; i++){
    item = JSON.parse(localStorage.getItem("HTML"))
    if(item){
        afficherItem(item)
    }
//}


/// Cette méthode s'occupe d'afficher le code généré
function afficherItem(item){
  let balise;
  let cont;
  let coulcont;
  let padd;
  let backimgurl;
  let backcolor;
  let stylecust;

if(item[0].typebalise != undefined)
  balise = item[0].typebalise;

if(item[0].contenu != undefined)
  cont = item[0].contenu; 

if(item[0].couleurcontenu != undefined)
  coulcont = item[0].couleurcontenu;

if(item[0].padding != "padding: rem;")
  padd = item[0].padding;
else padd = "";

if (item[0].backgroundimageurl !== "background-image: url('undefined');") {
  backimgurl = item[0].backgroundimageurl;
  backimgurl = backimgurl.replace("'", '"'); // Remplace single quotes avec double quotes (pas nécéssaire mais pg)
  backimgurl = backimgurl.replace("'", '"'); // Remplace single quotes avec double quotes (pas nécéssaire mais pg)
} else {
  backimgurl = "";
}

// si background color n'est pas vide
if(item[0].backgroundcolor != undefined)
  backcolor = item[0].backgroundcolor;

// si style custom n'est pas vide
if(item[0].stylecustom != undefined)
  stylecust = item[0].stylecustom; 


// Nous affichons le résulat en format text
  let resultatText = `<${balise} style="${coulcont} ${padd} ${backcolor} ${backimgurl} ${stylecust}">${cont}</${balise}>`;

  $cardsContainer.append(`<h3 id="generation" style="border: solid 1px grey; background-color: darkgray; border-radius: 0.5rem;">${$('<div>').text(resultatText).html()}</h3>`);


// Nous affichons le résultat en format preview, donc une vraie balise
  let resultatCode = `<${item[0].typebalise} style="${item[0].couleurcontenu} ${item[0].padding} ${item[0].backgroundcolor} ${item[0].backgroundimageurl} ${item[0].stylecustom}">${item[0].contenu}</${item[0].typebalise}>`;

  $previewContainer.append(resultatCode);
}





/// Bouton copier pour copier le code généré
function copier() {
  let $copyText = $('#generation').text();

  navigator.clipboard.writeText($copyText);

  alert("Code copié !");
}


