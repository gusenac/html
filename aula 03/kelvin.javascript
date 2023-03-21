
<script type="text/javascript">
    //℃=(℉-32)/1.8
    //℃=K-273.15
    function Converter(){
     let  f = document.getElementById("tempF").value;
     let tc = document.getElementById("tempC").value;
     
     if(f=="")
     {
         document.getElementById("tempF").focus;
         document.getElementById("tempF").style.borderColor = "red";
     }
     if(tc=="")
     {
         alert("Celsius não informado");
     }
     else{
         document.getElementById("tempF").style.borderColor = "grey";
         let c = + 273,15;
         document.getElementById("tempC").value = c;
     }
    }
    

</script>
</head>
<body style="background-color: red;">
    <h1>  Exemplo de calculadora </h1>

    

<form> 

    <label for="FormNome"> temperatura em celsisus: </label><br>
    <input type="text" id="FormNome" name="FormNome" placeholder="Nome Sobrenome"> <br><br>
    <label for="FormEmail">temperatura em kelvin: </label> <br>
    <input ype="email" name="FormEmail" id="FormEmail" placeholder="email@email.com"> <br>
    <label for="FormNome"> temperatura em farenheit: </label><br>
    <input type="text" id="FormNome" name="FormNome" placeholder="Nome Sobrenome"> <br><br>
 
    <fieldset>
    
            </fieldset><br>    
            <input type="button" id="btnSalvar" onclick="Enviar()" value="Salvar">

</form>
</body>



</html>



