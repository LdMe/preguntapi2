const BASE_URL = "https://opentdb.com/api.php";
const questions = [
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'Art',
        question: 'Who painted the epic mural Guernica?',
        correct_answer: 'Pablo Picasso',
        incorrect_answers: ['Francisco Goya', 'Leonardo da Vinci', 'Henri Matisse']
    },
    {
        type: 'multiple',
        difficulty: 'easy',
        category: 'Art',
        question: 'Who painted the Sistine Chapel?',
        correct_answer: 'Michelangelo',
        incorrect_answers: ['Leonardo da Vinci', 'Pablo Picasso', 'Raphael']
    },
    {
        type: 'multiple',
        difficulty: 'hard',
        category: 'Art',
        question: 'The painting &quot;The Starry Night&quot; by Vincent van Gogh was part of which art movement?',
        correct_answer: 'Post-Impressionism',
        incorrect_answers: ['Romanticism', 'Neoclassical', 'Impressionism']
    },
    {
        type: 'multiple',
        difficulty: 'easy',
        category: 'Art',
        question: 'Who painted &quot;The Starry Night&quot;?',
        correct_answer: 'Vincent van Gogh',
        incorrect_answers: ['Edvard Munch', 'Pablo Picasso', 'Claude Monet']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'Art',
        question: 'Which artist&#039;s style was to use small different colored dots to create a picture?',
        correct_answer: 'Georges Seurat',
        incorrect_answers: ['Paul C&eacute;zanne', 'Vincent Van Gogh', 'Henri Rousseau']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'Animals',
        question: 'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correct_answer: 'Nuts',
        incorrect_answers: ['Nothing', 'Fruit', 'Seaweed']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'Animals',
        question: 'What is the world&#039;s longest venomous snake?',
        correct_answer: 'King Cobra',
        incorrect_answers: ['Green Anaconda', 'Inland Taipan', 'Yellow Bellied Sea Snake']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'Animals',
        question: 'What does &quot;hippopotamus&quot; mean and in what langauge?',
        correct_answer: 'River Horse (Greek)',
        incorrect_answers: ['River Horse (Latin)', 'Fat Pig (Greek)', 'Fat Pig (Latin)']
    },
    {
        type: 'multiple',
        difficulty: 'hard',
        category: 'Animals',
        question: 'What is the scientific name of the Budgerigar?',
        correct_answer: 'Melopsittacus undulatus',
        incorrect_answers: ['Nymphicus hollandicus', 'Pyrrhura molinae', 'Ara macao']
    },
    {
        type: 'multiple',
        difficulty: 'hard',
        category: 'Animals',
        question: 'Unlike on most salamanders, this part of a newt is flat?',
        correct_answer: 'Tail',
        incorrect_answers: ['Head', 'Teeth', 'Feet']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'History',
        question: 'What is the bloodiest event in United States history, in terms of casualties?',
        correct_answer: 'Battle of Antietam',
        incorrect_answers: ['Pearl Harbor', 'September 11th', 'D-Day']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'History',
        question: 'On which day did construction start on &quot;The Pentagon&quot;, the headquarters for the United States Department of Defense?',
        correct_answer: 'September 11, 1941',
        incorrect_answers: ['June 15, 1947', 'January 15, 1943', 'September 2, 1962']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'History',
        question: 'Which of the following is not in the Indo-European language family?',
        correct_answer: 'Finnish',
        incorrect_answers: ['English', 'Hindi', 'Russian']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'History',
        question: 'When was the Grand Patriotic War in the USSR concluded?',
        correct_answer: 'May 9th, 1945',
        incorrect_answers: [
            'September 2nd, 1945',
            'August 9th, 1945',
            'December 11th, 1945'
        ]
    },
    {
        type: 'multiple',
        difficulty: 'hard',
        category: 'History',
        question: 'What was the last colony the UK ceded marking the end of the British Empire?',
        correct_answer: 'Hong Kong',
        incorrect_answers: ['India', 'Australia', 'Ireland']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'Science: Computers',
        question: 'All of the following programs are classified as raster graphics editors EXCEPT:',
        correct_answer: 'Inkscape',
        incorrect_answers: ['Paint.NET', 'GIMP', 'Adobe Photoshop']
    },
    {
        type: 'multiple',
        difficulty: 'easy',
        category: 'Science: Computers',
        question: 'What does GHz stand for?',
        correct_answer: 'Gigahertz',
        incorrect_answers: ['Gigahotz', 'Gigahetz', 'Gigahatz']
    },
    {
        type: 'multiple',
        difficulty: 'easy',
        category: 'Science: Computers',
        question: 'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
        correct_answer: 'Final',
        incorrect_answers: ['Static', 'Private', 'Public']
    },
    {
        type: 'multiple',
        difficulty: 'medium',
        category: 'Science: Computers',
        question: 'The teapot often seen in many 3D modeling applications is called what?',
        correct_answer: 'Utah Teapot',
        incorrect_answers: ['Pixar Teapot', '3D Teapot', 'Tennessee Teapot']
    },
    {
        type: 'multiple',
        difficulty: 'easy',
        category: 'Science: Computers',
        question: 'In any programming language, what is the most common way to iterate through an array?',
        correct_answer: '&#039;For&#039; loops',
        incorrect_answers: [
            '&#039;If&#039; Statements',
            '&#039;Do-while&#039; loops',
            '&#039;While&#039; loops'
        ]
    }
]

async function getQuestions(category = null, numQuestions = 5) {
    try {
        const url = new URL(BASE_URL);
        if (category) {
            url.searchParams.append("category", category);
        }
        url.searchParams.append("amount", numQuestions);
        url.searchParams.append("type", "multiple")
        console.log(url.toString());
        const response = await fetch(url.toString());
        const data = await response.json();
        if (data.response_code != 0) {
            data.error = "Ha habido un error";
        }
        return data;

    } catch (error) {
        console.error(error.message);
        return { error: error.message }
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getAllQuestions() {
    const categories = [25, 27, 23, 18];
    let results = [];
    for (const categoryNumber of categories) {
        const categoryQuestions = await getQuestions(categoryNumber);
        results = [...results, ...categoryQuestions.results];
        await sleep(5000);
        console.log("ya hemos esperado")
    }
    console.log(results);
}

const array = ["abc","hola","adios","otro"]

function shuffleAnswers(question){
    const answers = [...question.incorrect_answers,question.correct_answer];
    question.answers = shuffle(answers);
    return question;
}

function shuffle(array){
    const newArray = [...array];
    const numeroMaximo = newArray.length;
    for(let i = 0; i < newArray.length - 1 ; i++){
        const numeroMinimo = i + 1;
        const randomNumber = Math.floor(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo );
        const aux = newArray[i];
        newArray[i] = newArray[randomNumber];
        newArray[randomNumber] = aux;
    }
    return newArray;
}

//getAllQuestions();
const shuffledQuestions = shuffle(questions).map(question => shuffleAnswers(question));

export default shuffledQuestions;


