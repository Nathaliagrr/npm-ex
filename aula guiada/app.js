import pg from 'pg';
const{ Client } = pg;

// Configuração da conexão
// São as mesmas informações que você usa no pgAdmin!
const client = new Client({
    host:     'localhost',  // onde o banco está rodando
    port:     5432,         // porta padrão do PostgreSQL
    user:     'postgres',   // usuário do banco
    password: 'root',  // a mesma senha que você usa no pgAdmin
    database: 'alquimista_db' // o banco que criamos agora pouco
});

async function menu() {

    let rodando = true;

    while (rodando) {

        console.log('\n╔════════════════════════════════════════╗');
        console.log('║     ⚗️  LOJA DO ALQUIMISTA VALDRIS     ║');
        console.log('╠════════════════════════════════════════╣');
        console.log('║  1 - Ver itens da loja                 ║');
        console.log('║  2 - Cadastrar novo item               ║');
        console.log('║  3 - Atualizar estoque                 ║');
        console.log('║  4 - Remover item                      ║');
        console.log('║  0 - Fechar a loja                     ║');
        console.log('╚════════════════════════════════════════╝');

        const opcao = prompt('\nEscolha uma opção: ');

        switch (opcao) {
            case '1': await listarItens();      break;
            case '2': await cadastrarItem();    break;
            case '3': await atualizarEstoque(); break;
            case '4': await removerItem();      break;
            case '0':
                rodando = false;
                console.log('\n🧙 Até a próxima, aventureiro!\n');
                break;
            default:
                console.log('❌ Opção inválida. Tente novamente.');
        }
    }
}

menu();
