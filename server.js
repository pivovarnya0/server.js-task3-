const http = require("http");
const url = require("url");

function gcd(a, b) {
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

http.createServer((req, res) => {
    const { x, y } = url.parse(req.url, true).query;

    res.end(String(lcm(Number(x), Number(y))));
}).listen(process.env.PORT || 3000);