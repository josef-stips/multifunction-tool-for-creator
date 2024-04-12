// elements
let themeBtn = document.querySelector(".themeBtn");
let cardsWrapper = document.querySelector(".cardsWrapper");
let tool_popUp = document.querySelector(".tool_popUp");
let darkLayer = document.querySelector(".darkLayer");
let tool_popUp_questionBtn = document.querySelector(".tool_popUp_questionBtn");
let tool_popUp_closeBtn = document.querySelector(".tool_popUp_closeBtn");
let tool_question_popUp = document.querySelector(".tool_question_popUp");
let tool_question_popUp_closeBtn = document.querySelector(".tool_question_popUp_closeBtn");
let tool_question_popUp_main = document.querySelector(".tool_question_popUp_main");

class App {
    constructor(toolmanager) {
        this.toolmanager = toolmanager;

        this.current_tool = {
            category: "",
            tool: ""
        };
    };

    init = () => {
        this.theme();
        this.EventListener();
        this.toolmanager.generate(this.toolmanager.tools);
    };

    theme = () => {
        let theme = localStorage.getItem("theme");

        if (!theme) {
            localStorage.setItem("theme", "1");
        };
    };

    EventListener = () => {

        themeBtn.addEventListener("click", () => {
            let is_dark_theme = document.body.classList.contains("dark");

            if (is_dark_theme) {
                localStorage.setItem("theme", "0");
                document.body.classList.remove("dark");

            } else {
                localStorage.setItem("theme", "1");
                document.body.classList.add("dark");
            };
        });

        tool_popUp_closeBtn.addEventListener("click", () => {
            this.close_popUp(tool_popUp, true);
        });

        tool_question_popUp_closeBtn.addEventListener("click", () => {
            this.close_popUp(tool_question_popUp, false);
        });

        this.toolmanager.open_question_popUp(tool_popUp_questionBtn, tool_question_popUp_main);
    };

    open_popUp = (popUp) => {
        console.log(popUp.style, popUp.style.zIndex, getComputedStyle(popUp).zIndex);

        popUp.style.display = "flex";
        darkLayer.style.display = "block";
        darkLayer.style.zIndex = getComputedStyle(popUp).zIndex - 1;
        popUp.style.animation = "popUp_pop 0.20s forward";

        // no app scroll
        document.body.style.overflowY = "hidden";
    };

    close_popUp = (popUp, close_darkLayer) => {
        popUp.style.display = "none";
        close_darkLayer && (darkLayer.style.display = "none");
        darkLayer.style.zIndex = getComputedStyle(popUp).zIndex - 2;

        document.body.style.overflowY = "scroll";
    };
};

let ToolManager = new toolManager(tools);
let newApp = new App(ToolManager);

newApp.init();