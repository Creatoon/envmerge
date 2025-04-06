import { parse, ArgumentConfig, ParseOptions } from 'ts-command-line-args';

interface CLIArgs {
  path: string;
  output: string;
  verbose?: boolean;
  help?: boolean;
  version?: boolean;
}

const optionsDefinition: ArgumentConfig<CLIArgs> = {
  path: {
    type: String,
    alias: 'p',
    description: 'Path to the folder containing multiple projects',
  },
  output: {
    type: String,
    alias: 'o',
    description: 'Path to the output .env file',
  },
  verbose: {
    type: Boolean,
    alias: 'v',
    description: 'Enable verbose logging',
    defaultValue: false,
    optional: true,
  },
  help: {
    type: Boolean,
    alias: 'h',
    description: 'Show help message',
    optional: true,
  },
  version: {
    type: Boolean,
    alias: 'V',
    description: 'Show CLI version',
    optional: true,
  },
};

const parseOptions: ParseOptions<CLIArgs> = {
  helpArg: 'help',
  headerContentSections: [
    {
      header: 'envmerge CLI',
      content: 'Merges multiple .env files from project folders into one.',
    },
  ],
};

const args = parse<CLIArgs>(optionsDefinition, parseOptions);

export default args;
