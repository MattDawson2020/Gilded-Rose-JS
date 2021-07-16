class AgedBrie extends Item {
  constructor(props) {
    super(props)
  }
 
  updateQuality = () => {
    this._checkAttributes()
    this.quality += 1
    this.sellIn -= 1
  }
}


