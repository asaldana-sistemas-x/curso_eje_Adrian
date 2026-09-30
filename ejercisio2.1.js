function Animal(nombre){this.nombre = nombre}

Animal.prototype.hacerSonido = function () {
    console.log(`${this.nombre} me enojo cuando hace ruido`);
};

Animal.prototype.moverse = function () {
    console.log(`${this.nombre} se mueve`);
};

function Ave(nombre) {
    Animal.call(this, nombre)
};

Ave.prototype = Object.create(Animal.prototype);
Ave.prototype.constructor = Ave

const pajaro = new Ave('tweety');
console.log(pajaro instanceof Ave, pajaro instanceof Animal);
pajaro.hacerSonido();
pajaro.moverse();