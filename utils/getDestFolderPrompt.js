module.exports = function getDestFolderPrompt() {
    return {
        type: 'input',
        name: 'destinationFolder',
        message: 'Enter destination folder',
        default: '.'
    };
};
