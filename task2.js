const fs = require('fs');
const path = require('path');
const crypto = require("crypto");

const dir = "./task2";

const files = fs.readdirSync(dir).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
console.log(files.slice(0, 10));
let hashes = [];
for (const file of files) {
    const filePath = path.join(dir, file);
    const data = fs.readFileSync(filePath);
    const hash = crypto.
createHash("sha3-256").update(data).digest("hex");    hashes.push(hash);
}

function sortKey(hash) {
    let product = 1;
    for (const c of hash){
        product *= (parseInt(c, 16) + 1);
    }
    return product;
}

hashes.sort((a, b) => sortKey(a) - sortKey(b));
let result = hashes.join("");
result += "gulnaz.pakhriyeva.06@mail.ru".toLowerCase();
const final = crypto.createHash("sha3-256").update(result).digest("hex");
console.log(final);