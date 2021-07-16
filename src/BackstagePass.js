class BackstagePass extends Item {
  constructor(props) {
    super(props)
  }

  updateQuality = () => {
    if (this.sellIn <= 0) {
      this.quality = 0
    } else if (this.sellIn <= 5) {
      this.quality += 3
    } else if (this.sellIn > 5 && this.sellIn <= 10 ) {
      this.quality += 2
    } else {
      this.quality += 1
    }
    this.sellIn -= 1
  }
}