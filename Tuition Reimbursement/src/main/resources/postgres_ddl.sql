drop table if exists grade_format cascade;
drop table if exists event_type cascade;
drop table if exists employee cascade;
drop table if exists role_type cascade;
drop table if exists employee_role;
drop table if exists department;
drop table if exists claim cascade;
drop table if exists status_type cascade;
drop table if exists claim_status;
drop table if exists claim_comment;
drop table if exists claim_document;
drop table if exists allowance;

CREATE TABLE IF NOT EXISTS grade_format(
	 grade_format_id INT primary key,
   grade_format VARCHAR(255)
);

create table if not exists event_type(
	event_type_id INT primary key,
	event_name VARCHAR(255),
	reimbursement_percentage integer
);

create table if not exists employee(
	employee_id integer primary key,
	first_name VARCHAR(255) not null,
	last_name VARCHAR(255) not null,
	username VARCHAR(255) not null,
	password VARCHAR(255) not null,
	supervisor_id integer,
	department_id integer
);

create table if not exists role_type(
	role_id integer primary key,
	role_name VARCHAR(255)
);

create table if not exists employee_role(
	employee_role_id integer primary key,
	employee_id integer,
	role_id integer,
	constraint fk_emp_id
		foreign key(employee_id)
			references employee(employee_id)
			on delete cascade,
	constraint fk_emp_role
		foreign key(role_id)
			references role_type(role_id)
			on delete cascade
);

create table if not exists department(
	department_id integer primary key,
	department_name VARCHAR(255),
	department_head integer,
	constraint fk_dept_head foreign key(department_head)
		references employee(employee_id)
		on delete cascade
);

create table if not exists status_type(
	status_id integer primary key,
	status_name VARCHAR(255)
);

create table if not exists claim(
	claim_id integer primary key,
    employee_id integer,
    -- role_id number(20), should role be in this table??? linked from employee_role
    event_type_id integer,
    grade_format_id integer,
    start_date VARCHAR(255),
    submission_date VARCHAR(255),
    location VARCHAR(255),
    description VARCHAR(255),
    justification VARCHAR(255),
    cost integer,
	constraint fk_claims_emp foreign key(employee_id)
		references employee(employee_id)
		on delete cascade,
	constraint fk_claims_event foreign key(event_type_id)
		references event_type(event_type_id)
		on delete cascade,
	constraint fk_claims_grade foreign key(grade_format_id)
		references grade_format(grade_format_id)
		on delete cascade
);

create table if not exists claim_status(
	claim_id integer,
	status_id integer,
	constraint claim_status_pkey primary key(claim_id, status_id),
	constraint fk_claim_claim foreign key(claim_id)
		references claim(claim_id)
		on delete cascade,
	constraint fk_claim_status foreign key(status_id)
		references status_type(status_id)
		on delete cascade
);

create table if not exists claim_comment(
	comment_id integer primary key,
	claim_id integer,
	employee_id integer,
	user_comment VARCHAR(255),
	constraint fk_comment_claim foreign key(claim_id)
		references claim(claim_id)
		on delete cascade,
	constraint fk_comment_emp foreign key(employee_id)
		references employee(employee_id)
		on delete cascade
);

create table if not exists claim_document(
	document_id integer primary key,
	claim_id integer,
	file_type VARCHAR(255),
	file_description VARCHAR(255),
	document_url VARCHAR(255),
	constraint fk_doc_claim foreign key(claim_id)
		references claim(claim_id)
		on delete cascade
);

create table if not exists allowance(
	allowance_id integer primary key,
	employee_id integer,
	funds_available float,
	funds_awarded float,
	pending_funds float,
	constraint fk_allowance_employee foreign key(employee_id)
		references employee(employee_id)
		on delete cascade
);