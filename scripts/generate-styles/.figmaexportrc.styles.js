module.exports = {
  commands: [
    [
      'styles',
      {
        fileId: 'Zh6lypTCifKCUkBO9Y6YUT',
        outputters: [
          // https://www.npmjs.com/package/@figma-export/output-styles-as-sass
          require('@figma-export/output-styles-as-sass').default({
            output: './src/styles',
            getExtension: () => 'SCSS',
            getFilename: () => 'figma',
          }),
        ],
      },
    ],
  ],
};
