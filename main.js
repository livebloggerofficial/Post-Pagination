const pages = document.querySelectorAll(".page-content .page");
const pageNumbersContainer = document.querySelector(".page-numbers-container");

if (pageNumbersContainer) {

	const createPagination = () => {
	    pages.forEach((p, i) => {
	        const pageNumber = document.createElement("div");
	        pageNumber.classList.add("page-number");
	        pageNumber.textContent = i + 1;
	        pageNumber.addEventListener("click", () => {
	            activatePage(i);
	        })

	        pageNumbersContainer.appendChild(pageNumber);
	    })

	    document.querySelector(".page-number").classList.add("active");
	}

	createPagination();

	const pageNumbers = document.querySelectorAll(".page-numbers-container .page-number");

	const activatePage = (pageNumber) => {
	    pages.forEach(p => {
	        p.classList.remove("active");
	    })

	    pages[pageNumber].classList.add("active");

	    pageNumbers.forEach(p => {
	        p.classList.remove("active");
	    })

	    pageNumbers[pageNumber].classList.add("active");

	    window.scroll(0, 0);
	}
	
}