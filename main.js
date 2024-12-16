const os = require(`node:os`)

const { mathAdd, mathSub, mathMul, mathDiv } = require(`./index`)


console.log(mathAdd(5, 3));
console.log(mathSub(10, 4));
console.log(mathMul(3, 4));
console.log(mathDiv(8, 2));

function systemMonitoring() {
    console.log("---Tizim Monitoring---");
    console.log("Operatsion tizim:", os.type());
    console.log("Platforma:", os.platform());
    console.log("Arxitektura:", os.arch());
    console.log("Umumiy xotira", (os.totalmem() / 1024 ** 3).toFixed(2), "GB");
    console.log("Bo'sh xotira:", (os.freemem() / 1024 ** 3).toFixed(2), "GB");
    console.log("Ish vaqti:", (os.uptime() / 3600).toFixed(2), "soat");

}

systemMonitoring()
