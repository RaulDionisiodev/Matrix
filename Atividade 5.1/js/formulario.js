function formulario (){

 var mail= document.getElementById("email").value;
 var nome= document.getElementById("nome").value;
 var sx= document.getElementById("sexo").selectedIndex;
 var nomeSexo= sexo[sx].value;
 var idCurso= document.getElementById("curso").selectedIndex;
 var nomeCurso= curso[idCurso].value;
 var endereco= document.getElementById("endereco").value;
 var complemento = document.getElementById("complemento").value;
 var cep= document.getElementById("cep").value;
 var municipio= document.getElementById("mun").value;
 var iduf= document.getElementById("uf").selectedIndex;
 var nomeUf= uf[iduf].value;


 
 var saveForm = { mail, nome, nomeSexo, nomeCurso, endereco, complemento, cep, municipio, nomeUf}

 window.localStorage.setItem ("saveForm", JSON.stringify(saveForm));
}

window.onload= setTimeout( function retornaFormulario () {

     var voltaForm = window.localStorage.getItem("saveForm");
     var obj= JSON.parse(voltaForm);

      document.getElementById("email").value = obj.mail;
      document.getElementById("nome").value = obj.nome;
      document.getElementById("sexo").value = obj.nomeSexo;
      document.getElementById("curso").value = obj.nomeCurso;
      document.getElementById("endereco").value = obj.endereco;
      document.getElementById("complemento").value = obj.complemento;
      document.getElementById("cep").value = obj.cep;
      document.getElementById("mun").value = obj.municipio;
      document.getElementById("uf").value = obj.nomeUf; 
      
      //alert(obj.nomeUf); 
 

}  ,1000);