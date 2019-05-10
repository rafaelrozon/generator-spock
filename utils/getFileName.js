const formatFilename = require('./formatFileName');

module.exports = function(
    name,
    ext = 'jsx',
    pathStr = null,
    skipFormat = false
) {
    const prefix = `${pathStr || ''}${pathStr ? '/' : ''}`;

    if (skipFormat) {
        return `${prefix}${name}.${ext}`;
    }

    return `${prefix}${formatFilename(name)}.${ext}`;
};
