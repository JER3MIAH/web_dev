import fs from "fs";
import { input } from '@inquirer/prompts';
import qr from 'qr-image';


const url = await input({ message: 'Enter url' });

var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));

// var svg_string = qr.imageSync('I love QR!');

fs.writeFile('url.txt', url, function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Url saved successfully");
    }
});

