(function ($) {
    $(function () {
        var $html = $("html");
        $(".l-nav__menu__button").on("click", function () {
            $html.toggleClass("is-view");
        });
    });

    $(function () {
        const yearContainer = $(".l-footer__details__col1__area__year");
        var now = new Date();
        var year = now.getFullYear();
        yearContainer.text(year);
    })


})(jQuery.noConflict());
