# VoiceControlJS

Voice-driven automation for your computer.

## Features

- [x] Type a string using the `type` command.
- [x] Simulate key press using the `press` command.
- [x] Move cursor using the `mouse` command.
- [x] Simulate a full screen capture using the `capture` command.
- [x] Job priority using Kue.
- [x] Dark theme for better UX.
- [x] Audio visualizer (experimental).
- [ ] Move mouse to desired coordinates.
- [ ] Simulate mouse click using the `click` command.

...and much more!

## Requirements

* Google Chrome (with SpeechRecognition support)
* Node.js
* Yarn / NPM (yarn is preferred)
* Other requirements for robotjs

Once this is satisfied we can move on to installing it.

## Installing

Clone the repo and installing dependencies.

```sh
$ git clone https://github.com/divy-work/voicecontroljs
$ cd voicecontroljs
$ yarn # or npm i
```

We can now perform the build.

## Building

```sh
$ yarn build # or npm run build
$ cd server & yarn build
```
Great! Let's run the server

## Running

Assuming you are in the root directory of the repo.

```sh
$ node ./server/dist/index.js
# Yay! Now open http://localhost:3000
```

Open http://localhost:3000 and enjoy!

## Contributing

Contribution and feature requests from anyone is greatly appreciated.

* Fork the repo.
* Make changes.
* Commit them.
* Open a PR.
* Ping me :)

## License

MIT License

Copyright (c) 2020 Divy Srivastava

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
