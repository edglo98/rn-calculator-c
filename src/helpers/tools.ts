export const convertToRGB = function (hexColor: string) {
  if (hexColor.includes('#')) {
    hexColor = hexColor.replace('#', '');
  }
  if (hexColor.length !== 6) {
    throw new Error('Only six-digit hex colors are allowed.');
  }

  var aRgbHex = hexColor.match(/.{1,2}/g) || '';

  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return aRgb;
};

export function getContrastColor(hex: string) {
  /*
  From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast

  Color brightness is determined by the following formula:
  ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000

  I know this could be more compact, but I think this is easier to read/explain.

  */
  if (hex.length > 7 || hex.length < 6) {
    throw new Error('Only six-digit hex colors are allowed.');
  }
  const threshold = 130;
  const hRed = hexToR(hex);
  const hGreen = hexToG(hex);
  const hBlue = hexToB(hex);

  function cutHex(colorCode: string) {
    return colorCode.charAt(0) === '#' ? colorCode.substring(1, 7) : colorCode;
  }
  function hexToR(colorCode: string) {
    return parseInt(cutHex(colorCode).substring(0, 2), 16);
  }
  function hexToG(colorCode: string) {
    return parseInt(cutHex(colorCode).substring(2, 4), 16);
  }
  function hexToB(colorCode: string) {
    return parseInt(cutHex(colorCode).substring(4, 6), 16);
  }

  const contrastBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;

  return contrastBrightness > threshold ? '#000' : '#fff';
}
