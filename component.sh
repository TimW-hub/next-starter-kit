#!/bin/bash

echo "Enter the new component name (eg. NewComponentName):"
read componentName

#perform string mutations for naming conventions
camelCaseName="$(tr A-Z a-z <<< ${componentName:0:1})${componentName:1}"
underscoreName=$(echo "$componentName" | sed -r 's/([a-z0-9])([A-Z])/\1_\L\2/g')

#set directory vars
srcDir="src/components/templates"
newDir="src/components/$camelCaseName"

cp -r "$srcFile" "$newDir"

#loop files and replace content:
for file in $(find $newDir -name $camelCaseName); do

    renamedFile=$(echo $file | sed "s/component/$camelCaseName/g")

    mv $file $renamedFile

    #edit content in files
    sed -i '' "s/template_component/$underscoreName/g" $renamedFile
    sed -i '' "s/TemplateComponent/$componentName/g" $renamedFile
    sed -i '' "s/component/$camelCaseName/g" $renamedFile

done

echo "New block '$blockName.js' created successfully!"