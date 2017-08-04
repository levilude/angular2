var minhaVar = 'minha variavel';
function minhaFuncao(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
//Para utilizar a ES2015 precisa de um transpiler
//que vai compilar o código da ES2015 em javaScript puro
//let (no lugar de var)
var num = 2;
var PI = 3.14;
//Função normal javaScript
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//Arraw Functions
numeros.map(function (valor) { return valor * 2; });
//Classe matematica com um metodo soma
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        x + y;
    };
    return Matematica;
}());
var n1 = 'asdfasdf';
n1 = 4;
