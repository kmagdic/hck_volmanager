create table hck.test_firstnames(
	name text,
	gender char(1)
);

insert into hck.test_firstnames
values
('Andrea', 'F'),
('Anica', 'F'),
('Miroslav', 'M'),
('Lidija', 'F'),
('Lucija', 'F'),
('Ana', 'F'),
('Melita', 'F'),
('Ljubica', 'F'),
('Josip', 'M'),
('Stjepan', 'M'),
('Darko', 'M'),
('Damir', 'M'),
('Renato', 'M'),
('Aleksandar', 'M'),
('Tomislav', 'M'),
('Saša', 'M'),
('Dino', 'M'),
('Marko', 'M'),
('Mirta', 'F'),
('Maja', 'F');

create table hck.test_lastnames(
	name text
);

insert into hck.test_lastnames
values
('Milić'),
('Habek'),
('Generalić'),
('Miočić'),
('Condori'),
('Lenić'),
('Bengeri'),
('Marcijuš'),
('Holić'),
('Harambek'),
('Jozić'),
('Hrnatović'),
('Galopek'),
('Hranić'),
('Vrbanić'),
('Penezić'),
('Vnuk'),
('Harambija'),
('Novak'),
('Horvat'),
('Kovač'),
('Prekupec'),
('Hrstić'),
('Željeznjak'),
('Despot'),
('Frntić'),
('Mladenović'),
('Lach'),
('Hrnjak'),
('Maršić'),
('Želimorski'),
('Bogdan'),
('Martan'),
('Belan'),
('Bilić'),
('Martinčević'),
('Hrženjak'),
('Hoblaj'),
('Antunović'),
('Mrzljak');

create table hck.test_streets(
	name text
);

insert into hck.test_streets
values
('Zagrebačka'),
('Rapska'),
('Neretvanska'),
('Užička'),
('Trg Miroslava Krleže'),
('Ulica Augusta Šenoe'),
('Ulica Domovinskog rata'),
('Jadranska aleja'),
('Ulica Petra Preradovića'),
('Ulica Zinke Kunc'),
('Trg Kralja Tomislava'),
('Ulica Stjepana Radića'),
('Ulica Antuna Augustinčića'),
('Ulica Ivana Mažuranića'),
('Ulica Nikole Šubića Zrinskog');

create or replace function hck.random_between(low int8, high int8) returns int8 as
$$
begin
	return floor(random() * (high - low + 1) + low);
end;
$$ language 'plpgsql' strict;

create or replace function hck.test_create_data() returns void as
$$
declare
	vid int8;
	max_fn int;
	max_ln int;
	max_pl int;
	max_streets int;
	maxr int;
begin
	select count(*) into max_fn from hck.test_firstnames;
	select count(*) into max_ln from hck.test_lastnames;
	select count(*) into max_pl from hck.places;
	select count(*) into max_streets from hck.test_streets;
	insert into hck.volunteers
	(
		firstname, lastname, gender, oib, dob, addressofliving, placeoflivingid, placeofvolunteeringid, phone, email, icename, icephone,
		householdelderly, householdPregnantWomen, pregnantWoman, householdChild, householdChronicPatient, healthFine, availabilityHoursWeekly, criminalRecord)
	select
		fn.name, ln.name, fn.gender, raw_oib || hck.calc_oib(raw_oib) oib,
		current_date - interval '15 year' - (hck.random_between(0, 70) || ' year')::interval - (hck.random_between(1, 365) || ' day')::interval dob,
		streets.name || ' ' || hck.random_between(1, 200) addressofliving,
		pl.id placeofliving, vl.id placeofvolunteering,
		'+385 9' || phones.ex || ' ' || hck.random_between(100, 9999) || ' ' || hck.random_between(100, 999) phone,
		translate(lower(fn.name || '.' || ln.name), 'šđčćž', 'sdccz') || '@email.com' email,
		icefn.name || ' ' || ln.name icename,
		'+385 9' || phones.ex || ' ' || hck.random_between(100, 9999) || ' ' || hck.random_between(100, 999) icephone,
		hck.random_between(0, 1)::int::bool householdelderly,
		hck.random_between(0, 1)::int::bool householdPregnantWomen,
		hck.random_between(0, 1)::int::bool pregnantWoman,
		hck.random_between(0, 1)::int::bool householdChild,
		hck.random_between(0, 1)::int::bool householdChronicPatient,
		hck.random_between(0, 1)::int::bool healthFine,
		hck.random_between(1, 10)::int * 2 availabilityHoursWeekly,
		hck.random_between(0, 1)::int::bool criminalRecord
	from
		(select row_number() over (order by name) rn, name, gender from hck.test_firstnames) fn,
		(select row_number() over (order by name) rn, name from hck.test_lastnames) ln,
		(select lpad(hck.random_between(100000000::int8, 999999999::int8)::text, 10, '0') raw_oib) toib,
		(select row_number() over (order by name) rn, id, name from hck.places) pl,
		(select row_number() over (order by name) rn, id, name from hck.places) vl,
		(select row_number() over (order  by ex) rn, ex from (select '1' ex union select '2' union select '5' union select '8' union select '9') iphones) phones,
		(select row_number() over (order by name) rn, name from hck.test_streets) streets,
		(select row_number() over (order by name) rn, name, gender from hck.test_firstnames) icefn,
		(select hck.random_between(1, max_fn) r) rand_fn,
		(select hck.random_between(1, max_ln) r) rand_ln,
		(select hck.random_between(1, max_pl) r) rand_pl,
		(select hck.random_between(1, max_pl) r) rand_vl,
		(select hck.random_between(1, 5) r) rand_phones,
		(select hck.random_between(1, max_streets) r) rand_streets,
		(select hck.random_between(1, max_fn) r) rand_icefn
	where
		fn.rn = rand_fn.r and
		ln.rn = rand_ln.r and
		pl.rn = rand_pl.r and
		vl.rn = rand_vl.r and
		phones.rn = rand_phones.r and
		streets.rn = rand_streets.r and
		icefn.rn = rand_icefn.r
	returning id into vid;
	select count(*) into maxr from hck.qualifications;
	insert into hck.vqualifications(volunteerid, qualificationid)
	select vid, q.id
	from
		(select row_number() over (order by name) rn, id, name from hck.qualifications) q,
		(select hck.random_between(1, maxr) r from generate_series(1, 5) group by hck.random_between(1, maxr)) rand_q
	where
		q.rn = rand_q.r;
	select count(*) into maxr from hck.experiences;
	insert into hck.vexperiences(volunteerid, experienceid)
	select vid, e.id
	from
		(select row_number() over (order by name) rn, id, name from hck.experiences) e,
		(select hck.random_between(1, maxr) r from generate_series(1, 5) group by hck.random_between(1, maxr)) rand_e
	where
		e.rn = rand_e.r;
	select count(*) into maxr from hck.services;
	insert into hck.vservices(volunteerid, serviceid)
	select vid, s.id
	from
		(select row_number() over (order by name) rn, id, name from hck.services) s,
		(select hck.random_between(1, maxr) r from generate_series(1, 5) group by hck.random_between(1, maxr)) rand_s
	where
		s.rn = rand_s.r;
	select count(*) into maxr from hck.skills;
	insert into hck.vskills(volunteerid, skillid)
	select vid, s.id
	from
		(select row_number() over (order by name) rn, id, name from hck.skills) s,
		(select hck.random_between(1, maxr) r from generate_series(1, 5) group by hck.random_between(1, maxr)) rand_s
	where
		s.rn = rand_s.r;
end;
$$ language 'plpgsql';

create or replace function hck.random_data(icount int) returns void as
$$
begin
	perform hck.test_create_data() from generate_series(1, icount);
end;
$$ language 'plpgsql';

-- usage: to create 100 random data execute:
-- select hck.random_data(100)

create or replace function hck.delete_volunteer(pvolunteerid int) returns void as
$$
begin
	delete from hck.vqualifications where volunteerid = pvolunteerid;
	delete from hck.vskills where volunteerid = pvolunteerid;
	delete from hck.vexperiences where volunteerid = pvolunteerid;
	delete from hck.vservices where volunteerid = pvolunteerid;
	delete from hck.volunteers where id = pvolunteerid;
end;
$$ language 'plpgsql';

create or replace function hck.delete_data(fromvolunteerid int, tovolunteerid int) returns void as
$$
begin
	perform hck.delete_volunteer(generate_series) from generate_series(fromvolunteerid, tovolunteerid);
end;
$$ language 'plpgsql';

-- usage: to delete volunteer's data between 110 and 120 (volunteers' id) execute:
-- select hck.delete_data(110, 120)
