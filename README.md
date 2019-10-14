Click memory game

  Rules of the game:
    -Images will appear on the screen and the player must click one card 
    -Upon clicking, the cards will shuffle and re-organize
    -Each click the player will be awarded one point 
    -Click the same image that you previously clicked, and you lose the game.

  In order to implement this game a few things need to happen:
    -Cards must appear!
      -In order to generate the cards, I looked at the previous activities we did.
      -The friend-refactor app was a huge help
    -The cards must shuffle
      -To do this we need to generate a random number (Math.floor(Math.random()))
      -The random number must not exceed the number of cards we have 
      -Each card must be assigned a new slot upon clicking
        -If assigned to an arr, their indexes can be shuffled
        -But we need to find a way to disable duplicates, as to not overwrite the arr
    -Points must be calculated
      -Per successful click add +1 to the score
      -Track the topScore along with this 
      -Each time, until a duplicate is selected, the topScore should increase with the score