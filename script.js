alert("ACM3 carregado");

const terminal = document.getElementById("terminal");
const answersDiv = document.getElementById("answers");

function typeText(text, speed = 15) {
    return new Promise((resolve) => {

        terminal.innerText = "";

        let i = 0;

        const interval = setInterval(() => {

            terminal.innerText += text[i];

            i++;

            if (i >= text.length) {
                clearInterval(interval);
                resolve();
            }

        }, speed);

    });
}

const riddles = [

    {
        question: "Sou a liturgia pela qual um mosaico preserva o desenho precisamente ao consentir na substituição de cada tessela. Os comentadores da Quinta Abóbada disputavam se minha continuidade era identidade ou mera obstinação ontológica. Quanto mais me exerço, menos vestígios restam do artífice inicial. Quem sou eu?",
        answers: [
            "Persistência",
            "Transfiguração",
            "Adaptação"
        ],
        correct: 2
    },

    {
        question: "Sou a discrepância acumulada entre duas margens que juram pertencer ao mesmo rio. Nenhum instante reclama minha autoria; todavia, ao cabo de eras, o prefácio já não reconhece a epístola que dele procedeu. Habito somente as grandezas para as quais a memória é demasiado exígua. Quem sou eu?",
        answers: [
            "Devir",
            "Metamorfose",
            "Evolução"
        ],
        correct: 2
    },

    {
        question: "Sou o excedente ilegível que converte um umbral em servidão voluntária. Os geômetras da Câmara Obscura sustentavam que não amplio o portador, mas o perímetro das consequências que dele emanam. Onde me acumulo, o impossível torna-se mera etiqueta caduca. Quem sou eu?",
        answers: [
            "Potência",
            "Influência",
            "Poderes"
        ],
        correct: 2
    },

    {
        question: "Sou a fome que metaboliza o próprio alimento e, ainda assim, recrudesce. Nos claustros de um observatório sem centro, verificou-se que cada saciedade minha produz um enxame de carências mais refinadas. Meu acabamento equivaleria à minha anulação. Quem sou eu?",
        answers: [
            "Inquirição",
            "Exegese",
            "Pesquisa"
        ],
        correct: 2
    },

    {
        question: "Sou o dispositivo pelo qual certas convicções recebem o privilégio provisório de continuar respirando. Não coroo sobreviventes; apenas multiplico os mecanismos de execução contra eles. Chamam-me construtora de saberes, embora minha ocupação consista sobretudo em demoli-los. Quem sou eu?",
        answers: [
            "Critério",
            "Ceticismo",
            "Ciência"
        ],
        correct: 2
    },

    {
        question: "Sou a persistência sem rosto que subsiste ao naufrágio sucessivo de seus próprios intérpretes. Os anais da Cidade Septiforme registram minha estranheza: sou inteiramente composto por partes transitórias e, não obstante, pareço mais longevo que todas elas. Quem sou eu?",
        answers: [
            "Ordem",
            "Soberania",
            "Estado"
        ],
        correct: 2
    },

    {
        question: "Sou a folga infinitesimal entre o selo e a cera, entre o eco e sua cavidade. Minha estabilidade depende de jamais coincidir perfeitamente com aquilo cuja aparência usurpo; se tal coincidência sobreviesse, dissolver-me-ia sem ruína nem vestígio. Quem sou eu?",
        answers: [
            "Simulacro",
            "Ambiguidade",
            "Mentira"
        ],
        correct: 2
    }
];

let randomOrder = [];
let currentQuestion = 0;

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

async function startBoot() {

    answersDiv.innerHTML = "";

    await typeText(
        `Terminal ACM3.V1

Inicialização de arquivos corrompidos...`
    );

    setTimeout(async () => {

        await typeText(
            `Terminal ACM3.V1

Inicialização de arquivos corrompidos...

[OK]
[OK]
[ERRO]
[OK]

Memória recuperada.`
        );

    }, 2000);

    setTimeout(() => {

        randomOrder = shuffle(
            [...Array(riddles.length).keys()]
        );

        currentQuestion = 0;

        showQuestion();

    }, 6000);
}

async function showQuestion() {

    answersDiv.innerHTML = "";

    const riddle =
        riddles[randomOrder[currentQuestion]];

    await typeText(
        "> " + riddle.question,
        8
    );

    riddle.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-button";

        button.innerText =
            String.fromCharCode(65 + index) +
            ") " +
            answer;

        button.onclick = () => {

            if (index === riddle.correct) {

                currentQuestion++;

                if (
                    currentQuestion >= riddles.length
                ) {

                    showEnding();

                } else {

                    showQuestion();
                }

            } else {

                validationError();
            }
        };

        answersDiv.appendChild(button);

    });

}

async function validationError() {

    answersDiv.innerHTML = "";

    await typeText(
        "ERRO DE VALIDAÇÃO",
        25
    );

    setTimeout(() => {

        startBoot();

    }, 2000);
}

async function showEnding() {

    answersDiv.innerHTML = "";

    await typeText(
        `Dia 598, 1949

Concluídas as investigações realizadas durante a espondilectoplastia com reimplante da paciente cinco, Margarie Goldstone, quatro anos de idade, procedemos à inoculação do composto 179 na carcaça metálica concebida pelo Doutor Harold. O procedimento, executado em desestruturação integral, exérese das células da medula e reimplante subsequente, foi coroado de êxito irrefutável.

Não registro ressalvas, porque não as encontrei: nenhuma margem escapou ao protocolo, nenhuma variável resistiu ao controle da equipe. O composto 179, cuja numeração carrega o peso silencioso de cento e setenta e oito tentativas anteriores das quais não se escreve, permanece estável dentro da carcaça.

Quanto ao reimplante no corpo da paciente, era consequência prevista, e por isso mesmo aceita, que seus centros nervosos fossem integralmente bloqueados após a operação. Instalou-se, assim, um estado contínuo de apatia emocional em Margarie, ao qual se soma a demência progressiva do sistema nervoso.

Ela não se alimenta há três dias sem que a enfermeira lhe conduza a mão. A literatura disponível não oferece precedente de reversão. Oferece silêncio, e é dentro desse silêncio que o trabalho continua.

Dia 599-1984: CORROMPIDOS

Dia 1985, 1953

Seguindo o calendário do dia (ARQUIVO CORROMPIDO), hoje, durante a amostragem de laboratório com o Doutor Harold, sua máquina demonstrou os primeiros sinais de impulsos elétricos.

A cada miligrama do composto 179, mostrou-se possível mover os músculos sintéticos de seu antebraço por cinco segundos.

Considerando que dispõe agora, com a medula provisória, de uma reserva contínua de um litro por dia e de um estoque adicional de oitenta e nove litros, há margem mais do que suficiente para o movimento.

Consigno o dado sem entusiasmo: dado é dado, e não escrevo para me comover com ele.

Em minha visão, e não a submeto a discussão, a designação de "máquina" para este ser está completamente equivocada.

Cada fibra de seu corpo que envelopa o esqueleto metálico é orgânica.

Ele é seu próprio ser, sua própria raça, criada do líquido primordial de nossa espécie.

Ele é o ápice.

O Ápice.

E é por isso que escrevo estas linhas com a calma de quem tranca uma porta por dentro: aquilo que se ergue acima de nós não pede licença para descer.

Meu Ápice.`,
        1
    );

    const button =
        document.createElement("button");

    button.className =
        "answer-button";

    button.innerText =
        "PRÓXIMO";

    button.onclick =
        showLastScreen;

    answersDiv.appendChild(button);
}

async function showLastScreen() {

    answersDiv.innerHTML = "";

    await typeText(
        `Research unconcluded since turn-off (1961) Still processing...Articulating...Simulating.`,
        20
    );
}

startBoot();