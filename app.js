const questions = document.querySelectorAll('.question');
// console.log(questions);
questions.forEach(question => {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', () => {
        questions.forEach(item => {
            // console.log(item);
            if (item !== question) {
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})