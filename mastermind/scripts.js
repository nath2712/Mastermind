
class recup {
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
var lige=0;
 function ligne(){
	var lige=lige+1;
	return lige;
	
	
	
	
}
window.addEventListener('load',()=>{
	
		
	document.querySelector('button').addEventListener('click',(event)=>{
		alert('Ca marche');
		let val1= document.getElementById("1");
		let val2= document.getElementById("2");
		let val3= document.getElementById("3");
		let val4= document.getElementById("4");
		var lige= lige ? lige : lige+1;;
		alert(lige);
	});
});








