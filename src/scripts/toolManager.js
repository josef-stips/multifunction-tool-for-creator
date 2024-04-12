const tools = {
    "File Manipulation": [
        "picture to picture",
        "audio to audio",
        "youtube to .file",
        "Clean up folder",
        ".img and lorem ipsum"
    ],
    "Text Manipulation": [
        "Password generator",
        "Extract text from image",
        "Text manipulator",
        "Encrypt text",
        "Word counter, Letter counter",
        "Emoji Translator"
    ],
    "Conversion Tools": [
        "Time zones",
        "Math converter",
        "Currency Converter",
        "Morsecode to Text",
        "Arabic numbers to Roman",
        "number systems"
    ],
    "Information Tools": [
        "System information",
        "Ping test and network",
        "PI",
        "100 Javascript one-liner"
    ],
    "Visual Tools": [
        "Color Tool",
        "SVG Editor",
        "Css effects preview",
        "Whiteboard"
    ],
    "Data Format Conversion": [
        "Json viewer",
        "CSV to Json and vice versa"
    ],
    "Barcode and QR Code": [
        "EAN/UPC Barcodes",
        "QR-Code"
    ],
    "Financial Tools": [
        "Compound Interest"
    ]
};

const toolIcons = {
    0: "fas fa-image", // Convert picture to picture
    1: "fas fa-volume-up", // Convert audio to audio
    2: "fab fa-youtube", // Download youtube to .file
    3: "fas fa-folder-open", // Clean up folder
    4: "far fa-image", // .img and lorem ipsum generator (Verwendung des gleichen Icons wie "Convert picture to picture")

    5: "fas fa-key", // Password generator
    6: "far fa-image", // Extract text from image (kein direktes passendes Icon, daher Verwendung eines ähnlichen Icons)
    7: "fas fa-text-width", // Text manipulator
    8: "fas fa-lock", // Encrypt text
    9: "fas fa-font", // Word counter, Letter counter, on selection
    10: "far fa-smile", // Emoji Translator

    11: "fas fa-globe", // Time zone converter
    12: "fas fa-calculator", // Math converter
    13: "fas fa-dollar-sign", // Currency Converter
    14: "fas fa-code", // Morsecode to Text
    15: "fas fa-scroll", // Romanizer: Convert Arabic numbers to Roman
    16: "fas fa-exchange-alt", // Convert between number systems

    17: "fas fa-info-circle", // System information
    18: "fas fa-network-wired", // Ping test and network
    19: "fab fa-pied-piper", // PI (kein direktes passendes Icon, daher Verwendung eines ähnlichen Icons)
    20: "fas fa-code", // 100 Javascript one-liner

    21: "fas fa-paint-brush", // Color Tool
    22: "fas fa-vector-square", // SVG Editor
    23: "fas fa-eye", // Css effects preview
    24: "fas fa-chalkboard", // Whiteboard

    25: "far fa-file-code", // Json viewer
    26: "fas fa-file-csv", // CSV to Json and vice versa

    27: "fas fa-barcode", // EAN/UPC Barcode generator
    28: "fas fa-qrcode", // QR-Code Generator

    29: "fas fa-percent" // Compound Interest Calculator
};

const toolFunctions = {
    tool0,
    tool1,
    tool2,
    tool3,
    tool4,
    tool5,
    tool6,
    tool7,
    tool8,
    tool9,
    tool10,
    tool11,
    tool12,
    tool13,
    tool14,
    tool15,
    tool16,
    tool17,
    tool18,
    tool19,
    tool20,
    tool21,
    tool22,
    tool23,
    tool24,
    tool25,
    tool26,
    tool27,
    tool28,
    tool29
};

// tool class
class tool {
    constructor(category, tool, toolIndex) {
        this.category = category;
        this.tool = tool;
        this.index = toolIndex;
    };

    show = (index) => {
        tool_title.textContent = newApp.current_tool.tool;

        tool_content.forEach(content => content.style.display = "none");

        const tool = Array.from(tool_content).find(node => node.getAttribute('tool_id') == index);

        tool.style.display = "flex";
    };
};

let toolClass = new tool();

// generate html
class toolManager {
    constructor(tools, toolFunctions, toolClass) {
        this.tools = tools;
        this.toolFunctions = toolFunctions;
        this.toolClass = toolClass;
    };

    tool_length = (tools) => {
        return Object.values(tools).flat().length;
    };

    index_of_tool = (tools, tool) => {
        return Object.values(tools).flat().indexOf(tool);
    };

    generate = (tools) => {
        console.log(tools);

        for (const key in tools) {
            let toolsOfSubject = tools[key];

            console.log(key);
            console.log(toolsOfSubject);

            // add html
            let section = document.createElement("section");
            section.classList.add("subjectSection");

            let title = document.createElement("h1");
            title.classList.add("subject-title");
            title.textContent = key;

            let toolsOfSubjectContainer = document.createElement("div");
            toolsOfSubjectContainer.classList.add("SubjectToolsContainer");

            this.generate_tool_in_subject(toolsOfSubject, key, toolsOfSubjectContainer);

            section.appendChild(title);
            section.appendChild(toolsOfSubjectContainer);
            cardsWrapper.appendChild(section);
        };
    };

    generate_tool_in_subject = (toolsOfSubject, key, toolsOfSubjectContainer) => {
        for (const tool of toolsOfSubject) {
            let indexOfTool = this.index_of_tool(tools, tool);

            let card = document.createElement("div");
            card.classList.add("card");
            card.textContent = tool;

            this.event_listener(card, indexOfTool, tool, key);

            let icon = document.createElement("i");
            icon.className = toolIcons[indexOfTool];

            card.appendChild(icon);

            toolsOfSubjectContainer.appendChild(card);
        };
    };

    event_listener = (card, index, tool_name, tool_category) => {
        card.addEventListener("click", () => {
            newApp.open_popUp(tool_popUp);

            newApp.current_tool = {
                category: tool_category,
                tool: tool_name
            };

            tool_popUp.setAttribute("active_tool", index);

            this.toolClass.show(index);
        });
    };

    open_question_popUp = (questionBtn, questionPopUp_main) => {

        questionBtn.addEventListener("click", () => {

            newApp.open_popUp(tool_question_popUp);
            questionPopUp_main.textContent = newApp.current_tool["category"] + ": " + newApp.current_tool["tool"];
        });
    };
};