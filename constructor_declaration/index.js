// As funções criadas com a função construtora não criam fechamentos para seus 
// contextos de criação; eles sempre são criados no âmbito global. 
// Ao executá-los, eles só poderão acessar suas próprias variáveis ​​locais 
// e globais, não aquelas do escopo em que a função construtora foi criada.

var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

var f1 = createFunction1();
console.log(f1()); 