import pg from 'pg';
const {Client} = pg;

const client = new Client({
    host:   'localhost',
    port:   5432,
    user:   'postgres',
    password:   'root',
    database:   'escola_db'
});

async function totalAlunos() {

    try {
        await client.connect();
        const total = await client.query('SELECT COUNT(*) FROM alunos');
        const media = await client.query('SELECT AVG(nota) FROM alunos');

        console.log("batata");

        total.rows.forEach(client => {
           for(let i = 0; i < client.alunos; i++){
            total = [i];
            console.log("O total de alunos:  ", {total});
           }
        });
        total.rows.forEach(client => {
            for(let i = 0; i < client.nota; i++){
                total = [i];
                media = nota / total;
                console.log("A média dos alunos:  ", {media});
            }
        })
       

    } catch (erro) {
        console.log('❌ Erro ao buscar total de alunos:', erro.message);

    } finally {
        await client.end();
    }
}

totalAlunos();