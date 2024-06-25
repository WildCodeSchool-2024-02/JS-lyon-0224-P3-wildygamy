create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  role varchar(50) not null,
  password varchar(255) not null
);

create table game (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  category VARCHAR(100) not null,
  is_challenge BOOLEAN NOT NULL,
  is_popular BOOLEAN NOT NULL,
  image VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL
);

create table prize (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(80) NOT NULL,
  image VARCHAR(255) NOT NULL,
  points INT not null
);