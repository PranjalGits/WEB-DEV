// this Keyword //

const student = {
  Name:"Pranjal",
  age:23,
  eng:95,
  math:91,
  phy:97,

  getAvg() {
    let avg = (this.eng + this.math + this.phy / 3);
  }
}