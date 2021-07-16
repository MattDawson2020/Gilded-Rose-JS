class ConjuredItem extends Item {
  constructor(props){
    super(props)
  }

  updateQuality = () => {
    this._checkAttributes()
    if (this.sellIn <= 0) {
      this.quality -= 4
    } else {
      this.quality -= 2
    }
    this.sellIn -= 1
  }

}