const starsContainer = document.querySelector('.stars');
const commentsList = document.getElementById('comments-list');
let currentRating = 0;

starsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
        const rating = parseInt(e.target.dataset.value);
        setRating(rating);
    }
});

function setRating(rating) {
    currentRating = rating;
    starsContainer.setAttribute('data-rating', rating);
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const value = parseInt(star.dataset.value);
        star.classList.toggle('active', value <= rating);
    });
}

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const commentItem = document.createElement('li');
        commentItem.textContent = `Rating: ${currentRating}, Comment: ${commentText}`;
        commentsList.appendChild(commentItem);

        // TODO: Use GitHub Issues API to record comments

        commentInput.value = '';
    }
}