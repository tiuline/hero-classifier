/*
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

function CalcularNivel(xp){

        if(xp < 1000)
            return "Ferro";
        else if(xp < 2000)
            return "Bronze";
        else if(xp < 3000)
            return "Prata";
        else if(xp < 4000)
            return "Ouro";
        else if(xp < 5000)
            return "Platina";
        else if(xp < 6000)
            return "Ascendente";
        else if(xp < 7000)
            return "Radiante";
        else if(xp <= 8000)
            return "Imortal";
}

function CalcularDados() {
    const nome = document.getElementById('txtNomeHeroi').value;
    const XP = document.getElementById('numExperiencia').value;

    alert("O Herói de nome " + nome + " está no nível de "+ CalcularNivel(XP) );
}