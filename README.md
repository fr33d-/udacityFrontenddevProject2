# Udacity frontend developer project Nr. 2

Its a simple memory game for one of the project in the udacity frontend developer  [nanodegree](https://de.udacity.com/course/front-end-web-developer-nanodegree--nd001).

### TOC
1. Usage
  1. To the players
  2. To the developers
2. Installation
3. To the reviewer (just a short note, will be deleted later)
4. Licence

## Usage:
### To the players:

Its a simple memory game. Flip the cards and hope that they match, its like every memory game you've seen. If the cards match they will stay open and you got them, if not, they will turn again and you can go for another try.

A indicator tells you how many items you found, how good you are (stars) and how much time you spend with the game. If you like it, tell others about it.

The animations work best in Google Chrome.

### To the developers:
Its a simple HTML/JS game in a single view. index.html contains all semantic data. The js/main.js file has all the logic in it. To understand the logic please see the comments in that file. The css/styles.scss has all styles, getting compiled to css with gulp.
The frontend uses:
1. Fontawesome icons version 5.0.8
2. jQuery V3.3.1

The development uses:
1. node and npm
2. Gulp to build scss and run a liveserver

## Installation:
You can run it from the index.html or as a developer runt the development server:

or, as a developer:

1: run
```shell
npm install
```
2: start the liveserver
```shell
gulp
```

### To the reviewer:
1. I really disagree with the rule that it doesn't count as a move when you click twice on a card. It is now implemented like this but still i disagree. When you click on a card you can see what symbol it has. If you hide it again and your moves don't count up, you still know what is under the card. So you could easily cheat on the game.
2. I can not reproduce the but with the stars, they work well here. Till 20 stars you got 3, till 30 2 and over 40 0 stars. Please tell me more about it if its not working for you.

## License:
MIT License

Copyright (c) [2018] [Frederic Wollinger]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.