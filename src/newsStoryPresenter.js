var pageload = function(newsstorylist) {
  newsstorylist.callAPI('https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail')
  newsstorylist.createList();
}

var htmlheadlines = function(newsstorylist) {
  var html='';

  for(i = 0; i < newsstorylist.list.length;i ++) {
  html += `<li id = 'storyid${i}'>
          <div class = 'headlineimage'>
          <div class='row'>
          <div class='col-md-12' >
          <div class='img' > <img src='${newsstorylist.list[i].imageURL}'>
          </div></div></div></div>
          <div class='row'>
          <div class='headline'><div class='col-md-12'>${newsstorylist.list[i].headline}
          </div></div></div>
          <div class='row'>
          <div id='summary${i}'><div class='col-md-12'>
          </div></div></div>
          </li>`
  }
return html
}

var getSummaries = function() {
  for(i = 0; i < newsstorylist.list.length; i ++) {
  createEventListener(i);
  };
};

var createEventListener = function(index) {
    var li = document.getElementById(`storyid${index}`);
    var summary = document.getElementById(`summary${index}`);
    li.addEventListener('click', function() {
      newsstorylist.list[index].summarise();
      summary.innerHTML = `<p>${newsstorylist.list[index].summary}</p>`;
    });
};
