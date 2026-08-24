import { spawnSync } from 'node:child_process';

const isCloudflarePages = process.env.CF_PAGES === '1';
const executable = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const command = isCloudflarePages ? ['next', 'build'] : ['vinext', 'build'];

const result = spawnSync(executable, command, {
  stdio: 'inherit',
  env: process.env,
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
