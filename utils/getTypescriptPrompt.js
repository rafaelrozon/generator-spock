module.exports = function() {
    return {
        type: 'list',
        name: 'isTypescript',
        message: 'Use typescript',
        choices: ['yes', 'no']
    };
};
