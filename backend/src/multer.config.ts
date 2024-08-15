import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname, join } from 'path';

const multerConfig = {
  storage: diskStorage({
    destination: join(__dirname, '..', '/src/uploads'),
    filename: (req, file, callback) => {
      const fileExtension = extname(file.originalname);
      const uniqueFilename = `${uuidv4()}${fileExtension}`;
      callback(null, uniqueFilename);
    },
  }),
};

export default multerConfig;
