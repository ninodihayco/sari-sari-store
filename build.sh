#!/bin/bash
export DISABLE_ESLINT_PLUGIN=true
export NEXT_DISABLE_ESLINT=1
export NEXT_DISABLE_TYPE_CHECK=1
npx next build --no-lint
