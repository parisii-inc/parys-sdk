#!/bin/bash

# Clean up and create the tmp/abis directory
rm -rf ./tmp/abis
mkdir -p ./tmp/abis

# First copy ABIs from full-abis directory
cp -f ./full-abis/abi/*.json ./tmp/abis/

# Then overlay any ABIs from the abis directory (if they exist)
if [ -d "./abis" ] && [ "$(ls -A ./abis)" ]; then
  cp -f ./abis/*.json ./tmp/abis/ 2>/dev/null || true
fi

echo "ABI extraction complete. Files are in tmp/abis/"