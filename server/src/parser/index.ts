var controller = require('robotjs');
var commandRegistry = require('bot-commander');
const Jimp = require('jimp')

const commands: string[] = [
  "type",
  "press",
  "mouse",
  "capture"
];

function captureImage() {
  const pic = controller.screen.capture()
  const width = pic.byteWidth / pic.bytesPerPixel // pic.width is sometimes wrong!
  const height = pic.height
  const image = new Jimp(width, height)
  let red, green, blue
  pic.image.forEach((byte, i) => {
    switch (i % 4) {
      case 0: return blue = byte
      case 1: return green = byte
      case 2: return red = byte
      case 3:
        image.bitmap.data[i - 3] = red
        image.bitmap.data[i - 2] = green
        image.bitmap.data[i - 1] = blue
        image.bitmap.data[i] = 255
    }
  })
  return image;
}

interface Coordinate {
  x: number,
  y: number
};

interface Coordinates {
  left: Coordinate,
  right: Coordinate,
  top: Coordinate,
  bottom: Coordinate
};

const coordinates: Coordinates = {
  left: {
    x: 21,
    y: 414
  },
  right: {
    x: 1171,
    y: 414
  },
  top: {
    x: 614,
    y: 60
  },
  bottom: {
    x: 614,
    y: 758
  }
};

commandRegistry
  .command('test')
  .description('This is a test command')
  .action(a => {
    console.log('[action] Test is working.')
  })

commandRegistry
  .command('type [text]')
  .description('This is the type command')
  .action((meta, o, req) => {
    if(o) {
      try {
        controller.typeString(o);
        console.log('[action] Typing...');
      } catch(e) {
        console.log('[action] [error] Invalid key code.')
      }
    }
  })

commandRegistry
.command('press [key]')
.description('This is the press command')
.action((meta, o, req) => {
    if(o) {
      controller.keyTap(o);
      console.log('[action] Keypress');
    }
})

commandRegistry
.command('mouse [pos]')
.description('This is the mouse command')
.action((meta, o, req) => {
    if(o && coordinates[o]) {
        controller.moveMouse(coordinates[o].x, coordinates[o].y);
        console.log('[action] Mouse move');
    }
})

commandRegistry
.command('capture [pos]')
.description('This is the capture command')
.action((meta, o, req) => {
    if(o) {
        captureImage().write('capture.png')
        console.log('[action] Screen capture');
    }
})

function parse(line: string) {
  //const argv = line.split(/(\".+?\")|(\'.+?\')|\s+/g).filter(a => (a && a.length > 0));
  var reformedLine = line;
  const argv = line.trim().toLowerCase().split(" ");
  if(commands.includes(argv[0].trim())) {
    reformedLine = "";
    //var reformedLine = argv[0].trim();
    for(var i=0; i<argv.length;i++) {
      if (i == 0) {
        reformedLine += `${argv[0].trim()} "`;
        continue;
      }
      if(i == (argv.length - 1)) {
        reformedLine += `${argv[i].trim()}"`;
        continue;
      }
      reformedLine += `${argv[i].trim()} `;
    }
  }
  commandRegistry.parse(reformedLine)
};

export default { parse };
