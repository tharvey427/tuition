drop database if exists mmtr;
create database if not exists mmtr;
use mmtr;

-- DELIMITER $$
-- use mmtr;
-- create procedure foreign_key() 
-- begin 
-- alter table claim drop foreign key fk_claim_grade;
-- alter table event_type drop foreign key fk_claim_event;
-- end $$

-- set foreign key checks
drop table if exists grade_format;
drop table if exists event_type;
drop table if exists employee;
drop table if exists department;
drop table if exists status;
drop table if exists claim;
drop table if exists claim_status;
drop table if exists comment;
drop table if exists document_upload;

create table grade_format (
	grade_format_id int not null auto_increment,
    grade_format varchar(50),
    primary key (grade_format_id));
    
create table event_type (
	event_type_id int not null auto_increment,
    event_type varchar(50),
    reimbursement_percentage decimal(6,3),
    primary key (event_type_id));
    
create table employee (
	employee_id int not null auto_increment,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    username varchar(20) not null,
    password varchar(20) not null,
    supervisor_id int,
    department_id int,
    index(department_id),
    index(supervisor_id),
    primary key (employee_id));
  
create table role (
	role_id int not null auto_increment,
    role_name varchar(20),
    primary key (role_id));
    
create table emp_role (
	emp_role_id int not null auto_increment,
    employee_id int,
    role_id int,
    constraint fk_role_emp
		foreign key (employee_id)
        references employee(employee_id)
			on update cascade
			on delete cascade,
	constraint fk_role_role
		foreign key (role_id)
        references role(role_id)
			on update cascade
            on delete cascade,
	primary key (emp_role_id));

create table department (
	department_id int not null auto_increment,
    department_name varchar(50) not null,
    department_head int,
    constraint fk_dept_head
		foreign key (department_head)
        references employee(employee_id)
			on update cascade
            on delete cascade,
	primary key (department_id));
    
create table status (
	status_id int not null auto_increment,
    status varchar(50) not null,
    primary key (status_id));
    
create table claim (
	claim_id int not null auto_increment,
    employee_id int not null,
    event_type_id int not null,
    grade_format_id int not null,
    start_date long,
    submission_date long,
    location varchar(50),
    description varchar(50),
    justification varchar(50),
    cost double,
    constraint fk_claim_emp
		foreign key (employee_id)
        references employee(employee_id)
			on update cascade
            on delete cascade,
	constraint fk_claim_event
		foreign key (event_type_id)
        references event_type(event_type_id)
			on update cascade
            on delete cascade,
	constraint fk_claim_grade
		foreign key (grade_format_id)
        references grade_format(grade_format_id)
			on update cascade
            on delete cascade,
	primary key (claim_id));
    
create table claim_status (
	claim_id int not null,
    status_id int not null,
    constraint fk_cs_claim
		foreign key (claim_id)
        references claim(claim_id)
			on update cascade
            on delete cascade,
	constraint fk_cs_status
		foreign key (status_id)
        references status(status_id)
			on update cascade
            on delete cascade);
            
create table comment (
	comment_id int not null auto_increment,
    claim_id int not null,
    employee_id int not null,
    constraint fk_comment_claim
		foreign key (claim_id)
        references claim(claim_id)
			on update cascade
            on delete cascade,
	constraint fk_comment_emp
		foreign key (employee_id)
		references employee(employee_id)
			on update cascade
            on delete cascade,
	primary key (comment_id));
    
create table document_upload (
	document_id int not null auto_increment,
    claim_id int not null,
    file_type varchar(100) not null,
    file_description varchar(250) not null,
    document_url varchar(250),
    constraint fk_doc_claim
		foreign key (claim_id)
        references claim(claim_id)
			on update cascade
            on delete cascade,
	primary key (document_id));
    
alter table employee
	add constraint fk_emp_sup
		foreign key (supervisor_id)
			references employee(employee_id)
			on delete cascade
			on update cascade,
	add constraint fk_emp_dept
		foreign key (department_id)
			references department(department_id)
            on delete cascade
            on update cascade;
        
insert into grade_format (grade_format)values ('Letter Grade');
insert into grade_format (grade_format) values ('Pass/Fail');
insert into grade_format (grade_format) values ('Attended/Not Attended');

insert into event_type(event_type, reimbursement_percentage)
values('University Course', 80);
insert into event_type(event_type, reimbursement_percentage)
values('Seminar', 60);
insert into event_type(event_type, reimbursement_percentage)
values('Certification Preparation Class', 75);
insert into event_type(event_type, reimbursement_percentage)
values('Certification', 100);
insert into event_type(event_type, reimbursement_percentage)
values('Technical Training', 90);
insert into event_type(event_type, reimbursement_percentage)
values('Other', 30);

insert into status(status) values('Pending Supervisor Approval');
insert into status(status) values('Pending Department Head Approval');
insert into status(status) values('Pending Benefits Coordinator Approval');
insert into status(status) values('Pending Document Upload');
insert into status(status) values('Approved');
insert into status(status) values('Denied');

insert into employee(first_name, last_name, username, password)
values('Hermoine', 'Granger', 'her', 'grange');
insert into employee(first_name, last_name, username, password) 
values('Luna', 'Lovegood', 'loony', 'love');
insert into employee(first_name, last_name, username, password, supervisor_id) 
values ('Dobby', 'Free Elf', 'dobby', 'socks', 1);
insert into employee(first_name, last_name, username, password, supervisor_id) 
values('Nymphadora', 'Tonks', 'tonks', 'lupin', 2);
insert into employee(first_name, last_name, username, password, supervisor_id) 
values('Rowena', 'Ravenclaw', 'raven', 'claw', 4);
insert into employee(first_name, last_name, username, password, supervisor_id) 
values('Sybill', 'Trelawney', 'syb', 'lawn', 4);
insert into employee(first_name, last_name, username, password, supervisor_id) 
values('Filius', 'Flitwick', 'flit', 'wick', 2);

insert into role(role_name) values('Employee');
insert into role(role_name) values('Supervisor');
insert into role(role_name) values('Department Head');
insert into role(role_name) values('BenCo');

insert into emp_role(employee_id, role_id) values(1, 4);
insert into emp_role(employee_id, role_id) values(2, 4);
insert into emp_role(employee_id, role_id) values(3, 1);
insert into emp_role(employee_id, role_id) values(4, 2);
insert into emp_role(employee_id, role_id) values(5, 1);
insert into emp_role(employee_id, role_id) values(6, 1);
insert into emp_role(employee_id, role_id) values(7, 3);

insert into department(department_name, department_head) 
values('International Magical Cooperation', 1);
insert into department(department_name, department_head) 
values('Magical Accidents and Catastrophes', 2);
insert into department(department_name, department_head) 
values('Mysteries', 7);

update employee set department_id=1 where employee_id = 1;
update employee set department_id=1 where employee_id = 3;
update employee set department_id=2 where employee_id = 2;
update employee set department_id=2 where employee_id = 4;
update employee set department_id=2 where employee_id = 5;
update employee set department_id=3 where employee_id = 7;
update employee set department_id=3 where employee_id = 6;

