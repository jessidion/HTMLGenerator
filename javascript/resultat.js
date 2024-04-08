let $cardsContainer = $('#cards-container');
let $previewContainer = $('#preview-container');

for(i = 0; i < localStorage.length; i++){
    item = JSON.parse(localStorage.getItem("HTML"))
    if(item){
        afficherItem(item)
    }
}

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
  backimgurl = backimgurl.replace("'", '"'); // Remplace single quotes avec double quotes
} else {
  backimgurl = "";
}


if(item[0].backgroundcolor != undefined)
  backcolor = item[0].backgroundcolor;

if(item[0].stylecustom != undefined)
  stylecust = item[0].stylecustom; 


  let resultatText = `<${balise} style="${coulcont} ${padd} ${backcolor} ${backimgurl} ${stylecust}">${cont}</${balise}>`;

  $cardsContainer.append(`<h3 id="generation" style="border: solid 1px grey; background-color: darkgray; border-radius: 0.5rem;">${$('<div>').text(resultatText).html()}</h3>`);

  let resultatCode = `<${item[0].typebalise} style="${item[0].couleurcontenu} ${item[0].padding} ${item[0].backgroundimageurl} ${item[0].stylecustom}">${item[0].contenu}</${item[0].typebalise}>`;


  $previewContainer.append(resultatCode);
}





function copier() {
  let $copyText = $('#generation').text();

  navigator.clipboard.writeText($copyText);

  alert("Code copié !");
}


