const WebSocket = require('ws');

// Array de mensagens motivacionais
const motivationalMessages = [
    "A persistência é o caminho do êxito.",
    "Você é mais forte do que pensa.",
    "Acredite em você mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você é capaz de alcançar tudo o que deseja.",
    "Nada é impossível para um coração cheio de vontade.",
    "Lembre-se: o campeão é definido pela habilidade de se levantar quando cai.",
    "Você está no caminho certo. Continue assim!",
    "Seja a mudança que você deseja ver no mundo.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "O sucesso é a melhor forma de vingança.",
    "Você é mais corajoso do que imagina.",
    "A vida é 10% do que acontece com você e 90% como você reage a isso.",
    "Cada dia é uma nova oportunidade para alcançar seus objetivos.",
    "Não existe elevador para o sucesso, você precisa subir degrau por degrau.",
    "Acredite no seu potencial. Você é capaz de coisas incríveis.",
    "Lembre-se: o que você pensa, você se torna.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Você é o arquiteto do seu próprio destino.",
    "Se você sonha, você pode fazer.",
    "Você é único e especial. Acredite em si mesmo!",
    "Não desista. O início é sempre mais difícil.",
    "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
    "Não se preocupe com os obstáculos. Eles são apenas parte do caminho.",
    "A persistência é o segredo do sucesso.",
    "A jornada de mil milhas começa com um único passo.",
    "Nunca é tarde demais para seguir seus sonhos.",
    "Cada passo que você dá te aproxima do seu objetivo.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Sua determinação e vontade são suas melhores armas.",
    "Você é mais forte do que imagina.",
    "Você é capaz de superar qualquer desafio.",
    "Lembre-se: grandes poderes trazem grandes responsabilidades.",
    "Não deixe que o medo te impeça de alcançar seus sonhos.",
    "Você está no caminho certo. Continue firme!",
    "O universo conspira a favor de quem não conspira contra ninguém.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "Nunca é tarde demais para ser quem você poderia ter sido.",
    "Se você não pode fazer grandes coisas, faça pequenas coisas de forma grandiosa.",
    "Você é capaz de conquistar o que deseja. Acredite em si mesmo!",
    "Grandes realizações exigem tempo e paciência.",
    "Acredite no poder dos seus sonhos.",
    "Você é capaz de criar o seu próprio destino.",
    "O sucesso é alcançado através da persistência.",
    "Você é mais forte do que os desafios que enfrenta.",
    "Não desista. O melhor ainda está por vir.",
    "Cada pequeno passo te aproxima do seu objetivo.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "Siga em frente com determinação. Você vai conseguir!",
    "Você é o único limitador dos seus sonhos.",
    "Lembre-se: o sucesso é a soma de pequenos esforços diários.",
];

// Função para escolher uma mensagem aleatória
function getRandomMessage() {
    return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
}

// Criando um servidor WebSocket na porta 8080
const wss = new WebSocket.Server({ port: 8080 });

// Quando um cliente se conecta
wss.on('connection', function connection(ws) {
    console.log('Cliente conectado');

    // Enviar uma mensagem motivacional aleatória a cada 10 segundos
    const interval = setInterval(function () {
        const message = getRandomMessage();
        ws.send(message);
    }, 3000);

    // Quando o cliente fecha a conexão
    ws.on('close', function () {
        console.log('Cliente desconectado');
        clearInterval(interval); // Limpar o intervalo quando o cliente desconectar
    });
});