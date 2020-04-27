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

