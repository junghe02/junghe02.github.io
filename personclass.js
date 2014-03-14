PersonClass = function(name) {

    var ssnumber = 872892234
    var weight = 172
    this.age = 21
    this.name = name
    
    //this.bar = bv

    //this.foo = function() {
	//console.log(this.bar)
	//baz()
   // }
    
    //var baz = function() {
	//console.log(myprivatevariable)
    //}


    this.gainWeight = function(ibs) {
        weight = weight + ibs
        return weight
}
    this.getSSN = function() {
        return ssnumber
}
    this.getWeight = function() {
        return weight
}

PersonClass.prototype.birthday = function(a) {
    this.age = this.age + a
    return this.age
}

console.log(gainWeight(3))
console.log(getSSN())
console.log(getWeight())
//x.foo()
Henry = new PersonClass(Henry)
}
