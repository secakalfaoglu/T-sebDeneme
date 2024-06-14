document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".list-group-item");
    const cardsPerPage = 8;
    const pagination = document.getElementById("pagination");
    const miniPagination = document.getElementById("mini-pagination");
    const totalCards = cards.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const maxVisiblePages = 5;

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function createPaginationLinks(currentPage) {
        let paginationHTML = "";
        let miniPaginationHTML = "";

        paginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="first">&laquo;&laquo;</a></li>`;
        paginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="prev">&laquo;</a></li>`;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
        }

        paginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="next">&raquo;</a></li>`;
        paginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="last">&raquo;&raquo;</a></li>`;

        miniPaginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="prev">&laquo;</a></li>`;
        miniPaginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="next"> &raquo;</a></li>`;

        pagination.innerHTML = paginationHTML;
        miniPagination.innerHTML = miniPaginationHTML;

        const paginationLinks = pagination.querySelectorAll(".page-link");
        const miniPaginationLinks = miniPagination.querySelectorAll(".page-link");

        function handlePaginationClick(event, links, mini) {
            event.preventDefault();
            const pageNumber = this.getAttribute("data-page");

            let currentPage = parseInt(document.querySelector(".page-item.active .page-link")?.getAttribute("data-page")) || 1;

            if (pageNumber === "first") {
                currentPage = 1;
            } else if (pageNumber === "prev" && currentPage > 1) {
                currentPage--;
            } else if (pageNumber === "next" && currentPage < totalPages) {
                currentPage++;
            } else if (pageNumber === "last") {
                currentPage = totalPages;
            } else if (!isNaN(pageNumber)) {
                currentPage = parseInt(pageNumber);
            }

            createPaginationLinks(currentPage);
            showPage(currentPage);

            if (!mini) {
                links.forEach(link => link.parentElement.classList.remove("active"));
                const activeLink = Array.from(links).find(link => parseInt(link.getAttribute("data-page")) === currentPage);
                activeLink?.parentElement.classList.add("active");
            }

            // Update active state and disable state for first/previous/next/last buttons
            updatePaginationState(currentPage, links);
        }

        function updatePaginationState(currentPage, links) {
            links.forEach(link => link.parentElement.classList.remove("active", "disabled"));
            const activeLink = Array.from(links).find(link => parseInt(link.getAttribute("data-page")) === currentPage);
            activeLink?.parentElement.classList.add("active");

            if (currentPage === 1) {
                pagination.querySelector('.page-link[data-page="first"]').parentElement.classList.add("disabled");
                pagination.querySelector('.page-link[data-page="prev"]').parentElement.classList.add("disabled");
                miniPagination.querySelector('.page-link[data-page="prev"]').parentElement.classList.add("disabled");
            }

            if (currentPage === totalPages) {
                pagination.querySelector('.page-link[data-page="next"]').parentElement.classList.add("disabled");
                pagination.querySelector('.page-link[data-page="last"]').parentElement.classList.add("disabled");
                miniPagination.querySelector('.page-link[data-page="next"]').parentElement.classList.add("disabled");
            }
        }

        paginationLinks.forEach(link => link.addEventListener("click", function(event) {
            handlePaginationClick.call(this, event, paginationLinks, false);
        }));

        miniPaginationLinks.forEach(link => link.addEventListener("click", function(event) {
            handlePaginationClick.call(this, event, miniPaginationLinks, false);
        }));

        showPage(currentPage);
        document.querySelector(`.page-link[data-page="${currentPage}"]`)?.parentElement.classList.add("active");

        // Disable first and previous button on the first page
        if (currentPage === 1) {
            pagination.querySelector('.page-link[data-page="first"]').parentElement.classList.add("disabled");
            pagination.querySelector('.page-link[data-page="prev"]').parentElement.classList.add("disabled");
            miniPagination.querySelector('.page-link[data-page="prev"]').parentElement.classList.add("disabled");
        }

        // Disable next and last button on the last page
        if (currentPage === totalPages) {
            pagination.querySelector('.page-link[data-page="next"]').parentElement.classList.add("disabled");
            pagination.querySelector('.page-link[data-page="last"]').parentElement.classList.add("disabled");
            miniPagination.querySelector('.page-link[data-page="next"]').parentElement.classList.add("disabled");
            
        }
    }

    createPaginationLinks(1);
});
