create table user (
  id int unsigned primary key auto_increment NOT NULL,
  pseudo varchar(50) NOT NULL unique,
  lastname varchar(50) NOT NULL,
  firstname varchar(50) NOT NULL,
  email varchar(255) NOT NULL unique,
  role varchar(10) NOT NULL,
  password varchar(255) NOT NULL
);

create table game (
  id int unsigned primary key auto_increment not null,
  name varchar(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  is_challenge BOOLEAN NOT NULL,
  is_popular BOOLEAN NOT NULL,
  image VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL
);

create table prize (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(30) NOT NULL,
  image VARCHAR(50) NOT NULL,
  points INT NOT NULL
);