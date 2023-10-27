import sharp from 'sharp';
import axios from 'axios';
import path from 'path';
import fs from 'fs';

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const imageUrl = query.url;
  const width = Number(query.w) || null;
  const quality = Number(query.q) || 75;

  if (!imageUrl) {
    return "Image URL is required.";
  }

  try {
    let imageBuffer = null;
    if (imageUrl.startsWith('/')) {
      const localPath = path.join('public', imageUrl);
      if (fs.existsSync(localPath)) {
        imageBuffer = fs.readFileSync(localPath);
      } else {
        return "Local file not found.";
      }
    } else {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        imageBuffer = Buffer.from(response.data, 'binary');
    }
    
    const image = sharp(imageBuffer);

    if (width) {
      image.resize(width);
    }

    image.png({ quality });
    
    return image.toBuffer();

  } catch (err) {
    return "Error processing image";
  }
});
