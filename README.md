# NeonBuilder

This library was spun off my other javascript library, BrokenNeon.js.

# What does it do?
The library allows you to create textshadows for a text element e.g. Headers. Everytime you add or update a textshadow, it is kept inside an array. Once the array is changed, it automatically converts the array of textshadows to a single line of textshadow CSS style rule.

You can update the position (top/left), blurring value, colour of any textshadow in the array. It will automatically update your HTML element's textshadow CSS rule.

# Available Functions

CreateBuilder - Pass in the HTML element ID to apply the textshadow css rule. Best used with a header or a paragraph.
ApplyTextShadows - ApplyTextShadows. You can manually call the function to appply the array of textshadows to your HTML element.
AddTextShadow - Adds a textshadow to the array. Pass in left, top, blurring value, colour as parameters. It will automatically apply the new textshadow. NB: The colour value can be a name or a hex value e.g. red or #FF0000
InsertTextShadow - It inserts a textshadow to the array at a particular index of the array. Pass in left, top, blurring value, colour, index number as parameters. It will automatically apply the new textshadow. NB: The colour value can be a name or a hex value e.g. red or #FF0000
DeleteTextShadowByIndex - It deletes the textshadow from the array by index number. Useful for animating textshadows.
UpdateTextShadow - It updates an existing textshadow in the array at a particular index. Pass in left, top, blurring value, colour, index number as parameters. It will automatically apply the new textshadow. NB: The colour value can be a name or a hex value e.g. red or #FF0000
UpdateTextShadowPosition - It updates the position of an existing textshadow in the array at a particular index. May be useful for animating textshdows. Pass in left, top, index number as parameters. It will automatically apply the new textshadow.
UpdateTextShadowBlur - It updates the blurring value of an existing textshadow in the array at a particular index. May be useful for animating textshdows. Pass in blurring value, index number as parameters. It will automatically apply the new textshadow.
UpdateTextShadowColour - It updates an existing textshadow in the array at a particular index. May be useful for animating textshdows. Pass in colour, index number as parameters. It will automatically apply the new textshadow. NB: The colour value can be a name or a hex value e.g. red or #FF0000
GetListOfTextShadows - It returns the array of your current textshadows. Useful for debugging.
DumpListOfTextShadowsOnConsole - It dumps the array of your current textshadows into your browser console. It uses the Console.table() command. Check that your browser supports it.
Cycle - An advanced method. It will move the first textshadow to the end of the array. This means subsequent textshadows will move up the array i.e. second textshadow becomes first, third textshadow becomes second etc. It's timer based so you can stop it at any time.

# Cycle

This is an advanced function of the library. It will move the first textshadow to the end of the array. This means subsequent textshadows will then move up the array and repeat i.e. second textshadow becomes first, third textshadow becomes second etc. It's timer based so you can stop it at any time.

Before it starts cycling, it will make an isolated copy of the textshadow array. This means it will update the copy of the array every time it cycles. The original/master array is left untouched.

# Cycle Functions

Start - Pass in milliseconds to set the frequency of cycling through the textshadows. It will create a timer to call a function to move the first text shadow to end of array every nth milliseconds. Useful for animating textshadows.
Stop - It stops the timer.



