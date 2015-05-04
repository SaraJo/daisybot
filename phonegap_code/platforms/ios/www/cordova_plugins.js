cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.megster.cordova.rfduino/www/rfduino.js",
        "id": "com.megster.cordova.rfduino.rfduino",
        "clobbers": [
            "rfduino"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.oauthio/www/dist/oauth.js",
        "id": "com.phonegap.plugins.oauthio.OAuth",
        "merges": [
            "OAuth"
        ]
    },
    {
        "file": "plugins/com.badrit.BackgroundJS/www/BackgroundJS.js",
        "id": "com.badrit.BackgroundJS.BackgroundJS",
        "clobbers": [
            "navigator.BackgroundJS"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.megster.cordova.rfduino": "0.0.2",
    "com.phonegap.plugins.oauthio": "0.2.1",
    "com.badrit.BackgroundJS": "0.1.0",
    "org.apache.cordova.inappbrowser": "0.5.0",
    "org.apache.cordova.device": "0.2.11-dev"
}
// BOTTOM OF METADATA
});