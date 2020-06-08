const express = require('express');
const server = express();
const port = 3000;

const database = require("./database/db");

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get('/', (req, res) => res.render("index.html"));

server.get('/create-point', (req, res) => {
    return res.render("create-point.html")
});

server.post("/save-point", (req, res) => {

    // 2 - inserir dados na tabela
    const insertQuery = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `;

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ];

    function afterInsertData(err) {
        if (err) {
            console.log(err);
            return res.render("create-point.html", { error: true });
        }

        console.log("[LOG] PLACE Cadastrado com sucesso...");
        console.log("[LOG] ", this);

        return res.render("create-point.html", { saved: true });
    }

    database.run(insertQuery, values, afterInsertData);
});

server.get('/search-results', (req, res) => {

    const search = req.query.search;

    if (search == 0) {
        return res.render("search-results.html", { total: 0 });
    }

    database.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log("[ERRO] ", err);
        };

        const total = rows.length;

        console.log(`[LOG] Buscou por ${search} e retornou ${total} places...`);
        return res.render("search-results.html", { places: rows, total: total });
    });
});

server.listen(port, () => console.log(`Server listening on port ${port}!`))