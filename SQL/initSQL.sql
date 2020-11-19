drop table if exists alldogs;
create table alldogs(
_id serial primary key,
dog_name varchar(255),
dog_owner varchar(255),
dog_size varchar(2),
dog_breed varchar(255),
dog_desc varchar(255)
);