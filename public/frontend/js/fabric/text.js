_txtSelectionFlag=0;
proFabric.text = {
	parent : proFabric,
    canvas: proFabric.get.canvas(),
	/*add: function(obj){
		//console.log(obj);
        this.parent();
        var text = new fabric.IText(obj.text, {
            left: 10,
            top: 10,
            backgroundColor: 'transparent',
            textAlign : 'center' ,
            class: 'text',
            fontSize: 16
        });
        //console.log(text);
        if(obj) {
            if (obj.fontFamily) {
                text.fontFamily = obj.fontFamily;
            }
            if (obj.color) {
                text.fill = obj.color;
            }
            if(obj.fontSize)
            {
                text.fontSize = obj.fontSize;
            }
        }
        this.parent().canvas.add(text);
        this.parent().canvas.renderAll();
	},*/
    updateUI:function(Object){
        console.log("va");
        $("#addText").val("");
        $("#addText").val(Object.text);
        $("#fontSize").val(Object.fontSize);
        console.log('..........................'+Object.fill);
        $('#picker').colpickSetColor(Object.fill);
        //$( "#FontSize" ).val(Object.fontsize());
        //$('#FontSize [value='"++"']").attr('selected', 'selected');
        //$('#FontSize option[value="'+Object.fontSize+'"]').attr('selected', 'selected');
        //$('#FontFamily option[value="'+Object.fontFamily+'"]').attr('selected', 'selected');
        $( "#FontSize" ).val(Object.fontSize);
        //$(".browser-default").css('setBackground',object.fontFamily);
        $( "#FontFamily" ).val(Object.fontFamily);
        _txtSelectionFlag = 1;
        if(Object.fontWeight == 'bold')
        {
            $('#bold').css("background-color", "#337ab7");
            $('#bold').css("border-color", "darkgrey");
        }
        else
        {
            $('#bold').css("background-color", "white");
            $('#bold').css("border-color", "#8c8c8c");
        }
        if(Object.fontStyle == 'italic')
        {
            $('#italic').css("background-color", "#337ab7");
            $('#italic').css("border-color", "darkgrey");
        }
        else
        {
            $('#italic').css("background-color", "white");
            $('#italic').css("border-color", "#8c8c8c");
        }
        if(Object.textDecoration == 'underline')
        {
            $('#underline').css("background-color", "#337ab7");
            $('#underline').css("border-color", "darkgrey");
        }
        else
        {
            $('#underline').css("background-color", "white");
            $('#underline').css("border-color", "#8c8c8c");
        }
        if(Object.textAlign=='left')
        {
            $('#left').css("background-color", "#337ab7");
            $('#left').css("border-color", "darkgrey");
        }
        else
        {
            $('#right').css("background-color", "white");
            $('#right').css("border-color", "#8c8c8c");
            $('#center').css("background-color", "white");
            $('#center').css("border-color", "#8c8c8c");
            $('#justify').css("background-color", "white");
            $('#justify').css("border-color", "#8c8c8c");

        }
        if(Object.textAlign=='center')
        {
            $('#center').css("background-color", "#337ab7");
            $('#center').css("border-color", "darkgrey");
        }
        else
        {
            $('#left').css("background-color", "white");
            $('#left').css("border-color", "#8c8c8c");
            $('#right').css("background-color", "white");
            $('#right').css("border-color", "#8c8c8c");
            $('#justify').css("background-color", "white");
            $('#justify').css("border-color", "#8c8c8c");
        }
        if(Object.textAlign=='right')
        {
            $('#right').css("background-color", "#337ab7");
            $('#right').css("border-color", "darkgrey");
        }
        else
        {
            $('#left').css("background-color", "white");
            $('#left').css("border-color", "#8c8c8c");
            $('#center').css("background-color", "white");
            $('#center').css("border-color", "#8c8c8c");
            $('#justify').css("background-color", "white");
            $('#justify').css("border-color", "#8c8c8c");
        }
        if(Object.textAlign=='justify')
        {
        console.log("JUSTIFY");
            $('#justify').css("background-color", "#337ab7");
            $('#justify').css("border-color", "darkgrey");
        }
        else
        {
            $('#left').css("background-color", "white");
            $('#left').css("border-color", "#8c8c8c");
            $('#right').css("background-color", "white");
            $('#right').css("border-color", "#8c8c8c");
            $('#center').css("background-color", "white");
            $('#center').css("border-color", "#8c8c8c");
        }
        //console.log(Object.text);
        //console.log(Object.fill);
    },
    SetFontSize: function(size){
        console.log(size);
        var obj = this.parent().canvas.getActiveObject();
        if(obj) {
            obj.set({
                fontSize: size
            });
            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        obj._objects[i].set({
                            fontSize: size
                        });
                    }
                }
                this.parent().canvas.renderAll();
            }
        }
    },
    SetTextColor: function(color){
        var obj = this.parent().canvas.getActiveObject();
        if(obj&& obj.class=="text") {
            obj.set({
                fill: color
            });
            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                for (var i = 0; i < obj._objects.length; i++) {
                    obj._objects[i].set({
                        fill: color
                    });
                }
                this.parent().canvas.renderAll();
            }
        }
    },
    SetFontFamily: function(font)
    {
        var obj = this.parent().canvas.getActiveObject();
        if(obj && obj.class=="text") {
            obj.fontFamily = font;
            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        obj._objects[i].fontFamily = font;
                    }
                }
                this.parent().canvas.renderAll();
            }
        }
    },
    SetText: function(txt){
        //alert('txt'+txt);
        var self = this;
        var obj = self.canvas.getActiveObject();
        if(obj && obj.class=="text") {
            obj.text = txt;
            self.canvas.renderAll();
        }
        else
        {
            obj = self.canvas.getActiveGroup();
            if(obj) {
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        obj._objects[i].text = txt;
                    }
                }
                self.canvas.renderAll();
            }
        }
    },
    SetBold: function(){
        var self = this;
        var obj = self.canvas.getActiveObject();
        if(obj && obj.class=="text") {
            if(obj.fontWeight=="bold"){
                obj.set({
                    fontWeight: 'normal'
                });
            }
            else{
                obj.set({
                    fontWeight: 'bold'
                });
            }

            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        if(obj._objects[i].fontWeight=="bold") {
                            obj._objects[i].set({
                                fontWeight: 'normal'
                            });
                        }
                        else{
                            obj._objects[i].set({
                                fontWeight: 'bold'
                            });
                        }
                    }
                }
                this.parent().canvas.renderAll();
            }
        }
    },

    SetItalic: function(){
        var obj = this.parent().canvas.getActiveObject();
        if(obj && obj.class=="text") {
            if(obj.fontStyle=="italic") {
                obj.set({
                    fontStyle: 'normal'
                });
            }
            else
            {
                obj.set({
                    fontStyle: 'italic'
                });
            }
            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        if(obj._objects[i].fontStyle=="italic") {
                            obj._objects[i].set({
                                fontStyle: 'normal'
                            });
                        }
                        else{
                            obj._objects[i].set({
                                fontStyle: 'italic'
                            });
                        }
                    }
                }
                this.parent().canvas.renderAll();
            }
        }
    },

    SetUnderline: function(){
        var obj = this.parent().canvas.getActiveObject();
        if(obj && obj.class=="text") {
            if(obj.textDecoration=="underline") {
                obj.set({
                    textDecoration: 'none'
                });
            }
            else{
                obj.set({
                    textDecoration: 'underline'
                });
            }
            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        if(obj.textDecoration=="underline") {
                            obj._objects[i].set({
                                textDecoration: 'none'
                            });
                        }
                        else{
                            obj._objects[i].set({
                                textDecoration: 'underline'
                            });
                        }
                    }
                }
                this.parent().canvas.renderAll();
            }
        }
    },
    textAlign: function(type){
        var obj = this.parent().canvas.getActiveObject();
        if(obj && obj.class=="text") {
            console.log("here inside 1L");
            obj.set({
                textAlign: type
            });
            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                console.log("here inside 1L");
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        obj._objects[i].set({
                            textAlign: type
                        });
                    }
                }
                this.parent().canvas.renderAll();
            }
        }
    },
    bringTextToFront: function(){
        var obj = this.parent().canvas.getActiveObject();
        if(obj && obj.class=="text") {
            console.log("here inside 1BTF");
            this.parent().canvas.sendBackwards(obj);
            this.parent().canvas.sendToBack(obj);
            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                console.log("here inside 1BTF");
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        this.parent().canvas.sendBackwards(obj._objects[i]);
                        this.parent().canvas.sendToBack(obj._objects[i]);
                    }
                }
                this.parent().canvas.renderAll();
            }
        }
    },
    bringTextToBack: function(){
        var obj = this.parent().canvas.getActiveObject();
        if(obj && obj.class=="text") {
            console.log("here inside 1BTF");
            this.parent().canvas.bringForward(obj);
            this.parent().canvas.bringToFront(obj);
            this.parent().canvas.renderAll();
        }
        else
        {
            obj = this.parent().canvas.getActiveGroup();
            if(obj) {
                console.log("here inside 1BTF");
                for (var i = 0; i < obj._objects.length; i++) {
                    if(obj._objects[i].class=="text") {
                        this.parent().canvas.bringForward(obj._objects[i]);
                        this.parent().canvas.bringToFront(obj._objects[i]);
                    }
                }
                this.parent().canvas.renderAll();
            }
        }
    },
    setGroupTextColor: function(sets){
        var self = this;
        /*var arr = [];
        var i= 1,j=1;
            $.each(sets, function (index, obj) {
                if (i==rowNum) {
                    $.each(obj, function (index, obj1) {
                        console.log(obj1.color + " :: " + 'C' + i + j);
                        ++j;
                        arr.push(obj1.color);
                    });
                }
            j = 1;
            ++i;
        });
        i=0;
        console.log(arr.length);
        self.canvas.forEachObject(function(obj) {
            if(obj.class=="text")
            {
                console.log(i,arr[i]);
                obj.set({
                    fill: arr[i++]
                });
            }
        });*/
        $.each(sets, function (index, set) {
            self.canvas.forEachObject(function(obj) {
                if(obj.id==set.id)
                {
                    obj.set({
                        fill: set.color,
                        stroke:set.color,
                        color:set.color,
                        selectable:false
                    });
                }
            });
        });
        self.canvas.renderAll();
    },
    add: function(_text,_options){
        var self = this;
        var text = new fabric.Textbox(_text || 'Enter Your Text Here', {
            left: (_options && _options.left) || self.parent.get.width() / 2,
            top: (_options && _options.top) || self.parent.get.height() / 4,
            width: (_options && _options.width) || 200,
            height: (_options && _options.height) || 200,
            textAlign : 'left',
            class: 'text',
            fill: '#2323FF',
            fontSize: 16,
            id: (_options && _options.id) || self.parent.get.guid(),
            opacity: (_options && _options.opacity) || 1,
            scaleX: (_options && _options.scaleX) || 1,
            scaleY: (_options && _options.scaleY) || 1,
            target: (_options && _options.target) || false,
            selectable: (_options && _options.selectable) || true,
            hasControls		  : (_options && _options.opacity) || true,
            hasRotatingPoint  : (_options && _options.hasRotatingPoint) || true,
            lockMovementX     : (_options && _options.lockMovementX) || false,
            lockMovementY	  : (_options && _options.lockMovementY) || false,
            lockRotation 	  : (_options && _options.lockRotation) || false,
            lockScalingX 	  : (_options && _options.lockScalingX) || false,
            lockScalingY 	  : (_options && _options.lockScalingY) || false
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
        if(obj && obj.class !== 'text') return;

        obj.set(options);
        obj.setCoords();
        this.canvas.renderAll();
    }
};