document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    btnCamera = document.getElementById('btnCamera').onclick = capturePhoto
    imgPhoto = document.getElementById('imgPhoto')

}

