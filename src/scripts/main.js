// elements
let bars = document.querySelector(".bars");
let themeBtn = document.querySelector(".themeBtn");
let cardsWrapper = document.querySelector(".cardsWrapper");

class App {
    constructor(toolmanager) {
        this.toolmanager = toolmanager;
    };

    init = () => {
        this.EventListener();
        this.toolmanager.generate(this.toolmanager.tools);
    };

    EventListener = () => {
        return new Promise((resolve) => {
            // event listener
            themeBtn.addEventListener("click", () => {

            });

            bars.addEventListener("click", () => {

            });

            resolve();
        });
    };
};

let ToolManager = new toolManager(tools);
let newApp = new App(ToolManager);

newApp.init();