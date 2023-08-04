function fileUpload(event) {
    let files = event.target.files;
    let filesLength = files.length;

    if(filesLength > 0) {
        const imageSrc = URL.createObjectURL(files[0]);

        const imagePreviewElement = document.querySelector('#image');
        imagePreviewElement.src = imageSrc;
        imagePreviewElement.style.display = "block";
    }
}