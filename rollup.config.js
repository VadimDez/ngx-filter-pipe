/**
 * Created by Vadym Yatsyuk on 22.06.17
 */
export default {
  format: 'umd',
  moduleName: 'ngx-filter-pipe',
  external: [
    '@angular/core'
  ],
  onwarn: ( warning ) => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) !== -1) {
      return;
    }
    console.error(warning);
  }
};
