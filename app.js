customElements.define('barra-html',
    class extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            fetch(this.getAttribute("src"))
                .then(r => r.text())
                .then(t => {
                    let parser = new DOMParser();
                    let html = parser.parseFromString(t, "text/html");
                    this.innerHTML = html.body.innerHTML;
                }).catch(e => console.error(e));

        }
    });

document.addEventListener("mousemove",parallax);
function parallax(e){
    document.querySelectorAll(".cerdo").forEach(function (move){
    var moving_value=move.getAttribute("data-value");
    var x=(e.clientX*moving_value)/250;
    var y=(e.clientY*moving_value)/250;

    move.style.transform="translateX(" + x + "px) translateY(" + y + "px)";
    });
}