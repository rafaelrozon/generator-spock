const path = require('path');
const formatFilename = require('./formatFileName');

module.exports = function(
    name,
    ext = '.jsx',
    pathStr = null,
    skipFormat = false
) {
    const prefix = `${pathStr || ''}${pathStr ? '/' : ''}`;
    const fileDetails = path.parse(name);
    let filename = name;

    if (fileDetails.ext !== '' && fileDetails.ext !== '.') {
        filename = fileDetails.base.replace(fileDetails.ext, '');
    }

    if (skipFormat) {
        return `${prefix}${filename}${ext}`;
    }

    return `${prefix}${formatFilename(filename)}${ext}`;
};
