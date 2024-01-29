/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  // serverModuleFormat: 'cjs',
  tailwind: true,
  postcss: true,
  styles: {
    'src/styles/root.css': {
      plugins: ['postcss']
    }
  }
}
