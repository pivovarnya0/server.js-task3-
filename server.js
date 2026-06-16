const http = require("http");
const url = require("url");

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);

http.createServer((req, res) => {

    const { x, y } = url.parse(req.url, true).query;

    try {
        const a = BigInt(x);
        const b = BigInt(y);

        if (a <= 0n || b <= 0n) {
            return res.end("NaN");
        }

        res.end(String(lcm(a, b)));

    } catch {
        res.end("NaN");
    }

}).listen(process.env.PORT || 3000);