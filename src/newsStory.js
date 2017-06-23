var Story = function(object) {
  this.headline = object.webTitle;
  this.URL = object.webUrl;
  this.imageURL = object.fields.thumbnail;
  this.summary = "";
  this.fullText = "";
};

Story.prototype.summarise = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${this.URL}`, false);
  xhr.send();
  this.summary = JSON.parse(xhr.responseText).sentences.join(' ')
  this.fullText = JSON.parse(xhr.responseText).text
}
