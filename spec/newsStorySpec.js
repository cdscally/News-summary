describe("News story creation", function() {
  it ("creates an instance of newsStory", function() {
    var hash =
        {"id":"sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live",
        "type":"liveblog",
        "sectionId":"sport",
        "sectionName":"Sport",
        "webPublicationDate":"2017-06-22T13:33:04Z",
        "webTitle":"Royal Ascot 2017: buildup to the Gold Cup â€“ live!",
        "webUrl":"https://www.theguardian.com/sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live",
        "apiUrl":"https://content.guardianapis.com/sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live",
        "isHosted":false}
    var story = new Story(hash);
    expect(story.headline).toEqual("Royal Ascot 2017: buildup to the Gold Cup â€“ live!");
  });

});
