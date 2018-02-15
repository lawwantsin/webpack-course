describe("Navigation Control", function() {

  beforeEach(function() {
    loadFixtures('index.html')
    $.fx.off = true;
    navigation = new Navigation('.navigation');
  });

  describe(".moveIndicator(id)", function() {

    beforeEach(function() {
      navigation.moveIndicator('#brief_history');
    });

    it("moves indicator to clicked anchor", function() {
      hpt = $('.bh').position().top;
      ipt = $('.indicator').position().top;
      expect(ipt).toBeCloseTo(hpt, 1);
    });

  });

  describe(".nav(id)", function() {

    it("on valid id, should return the correct anchor", function() {
      a = navigation.nav('brief_history');
      expect(a).toHaveClass('bh');

      b = navigation.nav('javascript_framework');
      expect(b).toHaveClass('jsf');
    });

    it('on invalid id, return the first anchor', function() {
      fs = 'jsf';
      // test to find the first anchor
      b = $('.navigation a:first');
      expect(b).toHaveClass(fs);

      // our returned anchor
      a = navigation.nav('bullshit');
      expect(a).toHaveClass(fs);
    });

  });

});