'use strict';

function NewsStoryList() {
  this.list = [];
};

NewsStoryList.prototype.callAPI = function (url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}
