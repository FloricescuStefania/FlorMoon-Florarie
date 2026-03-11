// incarca header si footer
function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            // aplica continutul fisierului in elementul cu id-ul dat
            document.getElementById(id).innerHTML = data;
            // daca exista un callback, il apeleaza dupa ce componenta s-a incarcat
            if (callback) callback();
        })
        .catch(error => console.error("Eroare la incarcarea componentei:", error));
}

// asteapta ca tot HTML-ul paginii sa fie incarcat
document.addEventListener("DOMContentLoaded", function () {
    // incarca header-ul si aplica padding dupa ce s-a incarcat
    loadComponent("header-placeholder", "header.html", function () {
        // cauta navbar-ul fixed din header
        const navbar = document.querySelector(".navbar.fixed-top");  
        if (navbar) {
            const navbarHeight = navbar.offsetHeight; // calculeaza inaltimea navbar-ului
            document.body.style.paddingTop = navbarHeight + "px"; // aplica padding pe body cat inaltimea navbar-ului
        }
    });

    // incarca footer-ul 
    loadComponent("footer-placeholder", "footer.html");
});
