const btn = document.getElementById("btn");

function rgba() {
    const red = Math.floor(Math.random() * 255);

    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // return `${red},${green},${blue}`;
    const rgb = `rgb(${red},${green},${blue})`;
    console.log(rgb);
    return rgb;

    // const black = "#000";
    // return black;
}
btn.addEventListener("click", function() {
    const wrapper = document.getElementById("wrapper");
    wrapper.style.backgroundColor = rgba();
    console.log("btn click");
});