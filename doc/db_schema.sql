CREATE SEQUENCE public.places_id_seq;

CREATE TABLE places
(
    id bigint NOT NULL DEFAULT nextval('places_id_seq'::regclass),
    county character varying(50),
    name character varying(50),
    postcode character varying(11),

    CONSTRAINT pk_places PRIMARY KEY (id)
);



CREATE SEQUENCE public.volunteers_id_seq;

CREATE TABLE volunteers
(
    id bigint not null default nextval('volunteers_id_seq'::regclass),
    firstName character varying(50),
    lastName character varying(50),
    oib character varying(11),
    gender character varying(1),
    phoneMobile character varying(15),
    email character varying(254),
    entryDate timestamp without TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    placeid bigint,

    CONSTRAINT pk_volunteers PRIMARY KEY (id),
    CONSTRAINT fk_volunteers_places FOREIGN KEY (placeid) REFERENCES places
)

