var hprose = require("hprose");
var batchloghandler = require("./batchloghandler.js");
var log = hprose.Future.wrap(console.log, console);
var client = hprose.Client.create("http://127.0.0.1:8080/", ['hello']);
client.batch.use(batchloghandler);
client.batch.begin();
var r1 = client.hello("world 1");
var r2 = client.hello("world 2");
var r3 = client.hello("world 3");
client.batch.end();
log(r1, r2, r3);