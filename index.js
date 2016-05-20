var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["https://twitter.com/*", "https://tweetdeck.twitter.com/*"],
  contentScriptFile: "./content-script.js"

});
