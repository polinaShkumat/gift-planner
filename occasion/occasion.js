
// Example script to display alert when clicking on item cards
document.addEventListener('DOMContentLoaded', () => {
    const itemCards = document.querySelectorAll('.item-card');
    
    itemCards.forEach(card => {
        card.addEventListener('click', () => {
            alert("You clicked on an item!");
        });
    });
});