// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 1200, height: 600 });

// Send Font List to UI
let fontList = async () => {
  let fonts = await figma.listAvailableFontsAsync()

  let groupedFonts = fonts.reduce((objectsByKeyValue, obj) => {
    const family = obj["fontName"]["family"]

    objectsByKeyValue[family] = objectsByKeyValue[family] || {}

    objectsByKeyValue[family]["styles"] =
      objectsByKeyValue[family]["styles"] || []

    objectsByKeyValue[family]["styles"].push(obj["fontName"]["style"])
    return objectsByKeyValue
  }, {})

  const fontCount = Object.keys(groupedFonts).length;

  figma.ui.postMessage({
    fontList: {
      type: 'fontList',
      list: groupedFonts,
    }
  });
}

fontList()

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async msg => {
  if (msg.type === 'create-text-styles') {

    // console.log(msg.styles);
    // console.log(figma.getLocalTextStyles());

    msg.styles.forEach(async el => {
      let textStyle = figma.createTextStyle();
      await figma.loadFontAsync({
        family: el.fontName.family,
        style: el.fontName.family,
      });

      // Set Styles
      console.log(el);


      textStyle.name = `${el.fontName.family} / ${el.fontName.style}`
      textStyle.fontName = {
        family: el.fontName.family,
        style: el.fontName.style,
      }
      textStyle.fontSize = el.fontSize
      textStyle.letterSpacing = {
        unit: el.letterSpacing.unit,
        value: el.letterSpacing.value,
      }
      textStyle.lineHeight = {
        unit: el.lineHeight.unit,
        value: el.lineHeight.value,
      }
    });


  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
