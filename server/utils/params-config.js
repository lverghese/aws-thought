const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: "user-images-466d7df8-4689-4f42-9c12-065f7477a287",
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        ACL: 'public-read'
    };

    return imageParams;
};

module.exports = params;