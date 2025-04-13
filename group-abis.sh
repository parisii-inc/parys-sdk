#!/bin/bash

# Create directories if they don't exist
mkdir -p tmp/abis

# Function to validate and normalize JSON
validate_and_normalize_json() {
    local file=$1
    local output_file=$2
    
    if [ ! -s "$file" ]; then
        echo "Warning: Empty file: $file"
        return 1
    fi

    # Try to parse as direct ABI array first
    if jq 'if type == "array" and length > 0 and (.[0] | has("type")) then . else null end' "$file" > "$output_file.tmp" 2>/dev/null; then
        if [ "$(cat "$output_file.tmp")" != "null" ]; then
            echo '{"abi":' > "$output_file"
            cat "$output_file.tmp" >> "$output_file"
            echo '}' >> "$output_file"
            rm "$output_file.tmp"
            return 0
        fi
    fi

    # Try to parse as wrapped ABI object
    if jq 'if has("abi") and (.abi | type == "array") and (.abi | length > 0) and (.abi[0] | has("type")) then . else null end' "$file" > "$output_file.tmp" 2>/dev/null; then
        if [ "$(cat "$output_file.tmp")" != "null" ]; then
            cp "$output_file.tmp" "$output_file"
            rm "$output_file.tmp"
            return 0
        fi
    fi

    echo "Warning: File does not contain a valid ABI: $file"
    rm -f "$output_file.tmp"
    return 1
}

# Clean up tmp/abis directory first
rm -rf tmp/abis/*

# First, copy all existing ABIs from full-abis/abi to tmp/abis
echo "Copying existing ABIs from full-abis/abi to tmp/abis..."
for file in full-abis/abi/*.json; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        output_file="tmp/abis/$filename"
        if validate_and_normalize_json "$file" "$output_file"; then
            echo "Copying $filename"
        fi
    fi
done

# Extract ABIs from the forge project's out directory and save directly to tmp/abis
echo "Extracting ABIs from forge project..."
for file in ../parys-protocol/out/**/*.json; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        output_file="tmp/abis/$filename"
        if validate_and_normalize_json "$file" "$output_file"; then
            echo "Processing $filename"
        fi
    fi
done

# Add any additional files from abis that don't exist in tmp/abis
echo "Adding additional ABIs from abis directory..."
for file in abis/*.json; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        output_file="tmp/abis/$filename"
        if [ ! -f "$output_file" ]; then
            if validate_and_normalize_json "$file" "$output_file"; then
                echo "Adding $filename"
            fi
        fi
    fi
done

echo "ABI extraction complete. Files are in tmp/abis/"