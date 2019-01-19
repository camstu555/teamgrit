const fs = require('fs');
const path = "img/sponsors";

module.exports = function () {
    
    const files = fs.readdirSync(path);
    const images = [];

    files.forEach((value, index) => {

        let name = value.replace(/\d\_/gi, "").replace(/\-/gi, " ").replace(".png", "").toString();
        let src = `img/sponsors/${value}`;
        let order = ((+(value.match(/(\d*)/gi))[0]) - 1);
        let href = "#";

        images[order] = {
            name,
            src,
            href
        };
    });

    let output = "";

    images.forEach((obj) => {
        output += `<a class="sponsor-link" href="${obj.href}"><img class="sponsor-image" src="${obj.src}" alt="${obj.name}" /></a>`
    });
    
    return output;
}