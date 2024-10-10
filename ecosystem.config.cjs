module.exports = {
  apps: [
    {
      name: 'nuxt-quick',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'development',
        port: '3998',
      },
      env_production: {
        NODE_ENV: 'production',
        port: '3998',
      }
    }
  ]
}
