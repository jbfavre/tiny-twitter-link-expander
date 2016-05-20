var linkClassName = [ "twitter-timeline-link", "url-ext" ];

function expandCurrentTwitterLinks(){
  for(var j = 0; j < linkClassName.length; j++) {
    var links = document.getElementsByClassName(linkClassName[j])
    for(var i = 0; i < links.length; i++){
      expandTwitterLink(links[i]);
    }
  }
}

function expandAddedTwitterLinks(){
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var addedNodes = mutation.addedNodes;
      if (addedNodes) {
        for(var i = 0; i < addedNodes.length; i++){
          for(var j = 0; j < linkClassName.length; j++) {
            console.log(addedNodes[i]);
            var links = addedNodes[i].querySelectorAll("." + linkClassName[j]);
            for (var k = 0; k < links.length; k++){
              expandTwitterLink(links[k]);
            }
          }
        }
      }
    })
  })
  observer.observe(document, {
    childList: true,
    subtree: true
  });
}

function expandTwitterLink(linkElem){
  if(linkElem.getAttribute("href")){
    var originalLink = linkElem.getAttribute("data-expanded-url") ||
                       linkElem.getAttribute("data-full-url");
    if(originalLink){
      linkElem.setAttribute("href", originalLink);
    }
  }
}

expandAddedTwitterLinks();
expandCurrentTwitterLinks();
