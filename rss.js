(function () {

  'use strict';

  function fetchAttr( item, tagName ) {
    return item.getElementsByTagName( tagName )[0].textContent;
  }

  function Feed( source ) {
    if ( typeof source === 'string' ) {
      this.parse( source );
    } else if ( source ) {
      this.items = source.items;
    } else {
      this.items = [];
    }
  }

  function parse( xml ) {
    var count, item,
      parser = new DOMParser(),
      items = parser.parseFromString( xml, 'application/xml' ).getElementsByTagName( 'item' );

    this.items = [];

    for ( count = 0; count < items.length; count++ ) {
      item = {};
      item.title = fetchAttr( items[count], 'title' );
      item.link = fetchAttr( items[count], 'link' );
      item.description = fetchAttr( items[count], 'description' );
      this.items[this.items.length] = item;
    }    
  }

  function stringify() {

  }

  window.Feed = Feed;

  Feed.prototype.parse = parse;
  //Feed.prototype.stringify = stringify;

})();