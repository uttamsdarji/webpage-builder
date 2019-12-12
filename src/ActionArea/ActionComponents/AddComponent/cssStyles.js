const styleKeys = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'animation',
  'animationDelay',
  'animationDirection',
  'animationDuration',
  'animationFillMode',
  'animationIterationCount',
  'animationName',
  'animationPlayState',
  'animationTimingFunction',
  'backfaceVisibility',
  'background',
  'backgroundAttachment',
  'backgroundBlendMode',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'blockSize',
  'blur',
  'border',
  'borderBlock',
  'borderBlockColor',
  'borderBlockEnd',
  'borderBlockEndColor',
  'borderBlockEndStyle',
  'borderBlockEndWidth',
  'borderBlockStart',
  'borderBlockStartColor',
  'borderBlockStartStyle',
  'borderBlockStartWidth',
  'borderBlockStyle',
  'borderBlockWidth',
  'borderBottom',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStyle',
  'borderBottomWidth',
  'borderCollapse',
  'borderColor',
  'borderEndEndRadius',
  'borderEndStartRadius',
  'borderImage',
  'borderImageOutset',
  'borderImageRepeat',
  'borderImageSlice',
  'borderImageSource',
  'borderImageWidth',
  'borderInline',
  'borderInlineColor',
  'borderInlineEnd',
  'borderInlineEndColor',
  'borderInlineEndStyle',
  'borderInlineEndWidth',
  'borderInlineStart',
  'borderInlineStartColor',
  'borderInlineStartStyle',
  'borderInlineStartWidth',
  'borderInlineStyle',
  'borderInlineWidth',
  'borderLeft',
  'borderLeftColor',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRadius',
  'borderRight',
  'borderRightColor',
  'borderRightStyle',
  'borderRightWidth',
  'borderSpacing',
  'borderStartEndRadius',
  'borderStartStartRadius',
  'borderStyle',
  'borderTop',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStyle',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'boxDecorationBreak',
  'boxShadow',
  'boxSizing',
  'breakAfter',
  'breakBefore',
  'breakInside',
  'brightness',
  'calc',
  'captionSide',
  'caretColor',
  'ch',
  'characterVariant',
  'clear',
  'clip',
  'clipPath',
  'cm',
  'color',
  'colorAdjust',
  'columnCount',
  'columnFill',
  'columnGap',
  'columnRule',
  'columnRuleColor',
  'columnRuleStyle',
  'columnRuleWidth',
  'columnSpan',
  'columnWidth',
  'columns',
  'content',
  'counterIncrement',
  'counterReset',
  'counterSet',
  'cursor',
  'deg',
  'direction',
  'display',
  'dpcm',
  'dpi',
  'dppx',
  'em',
  'ex',
  'filter',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexFlow',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'float',
  'font',
  'fontFamily',
  'fontFeatureSettings',
  'fontKerning',
  'fontLanguageOverride',
  'fontOpticalSizing',
  'fontSize',
  'fontSizeAdjust',
  'fontStretch',
  'fontStyle',
  'fontSynthesis',
  'fontVariant',
  'fontVariantAlternates',
  'fontVariantCaps',
  'fontVariantEastAsian',
  'fontVariantLigatures',
  'fontVariantNumeric',
  'fontVariantPosition',
  'fontWeight',
  'fr',
  'gap',
  'grad',
  'grid',
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnStart',
  'gridRow',
  'gridRowEnd',
  'gridRowStart',
  'gridTemplate',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'Hz',
  'hangingPunctuation',
  'hyphens',
  'imageOrientation',
  'imageRendering',
  'in',
  'inherit',
  'initial',
  'inlineSize',
  'inset',
  'insetBlock',
  'insetBlockEnd',
  'insetBlockStart',
  'insetInline',
  'insetInlineEnd',
  'insetInlineStart',
  'isolation',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'kHz',
  'left',
  'letterSpacing',
  'lineBreak',
  'lineHeight',
  'listStyle',
  'listStyleImage',
  'listStylePosition',
  'listStyleType',
  'margin',
  'marginBlock',
  'marginBlockEnd',
  'marginBlockStart',
  'marginBottom',
  'marginInline',
  'marginInlineEnd',
  'marginInlineStart',
  'marginLeft',
  'marginRight',
  'marginTop',
  'mask',
  'maskClip',
  'maskComposite',
  'maskImage',
  'maskMode',
  'maskOrigin',
  'maskPosition',
  'maskRepeat',
  'maskSize',
  'maskType',
  'maxHeight',
  'maxWidth',
  'minBlockSize',
  'minHeight',
  'minInlineSize',
  'minWidth',
  'mixBlendMode',
  'mm',
  'ms',
  'objectFit',
  'objectPosition',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'overflow',
  'overflowWrap',
  'overflowX',
  'overflowY',
  'padding',
  'paddingBlock',
  'paddingBlockEnd',
  'paddingBlockStart',
  'paddingBottom',
  'paddingInline',
  'paddingInlineEnd',
  'paddingInlineStart',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'pageBreakAfter',
  'pageBreakBefore',
  'pageBreakInside',
  'pc',
  'perspective',
  'perspectiveOrigin',
  'placeContent',
  'placeItems',
  'placeSelf',
  'pointerEvents',
  'position',
  'pt',
  'px',
  'Q',
  'quotes',
  'rad',
  'rem',
  'resize',
  'revert',
  'right',
  'rotate',
  'rowGap',
  's',
  'scrollBehavior',
  'scrollMargin',
  'scrollMarginBlock',
  'scrollMarginBlockEnd',
  'scrollMarginBlockStart',
  'scrollMarginBottom',
  'scrollMarginInline',
  'scrollMarginInlineEnd',
  'scrollMarginInlineStart',
  'scrollMarginLeft',
  'scrollMarginRight',
  'scrollMarginTop',
  'scrollPadding',
  'scrollPaddingBlock',
  'scrollPaddingBlockEnd',
  'scrollPaddingBlockStart',
  'scrollPaddingBottom',
  'scrollPaddingInline',
  'scrollPaddingInlineEnd',
  'scrollPaddingInlineStart',
  'scrollPaddingLeft',
  'scrollPaddingRight',
  'scrollPaddingTop',
  'scrollSnapAlign',
  'scrollSnapStop',
  'scrollSnapType',
  'scrollbarColor',
  'scrollbarWidth',
  'shapeImageThreshold',
  'shapeMargin',
  'shapeOutside',
  'tabSize',
  'tableLayout',
  'textAlign',
  'textAlignLast',
  'textCombineUpright',
  'textDecoration',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationStyle',
  'textDecorationThickness',
  'textEmphasis',
  'textEmphasisColor',
  'textEmphasisPosition',
  'textEmphasisStyle',
  'textIndent',
  'textJustify',
  'textOrientation',
  'textOverflow',
  'textRendering',
  'textShadow',
  'textTransform',
  'textUnderlineOffset',
  'textUnderlinePosition',
  'top',
  'touchAction',
  'transform',
  'transformBox',
  'transformOrigin',
  'transformStyle',
  'transition',
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
  'translate',
  'turn',
  'unicodeBidi',
  'unset',
  'verticalAlign',
  'vh',
  'visibility',
  'vmax',
  'vmin',
  'vw',
  'whiteSpace',
  'widows',
  'willChange',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
  'writingMode',
  'x',
  'zIndex'
]

const styleLabels = [
'Align Contents',
'Align Items',
'Align Self',
'Animation',
'Animation Delay',
'Animation Direction',
'Animation Duration',
'Animation Fill Mode',
'Animation Iteration Count',
'Animation Name',
'Animation Play State',
'Animation Timing Function',
'Backface Visibility',
'Background',
'Background Attachment',
'Background Blend Mode',
'Background Clip',
'Background Color',
'Background Image',
'Background Origin',
'Background Position',
'Background Repeat',
'Background Size',
'Block Size',
'Blur',
'Border',
'Border Block',
'Border Block Color',
'Border Block End',
'Border Block End Color',
'Border Block End Style',
'Border Block End Width',
'Border Block Start',
'Border Block Start Color',
'Border Block Start Style',
'Border Block Start Width',
'Border Block Style',
'Border Block Width',
'Border Bottom',
'Border Bottom Color',
'Border Bottom Left Radius',
'Border Bottom Right Radius',
'Border Bottom Style',
'Border Bottom Width',
'Border Collapse',
'Border Color',
'Border End End Radius',
'Border End Start Radius',
'Border Image',
'Border Image Outset',
'Border Image Repeat',
'Border Image Slice',
'Border Image Source',
'Border Image Width',
'Border Inline',
'Border Inline Color',
'Border Inline End',
'Border Inline End Color',
'Border Inline End Style',
'Border Inline End Width',
'Border Inline Start',
'Border Inline Start Color',
'Border Inline Start Style',
'Border Inline Start Width',
'Border Inline Style',
'Border Inline Width',
'Border Left',
'Border Left Color',
'Border Left Style',
'Border Left Width',
'Border Radius',
'Border Right',
'Border Right Color',
'Border Right Style',
'Border Right Width',
'Border Spacing',
'Border Start End Radius',
'Border Start Start Radius',
'Border Style',
'Border Top',
'Border Top Color',
'Border Top Left Radius',
'Border Top Right Radius',
'Border Top Style',
'Border Top Width',
'Border Width',
'Bottom',
'Box Decoration Break',
'Box Shadow',
'Box Sizing',
'Break After',
'Break Before',
'Break Inside',
'Brightness',
'Calc',
'Caption Side',
'Caret Color',
'Ch',
'Character Variant',
'Clear',
'Clip',
'Clip Path',
'Cm',
'Color',
'Color Adjust',
'Column Count',
'Column Fill',
'Column Gap',
'Column Rule',
'Column Rule Color',
'Column Rule Style',
'Column Rule Width',
'Column Span',
'Column Width',
'Columns',
'Content',
'Counter Increment',
'Counter Reset',
'Counter Set',
'Cursor',
'Deg',
'Direction',
'Display',
'Dpcm',
'Dpi',
'Dppx',
'Em',
'Ex',
'Filter',
'Flex',
'Flex Basis',
'Flex Direction',
'Flex Flow',
'Flex Grow',
'Flex Shrink',
'Flex Wrap',
'Float',
'Font',
'Font Family',
'Font Feature Settings',
'Font Kerning',
'Font Language Override',
'Font Optical Sizing',
'Font Size',
'Font Size Adjust',
'Font Stretch',
'Font Style',
'Font Synthesis',
'Font Variant',
'Font Variant Alternates',
'Font Variant Caps',
'Font Variant East Asian',
'Font Variant Ligatures',
'Font Variant Numeric',
'Font Variant Position',
'Font Weight',
'Fr',
'Gap',
'Grad',
'Grid',
'Grid Area',
'Grid Auto Columns',
'Grid Auto Flow',
'Grid Auto Rows',
'Grid Column',
'Grid Column End',
'Grid Column Start',
'Grid Row',
'Grid Row End',
'Grid Row Start',
'Grid Template',
'Grid Template Areas',
'Grid Template Columns',
'Grid Template Rows',
'Hz',
'Hanging Punctuation',
'Hyphens',
'Image Orientation',
'Image Rendering',
'In',
'Inherit',
'Initial',
'Inline Size',
'Inset',
'Inset Block',
'Inset Block End',
'Inset Block Start',
'Inset Inline',
'Inset Inline End',
'Inset Inline Start',
'Isolation',
'Justify Content',
'Justify Items',
'Justify Self',
'Khz',
'Left',
'Letter Spacing',
'Line Break',
'Line Height',
'List Style',
'List Style Image',
'List Style Position',
'List Style Type',
'Margin',
'Margin Block',
'Margin Block End',
'Margin Block Start',
'Margin Bottom',
'Margin Inline',
'Margin Inline End',
'Margin Inline Start',
'Margin Left',
'Margin Right',
'Margin Top',
'Mask',
'Mask Clip',
'Mask Composite',
'Mask Image',
'Mask Mode',
'Mask Origin',
'Mask Position',
'Mask Repeat',
'Mask Size',
'Mask Type',
'Max Height',
'Max Width',
'Min Block Size',
'Min Height',
'Min Inline Size',
'Min Width',
'Mix Blend Mode',
'Mm',
'Ms',
'Object Fit',
'Object Position',
'Opacity',
'Order',
'Orphans',
'Outline',
'Outline Color',
'Outline Offset',
'Outline Style',
'Outline Width',
'Overflow',
'Overflow Wrap',
'Overflow X',
'Overflow Y',
'Padding',
'Padding Block',
'Padding Block End',
'Padding Block Start',
'Padding Bottom',
'Padding Inline',
'Padding Inline End',
'Padding Inline Start',
'Padding Left',
'Padding Right',
'Padding Top',
'Page Break After',
'Page Break Before',
'Page Break Inside',
'Pc',
'Perspective',
'Perspective Origin',
'Place Content',
'Place Items',
'Place Self',
'Pointer Events',
'Position',
'Pt',
'Px',
'Q',
'Quotes',
'Rad',
'Rem',
'Resize',
'Revert',
'Right',
'Rotate',
'Row Gap',
'S',
'Scroll Behavior',
'Scroll Margin',
'Scroll Margin Block',
'Scroll Margin Block End',
'Scroll Margin Block Start',
'Scroll Margin Bottom',
'Scroll Margin Inline',
'Scroll Margin Inline End',
'Scroll Margin Inline Start',
'Scroll Margin Left',
'Scroll Margin Right',
'Scroll Margin Top',
'Scroll Padding',
'Scroll Padding Block',
'Scroll Padding Block End',
'Scroll Padding Block Start',
'Scroll Padding Bottom',
'Scroll Padding Inline',
'Scroll Padding Inline End',
'Scroll Padding Inline Start',
'Scroll Padding Left',
'Scroll Padding Right',
'Scroll Padding Top',
'Scroll Snap Align',
'Scroll Snap Stop',
'Scroll Snap Type',
'Scrollbar Color',
'Scrollbar Width',
'Shape Image Threshold',
'Shape Margin',
'Shape Outside',
'Tab Size',
'Table Layout',
'Text Align',
'Text Align Last',
'Text Combine Upright',
'Text Decoration',
'Text Decoration Color',
'Text Decoration Line',
'Text Decoration Style',
'Text Decoration Thickness',
'Text Emphasis',
'Text Emphasis Color',
'Text Emphasis Position',
'Text Emphasis Style',
'Text Indent',
'Text Justify',
'Text Orientation',
'Text Overflow',
'Text Rendering',
'Text Shadow',
'Text Transform',
'Text Underline Offset',
'Text Underline Position',
'Top',
'Touch Action',
'Transform',
'Transform Box',
'Transform Origin',
'Transform Style',
'Transition',
'Transition Delay',
'Transition Duration',
'Transition Property',
'Transition Timing Function',
'Translate',
'Turn',
'Unicode Bidi',
'Unset',
'Vertical Align',
'Vh',
'Visibility',
'Vmax',
'Vmin',
'Vw',
'White Space',
'Widows',
'Will Change',
'Word Break',
'Word Spacing',
'Word Wrap',
'Writing Mode',
'X',
'Z Index'
]

let styleOptions = {}

styleKeys.forEach((key,index) => {
  styleOptions[key] = styleLabels[index]
})

export default styleOptions;