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

