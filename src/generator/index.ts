import { join } from 'path';
import { EOL } from 'os';

import * as Generator from 'yeoman-generator';

module.exports = class extends Generator {
  configuring() {
    this.fs.extendJSON(this.destinationPath('package.json'), {
      main: 'generators/app/index.js',
      scripts: {
        prebuild: 'npm run lint && rimraf generators/*',
        postbuild:
          'cpx "src/*/templates/**/*" generators \\\n&& cpx "src/*/templates/**/.*" generators',
      },
    });
    this.fs.extendJSON(this.destinationPath('tsconfig.json'), {
      compilerOptions: {
        outDir: 'generators',
        rootDir: './src',
      },
      exclude: ['src/*/templates/*'],
    });
  }

  writing() {
    this.fs.append('.gitignore', `${EOL}generators${EOL}`);
    this.fs.delete(join('src', 'index.ts'));
    this.fs.delete(join('src', 'index.tests.ts'));

    [
      join('src', 'app', 'index.tests.ts'),
      join('src', 'app', 'index.ts'),
      join('src', 'generator', 'index.ts'),
      join('src', 'test-utils.ts'),
    ].forEach((file) => {
      this.copyTemplate(
        this.templatePath(`${file}.template`),
        this.destinationPath(file),
      );
    });
  }

  install() {
    this.npmInstall(
      [
        '@types/rimraf',
        '@types/yeoman-generator@4',
        '@types/yeoman-test',
        'cpx',
        'rimraf',
        'yeoman-test',
      ],
      {
        'save-dev': true,
      },
    );
    this.npmInstall(['generator-ts-console', 'yeoman-generator@4']);
  }
};
