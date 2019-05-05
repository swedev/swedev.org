module.exports = function(api) {
  api.cache(false);

  const presets = [
    ['@babel/env', {
      'targets': {
        'node': 'current'
      }
    }],
    ['minify']
  ];

  const plugins = [
    ['@babel/plugin-transform-react-jsx', {
      pragma: 'jsxCreateObject',
    }],
    // ['inline-import', { 'extensions': ['.svg'] }]
  ];

  return {
    presets,
    plugins,
    comments: false
  };
};
