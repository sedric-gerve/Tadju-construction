import sharp from "sharp";
import { readdir, stat, writeFile, rename } from "node:fs/promises";
import path from "node:path";

sharp.cache(false);

const dir = path.resolve("public/images/produits");
const files = (await readdir(dir)).filter((f) => f.endsWith(".jpg"));

for (const file of files) {
  const filePath = path.join(dir, file);
  const tmpPath = filePath.replace(/\.jpg$/, ".optimized.jpg");
  const before = (await stat(filePath)).size;
  const meta = await sharp(filePath).metadata();

  const buffer = await sharp(filePath)
    .resize({ width: 1400, withoutEnlargement: true })
    .jpeg({ quality: 78, progressive: true, mozjpeg: true })
    .toBuffer();

  await writeFile(tmpPath, buffer);
  await rename(tmpPath, filePath);

  console.log(
    `${file}: ${meta.width}x${meta.height} ${(before / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB`
  );
}
