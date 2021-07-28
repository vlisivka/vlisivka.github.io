const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const os = require('os');

/**
 * Hooks!
 *
 * Lifecycle hooks are the backbone of how you can have complete control over the output of your site.
 * Hooks are enforced via the hookInterface 'contract' defined here:
        https://github.com/Elderjs/elderjs/blob/master/src/hookInterface/hookInterface.ts
 *
 * If you read the hookInterface spec closely you'll see that each defined hook gets specific 'props' along with which of those props is 'mutable'.
 *
 * If you're a fan of 'pure' functions in JS, mutating props will probably set off alarm bells in your head. Fear not, instead of burying
 * what is mutating things deep in your application, you'll know it is probably in this file.
 *
 * Also, to help keep mutation predictable each 'hook' limits which 'props' can be manipulated and where.
 *
 */

const hooks = [
  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // Note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // Copy assets folder to public destination
      glob.sync(path.resolve(settings.rootDir, './assets/**/*'), {dot: true, nodir: true}).forEach((file) => {
        const relativeToAssetsFolder = path.relative(path.join(settings.rootDir, './assets'), file);
        const outputPath = path.resolve(settings.distDir, relativeToAssetsFolder);
        fs.ensureDirSync(path.parse(outputPath).dir);
        fs.outputFileSync(outputPath, fs.readFileSync(file));
      });
    },
  },

];

module.exports = hooks;
