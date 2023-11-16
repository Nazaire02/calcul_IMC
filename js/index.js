(function(){
    window.onload = function() {
        $form = document.getElementsByTagName('form')[0];
        var $limpar = document.getElementById('limpar');
        var $mostar_condicao_fisica = document.forms['calculo_imc'].mostar_condicao_fisica;

        $form.addEventListener("submit", mostrarIMC);          
        $mostar_condicao_fisica.addEventListener('change', mostrarIMC)
                
        $limpar.addEventListener('click', function(){
            var $mostra_imc = document.getElementById("mostrar_imc");
            $mostra_imc.textContent = '';
        });
    }

    function calcularImc(peso, altura) {
        var imc = peso / (altura * altura);
        return imc;
    }

    function classificarImc(imc) {
        var classificao 
        if (imc <= 18.5) {
            classificao = "sous-poids";
        }
        else if (imc >= 18.6 && imc < 25) {
            classificao = "au niveau du poids idéal";
        }
        else if (imc >= 25 && imc < 30) {
            classificao = "Légèrement en surpoids";
        }
        else if (imc >= 30 && imc < 35) {
            classificao = "atteints d'obésité de grade I";
        }
        else if (imc >= 35 && imc < 40) {
            classificao = "avec une obésité de grade II";
        }
        else if (imc >= 40) {
            classificao = "avec une obésité de grade III";
        }
        return classificao;
    }

    function mostrarIMC(event) {    
        event.preventDefault();
        
        var $nome = document.forms['calculo_imc'].nome;
        var $peso = document.forms['calculo_imc'].peso;
        var $altura = document.forms['calculo_imc'].altura;
        var $mostrar_nome = document.forms['calculo_imc'].mostrar_nome;
        var $mostra_imc = document.getElementById("mostrar_imc");    
        
        var imc = calcularImc($peso.value, $altura.value).toFixed(2);
        
        if($nome.value != '' && $peso.value != '' && $altura.value != '' && $form.checkValidity()) {
        
            if ($mostrar_nome.value == 0 && mostar_condicao_fisica.value == 0)
                $mostra_imc.textContent = $nome.value + ", votre IMC est " +imc+", vous êtes "+classificarImc(imc)+".";       
            
            else if($mostrar_nome.value == 1 && mostar_condicao_fisica.value == 0) 
                $mostra_imc.textContent = "Votre IMC est " +imc+", vous êtes "+classificarImc(imc)+".";
            
            else if ($mostrar_nome.value == 0 && mostar_condicao_fisica.value == 1)
                $mostra_imc.textContent = $nome.value + ", votre IMC est " +imc;
            
            else if($mostrar_nome.value == 1 && mostar_condicao_fisica.value == 1) 
                $mostra_imc.textContent = "Votre IMC est " +imc;
        }                    
    }
})();