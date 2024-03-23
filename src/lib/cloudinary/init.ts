import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

export const upload = async (file: File) => {
  const arraBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arraBuffer);
  const data = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: 'nextgram', transformation: { quality: 85 } },
        (err, result) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });
  return data as UploadApiResponse;
};

export const remove = async (publicId: string) => {
  await cloudinary.uploader.destroy(publicId);
  console.log('removed : ', publicId);
};
