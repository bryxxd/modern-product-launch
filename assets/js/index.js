(function ($) {
    $(function () {
        var $html = $("html");
        $(".l-nav__menu__button").on("click", function () {
            $html.toggleClass("is-view");
        });

        $(".l-nav__ul__li__a").on("click", function () {
            $html.removeClass("is-view");
        });
    });

    $(function () {
        const targets = document.querySelectorAll(".u-fadeinup");

        const options = {
            root: null, 
            threshold: 0.2,
        };

        targets.forEach((target) => {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add("is-animated");
                        observer.unobserve(entry.target);
                    }
                })
            }, options);
            observer.observe(target);
        });
    });

    $(function () {
        const yearContainer = $(".l-footer__details__col1__area__year");
        var now = new Date();
        var year = now.getFullYear();
        yearContainer.text(year);
    });
})(jQuery.noConflict());
