var RSSParser = {};

(function () {

'use strict';

function fetchAttr( item, tagName ) {
  return item.getElementsByTagName( tagName )[0].textContent;
}

RSSParser.init = function parseRss( xml ) {
  var count, item,
    parser = new DOMParser(),
    items = parser.parseFromString( xml, 'application/xml' ).getElementsByTagName( 'item' ),
    dataset = [];

  for ( count = 0; count < items.length; count++ ) {
    item = {};
    item.title = fetchAttr( items[count], 'title' );
    item.link = fetchAttr( items[count], 'link' );
    item.description = fetchAttr( items[count], 'description' );
    dataset[dataset.length] = item;
  }

  return dataset;
};

})();