document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faqitem');

    faqItems.forEach(item => {
        const question = item.querySelector('.faqquestion');

question.addEventListener('click', () => {
    const answer = item.querySelector('.faqanswer');

if (answer.style.display === 'block') {
    answer.style.display = 'none';
  } else {

  faqItems.forEach(i => i.querySelector('.faqanswer').style.display = 'none');
  answer.style.display = 'block';
 }
        });
    });
});
