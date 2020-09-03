create table hck.skillgroups (
    id  bigserial not null,
    name varchar(255),
    ordernum int2,
    primary key (id)
);

alter table if exists hck.skills
    add column groupid int8;
alter table if exists hck.skills
    add constraint fk_skills_skillgroup foreign key (groupid) references hck.skillgroups;


-- 27.04.2020 - Adding groups to Experiences and Qualifications

create table hck.experiencegroups (
    id  bigserial not null,
    name varchar(255),
    ordernum int2,
    primary key (id)
)

alter table if exists hck.experiences add column groupid int8
create table hck.qualificationgroups (
    id  bigserial not null,
    name varchar(255),
    ordernum int2,
    primary key (id)
)
alter table if exists hck.qualifications add column groupid int8
alter table if exists hck.experiences add constraint fk_experiences_groups foreign key (groupid) references hck.experiencegroups
alter table if exists hck.qualifications add constraint fk_qualifications_groups foreign key (groupid) references hck.qualificationgroups


-- 04.08.2020 - Adding placeOfResidence to Volunteers

alter table if exists hck.volunteers add column placeOfResidenceId int8;
alter table if exists hck.volunteers add constraint fk_volunteers_placeOfResidenceId foreign key(placeOfResidenceId) references hck.places(id);


-- 03.09.2020 -- Adding projects, vprojects, availities

create table hck.projects (
  id text not null,
  name text not null,
  ordernum int2,
	enabled boolean not null default true,
	groupid int8,
  constraint pk_projects primary key(id),
  constraint fk_projects_groupid foreign key(groupid) references hck.projectgroups(id)
);

create table hck.vprojects (
	volunteerId int8,
	projectId text,
	constraint pk_vprojects primary key(volunteerId, projectId),
	constraint fk_vprojects_volunteerId foreign key(volunteerId) references hck.volunteers(id),
	constraint fk_vprojects_projectId foreign key(projectId) references hck.projects(id)
);


create table hck.projectgroups (
	id bigserial,
	name text not null,
	ordernum int2,
	constraint pk_projectgroups primary key (id)
);


create table hck.availabilities (
	volunteerId int8,
	mondayFrom int2,
	mondayTo int2,
	tuesdayFrom int2,
	tuesdayTo int2,
	wednesdayFrom int2,
	wednesdayTo int2,
	thursdayFrom int2,
	thursdayTo int2,
	fridayFrom int2,
	fridayTo int2,
	saturdayFrom int2,
	saturdayTo int2,
	sundayFrom int2,
	sundayTo int2,
	constraint pk_availabilities primary key(volunteerId),
	constraint fk_volunteers foreign key (volunteerid) references hck.volunteers
);
