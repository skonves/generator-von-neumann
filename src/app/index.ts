import * as Generator from 'yeoman-generator';
import { PrettierTransform } from 'generator-ts-console/generators/prettier-transform';

module.exports = class extends Generator {
  constructor(args: string | string[], options: {}) {
    super(args, options);

    this.registerTransformStream(new PrettierTransform());

    this.composeWith(require.resolve('../build-output'));
    this.composeWith(require.resolve('generator-ts-console/generators/app'), {
      ...options,
      arguments: args,
      linter: 'eslint',
      testing: 'jest',
    });
    // this.composeWith(require.resolve('../generator'));
  }

  initializing() {
    // Nothing to do
  }
};
