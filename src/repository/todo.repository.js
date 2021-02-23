const getAllTodos = async (db) => {
  const todos = await db.query('SELECT * FROM todos');
  return todos.rows;
};
const getTodoByID = async (db, id) => {
  const todos = await db.query(`SELECT * FROM todos where id=${id}`);
  return todos.rows;
};

module.exports = { getAllTodos, getTodoByID };