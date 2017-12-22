# dropmixscoreboard
A Javascript browser scoreboard app for Dropmix streams

12/21/2017 - Version 0.6

This is the first public release of my advanced Dropmix scoreboard Javacript app for browsers, designed to be used during live streams of Clash. It's the first coding project I've done, and feedback is appreciated. This readme includes a general overview and instructions for the app, some advanced info for streaming customization, and a to-do list for future features.

To use the app, download **dropmixscoreboard.html** and the entire contents of the **dmscore** folder. Place both within the same folder (DO NOT put the html file in the dmscore folder) and open the html file.

For questions, comments, or general feedback, ping @WindyMan in the Dropmix Discord channel or email *windyman (at) gmail*.

**Overview/General Instructions**

The Dropmix scoreboard is designed to be added to a stream broadcast with the browser window cropped and background keyed out. This will produce an overlay that features a persistent information banner at the top and a hidable main scoreboard, positioned to fit over the circular Clash score counter of the Dropmix app.

The information bar at the top of the screen can be configured to show the names of the players on each side, how many wins each player has within a set of games, and further information (such as a stream title or round progression) in the middle.

The names and titles can be changed in the control panel under the scoreboard. Each **[Update]** button updates the name of the players individually. The **[Update All]** button under the Main Title box updates the main title and both names at the same time.

The scoreboard shows the total score for each player, but also breaks down how points are gained and lost along the way. The scoreboard (and scoreboard controls) has six unique categories to keep track of these points and other actions the player takes.

For the purposes of this scoreboard app, there are three ways a player can gain points:

- **Cards Played By the Player** (Standard card plays, playing a Wild/FX card, additional plays due to FX cards)
- **Slot (Color) Bonus Points** (Standard slot bonuses, Full Mix bonuses, +1 Bonus on empty EQ spin)
- **FX Card Bonus Points** (Any additional points granted from FX cards, not including the point for the play of the card itself)

And there are two ways a player can lose points:

- **Equalizer Card Removals**
- **Opponent's FX Card Effects** (Direct minus points (Embrace Chaos, etc.), Cards removed from play due to FX effects (Eclipser, etc.))

The sixth category of the main scoreboard, the **(DM) Button**, keeps track of how many times the player has pressed the Dropmix button instead of playing a card. This does not affect the score totals, but acts as a point of reference to help show how many actions the player has taken.

When a card is played or an action is taken, add to the appropriate category by clicking the category icon on the scoreboard or the corresponding **[Up]** button on the control panel.

If a card is withdrawn or points were given to the wrong player/category, they can be removed by clicking directly on the category's score number or the corresponding **[Dn]** button on the control panel.

The app will automatically do the math to calculate the total points gained, total points lost, and the actual player score.

Player wins can be incremented by clicking on the top banner, directly on the corresponding number of wins they currently have. Win counts can be decremented by clicking directly on the player name in the top banner. The P1 Wins and P2 Wins [Up]/[Dn] buttons in the control panel can also be used.

The app will prevent any category, the total score, or the win count from going into the negatives.

The **[Hide/Show Scoreboard]** button will toggle the display of the scoreboards. When there is an equalizer spin (Dropmix button is pressed), an FX card is played, or the game is over, it will be necessary to clear the screen so the scoreboard overlay does not obstruct the spin result, the FX card description, or the menus.

When the scoreboard is toggled off, points can still be added/removed with the control panel. (A future update will show the scores directly on the control panel.)

At the end of the game, the scoreboard can be reset to zero using the **[Reset Scores]** button in the control panel. (This can be done when the scoreboard is hidden.) **[Reset Wins]** will reset both win count totals to zero. **[Reset All]** does both at once.

**Advanced Info for Streaming Setup**

In your streaming program of choice, add a browser window source with dropmixscoreboard.html open in that window.

You will first need to crop the sides, including the control panel objects at the bottom, until only the top banner and circular scoreboard elements are visible. Be mindful to not resize your browser window after you're satisfied with your crop.

Next, you will need to add a chroma key filter to knock out the color #660066. This purple color was chosen due to the yellow/red/blue/green bonus slot icon and points gained/lost numbers clashing with common key colors (such as lime or blue) and causing them to key out as well. 

If you would like to customize the key color, you will probably want to change a few other things to avoid these clashes. See the comments in the dropmixscoreboard.css file for more information.

The native resolution of the scoreboard app is 1280x720. It is probable you will have to scale the window source in your streaming program to the same dimension as your phone display, but since the aspect ratio is the same (hopefully) everything should line up. (If it doesn't, let me know!)

Due to the nature of Dropmix, you might find it easier to "play" the game or take cues on when to add points/hide the scoreboard from the monitor window of your streaming program, rather than the main Dropmix app window. The browser app is What You See Is What You Get, so be mindful of when the scoreboard might get in the way of an FX card play or EQ spin.

**Future Feature To-Do List**

- Display current scores in control panel to more easily update score while main scoreboard display is hidden
- Add "postgame" mode that elegantly displays final score breakdown and editable message on the game over screen
- Make control panel more aesthetically pleasing
- Add option to control panel to change its location relative to the main scoreboard overlay (bottom/right/top/left)
-- (This is so the majority of the scoreboard app browser window can be out of view to make it easier to control from the panel only)
- Test everything on other browsers, eventually probably (Chrome is good to go, but I need to get IE/Edge back on my PC at some point)
