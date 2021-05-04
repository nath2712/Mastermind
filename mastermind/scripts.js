let compte = 0;
let ListeMaitre = false;
let ListecompaMaitre = ''

class recup { 
  constructor(ListecompaMaitre2) {
    this.name = 'recup';
  }
    liste(ListecompaMaitre2) {
		
			
				let master1 = Math.floor(Math.random() * 6)+'';
				if (master1 == 0){
					master1 = 1+'';
				}
				ListecompaMaitre2 = ListecompaMaitre2+master1;
				
				
				
				return ListecompaMaitre2;
			
			
		
		
	
  }


}
let lige=101; // La variable lige sert a compté le nombre d'entré qu'il y'a eu et donc a quel ligne l'essaie doit étre entrée
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


 // compile les 4 lancés de différent dans une liste (définit en STR) afin de faciliter la comparaison
let ListecompaJoueur = ''; //Déclare la variable vide afin de ne pas avoir a la redéclaré a mainte reprise

 /*function ligne(){
	var lige=lige+1;
	return lige;
}
*/
//var textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
//var lige =  parseFloat(lige)+1
//var lige= lige ? lige : lige+1;










