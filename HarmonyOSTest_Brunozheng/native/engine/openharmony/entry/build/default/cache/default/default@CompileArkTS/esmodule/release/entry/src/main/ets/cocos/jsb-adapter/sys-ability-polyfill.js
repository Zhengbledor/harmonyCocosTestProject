import display from '@ohos:display';
import i18n from '@ohos:i18n';
import deviceInfo from '@ohos:deviceInfo';
import batteryInfo from '@ohos:batteryInfo';
import sensor from '@ohos:sensor';
export function systemReady() {
    return new Promise(v60 => {
        if (typeof XMLHttpRequest === 'undefined') {
            window.XMLHttpRequest = function () { };
        }
        display.getDefaultDisplay((x60, y60) => {
            window.oh.display = y60;
        });
        v60();
    });
}
window.getSystemLanguage = function () {
    return i18n.getSystemLanguage();
};
window.getOSFullName = function () {
    return deviceInfo.osFullName;
};
window.getBatteryLevel = function () {
    return batteryInfo.batterySOC;
};
window.getDPI = function () {
    var t60 = display.getDefaultDisplaySync();
    return t60.densityDPI;
};
window.getPixelRation = function () {
    var s60 = display.getDefaultDisplaySync();
    return s60.densityPixels;
};
window.getDeviceOrientation = function () {
    var r60 = display.getDefaultDisplaySync();
    return r60.rotation;
};
function radiansToDegrees(p60) {
    var q60 = Math.PI;
    return p60 * (180 / q60);
}
let sDeviceMotionValues = [];
try {
    sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ACCELEROMETER, function (o60) {
        sDeviceMotionValues[0] = o60.x;
        sDeviceMotionValues[1] = o60.y;
        sDeviceMotionValues[2] = -o60.z;
    }, {
        interval: 10000000000
    });
}
catch (m60) {
    sDeviceMotionValues[0] = 0;
    sDeviceMotionValues[1] = 0;
    sDeviceMotionValues[2] = 0;
}
try {
    sensor.on(258, function (l60) {
        sDeviceMotionValues[3] = l60.x;
        sDeviceMotionValues[4] = l60.y;
        sDeviceMotionValues[5] = l60.z;
    }, {
        interval: 10000000000
    });
}
catch (j60) {
    sDeviceMotionValues[3] = 0;
    sDeviceMotionValues[4] = 0;
    sDeviceMotionValues[5] = 0;
}
try {
    sensor.on(sensor.SensorType.SENSOR_TYPE_ID_GYROSCOPE, function (i60) {
        sDeviceMotionValues[6] = radiansToDegrees(i60.x);
        sDeviceMotionValues[7] = radiansToDegrees(i60.y);
        sDeviceMotionValues[8] = radiansToDegrees(i60.z);
    }, {
        interval: 10000000000
    });
}
catch (g60) {
    sDeviceMotionValues[6] = 0;
    sDeviceMotionValues[7] = 0;
    sDeviceMotionValues[8] = 0;
}
window.getDeviceMotionValue = function () {
    return sDeviceMotionValues;
};
