document.getElementById("generate-certificate").addEventListener("click", function () {
    const fullName = document.getElementById("full-name").value;
    const grade = document.getElementById("grade").value;
    const item = document.getElementById("item").value;
    const school = document.getElementById("school").value;
    const category = document.getElementById("category").value;

    const imageInput = document.getElementById("image");
    const image = imageInput.files[0]; // Get the selected image file

    if (fullName && grade && item && school && category && image) {
        const certificateTemplate = document.getElementById("certificate-template");
        const canvas = document.createElement("canvas");
        canvas.width = certificateTemplate.width;
        canvas.height = certificateTemplate.height;
        const context = canvas.getContext("2d");

        context.drawImage(certificateTemplate, 0, 0);
        context.font = "bold 30px Arial";
        context.fillStyle = "#000";
        context.fillText('Full Name: ' + fullName, 305, 599); // Customize the position (x, y) for full name
        context.fillText('Grade: ' + grade + ' Grade', 305, 639); // Customize the position for grade
        context.fillText('Item: ' + item, 305, 679); // Customize the position for item
        context.fillText('School: ' + school, 305, 719); // Customize the position for school
        context.fillText('Category: ' + category, 305, 759); // Customize the position for category

        const imageReader = new FileReader();
        imageReader.onload = function () {
            const img = new Image();
            img.src = imageReader.result;
            img.onload = function () {
                // Customize image position and size (x, y, width, height)
                context.drawImage(img, 305, 300, 200, 200);

                const downloadLink = document.getElementById("download-link");
                const certificateImage = canvas.toDataURL("image/png");
                downloadLink.href = certificateImage;
                downloadLink.style.display = "block";
            };
        };
        imageReader.readAsDataURL(image);
    }
});
