CREATE DATABASE IF NOT EXISTS bookDetail;

use bookDetail;

CREATE TABLE IF NOT EXISTS details (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(20),
  pagenum INT,
  publisher VARCHAR(100),
  firstPubDate VARCHAR(30),
  originalPubDate VARCHAR(30),
  title VARCHAR(100),
  isbn10 VARCHAR(20),
  isbn13 VARCHAR(20),
  language VARCHAR(20)
  );

CREATE TABLE IF NOT EXISTS characters (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  bookId INT
);

CREATE TABLE IF NOT EXISTS awards (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  year INT,
  bookId INT
);

CREATE TABLE IF NOT EXISTS editions (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  isbn10 VARCHAR(20),
  isbn13 VARCHAR(20),
  title VARCHAR(100),
  type VARCHAR(20),
  publisher VARCHAR(100),
  originalPubDate VARCHAR(30),
  coverurl VARCHAR(250),
  bookId INT
);
