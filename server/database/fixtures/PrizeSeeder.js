const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

class PrizeSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "prize", truncate: true });
  }

  // The run method - Populate the 'item' table with fake data

  run() {
    const prizes = [
      {
        name: "Eco-cup wildy Gamy",
        image: "",
        points: "100",
      },
      {
        name: "Bonnet Wildy Gamy",
        image: "",
        points: "200",
      },
      {
        name: "Casquette Wildy-Gamy",
        image: "",
        points: "300",
      },
      {
        name: "T-shirt Wildy Gamy",
        image: "",
        points: "500",
      },
      {
        name: "Tot bag Wildy-Gamy",
        image: "",
        points: "600",
      },
      {
        name: "Mug",
        image: "",
        points: "700",
      },
      {
        name: "Pokemon",
        image: "",
        points: "1000",
      },
      {
        name: "Steam Card",
        image: "",
        points: "1500",
      },
      {
        name: "Une journée d'accès à la salle Wildy-Gamy",
        image: "",
        points: "2500",
      },
      {
        name: "Nintendo 64",
        image: "",
        points: "5000",
      },
    ];

    prizes.forEach((prize) => {
      this.insert(prize);
    });
  }
}

// Export the ItemSeeder class
module.exports = PrizeSeeder;
