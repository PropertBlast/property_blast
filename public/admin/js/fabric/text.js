_txtSelectionFlag=0;
proFabric.text = {
	parent : proFabric,
    canvas: proFabric.get.canvas(),
    updateUI:function(object){
        if(!object)return;
        $("#editor-textarea").val(object.text);
        $('#editor-textColor').css('background-color', object.fill);
        $("#editor-fontSize").val(object.fontSize);
        $('#editor-fontFamily').children('option').filter(function(){return $(this).val()==object.fontFamily}).prop('selected',true).change();
        $('div#editor-textAlign').find('button[data-type='+object.textAlign+']').addClass('btn-primary').siblings().removeClass('btn-primary');
    },
    add: function(_text,_options){
        var self = this;
        var text = new fabric.Textbox(_text || 'Enter Your Text Here', {
            textAlign           : 'left',
            class               : 'text',
            fontSize            : 16,
            left                : (_options && _options.left) || self.parent.get.width() / 2,
            top                 : (_options && _options.top) || self.parent.get.height() / 4,
            width               : (_options && _options.width) || 200,
            height              : (_options && _options.height) || 200,
            id                  : (_options && _options.id) || self.parent.get.guid(),
            opacity             : (_options && _options.opacity) || 1,
            scaleX              : (_options && _options.scaleX) || 1,
            scaleY              : (_options && _options.scaleY) || 1,
            target              : (_options && _options.target) || false,
            selectable          : (_options && _options.selectable) || true,
            hasControls	        : (_options && _options.opacity) || true,
            hasRotatingPoint    : (_options && _options.hasRotatingPoint) || true,
            lockMovementX       : (_options && _options.lockMovementX) || false,
            lockMovementY	    : (_options && _options.lockMovementY) || false,
            lockRotation 	    : (_options && _options.lockRotation) || false,
            lockScalingX 	    : (_options && _options.lockScalingX) || false,
            lockScalingY 	    : (_options && _options.lockScalingY) || false
        });
        text.setCoords();
        self.canvas.add(text);
        self.canvas.setActiveObject(text);
        self.canvas.renderAll();
    },
    get: function(property) {
        var obj = this.canvas.getActiveObject();
        if(obj && obj.class !== 'text') return;
        return obj.get(property);
    },
    set: function(options) {
        var obj = this.canvas.getActiveObject();
        if(!obj || obj.class !== 'text') return;
        obj.set(options);
        obj.setCoords();
        this.canvas.renderAll();
    }
};