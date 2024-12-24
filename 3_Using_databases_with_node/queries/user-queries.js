const queries = {
  getAllItems: 'SELECT * FROM Users',
  getItemById: 'SELECT * FROM Users WHERE id = $1',
  createItem: 'INSERT INTO Users (email, password) VALUES ($1, $2) RETURNING *',
  updateItem: 'UPDATE Users SET name = $1, description = $2 WHERE id = $3 RETURNING *',
  deleteItem: 'DELETE FROM Users WHERE id = $1 RETURNING *',
};

export default queries;
