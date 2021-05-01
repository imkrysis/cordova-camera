document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    btnCamera = document.getElementById('btnCamera').onclick = capturePhoto
    imgPhoto = document.getElementById('imgPhoto')

    pictureSource = navigator.camera.PictureSourceType
    destinationType = navigator.camera.DestinationType

}

function capturePhoto() {
    
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });

}

function onPhotoDataSuccess(imageData) {

    alert('Photo saved');
    
    imgPhoto.style.display = 'block'
    imgPhoto.src = 'data:image/jpeg;base64,' + imageData
}

function onFail(message) {

    alert('Failed cause of: ' + message);

}

