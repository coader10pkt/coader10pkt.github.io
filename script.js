window.onload = function () {
    let currentTheme = localStorage.getItem("mytheme") || "default";
    setTheme("default", currentTheme);
    const themeSelector = document.getElementById("theme-selector");
    themeSelector.value = currentTheme;
    themeSelector.addEventListener("change", function (e) {
        const newTheme = e.currentTarget.value;
        setTheme(currentTheme, newTheme);
    });

    function setTheme(oldTheme, newTheme) {
        const body = document.getElementsByTagName("body")[0];
        body.classList.remove(oldTheme);
        body.classList.add(newTheme);
        currentTheme = newTheme;
        localStorage.setItem("mytheme", newTheme);
    }
};