function a() {
    console.log(this);
    this.newvariable = 'hello';
}
a();
console.log(newvariable);