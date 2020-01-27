drop user mmtr cascade;

create user mmtr
identified by tuition
default tablespace users
temporary tablespace temp
quota 10m on users;

grant connect to mmtr;
grant resource to mmtr;
grant create session to mmtr;
grant create table to mmtr;
grant create view to mmtr;

--conn mmtr/tuition;