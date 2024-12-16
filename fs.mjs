import fs from "fs"

fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("oshibka:", err);
        return;
    }
    console.log("Fayl mazmuni:", data);
});