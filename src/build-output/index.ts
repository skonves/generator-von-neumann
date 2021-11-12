import * as Generator from 'yeoman-generator';

module.exports = class extends Generator {
  configuring() {
    this.fs.extendJSON(this.destinationPath('tsconfig.json'), {
      compilerOptions: { outDir: 'generators' },
    });
  }
};
