let currentPage = 1;
const totalPages = 4;

function nextPage() {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage++;
    if (currentPage > totalPages) currentPage = 1; 
    document.getElementById(`page${currentPage}`).classList.add('active');
}

function forgiveMe() {
    alert("Thank you for forgiving me! ❤️ I promise to make you happy!");
}