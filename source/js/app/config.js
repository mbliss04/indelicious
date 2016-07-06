var config_module = angular.module('app.config', []);

var config_data = {
    'GENERAL_CONFIG': {
        'APP_NAME': 'indelicious',
        'APP_VERSION': '1.0',
        'HTML_5_MODE': false,
        'WHITE_LABEL_CLIENT_ID': 'xYtGOfdFY1WY3L5zNDC5SyZ6qLIFdz9TCy2Zu4nz',
        'SOUNDCLOUD_CLIENT_ID': '6e0c2722ceda57e1e8c321af0b0ce491',
        'DEFAULT_COLLECTION': 'weekly'
    }
};

angular.forEach(config_data, function(key, value) {
    config_module.constant(value, key);
});
