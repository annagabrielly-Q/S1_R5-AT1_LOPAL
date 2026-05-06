let multiplo = Number(prompt("digite um número"));
 
if(isNaN(multiplo)){
   alert("digite um número")
   
   } else {
      alert(`tabuada do ${multiplo} é`);

      for(let i = 1; i <=10; i++){
         let resultado = multiplo * i;
         alert(`${multiplo} * ${i} =${resultado}`);
      }
   }