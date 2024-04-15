/* WONT WORK: ENCRYPTED PASSWORDS EXPECTED */
-- INSERT INTO users (email, password, role_enum)
-- VALUES
--     ('user1@example.com', 'testpassword1', 'normal'), 
--     ('user2@example.com', 'testpassword2', 'normal'), 
--     ('authuser@example.com', 'strongpassword', 'authorized');

INSERT INTO polygons (name, coordinates, notes, status, created_by, modified_by)
VALUES 
    ('Boat Sighting', '{{-4.48, 57.3}, {-4.45, 57.3}, {-4.45, 57.29}, {-4.48, 57.29}, {-4.48, 57.3}}', 'Saw her while sailing in the area.', 'active', 1, 1),
    ('Beach Sighting', '{{-4.43, 57.306}, {-4.44, 57.32}, {-4.45, 57.31}, {-4.43, 57.306}}', 'Reported by beach goer through toll-free number.', 'active', 1, 2),
    ('Dream Vision', '{{-4.48, 57.2}, {-4.45, 57.2}, {-4.45, 57.19}, {-4.48, 57.19}, {-4.48, 57.2}}', 'In a dream, I saw Nessie in the exact fovorite position of my regular hike in the area.', 'archived', 2, 2);

UPDATE polygons 
SET status = 'investigating', 
    notes = CONCAT(notes, '\nLoch Investigator Lenny dispatched to the area.'),  
    modified_by = 3,
    modified_date = CURRENT_TIMESTAMP 
WHERE id = 2;

SQL
UPDATE polygons 
SET status = 'archived', 
    notes = CONCAT(notes, '\nNobody available for investigation - Time elapsed.'),  
    modified_by = 3,  
    modified_date = CURRENT_TIMESTAMP 
WHERE id = 3; 