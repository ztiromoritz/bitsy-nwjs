# Offline wrapper for Bitsy

![Bitsy icon](https://raw.githubusercontent.com/ztiromoritz/bitsy-nwjs/master/custom/icon.png =32x32)

Project to create Win, Mac and Linux desktop versions of the beautiful [Bitsy](https://ledoux.itch.io/bitsy) by [@adamledoux](https://twitter.com/adamledoux)
All code under ```/app``` is created by [@adamledoux](https://twitter.com/adamledoux) and just mirrored in this repository 
from ```http://ledoux.io/bitsy/editor.html```. This is just a [NW.js](https://nwjs.io/) wrapper around the original tool.


## Serve
You can server your local instance of bitsy by using: 
```bash
npm run serve 
```
This will start a local webserver and will try to start it with your default browser.
You could change the port by using the option:
```bash
npm run serve -- --port=8888 
```

If you want to mess around with the bitsy source code, try:
```bash
npm run serve -- --livereload
```
This will start the same local server but with hot reload. 

### Without node and NW.js
If you are on a system where you don't haven npm/node you could try to serve bitsy locally
with some of the command from the [Big list of http static server one-liners](https://gist.github.com/willurd/5720255)
For example serving it from a raspberry pi, this would be a good option:
```bash
cd app
python -m SimpleHTTPServer 8989 
```

## Create desktop versions
### Install
You need npm/node installed. Clone this repository and run:
```bash
npm install
```

### Build 
To Build packages for win, linux, and mac start
```bash
npm run build
```
This will create packages in ```build/bitsy```.

### Fetch
To fetch the current version of the software from [http://ledoux.io/](http://ledoux.io/) run:
```bash
npm run fetch
```
This will populate the app folder with the current published version of bitsy.
To see the differences: 
```
git diff app/
```

## Build older versions:
This project was started with version 4.3 of bitsy. (Version 4.3.0 of this project).
List of all tagged versions
```
git tag
```

# Credits
* [Bitsy](https://ledoux.itch.io/bitsy) is created by [@adamledoux](https://twitter.com/adamledoux) 
* The NW.js template is based on - [https://github.com/UmbraEngineering/nwjs-template](https://github.com/UmbraEngineering/nwjs-template)