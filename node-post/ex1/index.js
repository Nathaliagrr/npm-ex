import pg from 'pg';
const {Client} = pg;
import promptSync from 'prompt-sync';
const prompt = promptSync();

const client = new Client({
    host:   'localhost',
    port:   5432,
    user:   'postgres',
    password:   'root',
    database:   'jogos_db'
});

async function listarNotas() {
    try {
        await client.connect();

        const total = await client.query('SELECT COUNT(*) AS total FROM alunos');
        const media = await client.query('SELECT AVG(nota) AS media FROM alunos');

        console.log("Total de alunos: " + total.rows[0].total);
        console.log("Media dos alunos: " + media.rows[0].media);

    } catch(erro) {
        console.log("Erro", erro.message);
    } finally {
        await client.end();
    }
};

async function listarJogos() {
    try {
        await client.connect();

        


    }
}

listarNotas();

