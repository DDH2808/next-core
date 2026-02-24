import fs from 'fs';
import path from 'path';

const appDir = 'src/app';

const getRoles = dirPath => {
  const filePath = path.join(dirPath, '_roles.ts');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const roleRegex = /EnumCrmUserResponseRole\.[\w\d_]+/g;
    const matches = content.match(roleRegex);
    return matches;
  }
  return [];
};

const getPermissions = dirPath => {
  const filePath = path.join(dirPath, '_permissions.ts');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const permissionRegex = /EnumCrmUserResponsePermissions\.[\w\d_]+/g;
    const matches = content.match(permissionRegex);
    return matches;
  }
  return [];
};

function walkDir(dirPath, parentConfig = { roles: [], permissions: [] }) {
  let routes = [];
  const config = {
    path: dirPath.replace(appDir, '').replace(/\/\(.+\)/, ''),
    roles: getRoles(dirPath),
    permissions: getPermissions(dirPath),
    children: [],
  };

  config.roles = Array.from(
    new Set([...(parentConfig.roles || []), ...(config.roles || [])]),
  );
  config.permissions = Array.from(
    new Set([
      ...(parentConfig.permissions || []),
      ...(config.permissions || []),
    ]),
  );

  if (!config.path) config.path = '/';
  routes.push(config);

  const paths = fs.readdirSync(dirPath);

  let hasPage = false;
  if (paths.includes('page.tsx')) {
    hasPage = true;
  }

  paths.forEach(_path => {
    const childPath = path.join(dirPath, _path);
    const stats = fs.statSync(childPath);
    if (stats.isDirectory()) {
      const [childRoutes, childHasPage] = walkDir(childPath, {
        roles: config.roles,
        permissions: config.permissions,
      });

      if (childHasPage) {
        hasPage = true;
        if (_path.startsWith('(') && _path.endsWith(')')) {
          const flattendChildren = childRoutes
            .flatMap(routeConfig => routeConfig.children)
            ?.filter(Boolean);
          if (flattendChildren) {
            config.children = config.children.concat(flattendChildren);
          }
        } else if (childRoutes) {
          config.children = config.children.concat(childRoutes);
        }
      }
    }
  });

  if (config.children.length === 0) {
    delete config.children;
  }

  if (config.roles.length === 0) {
    delete config.roles;
  }

  if (config.permissions.length === 0) {
    delete config.permissions;
  }

  return [routes, hasPage];
}

function main() {
  const [config] = walkDir(appDir);
  const routesString = JSON.stringify(config[0].children, null, 2).replace(
    /\"(EnumCrmUserResponseRole\.[\w\d_]+|EnumCrmUserResponsePermissions\.[\w\d_]+|path|children|roles|permissions|title|t\(.+\))\"/g,
    '$1',
  );
  const configPath = 'src/config/routes.ts';
  const content = `
import { EnumCrmUserResponsePermissions, EnumCrmUserResponseRole } from '@/api/generated/index.defs';

export interface IRouteConfig {
  path: string;
  title?: string;
  roles?: EnumCrmUserResponseRole[];
  permissions?: EnumCrmUserResponsePermissions[];
  children?: IRouteConfig[];
}

export const routeConfig: IRouteConfig[] = ${routesString};`;
  fs.writeFileSync(configPath, content, 'utf-8');
}

main();
