describe("Explosion Control", function() {

  beforeEach(function() {
    loadFixtures('index.html')
    $.fx.off = true;  // so animation timing desn't fuck with the tests
    explo = new Explosion('.preferred_apis');
  });

  describe(".setFuse()", function() {

    beforeEach(function() {
      f = explo.logos.first()
    })

    it("it sets the data", function() {
      expect(f.data('top')).toEqual(undefined);
      expect(f.data('left')).toEqual(undefined)
      explo.setFuse();
      expect(f.data('top')).not.toEqual(undefined);
      expect(f.data('left')).not.toEqual(undefined);
    });

    it("moves them into the center", function() {
      fpt1 = f.position().top;
      fpl1 = f.position().left;
      explo.setFuse();
      fpt2 = f.position().top;
      fpl2 = f.position().left;
      expect(fpt1).not.toEqual(fpt2);
      expect(fpl1).not.toEqual(fpl2);
    });

    it("sets a fuse for 1000ms", function() {
      jasmine.Clock.useMock();
      se = spyOn(explo, 'blowTheHellUp');
      explo.setFuse();
      expect(explo.blowTheHellUp).not.toHaveBeenCalled();
      jasmine.Clock.tick(1000); // setTimeouts need some time travel
      expect(explo.blowTheHellUp).toHaveBeenCalled();
    });

  });

  describe(".blowTheHellUp()", function() {

    it("it animates the logos to explode", function() {
      f = explo.logos.first()
      explo.setFuse()
      fdt = f.data('top');
      fdl = f.data('left');
      fpt1 = f.position().top;
      fpl1 = f.position().left;
      expect(fpt1).not.toBeCloseTo(fdt, 1);
      expect(fpl1).not.toBeCloseTo(fdl, 1);
      explo.blowTheHellUp();
      fpt2 = f.position().top;
      fpl2 = f.position().left;
      expect(fpt2).toBeCloseTo(fdt, 1);
      expect(fpl2).toBeCloseTo(fdl, 1);
    });

  });

});