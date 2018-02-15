xdescribe("Collage Control", function() {

  beforeEach(function() {
    loadFixtures('index.html')
    $.fx.off = true;
    collage = new Collage('.preferred_apis .collage');
  });

  describe(".mouseEnter(el)", function() {

    it("animates the background-position-y style", function() {
      el = $('a.rails');
      y1 = el.css('background-position-y');
      collage.mouseEnter(el);
      y2 = el.css('background-position-y');
      expect(y1).toBeGreaterThan(y2);
    });

  });

  describe(".mouseLeave(el)", function() {

    it("animates the background-position-y style back", function() {
      el = $('a.rails');
      y1 = el.css('background-position-y');
      collage.mouseLeave(el);
      y2 = el.css('background-position-y');
      expect(y1).toBeLessThan(y2);
    });

  });


});