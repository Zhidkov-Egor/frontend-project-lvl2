#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';

const program = new Command();

program
  .description('Comparing two files')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .parse(process.argv);
