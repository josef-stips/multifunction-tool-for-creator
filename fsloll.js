const fs = require('fs');
const path = require('path');

// Funktion zum Erstellen einer .js-Datei für ein Werkzeug
function createToolFile(toolName, index, directory) {
    const className = toolName.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    const fileName = `tool${index}.js`;
    const filePath = path.join(directory, fileName);
    const fileContent = `// ${toolName}\n\n` +
        `class ${className} {\n` +
        `    constructor() {\n` +
        `        // Implementiere hier die Logik für ${toolName}\n` +
        `    }\n` +
        `    init = () => {\n` +
        `        // Implementiere hier die Logik für ${toolName}\n` +
        `    }\n` +
        `    start = () => {\n` +
        `        // Implementiere hier die Logik für ${toolName}\n` +
        `    }\n` +
        `}\n\n` +
        `let tool${index} = new ${className}();\n`;
    `tool${index}.init();\n`;

    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error(`Fehler beim Erstellen der Datei für ${toolName}:`, err);
        } else {
            console.log(`Datei für ${toolName} erfolgreich erstellt: ${filePath}`);
        }
    });
}

// Funktion zum Verarbeiten aller Werkzeuge im Objekt
function processTools(tools, directory) {
    let index = 0;
    for (const category in tools) {
        for (const tool of tools[category]) {
            createToolFile(tool, index, directory);
            index++;
        }
    }
}

// Verzeichnis, in dem die Dateien erstellt werden sollen
const targetDirectory = './src/scripts/tools';

// Erstelle das Verzeichnis, wenn es nicht existiert
if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory);
}

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

// Ausführen der Funktion mit den Werkzeugen und dem Zielverzeichnis
processTools(tools, targetDirectory);