function Foo(params1) {
  this.params1 = params1;
}

/** 
 * buat instance baru dari object Foo
 * semua properties di dalam Foo akan di-inherits (diturunkan) 
 * ke dalam instance baru 
 */
const instance = new Foo("Params 1");

// ambil property default di dalam object Foo
console.log(instance.params1); // ---- output: Params 1

 // tidak bisa menambah property baru tanpa prototype
Foo.newProperty = "This is new Property"
console.log(instance.newProperty) // ---- output: undefined

// menambah property baru dengan prototype
Foo.prototype.bar = "This is new Bar";
console.log(instance.bar); // ---- output: This is new Bar
