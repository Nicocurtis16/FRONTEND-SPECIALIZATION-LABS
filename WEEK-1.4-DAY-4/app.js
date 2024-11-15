// 1. Object Creation Basics
const superhero = {
    name: "Captain America",
    secretIdentity: "Steve Rogers",
    powers: ["Super Strength", "Vibranium Shield", "Enhanced Agility"],
    weakness: "Lack of understanding modern technology"
   };
   
   // 2. Methods and Functionality
   superhero.usePower = function(powerName) {
    console.log(`${this.name} used their ${powerName} power!`);
   };
   
   superhero.revealIdentity = function() {
    console.log(`${this.name}'s secret identity is ${this.secretIdentity}.`);
   };
   
   // 3. Object Constructors
   function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
   
    this.usePower = function(powerName) {
      console.log(`${this.name} used their ${powerName} power!`);
    };
   
    this.revealIdentity = function() {
      console.log(`${this.name}'s secret identity is ${this.secretIdentity}.`);
    };
   }
   
   const ironMan = new Superhero("Iron Man", "Tony Stark", ["Advanced Suit", "Flight", "Repulsor Beams"], "Overconfidence");
   
   // 4. Prototypal Inheritance
   Superhero.prototype.getInfo = function() {
    console.log(`Name: ${this.name}, Secret Identity: ${this.secretIdentity}, Powers: ${this.powers.join(", ")}, Weakness: ${this.weakness}`);
   };
   
   ironMan.getInfo();
   
   // 5. Object Iteration and Transformation
   const superheroes = [
    { name: "Captain America", secretIdentity: "Steve Rogers", powers: ["Super Strength", "Vibranium Shield", "Enhanced Agility"], weakness: "Lack of understanding modern technology" },
    { name: "Iron Man", secretIdentity: "Tony Stark", powers: ["Advanced Suit", "Flight", "Repulsor Beams"], weakness: "Overconfidence" },
    { name: "Thor", secretIdentity: "Thor Odinson", powers: ["Mjolnir", "Lightning Control", "Superhuman Strength"], weakness: "Arrogance" },
    { name: "Black Widow", secretIdentity: "Natasha Romanoff", powers: ["Martial Arts", "Stealth", "Weapons Expertise"], weakness: "Emotional Vulnerability" }
   ];
   
   // Use forEach to log each superhero's info
   superheroes.forEach(hero => {
    console.log(`Name: ${hero.name}, Secret Identity: ${hero.secretIdentity}, Powers: ${hero.powers.join(", ")}, Weakness: ${hero.weakness}`);
   });
   
   // Use map to create a new array of superhero names
   const heroNames = superheroes.map(hero => hero.name);
   console.log(heroNames);
   
   // Use filter to create a new array of superheroes with a specific power
   const powerfulHeroes = superheroes.filter(hero => hero.powers.includes("Superhuman Strength"));
   console.log(powerfulHeroes);
   
  