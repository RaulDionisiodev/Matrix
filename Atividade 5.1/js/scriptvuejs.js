/*script VueJs*/

new Vue({

el:".container", 
data: function (){
				return {
					email: "",
                    nome:"",
                    sexo:"",
                    curso:"",
                    endereco:"",
                    complemento:"",
                    cep:"",
                    municipio:"",
                    uf:"RS",

				
                                        };
},                    

methods: {
                    salvar: function (){					
					localStorage.setItem("email", this.email);
                    localStorage.setItem("nome", this.nome);
                    localStorage.setItem("sexo", this.sexo);
                    localStorage.setItem("curso", this.curso);
                    localStorage.setItem("endereco", this.endereco);
                    localStorage.setItem("complemento", this.complemento);
                    localStorage.setItem("cep", this.cep);
                    localStorage.setItem("municipio", this.municipio);
                    localStorage.setItem("uf", this.uf);
                    },

 },

 created: function() {

     var valorEmail = localStorage.getItem("email");
        if (valorEmail)
                this.email=valorEmail; 

     var valorNome = localStorage.getItem("nome");          
               if (valorNome)
                    this.nome=valorNome;

     var valorSexo = localStorage.getItem("sexo");
              if (valorSexo)
                  this.sexo=valorSexo;

      var valorCurso = localStorage.getItem("curso")
                 if(valorCurso)
                    this.curso=valorCurso;

       var valorEndereco = localStorage.getItem("endereco");
               if (endereco)
                    this.endereco=valorEndereco;             
             
        var valorComplemento = localStorage.getItem("complemento");
                if (complemento)
                    this.complemento=valorComplemento;

        var valorCep = localStorage.getItem("cep");
                  if (valorCep)
                      this.cep=valorCep;
        
        var valorMunicipio = localStorage.getItem("municipio");
                 if (valorMunicipio)
                    this.municipio=valorMunicipio;

        var valorUf = localStorage.getItem("uf");            
             if (valorUf)
                 this.uf=valorUf;
       
}          				
 
    
}); 