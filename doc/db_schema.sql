drop schema if exists hck cascade;

create schema hck;

create table hck.hckSociety(
	id bigserial,
	name text not null,
	type text not null,
	ordernum int2 not null default '0',
	constraint pk_hckSociety primary key(id)
);

create table hck.places(
	id bigserial,
	name text not null,
	county text not null,
	postcode integer,
	hckSocietyId int8 not null,
	constraint pk_places primary key(id),
	constraint fk_places_hckSocietyId foreign key(hckSocietyId) references hck.hckSociety(id)
);

create table hck.volunteers(
	id bigserial,
	firstName text not null,
	lastName text not null,
	dob date,
	oib char(11),
	gender char(1),
	addressOfLiving text,
	placeOfLivingId int8,
	placeOfVolunteeringId int8,
	phone text,
	email text,
	iceName text,
	icePhone text,
	consentProcessPersonalData bool,
	householdElderly bool,
	householdPregnantWomen bool,
	pregnantWoman bool,
	householdChild bool,
	householdChronicPatient bool,
	healthFine bool,
	healthDetails text,
	availabilityHoursWeekly int2 not null default '0',
	availabilityDetails text,
	criminalRecord bool,
	note text,
	backgroundCheckNeeded bool,
	backgroundCheckPassed bool,
	datetimeEntry timestamptz not null default current_timestamp,
	datetimeLastUpdate timestamptz,
	constraint pk_volunteers primary key(id),
	constraint fk_volunteers_placeOfLivingId foreign key(placeOfLivingId) references hck.places(id),
	constraint fk_volunteers_placeOfVolunteeringId foreign key(placeOfVolunteeringId) references hck.places(id)
);

create or replace function hck.calc_oib(s text)
 returns text
 language plpgsql
as $function$
declare
  i int;
  a int := 10;
  c text;
  cnumber int;
begin
  if length(s) < 10 then
    return '';
  end if;
  for i in 1..10 loop
    c := substr(s, i, 1);
    if c < '0' or c > '9' then
      return '';
    end if;
    a := a + c::int;
    a := a % 10;
    if a = 0 then
      a := 10;
    end if;
    a := a * 2;
    a := a % 11;
  end loop;
  cnumber := 11 - a;
  if cnumber = 10 then
    cnumber := 0;
  end if;
  return cnumber::text;
end;
$function$
;

create or replace function hck.check_oib(s text)
 returns boolean
 language plpgsql
as $function$
begin
  if length(s) != 11 then
    return false;
  end if;
  return hck.calc_oib(s) = substr(s, 11, 1);
end;
$function$
;

create or replace function hck.trgfn_check_oib() returns trigger LANGUAGE plpgsql as $function$
begin
	if not hck.check_oib(new.oib) then
		raise exception 'invalid OIB for record %', new.id;
	end if;
	return new;
end;
$function$
;

create trigger trg_check_oib
	before update of oib or insert on hck.volunteers
	for each row
	execute procedure hck.trgfn_check_oib();

create table hck.qualifications(
	id bigserial,
	name text not null,
	ordernum int2,
	constraint pk_qualifications primary key(id)
);

create table hck.vqualifications(
	volunteerId int8,
	qualificationId int8,
	constraint pk_vqualifications primary key(volunteerId, qualificationId),
	constraint fk_vqualifications_volunteerId foreign key(volunteerId) references hck.volunteers(id),
	constraint fk_vqualifications_qualificationId foreign key(qualificationId) references hck.qualifications(id)
);

create table hck.vcustomqualifications(
	volunteerId int8,
	item int2 not null,
	name text not null,
	constraint pk_cqualifications primary key(volunteerId, item),
	constraint fk_cqualifications_volunteerId foreign key(volunteerId) references hck.volunteers(id)
);

create table hck.skills(
	id bigserial,
	name text not null,
	ordernum int2,
	constraint pk_skills primary key(id)
);

create table hck.vskills(
	volunteerId int8,
	skillId int8,
	constraint pk_vskills primary key(volunteerId, skillId),
	constraint fk_vskills_volunteerId foreign key(volunteerId) references hck.volunteers(id),
	constraint fk_vskills_skillId foreign key(skillId) references hck.skills(id)
);

create table hck.vcustomskills(
	volunteerId int8,
	item int2 not null,
	name text not null,
	constraint pk_cskills primary key(volunteerId, item),
	constraint fk_cskills_volunteerId foreign key(volunteerId) references hck.volunteers(id)
);

create table hck.experiences(
	id bigserial,
	name text not null,
	ordernum int2,
	constraint pk_experiences primary key(id)
);

create table hck.vexperiences(
	volunteerId int8,
	experienceId int8,
	constraint pk_vexperiences primary key(volunteerId, experienceId),
	constraint fk_vexperiences_volunteerId foreign key(volunteerId) references hck.volunteers(id),
	constraint fk_vexperiences_experienceId foreign key(experienceId) references hck.experiences(id)
);

create table hck.vcustomexperiences(
	volunteerId int8,
	item int2 not null,
	name text not null,
	constraint pk_cexperiences primary key(volunteerId, item),
	constraint fk_cexperiences_volunteerId foreign key(volunteerId) references hck.volunteers(id)
);

create table hck.services(
	id bigserial,
	name text not null,
	ordernum int2,
	constraint pk_services primary key(id)
);

create table hck.vservices(
	volunteerId int8,
	serviceId int8,
	constraint pk_vservices primary key(volunteerId, serviceId),
	constraint fk_vservices_volunteerId foreign key(volunteerId) references hck.volunteers(id),
	constraint fk_vservices_serviceId foreign key(serviceId) references hck.services(id)
);

create table hck.vcustomservices(
	volunteerId int8,
	item int2 not null,
	name text not null,
	constraint pk_cservices primary key(volunteerId, item),
	constraint fk_cservices_volunteerId foreign key(volunteerId) references hck.volunteers(id)
);