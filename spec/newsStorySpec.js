describe("News story creation", function() {
  var hash =
      {"id":"sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live",
      "type":"liveblog",
      "sectionId":"sport",
      "sectionName":"Sport",
      "webPublicationDate":"2017-06-22T13:33:04Z",
      "webTitle":"Royal Ascot 2017: buildup to the Gold Cup â€“ live!",
      "webUrl":"https://www.theguardian.com/sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live",
      "apiUrl":"https://content.guardianapis.com/sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live",
      "fields": { "thumbnail": "http://media.guim.co.uk/fad364c60d1a5f19cd5768bf310f780418b2a0d4/0_195_3000_1799/500.jpg"},
      "isHosted":false}

    var story = new Story(hash);

  it ("newsStory has headline", function() {
    expect(story.headline).toEqual("Royal Ascot 2017: buildup to the Gold Cup â€“ live!");
  });

  it ("newsStory has imageURL", function() {
    expect(story.imageURL).toEqual("http://media.guim.co.uk/fad364c60d1a5f19cd5768bf310f780418b2a0d4/0_195_3000_1799/500.jpg");
  });

  it ("newsStory has URL", function() {
    expect(story.URL).toEqual("https://www.theguardian.com/sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live");
  });


});
