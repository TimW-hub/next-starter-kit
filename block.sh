#!/bin/bash

echo "Enter the new block name (eg. BlockNameBlock):"
read blockName

srcFile="src/components/templates/block.js"
newDir="src/components/ModularContent/Blocks"

cp "$srcFile" "$newDir/$blockName.js"

sed -i '' "s/TemplateBlock/$blockName/g" "$newDir/$blockName.js"

echo "export { default as $blockName } from './Blocks/$blockName';" >> "src/components/ModularContent/index.js"
echo "New block '$blockName.js' created successfully!"