(function () {

    const savedTheme =
        localStorage.getItem(
            "qiyas_theme"
        );


    const theme =
        savedTheme === "dark"
            ? "dark"
            : "light";


    document.documentElement
        .setAttribute(
            "data-theme",
            theme
        );

})();