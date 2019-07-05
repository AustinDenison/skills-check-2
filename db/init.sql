create table products (
    products_id serial primary key not null,
    name varchar not null,
    price decimal not null,
    image_url varchar not null
);