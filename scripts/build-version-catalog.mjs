import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const [catalogPath, currentVersion] = process.argv.slice(2);

if (!catalogPath || !currentVersion) {
  throw new Error('Usage: node scripts/build-version-catalog.mjs <catalogPath> <currentVersion>');
}

const loaded = existsSync(catalogPath)
  ? JSON.parse(readFileSync(catalogPath, 'utf8'))
  : [];

const merged = [...new Set([...loaded, currentVersion])].sort((a, b) => {
  if (a === 'next') return -1;
  if (b === 'next') return 1;
  return a.localeCompare(b, 'en');
});

writeFileSync(catalogPath, JSON.stringify(merged, null, 2) + '\n');
process.stdout.write(`${merged.join(',')}\n`);
