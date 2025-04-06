import chalk from 'chalk';

export const logSuccess = (msg: string) => {
  console.log(chalk.green('✔︎'), msg);
};

export const logWarn = (msg: string) => {
  console.log(chalk.yellow('⚠︎'), msg);
};

export const logError = (msg: string) => {
  console.log(chalk.red('✖︎'), msg);
};
