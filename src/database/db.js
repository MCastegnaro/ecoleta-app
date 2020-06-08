
// importar dependencias do sqlite3
const sqlite3 = require("sqlite3").verbose();


// Criar o objeto que ira fazer operacoes no bano de dados
const db = new sqlite3.Database("./src/database/database.db");

// exportar banco
module.exports = db;

// Utilizar o objeto de banco de dados, para nossas operacoes.
db.serialize(() => {
    // Com comandos SQL, eu vou:

    // // 1 - criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEST,
    //         items TEXT
    //     );
    // `);

    // // 2 - inserir dados na tabela
    // const insertQuery = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `;

    // const values = [
    //     "https://images.unsplash.com/photo-1579756423478-02bc82a97679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
    //     "Papersider",
    //     "Guilherme Gembella, Jardim américa",
    //     "Número 260",
    //     "Santa catarina",
    //     "Rio do sul",
    //     "Resíduos eletrônicos, Lâmpadas"
    // ];

    // function afterInsertData(err) {
    //     if (err) {
    //         console.log(err);
    //     }

    //     console.log("[LOG] PLACE Cadastrado com sucesso...");
    //     console.log("[LOG] ", this);
    // }
    // db.run(insertQuery, values, afterInsertData);

    //3 - consultar dados na tabela
    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err) {
    //         console.log(err);
    //     }

    //     console.log("[LOG] Places: ", rows);

    // });

    // // 4 - deletar um dado na tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [2], function (err) {
    //     if (err) {
    //         console.log(err);
    //     }

    //     console.log("[LOG] registro deletado com sucesso");

    // })
});