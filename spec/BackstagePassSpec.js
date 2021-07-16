describe("BackstagePass", function() {
  let backstagePass

  beforeEach(function() {
    backstagePass = new BackstagePass({
      name: 'Backstage Pass', 
      sellIn: 20, 
      quality: 20
    })
  });

  it("should create an backstagePass", function() {
    expect(backstagePass).not.toBe(null)
  });

  it("should come with set attributes", function() {
    expect(backstagePass.quality).toBe(20)
    expect(backstagePass.sellIn).toBe(20)
  });

  it('can update its attributes', function() {
    backstagePass.updateQuality()
    expect(backstagePass.quality).toBe(21)
    expect(backstagePass.sellIn).toBe(19)
  })

  it('increases quality by 1 when sellIn above 10', function() {
    backstagePass.updateQuality()
    expect(backstagePass.quality).toBe(21)
  })

  it('reduces quality by 2 when sellIn between 5 and 10', function() {
    for(i = 0; i < 10; i++) {
      backstagePass.updateQuality()
    }
    expect(backstagePass.sellIn).toBe(10)
    expect(backstagePass.quality).toBe(30)

    backstagePass.updateQuality()
    expect(backstagePass.sellIn).toBe(9)
    expect(backstagePass.quality).toBe(32)
  })

  // it('cannot go below minimum quality', function() {
  //   for(i = 0; i < 11; i++) {
  //     backstagePass.updateQuality()
  //   }
  //   expect(backstagePass.quality).toBe(20)
  //   expect

  //   expect(function() { backstagePass.updateQuality() }).toThrowError(Error, "Cannot go below minimum quality")
  // })



});
