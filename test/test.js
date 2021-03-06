const ava = require('ava');

const IPv4 = require('../js/index').IPv4;
const Subnetv4 = require('../js/index').Subnetv4;

let ip722119665 = new IPv4('72.21.196.65');

ava('72.21.196.65 asString', test => {
  test.is(ip722119665.asString, '72.21.196.65');
});

ava('72.21.196.65 asInt', test => {
  test.is(ip722119665.asInt, 1209386049);
});

ava('72.21.196.65 asCidr', test => {
  test.is(ip722119665.asCidr, '72.21.196.65/32');
});

ava('72.21.196.65 asHex', test => {
  test.is(ip722119665.asHex, '4815c441');
});

ava('72.21.196.65 reverse', test => {
  test.is(ip722119665.reverse, '65.196.21.72.in-addr.arpa');
});

ava('72.21.196.65 next', test => {
  test.is(ip722119665.next.asString, '72.21.196.66');
});

ava('72.21.196.65 prev', test => {
  test.is(ip722119665.prev.asString, '72.21.196.64');
});

let ip1209386049 = new IPv4(1209386049);

ava('1209386049 asString', test => {
  test.is(ip1209386049.asString, '72.21.196.65');
});

ava('1209386049 asInt', test => {
  test.is(ip1209386049.asInt, 1209386049);
});

ava('1209386049 asCidr', test => {
  test.is(ip1209386049.asCidr, '72.21.196.65/32');
});

ava('1209386049 asHex', test => {
  test.is(ip1209386049.asHex, '4815c441');
});

ava('1209386049 reverse', test => {
  test.is(ip1209386049.reverse, '65.196.21.72.in-addr.arpa');
});

ava('1209386049 asBinary', test => {
  test.is(ip1209386049.asBinary, '01001000.00010101.11000100.01000001');
});

let ip100255255 = new IPv4('10.0.255.255');

ava('10.0.255.255 asString', test => {
  test.is(ip100255255.asString, '10.0.255.255');
});

ava('10.0.255.255 asInt', test => {
  test.is(ip100255255.asInt, 167837695);
});

ava('10.0.255.255 asCidr', test => {
  test.is(ip100255255.asCidr, '10.0.255.255/32');
});

ava('10.0.255.255 asHex', test => {
  test.is(ip100255255.asHex, 'a00ffff');
});

ava('10.0.255.255 reverse', test => {
  test.is(ip100255255.reverse, '255.255.0.10.in-addr.arpa');
});

ava('10.0.255.255 asBinary', test => {
  test.is(ip100255255.asBinary, '00001010.00000000.11111111.11111111');
});

let cidr1010016 = new Subnetv4('10.1.0.0/16');

ava('10.1.0.0/16 /16', test => {
  test.is(cidr1010016.subnets('/16').length, 1);
});

ava('10.1.0.0/16 /18', test => {
  test.is(cidr1010016.subnets('/18').length, 4);
  test.is(cidr1010016.subnets('/18', 2).length, 2);
});

ava('10.1.0.0/16 /24', test => {
  test.is(cidr1010016.subnets('/24').length, 256);
  test.is(cidr1010016.subnets('/24', 2).length, 2);
});

ava('10.1.0.0/16 /30', test => {
  test.is(cidr1010016.subnets('/30').length, 16384);
});

ava('10.1.0.0/16 count', test => {
  test.is(cidr1010016.count, 65536);
});

ava('10.1.0.0/16 netmask', test => {
  test.is(cidr1010016.netmask.asString, '255.255.0.0');
});

ava('10.1.0.0/16 gateway', test => {
  test.deepEqual(cidr1010016.gateway, new IPv4('10.1.0.0'));
});

ava('10.1.0.0/16 max', test => {
  test.deepEqual(cidr1010016.max, new IPv4('10.1.255.255'));
});

ava('10.1.0.0/16 includes', test => {
  test.is(cidr1010016.includes(new IPv4('10.1.120.1')), true);
  test.is(cidr1010016.includes(new IPv4('192.168.0.5')), false);
});

ava('10.1.0.0/16 broadcast', test => {
  test.deepEqual(cidr1010016.broadcast, new IPv4('10.1.255.255'));
});

ava('10.1.0.0/16 range', test => {
  test.deepEqual(cidr1010016.range, [
    new IPv4('10.1.0.0'),
    new IPv4('10.1.255.255')
  ]);
});

ava('10.1.0.0/16 prev', test => {
  test.deepEqual(cidr1010016.prev, new Subnetv4('10.0.0.0/16'));
});

ava('10.1.0.0/16 next', test => {
  test.deepEqual(cidr1010016.next, new Subnetv4('10.2.0.0/16'));
});

ava('10.1.0.0/16 next next', test => {
  test.deepEqual(cidr1010016.next.next, new Subnetv4('10.3.0.0/16'));
});

let cidr1010017 = new Subnetv4('10.1.0.0/17');

ava('10.1.0.0/17 /18', test => {
  test.is(cidr1010017.subnets('/18').length, 2);
});

ava('10.1.0.0/17 /24', test => {
  test.is(cidr1010017.subnets('/24').length, 128);
  test.is(cidr1010017.subnets('/24', 2).length, 2);
});

ava('10.1.0.0/17 /30', test => {
  test.is(cidr1010017.subnets('/30').length, 8192);
  test.is(cidr1010017.subnets('/30', 4).length, 4);
});

ava('10.1.0.0/17 count', test => {
  test.is(cidr1010017.count, 32768);
});

ava('10.1.0.0/17 netmask', test => {
  test.is(cidr1010017.netmask.asString, '255.255.128.0');
});

ava('10.1.0.0/17 includes', test => {
  test.is(cidr1010017.includes(new IPv4('10.1.120.1')), true);
  test.is(cidr1010017.includes(new IPv4('192.168.0.5')), false);
});

ava('10.1.0.0/17 gateway', test => {
  test.deepEqual(cidr1010017.gateway, new IPv4('10.1.0.0'));
});

ava('10.1.0.0/17 max', test => {
  test.deepEqual(cidr1010017.max, new IPv4('10.1.127.255'));
});

ava('10.1.0.0/17 broadcast', test => {
  test.deepEqual(cidr1010017.broadcast, new IPv4('10.1.127.255'));
});

ava('10.1.0.0/17 range', test => {
  test.deepEqual(cidr1010017.range, [
    new IPv4('10.1.0.0'),
    new IPv4('10.1.127.255')
  ]);
});

ava('10.1.0.0/17 prev', test => {
  test.deepEqual(cidr1010017.prev, new Subnetv4('10.0.128.0/17'));
});

ava('10.1.0.0/17 next', test => {
  test.deepEqual(cidr1010017.next, new Subnetv4('10.1.128.0/17'));
});

let cidr123429 = new Subnetv4('1.2.3.4/29');

ava('1.2.3.4/29 /30', test => {
  test.is(cidr123429.subnets('/30')[0].asString, '1.2.3.4/30');
});

ava('1.2.3.4/29 count', test => {
  test.is(cidr123429.count, 8);
});

ava('1.2.3.4/29 ipList', test => {
  test.deepEqual(cidr123429.ipList, [
    new IPv4('1.2.3.0'),
    new IPv4('1.2.3.1'),
    new IPv4('1.2.3.2'),
    new IPv4('1.2.3.3'),
    new IPv4('1.2.3.4'),
    new IPv4('1.2.3.5'),
    new IPv4('1.2.3.6'),
    new IPv4('1.2.3.7')
  ]);
});

ava('1.2.3.4/29 netmask', test => {
  test.is(cidr123429.netmask.asString, '255.255.255.248');
});

ava('1.2.3.4/29 wildcardmask', test => {
  test.is(cidr123429.wildcardmask.asString, '0.0.0.7');
});

ava('1.2.3.4/29 includes', test => {
  test.is(cidr123429.includes(new IPv4('1.2.3.4')), true);
  test.is(cidr123429.includes(new IPv4('192.168.0.5')), false);
});

ava('1.2.3.4/29 gateway', test => {
  test.deepEqual(cidr123429.gateway, new IPv4('1.2.3.0'));
});

ava('1.2.3.4/29 max', test => {
  test.deepEqual(cidr123429.max, new IPv4('1.2.3.7'));
});

ava('1.2.3.4/29 broadcast', test => {
  test.deepEqual(cidr123429.broadcast, new IPv4('1.2.3.7'));
});

ava('1.2.3.4/29 range', test => {
  test.deepEqual(cidr123429.range, [new IPv4('1.2.3.0'), new IPv4('1.2.3.7')]);
});

ava('1.2.3.4/29 prev', test => {
  test.deepEqual(cidr123429.prev, new Subnetv4('1.2.2.248/29'));
});

ava('1.2.3.4/29 next', test => {
  test.deepEqual(cidr123429.next, new Subnetv4('1.2.3.8/29'));
});

let cidr123432 = new Subnetv4('1.2.3.4/32');

ava('1.2.3.4/32 includes', test => {
  test.is(cidr123432.includes(new IPv4('1.2.3.4')), true);
  test.is(cidr123432.includes(new IPv4('1.2.3.5')), false);
});
