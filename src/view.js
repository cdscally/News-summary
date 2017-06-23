var newsstorylist = new NewsStoryList()
pageload(newsstorylist);
var news = htmlheadlines(newsstorylist)
document.getElementById("news").innerHTML = news
getSummaries();
