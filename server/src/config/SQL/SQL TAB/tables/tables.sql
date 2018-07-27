drop table movies;

create table Movies(
id int not null auto_increment primary key,
title varchar(256) not null,
director varchar(256) not null,
poster text not null,
_created datetime default current_timestamp
);

drop table actors;

create table Actors(
id int not null auto_increment primary key,
actor int not null varchar(256),
_created datetime default current_timestamp
);


drop table MovieActors;

create table MoviesActors(
movieid int not null,
actorid int not null,
_created datetime default current_timestamp
);