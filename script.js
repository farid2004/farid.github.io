document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const cards = document.querySelectorAll('.card');
    const closeBtn = document.querySelector('.close-btn');

    const mTitle = document.getElementById('modal-title');
    const mBody = document.getElementById('modal-body');
    const mTags = document.getElementById('modal-tags');

    // Ouverture au clic sur une carte
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            const details = card.getAttribute('data-details');
            const tags = card.querySelector('span').innerText;

            mTitle.innerText = title;
            mBody.innerText = details;
            mTags.innerText = tags;

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Empêche le scroll en arrière-plan
        });
    });

    // Fermeture avec la croix
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Fermeture en cliquant n'importe où à l'extérieur de la modale
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
});