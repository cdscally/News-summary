'use strict';

function NewsStoryList() {
  this.parsed = "";
  this.list = [];
};

NewsStoryList.prototype.callAPI = function (url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  this.parsed = JSON.parse(xhr.responseText).response.results;
};

NewsStoryList.prototype.createList = function () {
  for (var i=0 ; i < this.parsed.length; i++) {
    this.list.push(new Story(this.parsed[i]));
  };
};
