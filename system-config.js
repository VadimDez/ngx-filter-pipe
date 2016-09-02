/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
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
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
];
var cliSystemConfigPackages = {};
[
    'core',
    'common',
    'compiler',
    'http',
    'router',
    'platform-browser',
    'platform-browser-dynamic',
    'forms'
].forEach(function (barrelName) {
    cliSystemConfigPackages[("@angular/" + barrelName)] = { main: "bundles/" + barrelName + ".umd.js" };
});
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
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
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map