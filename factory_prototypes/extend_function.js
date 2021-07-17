// Adicionando função de extensão a Object.prototype
Object.prototype.extend = function(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            this[i] = obj[i];
        }
    }
};

var objA = {"nome": "roberto", "carro": "hb20"};
var objB = {"nome": "james", "idade": 22};

objA.extend(objB);
objA; // {"nome": "james", "idade": 22, "carro": "hb20"};

// Lodash
_.assign(objA, objB);


////////////////////////////////////////////////
// Extending multiple objects
////////////////////////////////////////////////

var objA = {"nome": "roberto", "carro": "hb20"};
var objB = {"nome": "james", "idade": 22};
var objC = {"pet": "gato"};

// Lodash
_.assign(objA, objB, objC)
// {"nome": "james", "carro": "hb20", "idade": 22, "pet": "gato"}