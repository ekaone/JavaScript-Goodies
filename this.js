const obj = {
  a: 1,
  b: 2,
  child: {
    a: 12,
    b: 10,
    func: function() {
      return this.a;
    }
  }
};
const { child } = obj;
console.log(child.func());
