
insert into grade_format values (1, 'Letter Grade');
insert into grade_format values (2, 'Pass/Fail');
insert into grade_format values (3, 'Attended/Not Attended');

insert into event_type values(1, 'University Course', 80);
insert into event_type values(2, 'Seminar', 60);
insert into event_type values(3, 'Certification Preparation Class', 75);
insert into event_type values(4, 'Certification', 100);
insert into event_type values(5, 'Technical Training', 90);
insert into event_type values(6, 'Other', 30);

insert into status_type values(1, 'Pending Supervisor Approval');
insert into status_type values(2, 'Pending Department Head Approval');
insert into status_type values(3, 'Pending Benefits Coordinator Approval');
insert into status_type values(4, 'Pending Document Upload');
insert into status_type values(5, 'Approved');
insert into status_type values(6, 'Denied');

insert into employee(employee_id, first_name, last_name, username, password) 
values(1, 'Hermoine', 'Granger', 'her', 'grange');
insert into employee(employee_id, first_name, last_name, username, password) 
values(2, 'Luna', 'Lovegood', 'loony', 'love');
insert into employee(employee_id, first_name, last_name, username, password, supervisor_id) 
values(3, 'Dobby', 'Free Elf', 'dobby', 'socks', 1);
insert into employee(employee_id, first_name, last_name, username, password, supervisor_id)
values(4, 'Nymphadora', 'Tonks', 'tonks', 'lupin', 2);
insert into employee(employee_id, first_name, last_name, username, password, supervisor_id)
values(5, 'Rowena', 'Ravenclaw', 'raven', 'claw', 4);
insert into employee(employee_id, first_name, last_name, username, password, supervisor_id)
values(6, 'Sybill', 'Trelawney', 'syb', 'lawn', 4);
insert into employee(employee_id, first_name, last_name, username, password, supervisor_id)
values(7, 'Filius', 'Flitwick', 'flit', 'wick', 2);

insert into role_type values(1, 'Employee');
insert into role_type values(2, 'Supervisor');
insert into role_type values(3, 'Department Head');
insert into role_type values(4, 'BenCo');

--figure out all the levels of role- all will employee, some will have others
insert into employee_role values(1, 1, 4);
insert into employee_role values(2, 1, 3);
insert into employee_role values(3, 1, 1);
insert into employee_role values(4, 2, 3);
insert into employee_role values(5, 2, 1);
insert into employee_role values(6, 3, 1);
insert into employee_role values(7, 4, 2);
insert into employee_role values(8, 5, 1);
insert into employee_role values(9, 6, 1);
insert into employee_role values(10, 7, 3);

insert into department values(1, 'International Magical Cooperation', 1);
insert into department values(2, 'Magical Accidents and Catastrophes', 2);
insert into department values(3, 'Mysteries', 7);

update employee set department_id=1 where employee_id = 1;
update employee set department_id=1 where employee_id = 3;
update employee set department_id=2 where employee_id = 2;
update employee set department_id=2 where employee_id = 4;
update employee set department_id=2 where employee_id = 5;
update employee set department_id=3 where employee_id = 7;
update employee set department_id=3 where employee_id = 6;

--adding claims
insert into claim(claim_id, employee_id, event_type_id, grade_format_id, start_date, submission_date, 
location, description, justification, cost) 
values(1, 3, 5, 2, '2018-04-27', '01-04-2018', 'AZ', 'House elf stuff', 
'Cause Dobby likes it', 350);

insert into claim(claim_id, employee_id, event_type_id, grade_format_id, start_date, submission_date,
location, description, justification, cost) 
values(2, 1, 3, 3, '2019-12-31', '08-04-2019', 'CA', 'Leviosa not leviosa', 
'Hermoine is the best', 1500);

insert into claim(claim_id, employee_id, event_type_id, grade_format_id, start_date, submission_date, 
location, description, justification, cost) 
values(3, 3, 2, 1, '2019-05-17', '02-03-2019', 'GA', 'Peeves', 
'Cause Dobby likes it', 350);

--adding a couple test comments
insert into claim_comment(comment_id, claim_id, employee_id, user_comment)
values(1, 1, 1, 'Dobby, please explain how this course is relevant to your work');

insert into claim_comment(comment_id, claim_id, employee_id, user_comment)
values(2, 1, 3, 'Dobby is free. He can do what he wants');