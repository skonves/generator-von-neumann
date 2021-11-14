import { exec, execSync } from 'child_process';
import * as fs from 'fs';
import * as rimraf from 'rimraf';

const minutes = 60 * 1000;

describe('ts-console:app', function () {
  jest.setTimeout(10 * minutes);

  describe('when the "basic" mode is run', () => {
    it('genererates a valid application', (done) => {
      // ARRANGE

      // ACT
      const pack = `generator-von-neumann-${
        require('../../package.json').version
      }.tgz`;
      rimraf('./temp', (err) => {
        if (err) {
          done(err);
        } else {
          try {
            // execSync('npm pack');
            // execSync(`npm i -g ${pack}`);
            fs.mkdirSync('./temp');
            // execSync('yo von-neumann --mode=basic', { cwd: './temp' });
            execSync('yo ../generators/app/index.js --mode=basic', {
              cwd: './temp',
            });
            execSync('npm run build', { cwd: './temp' });
            execSync('npm t', { cwd: './temp' });
            done();
          } catch (ex) {
            done(ex);
          }
        }
      });
    });
  });
});
