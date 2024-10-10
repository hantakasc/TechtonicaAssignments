--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Homebrew)
-- Dumped by pg_dump version 14.13 (Homebrew)

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
-- Name: books; Type: TABLE; Schema: public; Owner: christinahantakas
--

CREATE TABLE public.books (
    book_id integer NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    publication_date integer
);


ALTER TABLE public.books OWNER TO christinahantakas;

--
-- Name: books_book_id_seq; Type: SEQUENCE; Schema: public; Owner: christinahantakas
--

CREATE SEQUENCE public.books_book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.books_book_id_seq OWNER TO christinahantakas;

--
-- Name: books_book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: christinahantakas
--

ALTER SEQUENCE public.books_book_id_seq OWNED BY public.books.book_id;


--
-- Name: books book_id; Type: DEFAULT; Schema: public; Owner: christinahantakas
--

ALTER TABLE ONLY public.books ALTER COLUMN book_id SET DEFAULT nextval('public.books_book_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: christinahantakas
--

COPY public.books (book_id, title, author, publication_date) FROM stdin;
1	The Cat in the Hat	Dr. Seuss	2020
2	Drown	Junot Diaz	2018
3	The Boy Who Said No	Patti Sheehy	2021
\.


--
-- Name: books_book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: christinahantakas
--

SELECT pg_catalog.setval('public.books_book_id_seq', 3, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: christinahantakas
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (book_id);


--
-- PostgreSQL database dump complete
--

