const { pascalCase } = require('@figma-export/utils');
const fs = require('fs');
const iconFolderPath = process.env.ICONS_DIR_PATH;

if (fs.existsSync(iconFolderPath)) {
  fs.rmSync(iconFolderPath, { recursive: true });
}

fs.mkdirSync(iconFolderPath, { recursive: true });

const seen = new Set();

module.exports = {
  commands: [
    [
      'components',
      {
        fileId: process.env.ICON_FILE_ID,
        filterComponent: component => {
          // Only allow names that start with 'Icon'
          if (!component.name.startsWith('Icon')) return false;

          // Deduplicate by component name
          if (seen.has(component.name)) return false;

          seen.add(component.name);
          return true;
        },
        onlyFromPages: [process.env.ICON_PAGE],
        outputters: [
          require('@figma-export/output-components-as-svgr').default({
            output: iconFolderPath,
            getFileExtension: () => '.tsx',
            getDirname: () => '.',
            getExportTemplate: options => {
              const reactComponentName = pascalCase(options.basename);
              return `export {default as ${reactComponentName}} from "./${reactComponentName}";`;
            },
            getSvgrConfig: () => ({
              typescript: true,
              icon: true,
              expandProps: 'end',
              plugins: [
                '@svgr/plugin-svgo',
                '@svgr/plugin-jsx',
                '@svgr/plugin-prettier',
              ],
              template: (
                { componentName, props, jsx, exports },
                { tpl },
              ) => tpl`
              import React from 'react';
              import {IconWrapper} from "../base/IconWrapper";
              import {IconWrapperProps} from "../base/IconWrapper/types";
              ${'\n'}
              function ${componentName}(allProps: IconWrapperProps): React.ReactElement {
                const { svgProps: props, ...restProps } = allProps;
                return <IconWrapper icon={${jsx}} {...restProps} />;
              }
              ${'\n'}
              ${exports}
            `,
            }),
          }),
        ],
      },
    ],
  ],
};
