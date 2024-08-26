const Botao = document.getElementsByClassName('Ops');
const Klin = document.getElementById('Klin');
const Adrum = document.getElementById('Adrum');
const JetKids = document.getElementById('JetKids');
const Kidy = document.getElementById('Kidy');
const Pé_com_Pé = document.getElementById('Pe_com_Pe');
const Ortofino = document.getElementById('Ortofino');
const Pampili = document.getElementById('Pampili');
const Plugt_Calçados = document.getElementById('Plugt_Calçados');
const WordColors = document.getElementById('WordColors');
const Pequito = document.getElementById('Pequito');

const Mudancas = (Botao) =>{
    if(Botao===Klin){
        document.getElementById(Klin).classList.remove('.Desligado');
        document.getElementById(Klin).classList.add('.Ligado');
    }else{
        document.getElementById(Klin).classList.remove('.ligado');
    }
}