var Story = function(object) {
  this.headline = object.webTitle;
  this.URL = object.webUrl;
  this.imageURL = object.fields.thumbnail;
};
