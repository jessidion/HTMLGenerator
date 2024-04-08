// Cette class est utiliser lors de la génération et sauvegarde de code html
class HTML {
    constructor(typebalise, contenu, backgroundimageurl, backgroundcolor, couleurcontenu, padding, stylecustom) {
        this.typebalise = typebalise; /* div, p, h1, ect..  */
        this.contenu = contenu; /* du texte (innerhtml/innertext) */
        this.couleurcontenu = "color: " + couleurcontenu + ";";
        this.padding = "padding: " + padding + "rem;";
        this.backgroundimageurl = "background-image: url('" + backgroundimageurl + "');";
        this.backgroundcolor = "background-color: " + backgroundcolor + ";";
        this.stylecustom = stylecustom; /* pour d'autre style  */

        /* ajouter d'autres possibilitées.. */
    }

    toString() {
        return `<${this.typebalise} style="${this.couleurcontenu} ${this.padding} ${this.backgroundcolor} ${this.backgroundimageurl} ${this.stylecustom}">${this.contenu}</${this.typebalise}>`
    };
}


