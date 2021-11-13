import { join } from 'path';

import * as Generator from 'yeoman-generator';
import { ignore, filterDev } from '../utils';

module.exports = class extends Generator {
  configuring() {
    // const tsconfig = this.fs.readJSON(
    //   this.destinationPath('tsconfig.json'),
    // ) as any;
    // const outDir = tsconfig?.compilerOptions?.outDir;
    // this.fs.extendJSON(this.destinationPath('package.json'), {
    //   main: 'generators/app/index.js',
    //   scripts: {
    //     copy: 'run-s -s copy:*',
    //     'copy:templates': `cpx "src/*/templates/**/*" ${outDir}`,
    //     'copy:with-extensions': `cpx "src/*/templates/**/.*" ${outDir}`,
    //     postbuild: 'run-s -s copy',
    //   },
    // });
    // this.fs.extendJSON(this.destinationPath('tsconfig.json'), {
    //   compilerOptions: {
    //     outDir,
    //     rootDir: './src',
    //   },
    //   exclude: ['src/**/templates/*'],
    // });
    // ignore(this.fs, this.destinationPath('.gitignore'), outDir);
    // if (this.fs.exists(this.destinationPath('.prettierignore'))) {
    //   ignore(this.fs, this.destinationPath('.prettierignore'), outDir);
    //   ignore(this.fs, this.destinationPath('.prettierignore'), 'templates');
    // }
    // if (this.fs.exists(this.destinationPath('.eslintignore'))) {
    //   ignore(this.fs, this.destinationPath('.eslintignore'), outDir);
    //   ignore(this.fs, this.destinationPath('.eslintignore'), 'templates');
    // }
  }

  writing() {
    // if (this.fs.exists(this.destinationPath(join('src', 'index.ts')))) {
    //   this.fs.delete(this.destinationPath(join('src', 'index.ts')));
    // }
    // if (this.fs.exists(this.destinationPath(join('src', 'index.tests.ts')))) {
    //   this.fs.delete(this.destinationPath(join('src', 'index.tests.ts')));
    // }
    // [
    //   join('src', 'app', 'index.tests.ts'),
    //   join('src', 'app', 'index.ts'),
    //   join('src', 'generator', 'index.ts'),
    //   join('src', 'test-utils.ts'),
    // ].forEach((file) => {
    //   this.copyTemplate(
    //     this.templatePath(`${file}.template`),
    //     this.destinationPath(file),
    //   );
    // });
  }

  install() {
    this.npmInstall(
      filterDev(this.fs.readJSON(this.destinationPath('package.json')), [
        '@types/rimraf',
        '@types/yeoman-generator@4',
        '@types/yeoman-test',
        'cpx',
        'rimraf',
        'yeoman-test',
      ]),
      {
        'save-dev': true,
      },
    );
    this.npmInstall(['generator-ts-console', 'yeoman-generator@4']);
  }
};
