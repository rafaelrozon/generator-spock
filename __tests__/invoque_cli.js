var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

// env.register(require.resolve('generator-spock-2'), 'spock');

env.lookup(function (done) {
  env.run('spock-2:actions', 
    {   
        'skip-install': true, 
        'skip-prompting': false, 
        'input': {
            'moduleName': 'Beta',
            'actions': {
                'destinationPath': '.',
                'type': 'actions',
            }
        }
        

    }, done);
});



