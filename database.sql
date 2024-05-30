-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- DATABASE:   fs-react-shopping
CREATE TABLE "shopping list"(
    "id" serial primary key,
    "name" varchar(80) not null,
    "quantity" decimal(6,1) not null,
    "unit" varchar(20),
    "purchased" boolean default false
);

INSERT INTO "shopping list" ("name", "quantity", "unit")
VALUES  ('Apples', '3', 'lbs'),
        ('Oranges', '4', 'lbs'),
        ('Almonds', '5', 'bunches'),
        ('Onions', '4', 'lbs');

SELECT * FROM "shopping list"
ORDER BY "name" ASC; 