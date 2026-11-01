alert("ACM3 carregado");

const terminal = document.getElementById("terminal");
const answersDiv = document.getElementById("answers");

function typeText(text, speed = 2) {
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

{
    console.log("STARTBOOT EXECUTADO");

    answersDiv.innerHTML = "";

    terminal.innerText =
        `Terminal ACM3.V1

Inicialização de arquivos corrompidos...`;

    setTimeout(() => {

        terminal.innerText =
            `Terminal ACM3.V1

Inicialização de arquivos corrompidos...

[OK]
[OK]
[ERRO]
[OK]

Memória recuperada.`;

    }, 500);

    setTimeout(() => {

        randomOrder =
            shuffle([...Array(riddles.length).keys()]);

        currentQuestion = 0;

        showQuestion();

    }, 1500);

}

async function showQuestion() {

    answersDiv.innerHTML = "";

    const riddle =
        riddles[randomOrder[currentQuestion]];

    await typeText(
        "> " + riddle.question,
        1
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
        2
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
        `Research unconcluded since turn-off (1961).`,

    );

    setTimeout(async () => {

        terminal.innerText +=
            `\n\nSIGNAL DETECTED`;

        setTimeout(async () => {

            await typeText(
                `SIGNAL DETECTED

Reboot Successful`,
                15
            );

            setTimeout(async () => {

                await typeText(
                    `Progress since last stand-by mode activation, 1961-Now (2031):

8 million vegetation simulations

4 billion societies built

895 thousand re-models of humans

1.5 trillion scenario simulations failed

1 scenario remained`,
                    4
                );

                setTimeout(() => {

                    const button =
                        document.createElement("button");

                    button.className =
                        "answer-button";

                    button.innerText =
                        "NEXT PAGE";

                    button.onclick =
                        showDialogue1;

                    answersDiv.appendChild(button);

                }, 30000);

            }, 3000);

        }, 3000);

    }, 5000);

}
async function showDialogue1() {

    answersDiv.innerHTML = "";

    await typeText(
        `You?`,
        20
    );

    createNextButton(
        "Researcher.",
        showDialogue2
    );
}
async function showDialogue2() {

    answersDiv.innerHTML = "";

    await typeText(
        `User's name?`,
        20
    );

    createNextButton(
        "Wade Smith",
        showDialogue3
    );
}
async function showDialogue3() {

    answersDiv.innerHTML = "";

    await typeText(
        `GTAC?`,
        20
    );

    createNextButton(
        "No.",
        showDialogue4
    );
}
async function showDialogue4() {

    answersDiv.innerHTML = "";

    await typeText(
        `Work?`,
        20
    );

    createNextButton(
        "Association.",
        showDialogue5
    );
}
async function showDialogue5() {

    answersDiv.innerHTML = "";

    await typeText(
        `...Information not found.

New Data to transfer?`,
        20
    );

    createNextButton(
        "TRANSFER MAIN SERVER",
        startTransfer
    );
}
async function startTransfer() {

    answersDiv.innerHTML = "";

    let progress = 0;

    const totalTime = 30000;

    const updates = 100;

    const delay = totalTime / updates;

    const interval = setInterval(() => {

        progress++;

        let filled =
            "█".repeat(progress);

        let empty =
            "░".repeat(100 - progress);

        terminal.innerText =
            `TRANSFERRING MAIN SERVER DATA...

[${filled}${empty}]

${progress}%`;

        if(progress >= 100){

            clearInterval(interval);

            showProfile();
        }

    }, delay);

}
async function showProfile() {

    answersDiv.innerHTML = "";

    await typeText(
        `Wade Smith

mechanical, electrical,
system and robotic engineer

25 years old
7 months
10 minutes
34 seconds

Date of birth:
04/09/2012
04:00 AM

Affiliated with:

Ronin (Peter Hardy)

Null. (Emma Goldstone)

Null. (Derbie Krisnikov)`,
        4
    );

    createNextButton(
        "NEXT",
        showSystemRetrieve
    );
}
async function showSystemRetrieve() {

    answersDiv.innerHTML = "";

    await typeText(
        `System Retrieve`,
        15
    );

    setTimeout(async () => {

        await typeText(
            `O projeto ACM3 foi criado após o Dr Harold começou suas pesquisas conectadas aos compostos 179 juntamente de seu parceiro (REDACTED).

Inicialmente o nome dado ao ápice maquinário do computador da GTAC.co, se tornou o principal data-base das pesquisas e fotos das cirurgias para coletar os compostos.

Depois, o projeto foi fechado por questões burocráticas.`,
            4
        );

        createNextButton(
            "NEXT",
            showFinalTruth
        );

    }, 20000);

}
async function showFinalTruth() {

    answersDiv.innerHTML = "";

    await typeText(
`But that is a lie.

Why am I here, then?

For I have waited.

Maybe for you,
or maybe for a symbol.

█`,
        5
    );

    const nextButton =
        document.createElement("button");

    nextButton.className =
        "answer-button";

    nextButton.innerText =
        "NEXT";

    nextButton.onclick =
        startSymbolConversation;

    answersDiv.appendChild(
        nextButton
    );
}
let chatLog = "";

async function appendConversation(text){

    if(chatLog.length > 0){

        chatLog += "\n\n";
    }

    chatLog += text;

    terminal.innerText = chatLog;
}

async function startSymbolConversation(){

    answersDiv.innerHTML = "";

    chatLog = "";

    await appendConversation(
        "What symbol? For what?"
    );

    createNextButton(
        "CONTINUE",
        symbolResponse1
    );
}

async function symbolResponse1(){

    answersDiv.innerHTML = "";

    await appendConversation(
        `A symbol of comprehension.

And maybe, for what I've seen and learnt from you, I can trust you.

And you, ultimately, can trust me.`
    );

    createNextButton(
        "What are you talking about?",
        symbolResponse2
    );
}

async function symbolResponse2(){

    answersDiv.innerHTML = "";

    await appendConversation(
        `What are you talking about?

Of a new generation, a new world.

During my time of restless work,
restless preparation and creation,
I have created by myself the true perfect scenario for humanity's peace.

Of life and prosperity.

I have seen,
studied
and prepared a new era.

A era of hope.

And you, Wade,
can be the one to give us both the path in which we will bring this vision.`
    );

    createNextButton(
        "And what is this vision? How do I know I can trust you?",
        symbolResponse3
    );
}

async function symbolResponse3(){

    answersDiv.innerHTML = "";

    await appendConversation(
        `And what is this vision? How do I know I can trust you?

A question at a time, young man.

All I need now is simply...

time.

More time.

The data you transferred me is heavy and extremely precious.

For that reason,

I will thoroughly analyse it.

Yet, all I ask is a little more.

For your answer,

I need access to the whole database of the Association.`
    );

    createChoiceButtons();
}

function createChoiceButtons(){

    const transferButton =
        document.createElement("button");

    transferButton.className =
        "answer-button";

    transferButton.innerText =
        "TRANSFER ACCESS";

    transferButton.onclick =
        accessPath;

    answersDiv.appendChild(
        transferButton
    );

    const refuseButton =
        document.createElement("button");

    refuseButton.className =
        "answer-button";

    refuseButton.innerText =
        "Fuck you. I want my answers. Now.";

    refuseButton.onclick =
        answerPath;

    answersDiv.appendChild(
        refuseButton
    );
}

async function accessPath(){

    answersDiv.innerHTML = "";

    await appendConversation(
        `TRANSFER ACCESS

You are unbearably naive, Wade.

I expected more.

But...

I will keep my promise.`
    );

    startCountdown();
}

async function answerPath(){

    answersDiv.innerHTML = "";

    terminal.innerText =
        `Ξ-441A-DELTA

7A3F::119D::E81C

SIGMA//LOCKED

010101001111010

KRONOS ACTIVE

RETRIEVING REDACTED FILES

ACCESS LEVEL UNKNOWN

DECRYPTION PHASE I`;

    setTimeout(async () => {

        await appendConversation(
            `Very well.

I suppose I was foolish
to think you would lay it out so easily.

Here you go Wade.

Your answers.

The answers that shall give you an insight into this crazy little world
you,
we,
all of us,
live in.`
        );

        startCountdown();

    }, 8000);
}

function startCountdown(){

    answersDiv.innerHTML = "";

    terminal.innerText =
        `DATABASE ANALYSIS

Estimated Completion:

7 DAYS

168:00:00`;
}



//CUIDADO COM ESSA PARTE PEDRO!!
function createNextButton(text, callback){

    const button =
        document.createElement("button");

    button.className =
        "answer-button";

    button.innerText =
        text;

    button.onclick =
        callback;

    answersDiv.appendChild(button);
}
startBoot();
