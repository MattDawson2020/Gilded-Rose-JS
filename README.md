# Gilded rose JS

## My Plan

- The original plan was to explore completing this with non Class based syntax, using JS more functional programming traits
- However I quickly decided against this after completing the first Item I made a problematic realization:
    * JS object syntax does let you inherit using ``` Object.Assign() ``` , but it only inherits attributes and not any methods/ functions defined on the object
    * Functions do allow inheritance using an itemfactory type syntax and using ``` object.prototype ``` to set new functions, but this is quite a messy and non concise way to do so
- I decided to change the aim of the test. I first completed it relatively easily in Class syntax, using concise, simple and well tested code. Over time I will:
    * Explore the alternate syntax ways to complete this challenge on the other branches, showing a comparison of the approaches
    * Use this comparison to show why (for this particular problem at least) it makes little sense NOT to use class syntax as it provides by far the easiest solution.
    
## Comparison examples
<details>
<summary>Item with Class Syntax </summary

  * In class syntax creating a functioning item class that others can inherit from is extremely simple.
  ```
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

  ```
 * You can then very simple do something like this to create an entirely new object class with its own update function.
 ```
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
 ```
 * This is simple, readable, and infinitely repeatable
 ```
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
 ```
 
 * You can then create an extremely bare bones GildedRose class that runs the individual objects update functions
 ```
 class GildedRose {
  constructor(items) {
    this.items = items
  }

  updateQuality = () => {
    this.items.forEach(item => item.updateQuality())
  }
}
 ```
</details>

<details>
<summary>Item with Object Syntax </summary

  * Creating a functioning item in Object syntax is also very simple, using nested methods you can use methods as object attributes to pass the specifications of the challenge
  ```
  const item = {
  _name: 'Item',
  _sellIn: 20,
  _quality: 50,

  get quality() {
    return this._quality
  },

  get sellIn() {
    return this._sellIn
  },

  updateQuality() {
    this._checkAttributes()
    if (this._sellIn <= 0) {
      this._quality -= 2
    } else {
      this._quality -= 1
    }
    this._sellIn -= 1
  },

  _checkAttributes() {
    if(this._quality <= 0) {
      throw new Error('Cannot go below minimum quality')
    } else if (this._quality > 50) {
      throw new Error('Cannot exceed maximum quality')
    }
  }
}
 ```
 * However the probem comes when you need to create the other objects for the challenge. You can use ``` Object.assign()``` to inhert the attributes, but not the update function
 ```
  const agedBrie ={} 
  Object.assign(agedBrie, item)

  agedBrie.updateQuality = () => {
    this._checkAttributes()
    this.quality += 1
    this._sellIn -= 1
  }

 ```
  * This wouldn't be a problem as you would have to redefine it anyway, but in this example the ```_checkAttributes ``` function is not inherited, meaning it has to be manually added
  ```
  const agedBrie ={} 
  Object.assign(agedBrie, item)
  
  agedBrie.updateQuality = () => {
    if(this._quality <= 0) {
      throw new Error('Cannot go below minimum quality')
    } else if (this._quality > 50) {
      throw new Error('Cannot exceed maximum quality')
    } 
    this.quality += 1
    this._sellIn -= 1
  }

  ```
  * This is immediately obvious as being a lesser solution to the class syntax. I am confident there is a method to achieve what I wanted to do here without issue, but it looks like it would require a substantially higher time investment than just using Class Syntax
</details>

</details>

<details>
<summary>Item factory </summary

  * A promising solution was to use an ItemFactory, which would allow me to simply add the desired update functions on initialization, making it a very trivial challenge
  * However this comes with a problem that Functions cannot be so easily passed through itemfactories and then be called on the resulting object
  ```
  const ItemFactory = (name, sellIn, quality, onQualityUpdate, onSellInUpdate) => {
    let _name = name;
    let _sellIn = sellIn;
    let _quality = quality;
    const onUpdate = () => {
        _quality = onQualityUpdate(_quality)
        _sellIn = onSellInUpdate(_sellIn)
    }
    return {
        updateQuality: onUpdate,
    }
}

  ```
  * This is still a promising solution and one I will get to work given time and energy, but ultimately this circles back to the original issue. Class Syntax is just easier, while also being concise
</details>


## Running the code
Simply clone this repo to get a copy of the code and open the ```SpecRunner.html ``` file in a browswer. From here you can see the passing tests that confirm it is working.
If you want you can then open the console and run the program manually by creating the individiual classes as they are shown in the Spec files. 


## Kata details

This is a well known kata developed by Terry Hughes. This is commonly used as a tech test to assess a candidate's ability to read, refactor and extend legacy code.

Here is the text of the kata:

\*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."\*

