-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS listings CASCADE;
CREATE TABLE listings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  resource_id INTEGER REFERENCES resources(id),
  quantity INTEGER NOT NULL,
  listing_type VARCHAR(255) NOT NULL,
  oxygen_level INTEGER
);