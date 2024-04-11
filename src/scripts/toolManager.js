// all tools with categories
const tools = {
    "File Manipulation": [
        "Convert picture to picture",
        "Convert audio to audio",
        "Download youtube to .file",
        "Clean up folder",
        ".img and lorem ipsum generator"
    ],
    "Text Manipulation": [
        "Password generator",
        "Extract text from image",
        "Text manipulator",
        "Encrypt text",
        "Word counter, Letter counter, on selection",
        "Emoji Translator"
    ],
    "Conversion Tools": [
        "Time zone converter",
        "Math converter",
        "Currency Converter",
        "Morsecode to Text",
        "Romanizer: Konvert. Arab. Zahlen to Röm.",
        "Konvertieren zwischen Zahlensystemen"
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
        "Css effects Vorschau",
        "Whiteboard"
    ],
    "Data Format Conversion": [
        "Json-viewer",
        "CSV to Json and vice versa"
    ],
    "Barcode and QR Code": [
        "EAN/UPC Barcode generator",
        "QR-Code Generator"
    ],
    "Financial Tools": [
        "Zinseszins Rechner"
    ]
};

// generate html
class toolManager {
    constructor(tools) {
        this.tools = tools;
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

            for (const tool of toolsOfSubject) {
                let card = document.createElement("div");
                card.classList.add("card");

                card.textContent = tool;

                toolsOfSubjectContainer.appendChild(card);
            };

            section.appendChild(title);
            section.appendChild(toolsOfSubjectContainer);
            cardsWrapper.appendChild(section);
        };
    };
};