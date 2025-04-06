const IGNORED_FOLDERS = [
  // JavaScript / TypeScript
  'node_modules',
  'dist',
  'build',
  'lib',
  'out',
  '.next',
  '.turbo',

  // Python
  '.venv',
  'venv',
  '__pycache__',
  '.mypy_cache',
  '.pytest_cache',
  '.pdm',
  '.tox',
  '.pip',

  // Java / Kotlin
  'target',
  'bin',
  '.gradle',
  '.settings',
  '.idea',
  'build',

  // Rust
  'target',
  '.cargo',

  // .NET / C#
  'bin',
  'obj',

  // C / C++ / CMake
  'build',
  'Debug',
  'Release',
  'cmake-build-*',

  // Go
  'bin',
  'pkg',

  // Testing / Coverage
  'coverage',
  '.nyc_output',
  '.test-results',

  // IDEs / Editors
  '.vscode',
  '.idea',
  '.history',
  '.classpath',
  '.project',

  // Version Control / CI
  '.git',
  '.svn',
  '.hg',
  '.circleci',
  '.github',
  '.gitlab-ci',
  '.travis',
  '.azure-pipelines',

  // Package manager caches
  '.npm',
  '.yarn',
  '.cache',
  '.pnpm-store',
  '.nvm',
  '.cask',
  '.brew',

  // OS junk
  '.DS_Store',
  'Thumbs.db',
  'desktop.ini',
];

export default IGNORED_FOLDERS;
