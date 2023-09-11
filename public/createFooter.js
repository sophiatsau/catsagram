export function createFooter() {
    const footer = document.createElement("footer");
    const soph = document.createElement("a");
    const sophia = document.createElement("a");
    const peang = document.createElement("a");
    const api = document.createElement("span");
    const apiSource = document.createElement("a");

    soph.href = "https://github.com/sophie97yang";
    sophia.href = "https://github.com/sophiatsau";
    peang.href = "https://github.com/pingno";
    apiSource.href = "https://www.themealdb.com/api.php";

    [soph, sophia, peang, apiSource].forEach(a => a.setAttribute("target","_blank"))

    footer.innerText = "Brought to you by:";
    soph.innerText = "🥚 Soph";
    sophia.innerText = "🥚 Sophia";
    peang.innerText = "🥚 Peang";
    api.innerText = "API by:";
    apiSource.innerText = "TheMealDB";

    document.body.append(footer);
    footer.append(soph, sophia, peang, api, apiSource);

    api.style.marginLeft = "20px";

    footer.style.marginTop = "20px";
    footer.style.display = "flex";
    footer.style.justifyContent = "center";
    footer.style.columnGap = "10px";
}
