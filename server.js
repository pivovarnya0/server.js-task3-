const http = require('http');

const gcd = (a, b) => b === 0n ? a : gcd(b, a % b);
const lcm = (a, b) => (a === 0n || b === 0n) ? 0n : (a * b) / gcd(a, b);

const parseNum = (str) => {
    if (!str || !/^\s*\+?\d+\s*$/.test(str)) return null; // Только цифры и необязательный плюс
    const n = BigInt(str);
    return n > 0n ? n : null;
};

http.createServer((req, res) => {
    const send = (status, text) => {
        res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(text);
    };

    if (req.method !== 'GET') return send(405, 'NaN');

    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (!parsedUrl.pathname.endsWith('gulnaz_pakhriyeva_06_mail_ru')) return send(404, 'NaN');

    const x = parseNum(parsedUrl.searchParams.get('x'));
    const y = parseNum(parsedUrl.searchParams.get('y'));

    if (x === null || y === null) return send(200, 'NaN');

    send(200, String(lcm(x, y)));
}).listen(process.env.PORT || 3000, () => console.log("Servak gotov"));