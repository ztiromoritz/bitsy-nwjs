# Bitsy Desktop Version
Win, Mac and Linux Desktop Versions of the beautiful [Bitsy](http://ledoux.io/bitsy/editor.html) by [@adamledoux](https://twitter.com/adamledoux)

# Install
You need npm/node installed. Clone this repository and run:
```bash
npm install
```

# Serve
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

# Build 
To Build packages for win, linux, and max start



# Fetch
To fetch the current version of the software from [http://ledoux.io/](http://ledoux.io/) run:
```bash
npm run fetch
```
This will populate the app folder with the current published version of bitsy.
To see the differences: 
```
git diff app/
```

# Without node & nwjs
If you are on a system where you don't haven npm/node you could try to serve bitsy locally
with some of the command from the [Big list of http static server one-liners](https://gist.github.com/willurd/5720255)
For example serving it from a raspberry pi, this would be a good option:
```bash
python -m SimpleHTTPServer 8989 
```

# Build older versions:
This project was started with version 4.3 of bitsy. (Version 4.3.0 of this project).
List of all tagged versions
```
git tag
```

# Credits
The nwjs template based on - [https://github.com/UmbraEngineering/nwjs-template](https://github.com/UmbraEngineering/nwjs-template)