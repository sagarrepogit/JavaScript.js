const user = {
  name: "Sagar",
  greet() {
    console.log("Hi, " + this.name);
  },
  greetLaer() {
    setTimeout(function() {
      console.log("Hi later, " + this.name);
    }, 1000);
  }
};

user.greet();       // ?
user.greetLater();  // ?
consol.log(greet())
