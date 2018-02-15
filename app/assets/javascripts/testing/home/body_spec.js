describe("Body", function() {

  beforeEach(function() {
    jasmine.Clock.useMock();
    jQuery.fx.off = true;
  });

  describe(".loading()", function() {

    beforeEach(function() {
      body = new Body();
    });

    it("loads the page", function() {
      expect(body.loading).toHaveBeenCalled();
    });

  });

  xdescribe("shows a panel by id", function() {

    beforeEach(function () {
      body.loadPanel(body.panel('webography'));
    });

    it("makes all the other panels hidden", function() {

    });

    it("shows one panel per an id", function() {
      expect($('.webography:visible')).toBeTruthy();
    });

  });

});