/**
 * Generate a selective update query based on a request body:
 *
 * - table: where to make the query
 * - items: the list of columns you want to update
 * - key: the column that we query by (e.g. username, handle, id)
 * - id: current record ID
 *
 * Returns object containing a DB query as a string, and array of
 * string values to be updated
 *
 */

function sqlForPartialUpdate(table, items, key, id) {
  // keep track of item indexes
  // store all the columns we want to update and associate with vals

  let idx = 1;
  let columns = [];

  // filter out keys that start with "_" -- we don't want these in DB
  for (let key in items) {
    // FIXES BUG #2
    if (key.startsWith("_") || key.startsWith("password")) {
      delete items[key]
    }
  }

  for (let column in items) {
    columns.push(`${column}=$${idx}`);
    idx += 1;
  }

  // build query
  let cols = columns.join(", ");
  // FIXES BUG #6
  let query = `UPDATE ${table} 
    SET ${cols} WHERE ${key}=$${idx} 
    RETURNING username, first_name, last_name, email, phone`;

  let values = Object.values(items);
  values.push(id);

  return {query, values};
}


module.exports = sqlForPartialUpdate;
