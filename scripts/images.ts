import { readFile, readdir } from "node:fs/promises";
import sharp from "sharp";

const INPUT = "tmp";
const OUTPUT = "public/about";
const SIZES = [320, 480, 720, 1280, 1920];

const images = await readdir(INPUT);

await Promise.all(
	images.map(async (image) => {
		const file = await readFile(`images/${image}`);
		const name = image.slice(0, image.indexOf("."));

		await Promise.all(
			SIZES.map(async (size) => {
				await Promise.all([
					sharp(file)
						.resize(size)
						.webp({
							quality: 80,
							smartSubsample: true,
							effort: 6,
							minSize: true,
						})
						.toFile(`${OUTPUT}/${name}-${size}.webp`),
					sharp(file)
						.resize(size)
						.avif({
							quality: 60,
							effort: 9,
						})
						.sharpen()
						.toFile(`${OUTPUT}/${name}-${size}.avif`),
					sharp(file)
						.resize(size)
						.jpeg({
							quality: 60,
							trellisQuantisation: true,
							overshootDeringing: true,
							optimiseScans: true,
							quantizationTable: 8,
						})
						.sharpen()
						.toFile(`${OUTPUT}/${name}-${size}.jpeg`),
				]);
			}),
		);
	}),
);
