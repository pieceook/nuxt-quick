module.exports = {
  apps: [
    {
      name: 'nuxt-quick',
      port: '3998',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs'
    }
  ]
}
