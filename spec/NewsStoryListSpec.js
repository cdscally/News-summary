describe('Creating a list of news stories', function() {

  var newsStoryList = new NewsStoryList();

  it('Can call a list of stories in jSON from the API', function() {
    stories = newsStoryList.callAPI("https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test")
    expect(stories.response.results[0].type).toEqual('article')
  });

});
