/* jshint node: true */

module.exports = function(environment){

    keys = {
        "development": {
            openweathermap: {
                appid: '1234567890',
                host: 'http://api.openweathermap.org',
            },
        },
        "production": {
            openweathermap: {
                appid: '1234567890',
                host: 'http://api.openweathermap.org',
            },
        },
    };

    return keys[environment];
}
