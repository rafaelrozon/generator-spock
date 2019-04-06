const formatFilename = require('./formatFileName');

module.exports = function(name, ext = 'jsx', path = null, skipFormat = false) {
    const prefix = `${path || ''}${path ? '/' : ''}`;

    if (skipFormat) {
        return `${prefix}${name}.${ext}`;
    }

    return `${prefix}${formatFilename(name)}.${ext}`;
};
