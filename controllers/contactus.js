const path = require('path');
const rootDir = require('../util/path');
// /admin/contactus => GET
exports.contactuscontroller=(req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
  };
