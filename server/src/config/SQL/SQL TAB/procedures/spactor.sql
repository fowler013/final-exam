-- -- procedures for ACTORS TABLE
-- -- READ ALL Actors
drop procedure if exists spGetAllActors;
delimiter $$
create procedure spGetAllActors()
begin

select * from Actors;

end $$
delimiter ;
-- -- READ INDIVIDUAL Actor
drop procedure if exists spGetActor;
delimiter $$
create procedure spGetActor(p_id int)
begin

select * from Actors
where id = p_id;

end $$
delimiter ;
-- -- CREATE Actor
drop procedure if exists spCreateActor;
delimiter $$
create procedure spCreateActor(p_actor varchar(256))
begin

insert into Actors(actor)
values(p_actor);
select last_insert_id() as id;
end $$
delimiter ;
-- -- UPDATE Actor
drop procedure if exists spUpdateActor;
delimiter $$
create procedure spUpdateActor (p_id int, p_actor varchar(256))
begin

UPDATE Actors
set
    actor = coalesce(p_actor, actor)
  
where id = p_id;

end $$
delimiter ;
-- -- DELETE Actor
drop procedure if exists spDeleteActor;
delimiter $$
create procedure spDeleteActor(p_id int)
begin

delete from Actors
where id = p_id;

end $$
delimiter ;