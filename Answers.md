## Self-Study/Essay Questions

1. Explain the difference between `RDBMS` and `SQL`.

Answer: 

RDBMS stands for Relational Database Management System. It is a collections of programs and capabilities that enable you to create, update, administer and interact with a relational database. 

SQL (Structured Query Language) is the language used to interact with/access the database. 

1. Why do tables need a `primary key`?

Answer:

Tables need a primary key to identify all unique table records. 

1. What is the name given to a table column that references the primary key on another table.

Answer:

The Foreign key references the primary key on another table. If the primary key is set to null the foreign key also needs to be etc.

1. What do we need in order to have a _many to many_ relationship between two tables.

Answer:

An example of many to many is that a book can have more than one author and an author can write more than one book. You need to have a third table with a foreign key that refrences the primary keys on the other tables to have a many to many relationship between two tables.


