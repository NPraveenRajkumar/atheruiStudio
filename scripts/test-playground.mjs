// Runs the Design Studio tests against every component (the default test run only samples some).
// Usage: npm run test:playground            all components
//        npm run test:playground -- ui-tag  extra arguments go to Playwright
import { spawnSync } from 'node:child_process';

const args = ['playwright', 'test', 'tests/playground-code.spec.ts', 'tests/playground.spec.ts', '--workers=1', ...process.argv.slice(2)];
const res = spawnSync('npx', args, { stdio: 'inherit', shell: true, env: { ...process.env, PG_FULL: '1' } });
process.exit(res.status ?? 1);
