import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const tmpFolder = path.resolve(__dirname, '..', '..', 'files');

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(16).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
