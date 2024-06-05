create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table game (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  category VARCHAR(100) not null,
  is_challenge BOOLEAN NOT NULL,
  image BLOB,
  synopsis TEXT NOT NULL
);
