/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  // angular testing umd bundles
  '@angular/core/testing': 'vendor/@angular/core/bundles/core-testing.umd.js',
  '@angular/common/testing': 'vendor/@angular/common/bundles/common-testing.umd.js',
  '@angular/compiler/testing': 'vendor/@angular/compiler/bundles/compiler-testing.umd.js',
  '@angular/platform-browser/testing': 'vendor/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
  '@angular/platform-browser-dynamic/testing': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
  '@angular/http/testing': 'vendor/@angular/http/bundles/http-testing.umd.js',
  '@angular/router/testing': 'vendor/@angular/router/bundles/router-testing.umd.js',
  '@angular/forms/testing': 'vendor/@angular/forms/bundles/forms-testing.umd.js',
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.


  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
[
  'core',
  'common',
  'compiler',
  'http',
  'router',
  'platform-browser',
  'platform-browser-dynamic',
  'forms'
].forEach((barrelName: string) => {
  cliSystemConfigPackages[`@angular/${ barrelName }`] = { main: `bundles/${ barrelName }.umd.js` };
});

barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
