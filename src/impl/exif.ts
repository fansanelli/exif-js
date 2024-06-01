'use strict';

export const Tags: { [id: number]: string } = {
    // version tags
    0x9000: "ExifVersion",             // EXIF version
    0xA000: "FlashpixVersion",         // Flashpix format version

    // colorspace tags
    0xA001: "ColorSpace",              // Color space information tag

    // image configuration
    0xA002: "PixelXDimension",         // Valid width of meaningful image
    0xA003: "PixelYDimension",         // Valid height of meaningful image
    0x9101: "ComponentsConfiguration", // Information about channels
    0x9102: "CompressedBitsPerPixel",  // Compressed bits per pixel

    // user information
    0x927C: "MakerNote",               // Any desired information written by the manufacturer
    0x9286: "UserComment",             // Comments by user

    // related file
    0xA004: "RelatedSoundFile",        // Name of related sound file

    // date and time
    0x9003: "DateTimeOriginal",        // Date and time when the original image was generated
    0x9004: "DateTimeDigitized",       // Date and time when the image was stored digitally
    0x9290: "SubsecTime",              // Fractions of seconds for DateTime
    0x9291: "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
    0x9292: "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

    // picture-taking conditions
    0x829A: "ExposureTime",            // Exposure time (in seconds)
    0x829D: "FNumber",                 // F number
    0x8822: "ExposureProgram",         // Exposure program
    0x8824: "SpectralSensitivity",     // Spectral sensitivity
    0x8827: "ISOSpeedRatings",         // ISO speed rating
    0x8828: "OECF",                    // Optoelectric conversion factor
    0x9201: "ShutterSpeedValue",       // Shutter speed
    0x9202: "ApertureValue",           // Lens aperture
    0x9203: "BrightnessValue",         // Value of brightness
    0x9204: "ExposureBias",            // Exposure bias
    0x9205: "MaxApertureValue",        // Smallest F number of lens
    0x9206: "SubjectDistance",         // Distance to subject in meters
    0x9207: "MeteringMode",            // Metering mode
    0x9208: "LightSource",             // Kind of light source
    0x9209: "Flash",                   // Flash status
    0x9214: "SubjectArea",             // Location and area of main subject
    0x920A: "FocalLength",             // Focal length of the lens in mm
    0xA20B: "FlashEnergy",             // Strobe energy in BCPS
    0xA20C: "SpatialFrequencyResponse",    //
    0xA20E: "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
    0xA20F: "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
    0xA210: "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
    0xA214: "SubjectLocation",         // Location of subject in image
    0xA215: "ExposureIndex",           // Exposure index selected on camera
    0xA217: "SensingMethod",           // Image sensor type
    0xA300: "FileSource",              // Image source (3 == DSC)
    0xA301: "SceneType",               // Scene type (1 == directly photographed)
    0xA302: "CFAPattern",              // Color filter array geometric pattern
    0xA401: "CustomRendered",          // Special processing
    0xA402: "ExposureMode",            // Exposure mode
    0xA403: "WhiteBalance",            // 1 = auto white balance, 2 = manual
    0xA404: "DigitalZoomRation",       // Digital zoom ratio
    0xA405: "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
    0xA406: "SceneCaptureType",        // Type of scene
    0xA407: "GainControl",             // Degree of overall image gain adjustment
    0xA408: "Contrast",                // Direction of contrast processing applied by camera
    0xA409: "Saturation",              // Direction of saturation processing applied by camera
    0xA40A: "Sharpness",               // Direction of sharpness processing applied by camera
    0xA40B: "DeviceSettingDescription",    //
    0xA40C: "SubjectDistanceRange",    // Distance to subject

    // other tags
    0xA005: "InteroperabilityIFDPointer",
    0xA420: "ImageUniqueID"            // Identifier assigned uniquely to each image
} as const;

export const TiffTags: { [id: number]: string } = {
    0x0100: "ImageWidth",
    0x0101: "ImageHeight",
    0x8769: "ExifIFDPointer",
    0x8825: "GPSInfoIFDPointer",
    0xA005: "InteroperabilityIFDPointer",
    0x0102: "BitsPerSample",
    0x0103: "Compression",
    0x0106: "PhotometricInterpretation",
    0x0112: "Orientation",
    0x0115: "SamplesPerPixel",
    0x011C: "PlanarConfiguration",
    0x0212: "YCbCrSubSampling",
    0x0213: "YCbCrPositioning",
    0x011A: "XResolution",
    0x011B: "YResolution",
    0x0128: "ResolutionUnit",
    0x0111: "StripOffsets",
    0x0116: "RowsPerStrip",
    0x0117: "StripByteCounts",
    0x0201: "JPEGInterchangeFormat",
    0x0202: "JPEGInterchangeFormatLength",
    0x012D: "TransferFunction",
    0x013E: "WhitePoint",
    0x013F: "PrimaryChromaticities",
    0x0211: "YCbCrCoefficients",
    0x0214: "ReferenceBlackWhite",
    0x0132: "DateTime",
    0x010E: "ImageDescription",
    0x010F: "Make",
    0x0110: "Model",
    0x0131: "Software",
    0x013B: "Artist",
    0x8298: "Copyright"
} as const;

export const GPSTags: { [id: number]: string } = {
    0x0000: "GPSVersionID",
    0x0001: "GPSLatitudeRef",
    0x0002: "GPSLatitude",
    0x0003: "GPSLongitudeRef",
    0x0004: "GPSLongitude",
    0x0005: "GPSAltitudeRef",
    0x0006: "GPSAltitude",
    0x0007: "GPSTimeStamp",
    0x0008: "GPSSatellites",
    0x0009: "GPSStatus",
    0x000A: "GPSMeasureMode",
    0x000B: "GPSDOP",
    0x000C: "GPSSpeedRef",
    0x000D: "GPSSpeed",
    0x000E: "GPSTrackRef",
    0x000F: "GPSTrack",
    0x0010: "GPSImgDirectionRef",
    0x0011: "GPSImgDirection",
    0x0012: "GPSMapDatum",
    0x0013: "GPSDestLatitudeRef",
    0x0014: "GPSDestLatitude",
    0x0015: "GPSDestLongitudeRef",
    0x0016: "GPSDestLongitude",
    0x0017: "GPSDestBearingRef",
    0x0018: "GPSDestBearing",
    0x0019: "GPSDestDistanceRef",
    0x001A: "GPSDestDistance",
    0x001B: "GPSProcessingMethod",
    0x001C: "GPSAreaInformation",
    0x001D: "GPSDateStamp",
    0x001E: "GPSDifferential"
} as const;

// EXIF 2.3 Spec
export const IFD1Tags: { [id: number]: string } = {
    0x0100: "ImageWidth",
    0x0101: "ImageHeight",
    0x0102: "BitsPerSample",
    0x0103: "Compression",
    0x0106: "PhotometricInterpretation",
    0x0111: "StripOffsets",
    0x0112: "Orientation",
    0x0115: "SamplesPerPixel",
    0x0116: "RowsPerStrip",
    0x0117: "StripByteCounts",
    0x011A: "XResolution",
    0x011B: "YResolution",
    0x011C: "PlanarConfiguration",
    0x0128: "ResolutionUnit",
    0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
    0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
    0x0211: "YCbCrCoefficients",
    0x0212: "YCbCrSubSampling",
    0x0213: "YCbCrPositioning",
    0x0214: "ReferenceBlackWhite"
} as const;

export const StringValues: { [key: string]: { [id: number]: string } } = {
    ExposureProgram: {
        0: "Not defined",
        1: "Manual",
        2: "Normal program",
        3: "Aperture priority",
        4: "Shutter priority",
        5: "Creative program",
        6: "Action program",
        7: "Portrait mode",
        8: "Landscape mode"
    },
    MeteringMode: {
        0: "Unknown",
        1: "Average",
        2: "CenterWeightedAverage",
        3: "Spot",
        4: "MultiSpot",
        5: "Pattern",
        6: "Partial",
        255: "Other"
    },
    LightSource: {
        0: "Unknown",
        1: "Daylight",
        2: "Fluorescent",
        3: "Tungsten (incandescent light)",
        4: "Flash",
        9: "Fine weather",
        10: "Cloudy weather",
        11: "Shade",
        12: "Daylight fluorescent (D 5700 - 7100K)",
        13: "Day white fluorescent (N 4600 - 5400K)",
        14: "Cool white fluorescent (W 3900 - 4500K)",
        15: "White fluorescent (WW 3200 - 3700K)",
        17: "Standard light A",
        18: "Standard light B",
        19: "Standard light C",
        20: "D55",
        21: "D65",
        22: "D75",
        23: "D50",
        24: "ISO studio tungsten",
        255: "Other"
    },
    Flash: {
        0x0000: "Flash did not fire",
        0x0001: "Flash fired",
        0x0005: "Strobe return light not detected",
        0x0007: "Strobe return light detected",
        0x0009: "Flash fired, compulsory flash mode",
        0x000D: "Flash fired, compulsory flash mode, return light not detected",
        0x000F: "Flash fired, compulsory flash mode, return light detected",
        0x0010: "Flash did not fire, compulsory flash mode",
        0x0018: "Flash did not fire, auto mode",
        0x0019: "Flash fired, auto mode",
        0x001D: "Flash fired, auto mode, return light not detected",
        0x001F: "Flash fired, auto mode, return light detected",
        0x0020: "No flash function",
        0x0041: "Flash fired, red-eye reduction mode",
        0x0045: "Flash fired, red-eye reduction mode, return light not detected",
        0x0047: "Flash fired, red-eye reduction mode, return light detected",
        0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
        0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
        0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
        0x0059: "Flash fired, auto mode, red-eye reduction mode",
        0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
        0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
    },
    SensingMethod: {
        1: "Not defined",
        2: "One-chip color area sensor",
        3: "Two-chip color area sensor",
        4: "Three-chip color area sensor",
        5: "Color sequential area sensor",
        7: "Trilinear sensor",
        8: "Color sequential linear sensor"
    },
    SceneCaptureType: {
        0: "Standard",
        1: "Landscape",
        2: "Portrait",
        3: "Night scene"
    },
    SceneType: {
        1: "Directly photographed"
    },
    CustomRendered: {
        0: "Normal process",
        1: "Custom process"
    },
    WhiteBalance: {
        0: "Auto white balance",
        1: "Manual white balance"
    },
    GainControl: {
        0: "None",
        1: "Low gain up",
        2: "High gain up",
        3: "Low gain down",
        4: "High gain down"
    },
    Contrast: {
        0: "Normal",
        1: "Soft",
        2: "Hard"
    },
    Saturation: {
        0: "Normal",
        1: "Low saturation",
        2: "High saturation"
    },
    Sharpness: {
        0: "Normal",
        1: "Soft",
        2: "Hard"
    },
    SubjectDistanceRange: {
        0: "Unknown",
        1: "Macro",
        2: "Close view",
        3: "Distant view"
    },
    FileSource: {
        3: "DSC"
    },

    Components: {
        0: "",
        1: "Y",
        2: "Cb",
        3: "Cr",
        4: "R",
        5: "G",
        6: "B"
    }
} as const;

interface ExifDataImage extends HTMLImageElement {
    exifdata: object | string | null
    iptcdata: object | string | null
    xmpdata: object | string | null
}

export function imageHasData(img: ExifDataImage): boolean {
    return !!(img.exifdata);
}

function base64ToArrayBuffer(base64: string, contentType: string = ''): ArrayBuffer {
    contentType = contentType || (base64 as any).match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
    base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    var binary = atob(base64);
    var len = binary.length;
    var buffer = new ArrayBuffer(len);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
    }
    return buffer;
}

function objectURLToBlob(url: string, callback: Function): void {
    var http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.responseType = "blob";
    http.onload = function (e) {
        if (this.status == 200 || this.status === 0) {
            callback(this.response);
        }
    };
    http.send();
}

export function getImageData(img: ExifDataImage, callback: Function) {
    function handleBinaryFile(binFile: ArrayBuffer) {
        var data = findEXIFinJPEG(binFile);
        img.exifdata = data || {};
        var iptcdata = findIPTCinJPEG(binFile);
        img.iptcdata = iptcdata || {};
        if (isXmpEnabled) {
            var xmpdata = findXMPinJPEG(binFile);
            img.xmpdata = xmpdata || {};
        }
        if (callback) {
            callback.call(img);
        }
    }

    if (img.src) {
        if (/^data\:/i.test(img.src)) { // Data URI
            var arrayBuffer = base64ToArrayBuffer(img.src);
            handleBinaryFile(arrayBuffer);

        } else if (/^blob\:/i.test(img.src)) { // Object URL
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                handleBinaryFile(e.target!.result as any);
            };
            objectURLToBlob(img.src, function (blob: any) {
                fileReader.readAsArrayBuffer(blob);
            });
        } else {
            var http = new XMLHttpRequest();
            http.onload = function () {
                if (this.status == 200 || this.status === 0) {
                    handleBinaryFile(http.response);
                } else {
                    throw "Could not load image";
                }
            };
            http.open("GET", img.src, true);
            http.responseType = "arraybuffer";
            http.send(null);
        }
    } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            handleBinaryFile(e.target!.result as any);
        };
        fileReader.readAsArrayBuffer(img);
    }
}

export function findEXIFinJPEG(file: ArrayBuffer) {
    var dataView = new DataView(file);

    if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
        return false; // not a valid jpeg
    }

    let offset = 2;
    const length = file.byteLength;
    while (offset < length) {
        if (dataView.getUint8(offset) != 0xFF) {
            return false; // not a valid marker, something is wrong
        }

        const marker = dataView.getUint8(offset + 1);

        // we could implement handling for other markers here,
        // but we're only looking for 0xFFE1 for EXIF data

        if (marker == 225) {
            return readEXIFData(dataView, offset + 4);
        } else {
            offset += 2 + dataView.getUint16(offset + 2);
        }

    }

}

function findIPTCinJPEG(file: ArrayBuffer): object | null {
    var dataView = new DataView(file);

    if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
        return null; // not a valid jpeg
    }

    var offset = 2,
        length = file.byteLength;


    var isFieldSegmentStart = function (dataView: DataView, offset: number) {
        return (
            dataView.getUint8(offset) === 0x38 &&
            dataView.getUint8(offset + 1) === 0x42 &&
            dataView.getUint8(offset + 2) === 0x49 &&
            dataView.getUint8(offset + 3) === 0x4D &&
            dataView.getUint8(offset + 4) === 0x04 &&
            dataView.getUint8(offset + 5) === 0x04
        );
    };

    while (offset < length) {

        if (isFieldSegmentStart(dataView, offset)) {

            // Get the length of the name header (which is padded to an even number of bytes)
            var nameHeaderLength = dataView.getUint8(offset + 7);
            if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
            // Check for pre photoshop 6 format
            if (nameHeaderLength === 0) {
                // Always 4
                nameHeaderLength = 4;
            }

            var startOffset = offset + 8 + nameHeaderLength;
            var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

            return readIPTCData(file, startOffset, sectionLength);
        }


        // Not the marker, continue searching
        offset++;

    }
    return null

}
const IptcFieldMap: { [id: number]: string } = {
    0x78: 'caption',
    0x6E: 'credit',
    0x19: 'keywords',
    0x37: 'dateCreated',
    0x50: 'byline',
    0x55: 'bylineTitle',
    0x7A: 'captionWriter',
    0x69: 'headline',
    0x74: 'copyright',
    0x0F: 'category'
} as const;
function readIPTCData(file: ArrayBuffer, startOffset: number, sectionLength: number): object {
    const dataView = new DataView(file);
    const data: { [id: string]: any } = {};
    let segmentStartPos = startOffset;
    while (segmentStartPos < startOffset + sectionLength) {
        if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
            const segmentType = dataView.getUint8(segmentStartPos + 2);
            if (segmentType in IptcFieldMap) {
                const dataSize = dataView.getInt16(segmentStartPos + 3);
                const segmentSize = dataSize + 5;
                const fieldName = IptcFieldMap[segmentType];
                const fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                // Check if we already stored a value with this name
                if (data.hasOwnProperty(fieldName)) {
                    // Value already stored with this name, create multivalue field
                    if (data[fieldName] instanceof Array) {
                        data[fieldName].push(fieldValue);
                    }
                    else {
                        data[fieldName] = [data[fieldName], fieldValue];
                    }
                }
                else {
                    data[fieldName] = fieldValue;
                }
            }

        }
        segmentStartPos++;
    }
    return data;
}

function readTags(file: DataView, tiffStart: number, dirStart: number, strings: any, bigEnd: boolean): { [tag: string]: any } {
    const entries = file.getUint16(dirStart, !bigEnd),
        tags: { [tag: string]: any } = {};
    for (let i = 0; i < entries; i++) {
        let entryOffset = dirStart + i * 12 + 2;
        let tag = strings[file.getUint16(entryOffset, !bigEnd)];
        tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
    }
    return tags;
}

function readTagValue(file: DataView, entryOffset: number, tiffStart: number, dirStart: number, bigEnd: boolean) {
    const type = file.getUint16(entryOffset + 2, !bigEnd),
        numValues = file.getUint32(entryOffset + 4, !bigEnd),
        valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
    switch (type) {
        case 1: // byte, 8-bit unsigned int
        case 7: // undefined, 8-bit byte, value depending on field
            if (numValues == 1) {
                return file.getUint8(entryOffset + 8);
            } else {
                const offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                const vals: Array<any> = [];
                for (let n = 0; n < numValues; n++) {
                    vals[n] = file.getUint8(offset + n);
                }
                return vals;
            }

        case 2: // ascii, 8-bit byte
            const offset = numValues > 4 ? valueOffset : (entryOffset + 8);
            return getStringFromDB(file, offset, numValues - 1);

        case 3: // short, 16 bit int
            if (numValues == 1) {
                return file.getUint16(entryOffset + 8, !bigEnd);
            } else {
                const offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                const vals: Array<any> = [];
                for (let n = 0; n < numValues; n++) {
                    vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                }
                return vals;
            }

        case 4: // long, 32 bit int
            if (numValues == 1) {
                return file.getUint32(entryOffset + 8, !bigEnd);
            } else {
                const vals: Array<any> = [];
                for (let n = 0; n < numValues; n++) {
                    vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                }
                return vals;
            }

        case 5:    // rational = two long values, first is numerator, second is denominator
            if (numValues == 1) {
                const numerator = file.getUint32(valueOffset, !bigEnd);
                const denominator = file.getUint32(valueOffset + 4, !bigEnd);
                let val: any = new Number(numerator / denominator);
                val.numerator = numerator;
                val.denominator = denominator;
                return val;
            } else {
                const vals: Array<any> = [];
                for (let n = 0; n < numValues; n++) {
                    let numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                    let denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                    vals[n] = new Number(numerator / denominator);
                    vals[n].numerator = numerator;
                    vals[n].denominator = denominator;
                }
                return vals;
            }

        case 9: // slong, 32 bit signed int
            if (numValues == 1) {
                return file.getInt32(entryOffset + 8, !bigEnd);
            } else {
                const vals: Array<any> = [];
                for (let n = 0; n < numValues; n++) {
                    vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                }
                return vals;
            }

        case 10: // signed rational, two slongs, first is numerator, second is denominator
            if (numValues == 1) {
                return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
            } else {
                const vals: Array<any> = [];
                for (let n = 0; n < numValues; n++) {
                    vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                }
                return vals;
            }
    }
}

/**
* Given an IFD (Image File Directory) start offset
* returns an offset to next IFD or 0 if it's the last IFD.
*/
function getNextIFDOffset(dataView: DataView, dirStart: number, bigEnd: boolean) {
    //the first 2bytes means the number of directory entries contains in this IFD
    var entries = dataView.getUint16(dirStart, !bigEnd);

    // After last directory entry, there is a 4bytes of data,
    // it means an offset to next IFD.
    // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

    return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
}

function readThumbnailImage(dataView: DataView, tiffStart: number, firstIFDOffset: number, bigEnd: boolean) {
    // get the IFD1 offset
    var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart + firstIFDOffset, bigEnd);

    if (!IFD1OffsetPointer) {
        // console.log('******** IFD1Offset is empty, image thumb not found ********');
        return {};
    }
    else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
        // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
        return {};
    }
    // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

    var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

    // EXIF 2.3 specification for JPEG format thumbnail

    // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
    // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
    // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
    // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
    // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

    if (thumbTags['Compression']) {
        // console.log('Thumbnail image found!');

        switch (thumbTags['Compression']) {
            case 6:
                // console.log('Thumbnail image format is JPEG');
                if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                    var tOffset = tiffStart + thumbTags.JpegIFOffset;
                    var tLength = thumbTags.JpegIFByteCount;
                    thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                        type: 'image/jpeg'
                    });
                }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
        }
    }
    else if (thumbTags['PhotometricInterpretation'] == 2) {
        console.log("Thumbnail image format is RGB, which is not implemented.");
    }
    return thumbTags;
}

function getStringFromDB(buffer: DataView, start: number, length: number): string {
    let outstr = "";
    for (let n = start; n < start + length; n++) {
        outstr += String.fromCharCode(buffer.getUint8(n));
    }
    return outstr;
}

function readEXIFData(file: DataView, start: number) {
    if (getStringFromDB(file, start, 4) != "Exif") {
        return false;
    }

    var bigEnd,
        tags, tag,
        exifData, gpsData,
        tiffOffset = start + 6;

    // test for TIFF validity and endianness
    if (file.getUint16(tiffOffset) == 0x4949) {
        bigEnd = false;
    } else if (file.getUint16(tiffOffset) == 0x4D4D) {
        bigEnd = true;
    } else {
        return false;
    }

    if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
        return false;
    }

    var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

    if (firstIFDOffset < 0x00000008) {
        return false;
    }

    tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

    if (tags.ExifIFDPointer) {
        exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, Tags, bigEnd);
        for (tag in exifData) {
            switch (tag) {
                case "LightSource":
                case "Flash":
                case "MeteringMode":
                case "ExposureProgram":
                case "SensingMethod":
                case "SceneCaptureType":
                case "SceneType":
                case "CustomRendered":
                case "WhiteBalance":
                case "GainControl":
                case "Contrast":
                case "Saturation":
                case "Sharpness":
                case "SubjectDistanceRange":
                case "FileSource":
                    exifData[tag] = StringValues[tag][exifData[tag]];
                    break;

                case "ExifVersion":
                case "FlashpixVersion":
                    exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                    break;

                case "ComponentsConfiguration":
                    exifData[tag] =
                        StringValues.Components[exifData[tag][0]] +
                        StringValues.Components[exifData[tag][1]] +
                        StringValues.Components[exifData[tag][2]] +
                        StringValues.Components[exifData[tag][3]];
                    break;
            }
            tags[tag] = exifData[tag];
        }
    }

    if (tags.GPSInfoIFDPointer) {
        gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
        for (tag in gpsData) {
            switch (tag) {
                case "GPSVersionID":
                    gpsData[tag] = gpsData[tag][0] +
                        "." + gpsData[tag][1] +
                        "." + gpsData[tag][2] +
                        "." + gpsData[tag][3];
                    break;
            }
            tags[tag] = gpsData[tag];
        }
    }

    // extract thumbnail
    tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

    return tags;
}

export function findXMPinJPEG(file: ArrayBuffer): object | string | null {
    if (!('DOMParser' in self)) {
        // console.warn('XML parsing not supported without DOMParser');
        return null;
    }

    const dataView = new DataView(file);
    if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
        return null; // not a valid jpeg
    }

    let offset = 2;
    const length = file.byteLength;
    const dom = new DOMParser();
    while (offset < (length - 4)) {
        if (getStringFromDB(dataView, offset, 4) == "http") {
            const startOffset = offset - 1;
            const sectionLength = dataView.getUint16(offset - 2) - 1;
            let xmpString = getStringFromDB(dataView, startOffset, sectionLength)
            const xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
            xmpString = xmpString.substring(xmpString.indexOf('<x:xmpmeta'), xmpEndIndex);

            const indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
            //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
            //Without these namespaces, XML is thought to be invalid by parsers
            xmpString = xmpString.slice(0, indexOfXmp)
                + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                + xmpString.slice(indexOfXmp)

            const domDocument = dom.parseFromString(xmpString, 'text/xml');
            return xml2Object(domDocument);
        } else {
            offset++;
        }
    }
    return null;
}

function xml2json(xml: Element): object | string | null {
    const json: { [tag: string]: any } = {};

    if (xml.nodeType == 1) { // element node
        if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (let j = 0; j < xml.attributes.length; j++) {
                const attribute = xml.attributes.item(j);
                if (attribute) {
                    json['@attributes'][attribute.nodeName] = attribute.nodeValue;
                }
            }
        }
    } else if (xml.nodeType == 3) { // text node
        return xml.nodeValue;
    }

    // deal with children
    /*
    if (xml.hasChildNodes()) {
        for (let i = 0; i < xml.childNodes.length; i++) {
            const child = xml.childNodes.item(i);
            const nodeName = child.nodeName;
            if (json[nodeName] == null) {
                json[nodeName] = xml2json(child);
            } else {
                if (json[nodeName].push == null) {
                    var old = json[nodeName];
                    json[nodeName] = [];
                    json[nodeName].push(old);
                }
                json[nodeName].push(xml2json(child));
            }
        }
    }*/

    return json;
}

function xml2Object(xml: Document): object | string | null {
    try {
        if (xml.children.length > 0) {
            const obj: { [id: string]: any } = {};
            for (let i = 0; i < xml.children.length; i++) {
                const item = xml.children.item(i);
                const attributes = item!.attributes;
                for (const idx in attributes) {
                    const itemAtt = attributes[idx];
                    const dataKey = itemAtt.nodeName;
                    const dataValue = itemAtt.nodeValue;

                    if (dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                const nodeName = item!.nodeName;
                if (nodeName) {
                    if (typeof (obj[nodeName]) == "undefined") {
                        obj[nodeName] = xml2json(item!);
                    } else {
                        if (typeof (obj[nodeName].push) == "undefined") {
                            var old = obj[nodeName];

                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(xml2json(item!));
                    }
                }
            }
            return obj;
        } else {
            return xml.textContent;
        }
    } catch (e: any) {
        console.log(e.message);
    }
    return null;
}

export let isXmpEnabled = false;

export function enableXmp(): void {
    isXmpEnabled = true;
}

export function disableXmp(): void {
    isXmpEnabled = false;
}
