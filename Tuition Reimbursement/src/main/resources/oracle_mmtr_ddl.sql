drop table grade_format cascade constraints;
drop table event_type cascade constraints;
--drop table claim cascade constraints;
drop table role_type cascade constraints;
drop table employees cascade constraints;
--drop table employee cascade constraints;
drop table employee_role cascade constraints;
drop table department cascade constraints;
drop table status cascade constraints;
drop table claims cascade constraints;
drop table claim_status cascade constraints;
drop table claim_comment cascade constraints;
drop table claim_document cascade constraints;
drop table allowance cascade constraints;

--drop sequence claim_seq;
--drop sequence comment_seq;
--drop sequence document_seq;
--drop sequence allowance_seq;

create table grade_format (
    grade_format_id number(20) primary key,
    grade_format varchar2(100)
);
    
create table event_type (
    event_type_id number(20) primary key,
    event_name varchar2(100),
    reimbursement_percentage decimal(5,2)
);
    
create table employees (
    employee_id number(20) primary key,
    first_name varchar2(50),
    last_name varchar2(50),
    username varchar2(50),
    password varchar2(50),
    supervisor_id number(20),
    department_id number(20)
);
    
create table role_type (
    role_id number(20) primary key,
    role_name varchar2(50)
);
    
create table employee_role (
    employee_role_id number(20) primary key,
    employee_id number(20),
    role_id number(20),
    constraint fk_role_emp foreign key (employee_id) 
    references employees (employee_id),
    constraint fk_role_role foreign key (role_id)
    references role_type (role_id));
    
create table department (
    department_id number(20) primary key,
    department_name varchar2(100),
    department_head number(20),
    constraint fk_department_employee foreign key
    (department_head) references employees (employee_id));
    
create table status (
    status_id number(20) primary key,
    status varchar2(100)
);
    
create table claims (
    claim_id number(20) primary key,
    employee_id number(20),
    -- role_id number(20), should role be in this table??? linked from employee_role
    event_type_id number(20),
    grade_format_id number(20),
    start_date varchar2(20),
    submission_date varchar2(20),
    location varchar2(100),
    description varchar2(100),
    justification varchar2(200),
    cost float(50),
    constraint fk_claim_employee foreign key (employee_id)
    references employees (employee_id),
--    constraint fk_claim_role foreign key (role_id)
--    references role_type (role_id),
    constraint fk_claim_event foreign key (event_type_id) 
    references event_type (event_type_id),
    constraint fk_claim_grade foreign key (grade_format_id)
    references grade_format (grade_format_id)
);
    
create table claim_status (
    claim_id number(20),
    status_id number(20),
    constraint fk_cs_claim foreign key (claim_id) references
    claims (claim_id),
    constraint fk_cs_status foreign key (status_id) references
    status (status_id)
);
    
create table claim_comment (
    comment_id number(20) primary key,
    claim_id number(20),
    employee_id number(20),
    user_comment varchar2(200),
    constraint fk_comment_claim foreign key (claim_id)
    references claims (claim_id),
    constraint fk_comment_employee foreign key (employee_id)
    references employees (employee_id)
);
    
create table claim_document (
    document_id number(20) primary key,
    claim_id number(20),
    file_type varchar2(150),
    file_description varchar2(300),
    document_url varchar2(300),
    constraint fk_document_claim foreign key (claim_id)
    references claims (claim_id)
);

create table allowance (
    allowance_id number(20) primary key,
    employee_id number(20),
    funds_available float(50),
    funds_awarded float(50),
    pending_funds float(50),
    constraint fk_allowance_employee foreign key (employee_id) references
    employees (employee_id)
);
    
--gives an error when starting tomcat but displays info correctly
alter table employees add constraint fk_employee_supervisor 
foreign key (supervisor_id) references employees (employee_id);

alter table employees add constraint fk_employee_department 
foreign key (department_id) references department (department_id);
--add fk for emp supervisor and dept

--sequences and triggers
--create sequence claim_seq;
--create sequence comment_seq;
--create sequence document_seq;
--create sequence allowance_seq;
--
--create or replace trigger claim_pk_trig
--before insert or update on claims
--for each row
--begin
--    if INSERTING then
--        select claim_seq.nextVal into :new.claim_id from dual;
--    elsif UPDATING then
--        select :old.claim_id into :new.claim_id from dual;
--    end if;
--end;
--/
--
--create or replace trigger comment_pk_trig
--before insert or update on claim_comment
--for each row
--begin
--    if INSERTING then
--        select comment_seq.nextVal into :new.comment_id from dual;
--    elsif UPDATING then
--        select :old.comment_id into :new.comment_id from dual;
--    end if;
--end;
--/
--
--create or replace trigger document_pk_trig
--before insert or update on claim_document
--for each row
--begin
--    if INSERTING then
--        select document_seq.nextVal into :new.document_id from dual;
--    elsif UPDATING then
--        select :old.document_id into :new.document_id from dual;
--    end if;
--end;
--/
--
--create or replace trigger allowance_pk_trig
--before insert or update on allowance
--for each row
--begin
--    if INSERTING then
--        select allowance_seq.nextVal into :new.allowance_id from dual;
--    elsif UPDATING then
--        select :old.allowance_id into :new.allowance_id from dual;
--    end if;
--end;
--/