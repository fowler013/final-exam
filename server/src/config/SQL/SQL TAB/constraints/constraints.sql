
-- -- fk for movieid in MovieActors table
alter table MovieActors
add constraint fk_MovieidMovieActors
foreign key (movieid)
references Movies(id);
-- -- fk for actorid in MovieActors table
alter table MovieActors
add constraint fk_ActoridMovieActors
foreign key (actorid)
references Actors(id);