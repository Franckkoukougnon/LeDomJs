// On crée la balise a
let elementA = document.createElement('a');

// On crée le lien de la balise (produit.html)
elementA.href = "produits.html";

/* on crée la variable LinkText ,et avec la methode  createTextNode on ecrit le texte pour nommer la balise qu'on vient de créer
 */
let linkText = document.createTextNode('Produits');

// avec la methode appenchild , on a rajouté la variable Linktext a la variable linText (la balise a)
elementA.appendChild(linkText);

// on cree la balise li
let linkElem = document.createElement('li');

// avec la methode appenchild , on a rajouté la variable elementA a la variable linkElem ( la balise a) 
linkElem.appendChild(elementA);

// avec la methode querySelector , on a selectionné l'id qu'on recherche et on rajouté le lien crée 
document.querySelector('#mainNav ul').appendChild(linkElem);