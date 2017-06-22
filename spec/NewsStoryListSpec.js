describe('Creating a list of news stories', function() {

  var newsStoryList = new NewsStoryList();

  it('Can call a list of stories in jSON from the API', function() {
    newsStoryList.callAPI("https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test")
    expect(newsStoryList.parsed[0].type).toEqual('article')
  });



});
