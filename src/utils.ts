import { EOL } from 'os';
import { Editor } from 'mem-fs-editor';

export function append(
  fs: Editor,
  filepath: string,
  contents: string,
  separator: string = EOL,
): void {
  const original = fs.exists(filepath) ? fs.read(filepath) : '';
  fs.write(filepath, [original, contents].filter((x) => x).join(separator));
}

export function ignore(fs: Editor, filepath: string, content: string): void {
  const original = fs.exists(filepath) ? fs.read(filepath) : '';
  const lines = (content || '')
    .split(EOL)
    .map((line) => line.split('#')[0].trim())
    .filter((x) => x);

  const newLines = new Set<string>();

  for (const line of lines) {
    if (!ignores(original, line)) {
      newLines.add(line);
    }
  }

  newLines.delete('');
  newLines.add('');

  append(fs, filepath, Array.from(newLines).join(EOL));
}

export function ignores(ignoreFile: string, item: string): boolean {
  return ignoreFile
    .split(EOL)
    .map((line) => line.split('#')[0].trim())
    .some((x) => x === item);
}

export function filterDev(pkg: any, dependencies: string[]): string[] {
  if (!pkg?.dependencies) return dependencies;
  const dependencySet = new Set(dependencies);

  for (const existing of Object.keys(pkg.dependencies)) {
    dependencySet.delete(existing);
  }

  return Array.from(dependencySet);
}
