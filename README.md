<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

Welcome Simocaso,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use.

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

--------

Happy coding!


## Game logic and functions

#### Logic
- The game is played on a 3x3 game board
- One player will use the "X" symbol,and the other one will use the "O" symbol 
- Players alternate placing Xs and Os on the game board
- Game ends whenever either oppent has three of his/her symbols in a row (winning) or all nine squares are filled.
- The possible results are: "X won the game!", "O won the game!", "It's a draw!"


#### Functions
- a function will have to let the game messages' box say who has to start whenever the page loads/refreshes
- a function will let the player choose his/her symbol
- a function will let the players insert a symbol (either "X" or "O") in the cells
- a function will have to swtich the player whenever one of them has made his/her move
- a function will check if a player has put 3 of his/her symbols in a row (vertically, horizontally, diagonally)
- if a player makes a "tris", a function will need to announce the winner, else - it'll show "it's a draw"
- if a player wins with less than 9 cells filled up, a function won't make any other move available  
- associated with a "refresh" button, a function will clear the board


#### Eventual bugs
1. Only the first player is able to insert his/her symbol -> 
2. 


