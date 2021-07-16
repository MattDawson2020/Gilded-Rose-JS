class Item {
  constructor(props) {
    this.name = props.name
    this.sellIn = props.sellIn
    this.quality = props.quality
  }
 

  _checkAttributes = () => {
    if(this.quality <= 0) {
      throw new Error('Cannot go below minimum quality')
    } else if (this.quality >= 50) {
      throw new Error('Cannot exceed maximum quality')
    }
  }

  updateQuality = () => {
    this._checkAttributes()
    if (this.sellIn <= 0) {
      this.quality -= 2
    } else {
      this.quality -= 1
    }
    this.sellIn -= 1
  }

}

