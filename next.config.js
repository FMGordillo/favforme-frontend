const { withXDN, withServiceWorker } = require("@xdn/next/config");

module.exports = withXDN(withServiceWorker());
