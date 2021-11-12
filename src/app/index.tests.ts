import { exec, execSync } from 'child_process';
import * as fs from 'fs';
import * as rimraf from 'rimraf';

// import { TestContext } from '../test-utils';

// const sut = new TestContext(__dirname);

describe('ts-console:app', function () {
  // beforeEach(async () => await sut.setup());
  // afterEach(async () => await sut.teardown());

  describe('when the "basic" mode is run', () => {
    jest.setTimeout(300000);

    // it('genererates a valid application', async () => {
    //   // ARRANGE

    //   // ACT
    //   await sut
    //     .run()
    //     .withOptions({ skipInstall: false })
    //     .withPrompts({ mode: 'basic' });

    //   // ASSERT
    //   await new Promise<void>((resolve, reject) => {
    //     exec('npm run build', { cwd: sut.tempdir }, (err) =>
    //       !!err ? reject(err) : resolve(),
    //     );
    //   });

    //   await new Promise<void>((resolve, reject) => {
    //     exec('npm t', { cwd: sut.tempdir }, (err) =>
    //       !!err ? reject(err) : resolve(),
    //     );
    //   });
    // });

    it.only('does the thing', (done) => {
      // ARRANGE

      // ACT
      const pack = `generator-von-neumann-${
        require('../../package.json').version
      }.tgz`;
      rimraf('./temp', (err) => {
        if (err) {
          done();
          throw err;
        }
        fs.mkdirSync('./temp');
        execSync('yo ../generators/app/index.js --mode=basic', {
          cwd: './temp',
        });
        execSync('npm run build', { cwd: './temp' });
        execSync('npm t', { cwd: './temp' });

        done();
      });
    });
  });
});
