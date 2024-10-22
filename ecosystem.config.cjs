// pm2 start ecosystem.config.cjs --env development
// pm2 start ecosystem.config.cjs --env production
const process = require('node:process')

const NODE_ENV = process.argv.includes('--env') ? process.argv[process.argv.indexOf('--env') + 1] : 'development'

module.exports = {
  apps: [
    {
      name: `nuxt-quick-${NODE_ENV}`,
      exec_mode: 'cluster',
      instances: 1,
      max_memory_restart: '500M',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: './logs/error.log',
      out_file: './logs/access.log',
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
