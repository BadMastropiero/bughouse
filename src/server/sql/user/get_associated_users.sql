SELECT
	id,
	username,
	email,
	title,
	rating_bullet,
	rd_bullet,
	rating_blitz,
	rd_blitz,
	rating_classical,
	rd_classical
FROM users
WHERE id IN(${id1}, ${id2}, ${id3}, ${id4});
