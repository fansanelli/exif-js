'use strict';

import * as exif from './impl/exif';

export const Tags: any = exif.ExifTags;
export const TiffTags: any = exif.TiffTags;
export const GPSTags: any = exif.GPSTags;
export const IFD1Tags: any = exif.IFD1Tags;
export const StringValues: any = exif.StringValues;

export function enableXmp(): void {
  exif.enableXmp();
}

export function disableXmp(): void {
  exif.disableXmp();
}

export function getData(img: any, callback: any): any {
  if (((self.Image && img instanceof self.Image)
    || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
    && !img.complete)
    return false;
  if (!exif.imageHasData(img)) {
    exif.getImageData(img, callback);
  } else {
    if (callback) {
      callback.call(img);
    }
  }
  return true;
}

export function getTag(img: any, tag: any): any {
  if (!exif.imageHasData(img)) return;
  return img.exifdata[tag];
}

export function getIptcTag(img: any, tag: any): any {
  if (!exif.imageHasData(img)) return;
  return img.iptcdata[tag];
}

export function getAllTags(img: any): any {
  if (!exif.imageHasData(img)) return {};
  const tags: { [tag: string]: any } = {};
  const data = img.exifdata;
  for (const a in data) {
    if (data.hasOwnProperty(a)) {
      tags[a] = data[a];
    }
  }
  return tags;
}

export function getAllIptcTags(img: any): any {
  if (!exif.imageHasData(img)) return {};
  const tags: { [tag: string]: any } = {};
  const data = img.iptcdata;
  for (const a in data) {
    if (data.hasOwnProperty(a)) {
      tags[a] = data[a];
    }
  }
  return tags;
}

export function pretty(img: any): string {
  if (!exif.imageHasData(img)) return "";
  let strPretty = "";
  const data = img.exifdata;
  for (const a in data) {
    if (data.hasOwnProperty(a)) {
      if (typeof data[a] == "object") {
        if (data[a] instanceof Number) {
          strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
        } else {
          strPretty += a + " : [" + data[a].length + " values]\r\n";
        }
      } else {
        strPretty += a + " : " + data[a] + "\r\n";
      }
    }
  }
  return strPretty;
}

export function readFromBinaryFile(file: any): any {
  return exif.findEXIFinJPEG(file);
}
