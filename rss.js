(function () {

  'use strict';

  function fetchAttr(item, tagName) {
    return item.getElementsByTagName(tagName)[0].textContent;
  }

  function Feed(source) {
    if (typeof source === 'string') {
      this.parse(source);
    } else if (source) {
      this.items = source.items;
    } else {
      this.items = [];
    }
  }
  
  function FeedItem(item) {
    this.title = fetchAttr(item, 'title');
    this.link = fetchAttr(item, 'link');
    this.description = fetchAttr(item, 'description');
  }

  function parse(xml) {
    var count, item,
      parser = new DOMParser(),
      DOMitems = parser.parseFromString(xml, 'application/xml').getElementsByTagName('item');

    this.items = [];
    
    for (count = 0; count < DOMitems.length; count++) {
      this.items[count] = new FeedItem(DOMitems[count]);
    }

  }

  function stringify() {
    return JSON.stringify({
      items: this.items
    });
  }

  window.Feed = Feed;

  Feed.prototype.parse = parse;
  Feed.prototype.stringify = stringify;

})();
