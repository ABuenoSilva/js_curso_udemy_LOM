const { cpfs, ips } = require('./base');

const regExpCpf = /(\d{3}\.){2}\d{3}\-\d\d/g;
const regExpIp = /((25[0-5]|2[0-4][0-9]|1[\d][\d]|[1-9][\d]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[\d][\d]|[1-9][\d]|[0-9])/g;

console.log(cpfs.match(regExpCpf));
console.log(ips.match(regExpIp));