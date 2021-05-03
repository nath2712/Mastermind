
class recup { // par encore utilisé 
  constructor() {
    this.name = 'recup';
  }
   get val1() {
    return this.hauteur * this.largeur;
  }
 
  set aire(valeur) {
    this.aire = valeur;
  }
   
  afficherAire(){
      console.log(this.aire);
  }
}
var lige=100; // La variable lige sert a compté le nombre d'entré qu'il y'a eu et donc a quel ligne l'essaie doit étre entrée
/*
function inserLigne(){
	if (lige == 1) {
		
	}
	else if (lige == 2) {
		
	}
	else if (lige == 3) {
		
	}
	else if (lige == 4) {
		
	}

}
*/
var master1 = Math.floor(Math.random() * 4)+'';
if (master1 == 0){
	master1 = 1+'';
}
var master2 = Math.floor(Math.random() * 4)+'';
if (master2 == 0){
	master2 = 1+'';
}
var master3 = Math.floor(Math.random() * 4)+'';
if (master3 == 0){
	master3 = 1+'';
}
var master4 = Math.floor(Math.random() * 4)+'';
if (master4 == 0){
	master4 = 1+'';
}
var ListecompaMaitre = master1+master2+master3+master4; // compile les 4 lancés de différent dans une liste (définit en STR) afin de faciliter la comparaison
var ListecompaJoueur = ''; //Déclare la variable vide afin de ne pas avoir a la redéclaré a mainte reprise
// La fonction de vérication de victoire, si les deux variable qui sert de référenciel pour déterminer si oui ou non le chiffre choisi par le maitre est identique a celui du joueur
function VerifVictoire(){
	
	if (ListecompaMaitre == ListecompaJoueur){
		alert("VICTOIRE !! GG, réactualiser la page pour recommencer"); 
	}
	else {
		alert("Réessayer");
	}
}
// La fonction qui liste les essaie en vérifiant a chaque fois combien d'essaie il y'a eu avec la variable lige qui s'incrémente de +1 a chaque proposition, le résultat est alors ensuite inséré dans le tableau
function ListeEssai(valeur1,valeur2,valeur3,valeur4,ligne){
	
	if (lige == 101){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 102){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 103){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 104){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 105){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 106){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 107){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 108){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 109){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else if (lige == 110){
		document.getElementById(ligne).innerHTML="<td> "+valeur1+"</td>"+"<td> "+valeur2+"</td>"+"<td> "+valeur3+"</td>"+"<td> "+valeur4+"</td>";

	}
	else {
		alert("défaite, vous avez perdu");
		
	}
}

 /*function ligne(){
	var lige=lige+1;
	return lige;
}
*/
//var textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
//var lige =  parseFloat(lige)+1
//var lige= lige ? lige : lige+1;

window.addEventListener('load',()=>{ 
	
		
	document.querySelector('button').addEventListener('click',(event)=>{ // met javascript a l'écoute d'un clique
		
		
		let val1= document.getElementById("1"); //Lui dit d'aller récupéré l'élément a l'id 1 (un bouton select)
		let val1select = val1.options[val1.selectedIndex].value;//Lui dit d'aller récupéré l'option qui est contenu par l'élément a l'id 1 (contenu du bouton select)


		let val2= document.getElementById("2");
		let val2select = val2.options[val2.selectedIndex].value;
		
		let val3= document.getElementById("3");
		let val3select = val3.options[val3.selectedIndex].value;
		
		let val4= document.getElementById("4");
		let val4select = val4.options[val4.selectedIndex].value;
		
	
		
		
		lige = lige+1; // incrément de +1 la variable lige
		
		ListeEssai(val1select,val2select,val3select,val4select,lige); // Appelle la fonction ListeEssaie pour lister les essaie
		ListecompaJoueur =val1select+val2select+val3select+val4select+'' ; // Appelle la variable ListecompaJoueur, et y ajoute toute les valeurs récupéré plutot ainsi qu'un '' vide pour définir la liste en string
		VerifVictoire(); // Appelle la fonction de vérification de victoire
		alert(ListecompaMaitre);
		
	});
});








