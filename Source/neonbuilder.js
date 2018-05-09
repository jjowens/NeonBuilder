var neonbuilderObj = (function NeonBuilder() {
    var _elementID = undefined;
    var _elementObj = undefined;
    var _listOfTextShadows = [];
    var _textShadowStyle = '';

    var _neontimer = undefined;

    function CreateBuilder(elementID) {
        _elementID = elementID;
        _elementObj = document.getElementById(elementID);
    }

    function ApplyTextShadows() {
        var tempList = [];

        // CREATE A TEMP LIST OF TEXTSHADOW STYLES
        for (var i=0; i < _listOfTextShadows.length; i++) {
            var textShadowObj = _listOfTextShadows[i];
            tempList.push(textShadowObj.left + "px " + textShadowObj.top + "px " + textShadowObj.blur + "px " + textShadowObj.colour);
        }

        // FLATTEN LIST OF TEXTSHADOWS TO A SINGLE LINE
        _textShadowStyle = tempList.join();

        if (_elementObj) {
            _elementObj.style.textShadow = _textShadowStyle;
        }
    }

    function AddTextShadow(left, top, blur, colour) {
        var textShadow = { left: left, top: top, blur: blur, colour: colour }

        _listOfTextShadows.push(textShadow);

        ApplyTextShadows();
    }

    function InsertTextShadow(left, top, blur, colour, idx) {
        var textShadow;

        textShadow.left = left;
        textShadow.top = top;
        textShadow.blur = blur;
        textShadow.colour = colour;

        // INSERT TEXTSHADOW AT A PARTICULAR INDEX OF ARRAY
        _listOfTextShadows.splice(idx, 0, textShadow);

        ApplyTextShadows();
    }

    function UpdateTextShadow(left, top, blur, colour, idx) {
        var textShadow = { left: left, top: top, blur: blur, colour: colour }

        // INSERT TEXTSHADOW AT A PARTICULAR INDEX OF ARRAY AND REMOVE THE OLD TEXTSHADOW
        _listOfTextShadows.splice(idx, 1, textShadow);

        ApplyTextShadows();
    }

    function UpdateTextShadowPosition(left, top, idx) {
        var textShadow = _listOfTextShadows[idx];

        textShadow.left = left;
        textShadow.top = top;

        // INSERT TEXTSHADOW AT A PARTICULAR INDEX OF ARRAY AND REMOVE THE OLD TEXTSHADOW
        _listOfTextShadows.splice(idx, 1, textShadow);

        ApplyTextShadows();
    }

    function UpdateTextShadowBlur(blur, idx) {
        var textShadow = _listOfTextShadows[idx];

        textShadow.blur = blur;

        // INSERT TEXTSHADOW AT A PARTICULAR INDEX OF ARRAY AND REMOVE THE OLD TEXTSHADOW
        _listOfTextShadows.splice(idx, 1, textShadow);

        ApplyTextShadows();
    }

    function UpdateTextShadowColour(colour, idx) {
        var textShadow = _listOfTextShadows[idx];

        textShadow.colour = colour;

        // INSERT TEXTSHADOW AT A PARTICULAR INDEX OF ARRAY AND REMOVE THE OLD TEXTSHADOW
        _listOfTextShadows.splice(idx, 1, textShadow);

        ApplyTextShadows();
    }

    function DeleteTextShadowByIndex(idx) {
        // DELETE ELEMENT FROM ARRAY BY INDEX
        _listOfTextShadows.splice(idx, 1);

        ApplyTextShadows();
    }

    return {
        CreateBuilder: CreateBuilder,
        ApplyTextShadows: ApplyTextShadows,
        AddTextShadow: AddTextShadow,
        InsertTextShadow: InsertTextShadow,
        DeleteTextShadowByIndex: DeleteTextShadowByIndex,
        UpdateTextShadow: UpdateTextShadow,
        UpdateTextShadowPosition: UpdateTextShadowPosition,
        UpdateTextShadowBlur: UpdateTextShadowBlur,
        UpdateTextShadowColour: UpdateTextShadowColour,
    }
});