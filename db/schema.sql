create database burgers_db;

use burgers_db;

create table burgers (
id int not null auto_increment,
burger_name varchar(60) not null,
devoured boolean not null default false,
primary key(id)
)