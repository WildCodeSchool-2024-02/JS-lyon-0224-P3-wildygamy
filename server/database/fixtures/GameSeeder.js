const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

class GameSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "game", truncate: true });
  }

  // The run method - Populate the 'item' table with fake data

  run() {
    const games = [
      {
        name: "Pac-man",
        category: "Arcade, Labyrinthe",
        is_challenge: true,
        image: "image_back/pac_man.webp",
        synopsis: "Vous incarnez Pac-Man perdu au beau milieu d'un labyrinthe infesté de fantômes pouvant être éliminés lorsque Pac-Man avale des pac-gommes.",
      },
      {
        name: "Pong",
        category: "Arcade, Sport, Tennis de table",
        is_challenge: false,
        image: "image_back/pong.jpg",
        synopsis: "Pong est une version améliorée du jeu vidéo inspiré du tennis de table développé par Ralph Baer et son équipe à Sanders Associates en 1967. C'est le premier jeu vidéo à connaître un succès populaire. Il est notemment adapté en 1977 sur console Atari 2600 dans le jeu multi-sports Video Olympics.",
      },
      {
        name: "Space Invaders",
        category: "Arcade, Shoot'em up",
        is_challenge: false,
        image: "image_back/space_invaders.jpg",
        synopsis: "Space Invaders est un jeu vidéo développé par Taito, sorti en 1978 sur borne d'arcade. Il s'agit d'un shoot them up fixe conçu et programmé par Tomohiro Nishikado. Considéré comme le premier archétype du shoot them up, il est aussi l'un des titres les plus influents et célèbres de l'histoire du jeu vidéo.",
      },
      {
        name: "Street Fighter 2",
        category: "Combat",
        is_challenge: false,
        image: "image_back/street_fighter_ii.webp",
        synopsis: "Second épisode du jeu de combat, vous donnant le choix entre 8 personnages avec des spécificités qui leur sont propre en solo comme en multijoueurs. Sorti en 1991 sur système d'arcade CP System, et sujet à diverses adaptations, dont la plus célèbre, sur Super Nintendo.",
      },
      {
        name: "Super Sidekicks",
        category: "Football",
        is_challenge: false,
        image: "image_back/super_sidekicks.jpg",
        synopsis: "Super Sidekicks est un jeu de football réaliste développé et édité par SNK en 1992.",
      },
      {
        name: "X-Men",
        category: "Beat'em up",
        is_challenge: false,
        image: "image_back/x_men.jpg",
        synopsis: "Incarnez vos super héros préférés et sauvez le monde avec Professeur Xavier.",
      },
      {
        name: "Avengers",
        category: "Beat'em up",
        is_challenge: false,
        image: "image_back/avengers.jpg",
        synopsis: "Avenger (également orthographié Avengers) est un jeu d'arcade en vue aérienne et à défilement vertical. Le jeu se déroule à Paradise City, où le méchant Geshita a capturé six filles de la ville. L'objectif du joueur (qui incarne Ryu ou Ko) est de bannir Geshita de Paradise City une fois pour toutes. Au cours du jeu, le joueur peut récupérer des bonus comme le Speed Up, le Super Punch, des grenades, des Shurikens, des Nunchakus et des points de vie supplémentaires.",
      },
      {
        name: "Double Dragon",
        category: "Beat'em up",
        is_challenge: false,
        image: "image_back/double_dragon.jpg",
        synopsis: "Situé dans un New York post-apocalyptique, Double Dragon est l'histoire de Billy et Jimmy Lee, deux frères jumeaux formés au style de combat Sou-Setsu-Ken. Ensemble, ils gèrent une petite école d'entraînement aux arts martiaux, enseignant à leurs élèves la self-défense. Un jour, la petite amie de Billy, Marian, est enlevée dans la rue par les Black Warriors, un gang de rue sauvage dirigé par un homme appelé Willy. ",
      },
      {
        name: "OutRun",
        category: "Course",
        is_challenge: false,
        image: "image_back/outrun.webp",
        synopsis: "Out Run (アウトラン), également orthographié OutRun ou Outrun, est un jeu vidéo d'arcade de course automobile conçu par Yū Suzuki et Sega-AM2 et commercialisé par Sega en 1986 sur borne d'arcade. Il fut porté sur de nombreux autres supports. Le jeu a été un grand succès chez les amateurs d'arcade, à tel point qu'il est souvent considéré comme un des meilleurs jeu de course d'arcade. ",
      },
      {
        name: "Mortal Kombat",
        category: "Combat",
        is_challenge: false,
        image: "image_back/mortal_kombat.webp",
        synopsis: "Mortal Kombat (communément abrégé en MK) est un jeu vidéo de Midway Manufacturing Company sorti sur borne d'arcade en 1992 puis sur de multiples autres plateformes. Il est célèbre pour sa violence, sa brutalité et son côté gore. Battez vos adversaires pour défier le guerrier Shokan nommé Goro, champion du tournoi depuis plus de 500 ans.",
      },
    ];

    games.forEach((game) => {
      this.insert(game);
    });
  }
}

// Export the ItemSeeder class
module.exports = GameSeeder;
