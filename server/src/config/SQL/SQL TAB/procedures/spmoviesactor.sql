-- -- procedures for MOVIES TABLE
-- --READ ALL Movie Actors
drop procedure if exists spGetAllMovieActors;
delimiter $$
create procedure spGetAllMovieActors()
begin

select *
from MovieActors;

end $$
delimiter ;
-- --READ INDIVIDUAL Movie Actor
drop procedure if exists spGetMovieActor;
delimiter $$
create procedure spGetMovieActor(p_id int)
begin

select *
from MovieActors
where id = p_id;

end $$
delimiter ;
-- --CREATE Movie Actor
drop procedure if exists spCreateMovieActor;
delimiter $$
create procedure spCreateMovieActor(p_actorid int, p_actor varchar(256))
begin

insert into MovieActors(actorid, actor)
values(p_actorid, p_actor);
select last_insert_id() as id;

end $$
delimiter ;
-- --UPDATE Movie Actor
drop procedure if exists spUpdateMovieActor;
delimiter $$
create procedure spUpdateMoiveActor(p_id int, p_actor varchar(256))
begin

update MovieActors
set
    actor = coalesce(p_actor, actor),
    
where id = p_id;

end $$
delimiter ;

-- --DELETE Movie Actor
drop procedure if exists spDeleteMovieActor;
delimiter $$
create procedure spDeleteMovieActor(p_id int)
begin

delete from MovieActors
where id = p_id;

end $$
delimiter ;

-- --grab all actors by a certain movie

drop procedure if exists spGetActorsByMovie;
delimiter $$
create procedure spGetActorByMovie(p_movieid int)
begin

select *
from MovieActors
where movieid = p_movieid;

end $$
delimiter ;