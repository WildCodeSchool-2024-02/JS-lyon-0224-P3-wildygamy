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
        image: "/images_lots/eco-cup.png",
        points: "100",
      },
      {
        name: "Bonnet Wildy Gamy",
        image: "/images_lots/bonnet.png",
        points: "200",
      },
      {
        name: "Casquette Wildy-Gamy",
        image: "/images_lots/casquette.png",
        points: "300",
      },
      {
        name: "T-shirt Wildy Gamy",
        image: "/images_lots/t-shirt-noir.png",
        points: "500",
      },
      {
        name: "Tot bag Wildy-Gamy",
        image: "/images_lots/tot-bag.png",
        points: "600",
      },
      {
        name: "Mug",
        image: "/images_lots/mug.png",
        points: "700",
      },
      {
        name: "Pokemon",
        image: "/images_lots/pikachu.png",
        points: "1000",
      },
      {
        name: "Steam Card",
        image: "/images_lots/steam-card.png",
        points: "1500",
      },
      {
        name: "Pass journée Wildy-Gamy",
        image: "passe-une-journee.jpg",
        points: "2500",
      },
      {
        name: "Nintendo 64",
        image: "/images_lots/nitendo_64",
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
