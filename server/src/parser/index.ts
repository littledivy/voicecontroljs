var controller = require('robotjs');
var commandRegistry = require('bot-commander');

const commands: string[] = [
  "type"
]

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
    console.log(meta)
    if(o) {
      controller.typeString(o);
      console.log('[action] Typing...')
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
