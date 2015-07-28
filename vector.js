function Vector(x,y){
    'use strict';
    this.x = x;
    this.y = y;
}


Vector.prototype.plus = function(aVector){
    'use strict';
    console.log('Initial vector x,y('+ this.x+','+this.y+')');
    console.log('Added Vector x,y('+ aVector.x+','+aVector.y+')');
    return new Vector(this.x+aVector.x,this.y+aVector.y);
};

Vector.prototype.minus = function(aVector){
    'use strict';
    console.log('Initial vector x,y('+ this.x+','+this.y+')');
    console.log('Subtracted Vector x,y('+aVector.x+','+aVector.y+')');
    return new Vector(this.x-aVector.x,this.y-aVector.y);
};


Object.defineProperty(Vector.prototype, 'length', {
    get: function() {
        'use strict';
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// 5
