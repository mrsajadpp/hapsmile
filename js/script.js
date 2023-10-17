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
        context.fillText(fullName, 205, 620); // Customize the position (x, y) for full name
        context.fillText(category + ' Grade', 205, 695); // Customize the position for grade
        context.fillText(item, 205, 779); // Customize the position for item
        context.fillText(grade, 205, 863); // Customize the position for school
        context.fillText(school, 205, 947); // Customize the position for category

        const imageReader = new FileReader();
        imageReader.onload = function () {
            const img = new Image();
            img.src = imageReader.result;
            img.onload = function () {
                // Customize image position and size (x, y, width, height)
                context.drawImage(img, 705, 465, 400,600);

                const downloadLink = document.getElementById("download-link");
                const certificateImage = canvas.toDataURL("image/png");
                downloadLink.href = certificateImage;
                downloadLink.style.display = "flex";
            };
        };
        imageReader.readAsDataURL(image);
    }
});
