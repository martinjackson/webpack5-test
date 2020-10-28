var os = require('os');
var dns = require('dns');

function fqdnPromise() {

    return new Promise(function(resolve, reject) {

        var h = os.hostname();
        // console.log('UQDN: ' + h);

        dns.lookup(h, { hints: dns.ADDRCONFIG }, function(err, ip) {
            console.log('IP: ' + ip);
            dns.lookupService(ip, 0, function (err, hostname, service) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                // console.log('FQDN: ' + hostname);
                // console.log('Service: ' + service);
                resolve(hostname)
            });
        });
    });
}


module.exports = fqdnPromise;