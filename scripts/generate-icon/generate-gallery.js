// Script to generate Icon Gallery preview
const fs = require('fs');
const path = require('path');

const exportFile = fs.readFileSync(
  path.join(process.env.ICONS_DIR_PATH, 'index.ts'),
  {
    encoding: 'utf8',
  },
);

const exportFileLines = exportFile.split('\n');
const components = exportFileLines
  .map(line => {
    return line.replace(/.+as | }.+/g, '');
  })
  .slice(0, -1);

const renderIcon = iconComponent =>
  `      <div className="flex flex-col items-center justify-center">
      <${iconComponent} />
      <span>${iconComponent}</span>
    </div>`;

let iconGalleryContent = `import React from "react";
import dynamic from 'next/dynamic';
${components
  .map(
    (component, i) => `
const ${component} = dynamic(() => import("@/components/icons/${component}"));`,
  )
  .join('')}

export default function IconGallery(): React.ReactElement {
  return (
    <div className="grid gap-4" style={{gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))"}}>
${components
  .map((component, i) =>
    i === 0 ? `${renderIcon(component)}` : `\n${renderIcon(component)}`,
  )
  .join('')}
    </div>
  );
}
`;

fs.writeFileSync('./app/icon-gallery/page.tsx', iconGalleryContent);
