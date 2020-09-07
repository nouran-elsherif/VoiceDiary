import * as SQLite from "expo-sqlite";

class DatabaseHelper {
  constructor(db) {
    this.db = db;
  }


  getAllEntries(result) {
    const promise = new Promise((resolve, reject) => {
    this.db.transaction((tx) => {
      tx.executeSql(
        `select * from table_entry;`,
        [],
        (_, result) => { resolve(result) },
        (_, err) => { reject(err) }
        // (transaction, resultSet) => {
        //   result(resultSet.rows._array);
        // }, console.error
    
      )
    });
  })
  return promise;
  }

  addEntryDB(text,date){
    const promise = new Promise((resolve, reject) => {
      this.db.transaction((tx)=>{
          tx.executeSql('INSERT INTO table_entry (entryText, entryDate) VALUES (?,?)',
          [text, date],
          (_, result) => { resolve(result) },
          (_, err) => { reject(err) }
          );
      });
  })
  return promise;
}

  deleteEntryDB(id){
    this.db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM  table_entry where entryID=?',
          [id],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'User deleted successfully'
              );
            } else {
              alert('Could not delete entry');
            }
          }
        );
      });
  }


  initializeDatabase() {
    this.db.transaction((tx) => {
      tx.executeSql(
        `create table if not exists table_entry(entryID integer primary key autoincrement,
          entryText text not null, entryDate text not null);`
      );

    }, console.error);
  }
}

export default new DatabaseHelper(SQLite.openDatabase("database.this.db"));
