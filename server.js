const http = require("http");
const url = require("url");

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);

http.createServer((req, res) => {
    const { x, y } = url.parse(req.url, true).query;

    const a = Number(x);
    const b = Number(y);

    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        return res.end("NaN");
    }

    res.end(String(lcm(a, b)));
}).listen(process.env.PORT || 3000);