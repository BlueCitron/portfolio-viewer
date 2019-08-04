module.exports = {
  apps : [{
    name: 'PORTFOLIO_VIEWER_SERVER',
    script: './src/app.js',
    args: [ 'serve' ],
    instances: 1,
    autorestart: false,
    watch: [ 'src' ],
    max_memory_restart: '100M',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3030,
      HOST: '0.0.0.0',
    }
  }],
};
