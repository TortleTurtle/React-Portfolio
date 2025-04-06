export function getFarewellText(language) {
    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
const wordList = [
    "backend", "frontend", "markup", "script", "cookies", "hosting", "compile",
    "package", "promise", "fetching", "webhook", "async", "browser", "console",
    "debugger", "element", "network", "request", "response", "routing", "session",
    "storage", "tokenize", "version", "webpack", "closure", "context", "default",
    "eslint", "flexbox", "gateway", "handler", "import", "iterate", "library",
    "minify", "modules", "npm", "object", "padding", "pointer", "queries",
    "reactive", "reducer", "refactor", "rendering", "sandbox", "schema",
    "scripts", "section", "semantic", "serverless", "sockets", "spacing",
    "spinner", "stack", "static", "strings", "styles", "syntax", "threads",
    "timeout", "tokens", "tooling", "transmit", "typesafe", "typings",
    "utility", "variable", "viewport", "virtual", "webfonts", "webpage",
    "whitespace", "widget", "z-index", "alignment", "animation", "callback",
    "cdncache", "classlist", "cloning", "component", "container", "coverage",
    "database", "deferred", "directive", "encoding", "favicon", "function",
    "gradient", "handlers", "headless", "instance", "lighthouse", "loading",
    "metadata", "optimize", "payload", "postback", "protocol"
];
export function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

export const languages = [
    {
        name: "HTML",
        backgroundColor: "#E2680F",
        color: "#F9F4DA",
    },
    {
        name: "CSS",
        backgroundColor: "#328AF1",
        color: "#F9F4DA",
    },
    {
        name: "JavaScript",
        backgroundColor: "#F4EB13",
        color: "#1E1E1E",
    },
    {
        name: "React",
        backgroundColor: "#2ED3E9",
        color: "#1E1E1E",
    },
    {
        name: "TypeScript",
        backgroundColor: "#298EC6",
        color: "#F9F4DA",
    },
    {
        name: "Node.js",
        backgroundColor: "#599137",
        color: "#F9F4DA",
    },
    {
        name: "Python",
        backgroundColor: "#FFD742",
        color: "#1E1E1E",
    },
    {
        name: "Ruby",
        backgroundColor: "#D02B2B",
        color: "#F9F4DA",
    },
    {
        name: "Assembly",
        backgroundColor: "#2D519F",
        color: "#F9F4DA",
    },
]