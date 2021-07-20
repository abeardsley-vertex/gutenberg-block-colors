//import { useBlockProps } from '@wordpress/block-editor';
const { getColorClassName, useBlockProps, RichText} = wp.blockEditor;

export default function save(props)
{ 
    const { borderColor, customBorderColor, textColor, customTextColor, backgroundColor, customBackgroundColor, blockText, borderStyle, borderWidth } = props.attributes;
    let divClass = '';
    let divStyles = {borderWidth : borderWidth + 'px', borderStyle: borderStyle};

    console.log("on save borderStyle is: " + borderStyle);

    if (borderColor != undefined) {
        divClass = getColorClassName('border-color', borderColor);
    }
    if (customBorderColor != undefined) {
        divStyles.borderColor = customBorderColor;
    }

    if (textColor != undefined) {
        divClass += ' ' + getColorClassName('color', textColor);
    }
    if (customTextColor != undefined) {
        divStyles.color = customTextColor;
    }

    if (backgroundColor != undefined) {
        divClass += ' ' + getColorClassName('background-color', backgroundColor);
    }
    if (customBackgroundColor != undefined) {
        divStyles.backgroundColor = customBackgroundColor;
    }

    const blockProps = useBlockProps.save();

    return(
        <RichText.Content { ...blockProps } className={divClass} style={divStyles} tagName="div" value={ props.attributes.blockText } /> 
    );
}