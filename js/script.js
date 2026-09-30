/* =========================================================
   MOHD MOIZ PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   CONTACT MODAL
========================================================= */

function openContact() {

    const modal =
        document.getElementById("contactModal");

    if (modal) {

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

}


function closeContact() {

    const modal =
        document.getElementById("contactModal");

    if (modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

}


/* Close modal with Escape key */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeContact();

        }

    }
);


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".expertise-card, .project-item, .experience-card, .certification-card"
    );


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function(element) {

        element.classList.add("reveal");

        observer.observe(element);

    }
);
