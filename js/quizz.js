
class Quizz{
    constructor(questions,sectionId="question"){
        this.questions = questions;
        this.currentQuestion = 0;
        this.totalQuestions = questions.length;
        this.score = 0;
        this.correctPoints = 10;
        this.incorrectPoints = 5;
        this.questionSection = document.getElementById(sectionId);
        this.render();
        this.answered = false;
    }
    render(){
        this.questionSection.innerHTML="";
        const question  = this.questions[this.currentQuestion];
        const article = this.createQuestionCard(question);

        const questionNumberP = document.createElement("p");
        questionNumberP.innerText = `Pregunta ${this.currentQuestion + 1} de ${this.totalQuestions}`
        const scoreP = document.createElement("p");
        scoreP.innerText = `Puntos: ${this.score}`;
        this.questionSection.append(article,questionNumberP,scoreP);

    }
    answerQuestion(question,answer){
        if(this.answered){
            return ;
        }
        this.answered = true;
        if(answer === question.correct_answer){
            this.score += this.correctPoints;
        }else{
            this.score -= this.incorrectPoints;
        }
        setTimeout(()=>{
            this.currentQuestion++;
            this.render();
            this.answered = false;
        },2000)
    }
    createQuestionCard(question){
        const article = document.createElement("article");
        const questionTitle = document.createElement("h2");
        const answerSection = document.createElement("section");
        for(const answer of question.answers){
            const answerButton = document.createElement("button");
            answerButton.innerHTML = answer;
            answerSection.appendChild(answerButton);
            answerButton.addEventListener("click",()=>{
                this.answerQuestion(question,answer);
            })
        }
        questionTitle.innerHTML = question.question;
        article.append(questionTitle,answerSection)
        return article;
    }
}

export default Quizz;