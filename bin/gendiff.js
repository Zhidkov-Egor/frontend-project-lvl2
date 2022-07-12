#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';

const program = new Command();

program
  .description('Comparing two files')
  .version('1.0.0')
  .parse(process.argv);
