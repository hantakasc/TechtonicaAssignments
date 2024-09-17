--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: events_id_seq; Type: TABLE; Schema: public; Owner: christinahantakas
--

CREATE TABLE public.events (
    id integer NOT NULL,
    name character varying(255),
    category character varying(255),
    PRIMARY KEY (id)
);


--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: christinahantakas
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: christinahantakas
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: events_id_seq id; Type: DEFAULT; Schema: public; Owner: christinahantakas
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: christinahantakas
--

COPY public.events (id, name, category) FROM stdin;
1   Movie Night     Movie
2   Dinner          Eats
3   Art Museum      Exhibits
4   Beach           Outside
5   Game Night      Inside
\.


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: christinahantakas
--

SELECT pg_catalog.setval('public.events_id_seq', 5, true);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: christinahantakas
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

