const prompt = require('prompt')
const exec = require('child_process').exec
const colors = require("colors/safe")

const bash = cmd => {
  msg('green', `Running: ${cmd}`)
  return new Promise(function(resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(err)
      resolve(stdout, stderr)
    })
  });
}

const msg = (color, text) => {
  console.log(colors[color](text))
}

const setup = (err, result) => {
  if (err) msg(`red`, err)
  msg('green', 'CraftCMS configuration values ☟')
  for (let key in result) {
    msg('green', `${key}: ${result[key]};`)
  }
}

msg('green', 'Making Progress!')
prompt.start();
prompt.get({
  properties: {
    name: {
      description: colors.magenta("Project name:")
    },
    stagingUrl: {
      description: colors.magenta("Staging URL:"),
      default: '.nanoapp.io',
    },
    productionURL: {
      description: colors.magenta("Production URL:")
    }
  }
}, setup);
