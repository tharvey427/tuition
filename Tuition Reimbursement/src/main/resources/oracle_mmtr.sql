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

drop table grade_format cascade constraints;
drop table event_type cascade constraints;
drop table role cascade constraints;
drop table employee cascade constraints;
drop table employee_role cascade constraints;
drop table department cascade constraints;
drop table status cascade constraints;
drop table claim cascade constraints;
drop table claim_status cascade constraints;
drop table claim_comment cascade constraints;
drop table claim_document cascade constraints;

create table grade_format (
    grade_format_id number(20) primary key,
    grade_format varchar2(100)
);
    
create table event_type (
    event_type_id number(20) primary key,
    event_name varchar2(100),
    reimbursement_percentage decimal(5,2)
);
    
create table employee (
    employee_id number(20) primary key,
    first_name varchar2(50),
    last_name varchar2(50),
    username varchar2(50),
    password varchar2(50),
    supervisor_id number(20),
    department_id number(20)
);
    
create table role (
    role_id number(20) primary key,
    role varchar2(50)
);
    
create table employee_role (
    employee_role_id number(20) primary key,
    employee_id number(20),
    role_id number(20),
    constraint fk_role_emp foreign key (employee_id) 
    references employee (employee_id),
    constraint fk_role_role foreign key (role_id)
    references role (role_id));
    
create table department (
    department_id number(20) primary key,
    department_name varchar2(100),
    department_head number(20),
    constraint fk_department_employee foreign key
    (department_head) references employee (employee_id));
    
create table status (
    status_id number(20) primary key,
    status varchar2(100)
);
    
create table claim (
    claim_id number(20) primary key,
    employee_id number(20),
    event_type_id number(20),
    grade_format_id number(20),
    start_date varchar2(20),
    submission_date varchar2(20),
    location varchar2(100),
    description varchar2(100),
    justification varchar2(200),
    cost float(50),
    constraint fk_claim_employee foreign key (employee_id)
    references employee (employee_id),
    constraint fk_claim_event foreign key (event_type_id) 
    references event_type (event_type_id),
    constraint fk_claim_grade foreign key (grade_format_id)
    references grade_format (grade_format_id)
);
    
create table claim_status (
    claim_id number(20),
    status_id number(20),
    constraint fk_cs_claim foreign key (claim_id) references
    claim (claim_id),
    constraint fk_cs_status foreign key (status_id) references
    status (status_id)
);
    
create table claim_comment (
    comment_id number(20) primary key,
    claim_id number(20),
    employee_id number(20),
    constraint fk_comment_claim foreign key (claim_id)
    references claim (claim_id),
    constraint fk_comment_employee foreign key (employee_id)
    references employee (employee_id)
);
    
create table claim_document (
    document_id number(20) primary key,
    claim_id number(20),
    file_type varchar2(150),
    file_description varchar2(300),
    document_url varchar2(300),
    constraint fk_document_claim foreign key (claim_id)
    references claim (claim_id)
);
    
alter table employee add constraint fk_employee_supervisor 
foreign key (supervisor_id) references employee (employee_id);

alter table employee add constraint fk_employee_department 
foreign key (department_id) references department (department_id);
--add fk for emp supervisor and dept

