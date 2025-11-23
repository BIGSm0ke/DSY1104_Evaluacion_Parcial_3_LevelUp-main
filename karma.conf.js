module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.js',
      'src/**/*.js',
      'src/**/*.jsx'
    ],
    exclude: [
      'src/index.js',
      'src/main.jsx',
      'src/reportWebVitals.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack', 'coverage'],
      'src/**/*.jsx': ['webpack', 'coverage'],
      'src/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ],
                plugins: [
                  ['babel-plugin-istanbul', {
                    exclude: ['**/*.spec.js', '**/tests/**']
                  }]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jpg|gif|svg)$/,      // <--- NUEVO: para imágenes
            use: ['file-loader', 'url-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    reporters: ['progress', 'coverage', 'kjhtml'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
      ],
      check: {
        global: {
          statements: 85,
          branches: 35,
          functions: 85,
          lines: 85
        }
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
    singleRun: false,
    browserNoActivityTimeout: 30000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    concurrency: Infinity
  });
};
