// pm2 start ecosystem.config.cjs --env development
// pm2 start ecosystem.config.cjs --env production

module.exports = {
  apps: [
    {
      name: 'nuxt-quick',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'development',
        PORT: '13998',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: '3998',
      }
    }
  ]
}
