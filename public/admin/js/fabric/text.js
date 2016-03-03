_txtSelectionFlag=0;
proFabric.text = {
	parent : proFabric,
    canvas: proFabric.get.canvas(),
    updateUI:function(object){
        if(!object){
            $("#editor-textarea").val('');
            return;
        }
        if (object.bullet){
            $("#editor-textarea").val(object.bulletText);
            $('body').find("button#editor-textList").addClass('btn-primary');
        }
        else{
            $("#editor-textarea").val(object.text);
            $('body').find("button#editor-textList").removeClass('btn-primary');
        }
        $('#coler-picker[data-type=text]').next('.evo-pointer').css('backgroundColor', object.fill);
        $("#editor-fontSize").val(object.fontSize);
        $('#editor-fontFamily').children('option').filter(function(){return $(this).val()==object.fontFamily}).prop('selected',true).change();
        $('div#editor-textAlign').find('button[data-type='+object.textAlign+']').addClass('btn-primary').siblings().removeClass('btn-primary');
        $('body').find('button#editor-textAssign').removeClass('btn-primary');
        $('body').find('button#editor-textAssign[data-id='+object.id+']').addClass('btn-primary');
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
            lockScalingY 	    : (_options && _options.lockScalingY) || false,
            editable            : (_options && _options.editable ) || false
        });
        text.setCoords();
        self.canvas.add(text);
        self.parent.savestate('add', text.toJSON(['id','class']), text.toJSON(['id','class']));
        self.canvas.setActiveObject(text);
        self.canvas.renderAll();
    },
    getTextByID: function(_id) {
        var _text = '';
        this.canvas.forEachObject(function(object){
            if(object.id == _id){
                if(typeof object.bullet !== 'undefined' && object.bullet){
                    _text = object.bulletText;
                    return;
                }
                _text = object.text;
                return;
            }
        });
        return _text;
    },
    get: function(property) {
        var obj = this.canvas.getActiveObject();
        if(obj && obj.class !== 'text') return;
        return obj.get(property);
    },
    set: function(options) {
        var obj = this.canvas.getActiveObject();
        if(!obj || obj.class !== 'text') return;
        var before = obj.toJSON(['id','class']);
        obj.set(options);
        obj.setCoords();
        this.parent.savestate('modified',before,obj.toJSON(['id','class']));
        this.canvas.renderAll();
    },
    assign: function(name, alreadyAssigned) {
        var obj = this.canvas.getActiveObject();
        if(!obj || obj.class !== 'text') return;
        if(!alreadyAssigned){
            obj.set({
                linkName : name
            });
        }
        else{
            obj.set({
                linkName : ''
            });
        }
        obj.setCoords();
        this.canvas.renderAll();
    },
    checkID: function(_id) {
        var flag = false;
        this.canvas.forEachObject(function(object){
            if(object.id == _id){
                flag = true;
            }
        });
        return flag;
    },
    list: function() {
        var obj = this.canvas.getActiveObject();
        if(!obj || obj.class !== 'text') return;
        //
        obj.setCoords();
        this.canvas.renderAll();
    },
    bullet: function(converted) {
        var obj = this.canvas.getActiveObject();
        if(!obj || obj.class !== 'text') return;
        if(converted){
            obj.bullet = true;
            obj.bulletText = obj.text;
            _text = '';
            $.each(obj.bulletText.split('\n'), function(index, val) {
                if (index!=0) 
                    _text += '\n';
                _text += '\u2022 '+val;
            });

            obj.set({
                text : _text
            });
        }
        else{
            obj.bullet = false;
            _text = obj.bulletText;
            obj.set({
                text : _text
            });
        }
        this.canvas.renderAll();
    }
};