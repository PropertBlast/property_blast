proFabric;
var _pickerFlag = 0;
var _selectionflag=0;
var _img_num=1;
var undo_redo_tmp_obj=[],canvas_state = new Array(), current_state=0;
var proFabric = new function(){
	var that = this; // refrence for proFabric
	this.canvasWidth = 576;
	this.canvasHeight = 864;
    var Top = this.canvasHeight;
    var Left = this.canvasWidth;
	this.zoom = 0, this.defaultZoom = 0;
    this.canvas = new fabric.Canvas('myCanvas',{backgroundColor:'#fff'});
    this.canvas.setWidth(this.canvasWidth);
    this.canvas.setHeight(this.canvasHeight);
    this.canvas.selection = false;
    var BaseURL = $('#base_url').val();
        fabric.Image.fromURL(BaseURL+'abc.jpg', function(img) {
            img.class = 'image';
            img.src = BaseURL+'abc.jpg';
            img.orignalSource = BaseURL+'abc.jpg';
            img.id = "test";
            img.originX = "center";
            img.originY = "center";
            img.top = Top-102;
            img.left = Left-510;
            img.height = 200;
            img.width = 200;
            img.color = "#0000ff";
            img.lockMovementX = true;
            img.lockMovementY = true;
            img.lockRotation = true;
        that.canvas.add(img);
    });
    this.canvas.renderAll();
    
    fabric.Object.prototype.toObject = (function (toObject) {
        return function () {
            return fabric.util.object.extend(toObject.call(this), {
                id: this.id,
                class: this.class,
                original_scaleX: this.original_scaleX,
                original_scaleY: this.original_scaleY,
                original_left: this.original_left,
                original_top: this.original_top
            });
        };
    })(fabric.Object.prototype.toObject);

	this.canvas.on('mouse:down', function(o){
        if(_pickerFlag==1) {
            var ctx = that.canvas.getContext("2d");
            var mouse = that.canvas.getPointer(o.e);
            var x = parseInt(mouse.x);
            var y = parseInt(mouse.y);
            var rgb_val = px[0] + ':' + px[1] + ':' + px[2] + ':' + px[3];
            _pickerFlag = 0;
            var rgba = 'rgba(' + px[0] + ',' + px[1] + ',' + px[2] + ',' + px[3] + ')';
            var hex = proFabric.rgb2hex( rgba );
            $('#picker').colpickSetColor(hex);
        }
    });
	this.canvas.on('mouse:move', function(o){});
	this.canvas.on('mouse:up', function(o){
        var object = that.canvas.getActiveObject();
        if(!object) {
            that.unselectSelected();
            that.text.disableTextOpts();
            that.getcolorObjects();
            that.selectfalseColor();
            that.disableImgOpts();
        }
    });
	this.canvas.on('selection:cleared', function(o){});
	this.canvas.on('selection:created', function(o){});
	this.canvas.on('object:added', function(o){});
	this.canvas.on('object:remove', function(o){});
	this.canvas.on('object:modified', function(o){

    });
	this.canvas.on('object:rotating', function(o){});
	this.canvas.on('object:scaling', function(o){});
	this.canvas.on('object:moving', function(o){});
	this.canvas.on('object:selected', function(o){
		var object = o.target;
        if(object.class=="text") {
            that.text.updateUI(object);
            that.text.enableTextOpts();
			that.disableImgOpts();
        }
		else if(object.class){
			proFabric.image.imageSelected(object);
		}
        else if(object.class=='shape'){
			that.disableImgOpts();
            that.text.disableTextOpts();
            proFabric.shapes.shapeSelected(object);
        }
		var dataId=object.class;
		$("#tabs li" ).each(function() {
			if($(this).data('id')==object.class){
				$(this).trigger('click');
			}
		});
		if(object.class=="text"){

		}
		else if(object.class=='image'){
            that.text.disableTextOpts();
			that.enableImgOpts();
            $("#settingOpt").show();
            $("#imageOpt").show();
		}
		else if(object.class=='shape'){
			proFabric.shapes.shapeSelected(object);
		}
	});
    this.canvas.on('mouse:move', function(e) {

    });

	this.get = {
		canvas : function(){
			return that.canvas;
		},
		width : function(){
			return that.canvasWidth;
		},
		height : function(){
			return that.canvasHeight;
		},
		currentObject : function(){
			return that.canvas.getActiveObject();
		},
		currentGroup : function(){
			return that.canvas.getActiveGroup();
		},
		zoom : function(){
			return that.zoom;
		},
		guid : function() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		},
		defaultZoom : function(){
			return that.defaultZoom;
		},
		inchesToPixel : function(inc){
			return inc * 96;
        }
	};
	this.set = {
		width : function(w){
			that.canvasWidth = w;
		},
		height : function(h){
			that.canvasHeight = h;
		},
		zoom : function(z){
			that.zoom = z;
		},
		defaultZoom : function(z){
			that.defaultZoom = z;
		},
		bringFront : function(){
			var obj = that.get.currentObject();
			if(!obj)return;
			that.canvas.bringForward(obj);
			that.canvas.renderAll();
		},
		sendBack : function(){
			var obj = that.get.currentObject();
			if(!obj)return;
			that.canvas.sendBackwards(obj);
			that.canvas.renderAll();
		},
		lock : function(){
			var obj = that.get.currentObject();
			if(!obj)return;
            if(obj.class=='text')
            {
                if(obj.lockMovementX==false) {
                    obj.set({
                        lockMovementX: true,
                        lockMovementY: true,
                        lockRotation: true,
                        lockScalingX: true,
                        lockScalingY: true
                    });
                    $("#text_lock").removeClass('fa fa-lock');
                    $("#text_lock").addClass('fa fa-unlock');
                }
                else
                {
                    obj.set({
                        lockMovementX     : false,
                        lockMovementY	  : false,
                        lockRotation 	  : false,
                        lockScalingX 	  : false,
                        lockScalingY 	  : false
                    });
                    $("#text_lock").removeClass('fa fa-unlock');
                    $("#text_lock").addClass('fa fa-lock');
                }
                that.canvas.renderAll();
            }
            else {
                if (obj.lockMovementX == false) {
                    obj.set({
                        lockMovementX: true,
                        lockMovementY: true,
                        lockRotation: true,
                        lockScalingX: true,
                        lockScalingY: true
                    });
                }
                else {
                    obj.set({
                        lockMovementX: false,
                        lockMovementY: false,
                        lockRotation: false,
                        lockScalingX: false,
                        lockScalingY: false
                    });
                }
                that.canvas.renderAll();
            }
		},
		unlock : function(){
			var obj = that.get.currentObject();
			if(!obj)return;
			obj.set({
				lockMovementX     : false,
				lockMovementY	  : false,
				lockRotation 	  : false,
				lockScalingX 	  : false,
				lockScalingY 	  : false
			});
			that.canvas.renderAll();
		},
        ID : function(id){
            if(id) {
                var obj = that.canvas.getActiveObject();
                if (obj&&obj.class=='text') {
                    if(!obj.btnID)
                    {
                        obj.btnID = id;
                        $(id).addClass('ui-state-active');
                        $(id).addClass('ui-widget-content');
                        alert("Assigning ID");
                    }
                    else if(id == obj.btnID)
                    {
                        alert('FLAG : '+_txtSelectionFlag);
                        if(_selectionflag==1&&_txtSelectionFlag==1) {
                            obj.btnID = "";
                            that.canvas.setActiveObject(obj);
                            $(id).removeClass('ui-state-active');
                            $(id).removeClass('ui-widget-content');
                            alert("id already assigned to button . . . . Un-selecting and removing ID");
                            _txtSelectionFlag=0;
                        }
                        _txtSelectionFlag = 1;
                    }
                    else
                    {
                        //console.log("id already assigned to button");
                    }
                    selectionflag = 0;
                }
            }
        },
		canvas_size: function(w, h) {
			that.canvas.setHeight(h || that.canvas.getHeight());
			that.canvas.setWidth(w || that.canvas.getWidth());
			that.canvas.renderAll();
		},
		setActiveobj:function(id){
			that.canvas.forEachObject(function(obj) {
				if (obj.linkid == id) {	
					that.canvas.setActiveObject(obj, '');
				}
			});
			that.canvas.renderAll();
		}
    },
	this.export = {
		svg : function(){
		},
		json : function(){
            return that.canvas.toJSON();
		}
	};
    this.randBtnSelection = function(id) {
        that.canvas.forEachObject(function(obj){
            if (obj.btnID) {
                if (id == obj.btnID) {
                    that.canvas.setActiveObject(obj);
                    _selectionflag = 1;
                    if(_txtSelectionFlag==1)
                    _txtSelectionFlag = 0;
                    else
                        _txtSelectionFlag=1;
                    return;
                }
            }
        });
    };
	this.import = {
		svg : function(svg){
		},
		json :function(_json){
                var _JSON_NEW = JSON.stringify(_json);
                var _img_flag = true;
                var i = 0;
                $('.imgOptclass').hide();
                that.canvas.loadFromJSON(_JSON_NEW,function(){
                    var lenght = that.canvas._objects.length;
                    var t_id = 1;
                    for(var i = 0 ; i < lenght ; i++) {
                        var temp = that.canvas._objects[i];
                        if(temp.src)
                        {
                            var circle = new fabric.Circle({
                                radius: 25,
                                fill: 'white',
                                class:"img-num",
                                id:temp.id,
                                lockMovementX: true,
                                lockMovementY: true,
                                lockRotation: true,
                                lockScalingX: true,
                                lockScalingY: true,
                                hasControls: false,
                                editable :false,
                                selectable :false
                            });
                            circle.setOpacity(0.8);
                            var text = new fabric.Text(t_id.toString(), {
                                fontSize: 20,
                                originX: 'center',
                                originY: 'center',
                                top:27,
                                left:25,
                                lockMovementX: true,
                                lockMovementY: true,
                                lockRotation: true,
                                lockScalingX: true,
                                lockScalingY: true,
                                hasControls: false,
                                editable :false,
                                selectable :false
                            });
                            var group = new fabric.Group([ circle, text ], {
                                left: (temp.left+((temp.width)/4)),
                                top: (temp.top+((temp.height)/4))
                            });
                            var _img = fabric.util.object.clone(temp);
                            var imageGroup = new fabric.Group([ _img,group ], {
                                left: temp.left,
                                top: temp.top,
                                id:temp.id,
                                num:t_id,
                                class:"image",
                                lockMovementX: true,
                                lockMovementY: true,
                                lockRotation: true,
                                lockScalingX: true,
                                lockScalingY: true,
                                hasControls: false,
                                editable :false,
                                selectable :false
                            });
                            that.canvas.add(imageGroup);
                            that.canvas.fxRemove(temp);
                            t_id=t_id+1;
                        }
                    }
                    that.canvas.renderAll.bind(that.canvas);
                },function(o, object) {
                    var col = object.fill;
                    var o_Width = object.width;
                    var o_Height = object.height;
                    console.log(object.class);
                    if(object.class=="text")
                    {
                        var _txt = object.text;
                        var _count = 0;
                        for(var k=0;k<_txt.length;k++)
                        {
                            if(_txt[k]=='\n')
                            {
                                _count++;
                            }
                        }
                        console.log(_count);
                        object.set({nextline : _count});
                    }
                    object.set({
                        lockMovementX: true,
                        lockMovementY: true,
                        lockRotation: true,
                        lockScalingX: true,
                        lockScalingY: true,
                        hasControls: false,
                        editable :false,
                        orignalWidth:o_Width,
                        orignalHeight:o_Height
                    });
                    if(object.type=="path-group")
                    {
                        object.set({selectable :false, stroke:col});
                        object.selectable = false;
                    }
                    if(object.class=="image"&&object.src)
                        _img_flag = false;
                    //console.log((i++)+" <> "+object);
                    if(object.src) {
                        $('.imgOptclass').show();
                        _img_flag = false;
                        //document.getElementById('img-present-box').innerHTML = '<div class="rect1 btnImgs" style="width: 48px;margin-left: 20px;height:inherit;border-radius:110px;background-color: #4353A0;text-align: center;font-weight: bolder; color: aliceblue;height: 46px;" id="'+object.id+'" value="'+_img_num+'">';
                        $('#img-present-box').append('<div class="row" style="margin: 0px;padding: 0px;"><div class="col-md-6 col-xs-6" style="margin: 0px;padding: 0px;"><div class="row" style="margin-top: 12px;"><div class="divbtnImgs col-md-3 col-xs-3" align="left" style="font-weight: bolder;font-family: sans-serif;font-size: 14px;" id="'+object.id+'">'+_img_num+'</div><div align="left" class="col-md-9 col-xs-9" style="font-size: 14px;font-weight: bolder;font-family: sans-serif;" align="right">Add Image</div></div></div>'+
                        '<div class="col-md-6 col-xs-6" style="margin: 0px;padding: 0px;"><button type="button" class="btnImgs btn btn-success" ' +
                        'style="margin-top: 5px;font-weight: bolder;"' +
                        'id="'+object.id+'" value="'+_img_num+'" onclick="">Upload</button></div></div>');
                        //console.log(JSON.stringify(object));
                        _img_num++
                        //console.log(JSON.stringify(object));
                        console.log("-------------------------------------------------------------------");
                        console.log(object.id);
                        console.log("-------------------------------------------------------------------");
                    }
                });
                //if(_img_flag)
                    //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Flag Up : '+_img_flag);
                that.canvas.renderAll();
        }
	};
    this.rgb2hex=function (rgb){
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    };

	this.deselectCanvas =function(){
		that.canvas.discardActiveObject();
		that.canvas.discardActiveGroup()
	};
	this.zoomcanvas = function(zoom){
		this.zoom = zoom;
		this.canvas.forEachObject(function(obj){
			if(obj.type === 'group'){
				obj.saveState();
				var groupobj = obj['_objects'];
				for(i=0; i<groupobj.length; i++){
					var objct = groupobj[i],
					scale_X= typeof objct.original_scaleX === "undefined" ? objct.scaleX : objct.original_scaleX,
					scale_Y= typeof objct.original_scaleY === "undefined" ? objct.scaleY : objct.original_scaleY,
					left   = typeof objct.original_left === "undefined"   ? objct.left   : objct.original_left,
					top    = typeof objct.original_top === "undefined"    ? objct.top    : objct.original_top;
					objct.scaleX = scale_X * (zoom/100);
					objct.scaleY = scale_Y * (zoom/100);
					objct.left   = left   * (zoom/100);
					objct.top    = top    * (zoom/100);
					objct.setCoords();
				}
				obj.saveCoords().setObjectsCoords();
			}
			else{

                if(obj.class=="image")
                {
                    console.log(obj.class);
                    console.log(obj.scaleX);
                    console.log(obj.left);
                    console.log(obj.top);
                }
                
				var scale_X= typeof obj.original_scaleX === "undefined" ? obj.scaleX : obj.original_scaleX,
				scale_Y    = typeof obj.original_scaleY === "undefined" ? obj.scaleY : obj.original_scaleY,
				left       = typeof obj.original_left === "undefined"   ? obj.left   : obj.original_left,
				top        = typeof obj.original_top === "undefined"    ? obj.top    : obj.original_top;

				obj.original_scaleX = typeof obj.original_scaleX === "undefined" ? obj.scaleX : obj.original_scaleX;
				obj.original_scaleY = typeof obj.original_scaleY === "undefined" ? obj.scaleY : obj.original_scaleY;
				obj.original_left   = typeof obj.original_left === "undefined"   ? obj.left   : obj.original_left;
				obj.original_top    = typeof obj.original_top === "undefined"    ? obj.top    : obj.original_top;

				obj.scaleX = scale_X * (zoom/100);
				obj.scaleY = scale_Y * (zoom/100);
				obj.left   = left   * (zoom/100);
				obj.top    = top    * (zoom/100);

			}
			obj.setCoords();
		});
		this.canvas.setWidth(this.canvasWidth * (zoom/100)).setHeight(this.canvasHeight * (zoom/100));
		this.canvas.renderAll();
	};
	this.getCanvasPixelData = function(x, y) {
		var ctx = that.canvas.getContext('2d');
		var pixel = ctx.getImageData(x, y, that.canvasWidth, that.canvasHeight);
		var data = pixel.data;
		return 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';
	};
    this.delete = function(opt_obj) {//Edited by Ahmad
        if(opt_obj=='text')
        {
            if(that.canvas.getActiveGroup()){
                var obj = that.canvas.getActiveGroup();
                for(var i = 0 ; i < obj._objects.length ; i++) {
                    if(obj._objects[i].class=="text") {
                        that.canvas.fxRemove(obj._objects[i]);
                    }
                }
                that.canvas.discardActiveGroup();
                that.canvas.renderAll();
                that.canvas.discardActiveGroup().renderAll();
            } else {
                that.canvas.remove(that.canvas.getActiveObject());
            }
        }
        else if(opt_obj=='image')
        {
            if(that.canvas.getActiveGroup()){
                var obj = that.canvas.getActiveGroup();
                for(var i = 0 ; i < obj._objects.length ; i++) {
                    if(obj._objects[i].class=='image') {
                        that.canvas.fxRemove(obj._objects[i]);
                    }
                }
                that.canvas.discardActiveGroup();
                that.canvas.renderAll();
                that.canvas.discardActiveGroup().renderAll();
            } else {
                that.canvas.remove(that.canvas.getActiveObject());
            }
        }
        else
        {
            if(that.canvas.getActiveGroup()){
                var obj = that.canvas.getActiveGroup();
                for(var i = 0 ; i < obj._objects.length ; i++) {
                    that.canvas.fxRemove(obj._objects[i]);
                }
                that.canvas.discardActiveGroup();
                that.canvas.renderAll();
                that.canvas.discardActiveGroup().renderAll();
            } else {
                that.canvas.remove(that.canvas.getActiveObject());
            }
        }
    };
    this.droper = function (){
            _pickerFlag = 1;
    };
    this.disableSelection=function(){
        that.canvas.deactivateAll();
        that.canvas.selection = false;
        var lenght = that.canvas._objects.length;
        for(var i = 0 ; i < lenght ; i++) {
            that.canvas._objects[i].selectable = false;
        }
        that.canvas.renderAll();
    };
    this.enableSelection=function(){
        that.canvas.deactivateAll();
        that.canvas.selection = false;
        var lenght = that.canvas._objects.length;
        for(var i = 0 ; i < lenght ; i++) {
            that.canvas._objects[i].selectable = true;
        }
        that.canvas.renderAll();
    };
    this.unselectSelected=function(){
        that.canvas.deactivateAll();
        that.canvas.renderAll();
    };
    this.setActiveId=function(_id)
    {
        var lenght = that.canvas._objects.length;
        console.log(_id);
        //console.log("-------------------------------------------------------------------");
        for(var i = 0 ; i < lenght ; i++) {
            var temp = that.canvas._objects[i];
            if(temp.id ==_id)
            {
                this.canvas.setActiveObject(temp);
                break;
            }
        }
        //console.log("-------------------------------------------------------------------");
        that.canvas.renderAll();
    };
    this.replaceImg=function(source,_id){
        var obj = that.canvas.getActiveObject();
                var top = obj.top;
                var left = obj.left;
                var _width = obj.width;
                var _height = obj.height;
                var _num = obj.num;
                that.canvas.fxRemove(obj);
                that.canvas.renderAll();
                fabric.Image.fromURL(source, function(img) {
                    img.class = 'image';
                    img.src = source;
                    img.orignalSource = source;
                    img.id = _id;
                    img.top = top;
                    img.left = left;
                    img.width = _width;
                    img.height = _height
                    img.color = "#0000ff";
                    img.set({
                        lockMovementX: true,
                        lockMovementY: true,
                        lockRotation: true,
                        lockScalingX: true,
                        lockScalingY: true,
                        hasControls: false
                    });
                    //that.canvas.add(img);
                    //that.canvas.renderAll();
                    var circle = new fabric.Circle({
                        radius: 25,
                        fill: 'white',
                        class:"img-num",
                        id:_id,
                        lockMovementX: true,
                        lockMovementY: true,
                        lockRotation: true,
                        lockScalingX: true,
                        lockScalingY: true,
                        hasControls: false,
                        editable :false,
                        selectable :false
                    });
                    circle.setOpacity(0.75);
                    var text = new fabric.Text(_num.toString(), {
                        fontSize: 20,
                        originX: 'center',
                        originY: 'center',
                        top:27,
                        left:25,
                        lockMovementX: true,
                        lockMovementY: true,
                        lockRotation: true,
                        lockScalingX: true,
                        lockScalingY: true,
                        hasControls: false,
                        editable :false,
                        selectable :false
                    });
                    var group = new fabric.Group([ circle, text ], {
                        left: (left+((_width)/4)),
                        top: (top+((_height)/4))
                    });
                    var imageGroup = new fabric.Group([img,group ], {
                        left: left,
                        top: top,
                        id:_id,
                        class:"image",
                        num:_num,
                        lockMovementX: true,
                        lockMovementY: true,
                        lockRotation: true,
                        lockScalingX: true,
                        lockScalingY: true,
                        hasControls: false,
                        editable :false,
                        selectable :false
                    });
                    that.canvas.add(imageGroup);
                    that.canvas.renderAll();
                });
    };
    this.getEditImg=function(source){
        var obj = that.canvas.getActiveObject();
        if(obj.orignalSource)
            return obj.orignalSource;
        else {
            obj.orignalSource = obj.src;
            return obj.src;
        }
    };
    this.newImg = function(newObj){
        var dataURL;
        var obj = that.canvas.getActiveObject();
        var before = obj.toJSON(['id','class']);
        var _width = obj.width;
        var _height = obj.height;
        TempCanvas = new fabric.Canvas(fabric.util.createCanvasElement());
        TempCanvas.setWidth(newObj.imgWidth);
        TempCanvas.setHeight(newObj.imgHeight);
        fabric.Image.fromURL(newObj.src, function(img) {
            TempCanvas.add(img);
            TempCanvas.renderAll();
            dataURL = TempCanvas.toDataURL({
                format: 'png',
                left: newObj.x,
                top: newObj.y,
                width: newObj.width,
                height: newObj.height
            });
            var ImageObj = new Image();
            ImageObj.onload = function() {
                image = new fabric.Image(ImageObj);
                image.top = obj.top;
                image.left = obj.left;
                image.width = _width;
                image.height = _height;
                image.src = dataURL;
                image.orignalSource = obj.orignalSource;
                //image.original_src = obj.original_src;
                image.angle = obj.angle;
                image.id = obj.id;
                image.class = "image";
                image.set({
                    original_scaleX: newObj.scaleX,
                    original_scaleY: newObj.scaleX,
                    lockMovementX: true,
                    lockMovementY: true,
                    lockRotation: true,
                    lockScalingX: true,
                    lockScalingY: true,
                    hasControls: false
                });
                that.canvas.add(image);
                that.canvas.moveTo(image, that.canvas.getObjects().indexOf(obj));
                that.canvas.setActiveObject(image);
                that.canvas.fxRemove(obj);
                this.savestate('modified',before,image.toJSON(['id','class']));
                that.canvas.renderAll();
            }
            ImageObj.src = dataURL;
        });
    };
    this.getcolorObjects = function(){
        var lenght = that.canvas._objects.length;
        for(var i = 0 ; i < lenght ; i++) {
            that.canvas._objects[i].selectable = true;
            if(that.canvas._objects[i].class=="color")
            {
                //console.log(that.canvas._objects[i]);
            }
        }
    }
    this.selectfalseColor = function (){
        var lenght = that.canvas._objects.length;
        for(var i = 0 ; i < lenght ; i++) {
            if(that.canvas._objects[i].type =="path-group") {
                that.canvas._objects[i].selectable = false;
            }
        }
        that.canvas.renderAll();
    }
    this.undo = function(){
        if(current_state<0)
            return;
        that.canvas.discardActiveObject();
        that.canvas.discardActiveGroup();
        if(current_state > 0){
            current_state--;
            var state=canvas_state;
            obj = state[current_state];
            var action = obj.action;
            if(action == 'background'){
                var color = obj.before;
                $('li#showgrid').removeClass('active');
                that.canvas.backgroundColor = color;
                that.canvas.renderAll();
            }
            if(action == 'modified'){
                var object = obj.before;
                //console.log(object);
                if(object.type != "group"){
                    that.canvas.forEachObject(function(temp){
                        if(temp.id == object.id){
                            that.canvas.remove(temp);
                            setTimeout(function(){
                                that.addObject(object,0,0,1,1);
                            },10);
                        }
                    });
                }
                else{
                    $.each(object.objects,function(index,obj){
                        that.canvas.forEachObject(function(temp){
                            if(temp.id == obj.id){
                                that.canvas.remove(temp);
                                setTimeout(function(){
                                    that.addObject(obj,object.left+object.width/2,object.top+object.height/2,object.scaleX,object.scaleY);
                                },10);
                            }
                        });
                    });
                }
            }
            else if(action == 'add'){
                var object = obj.object;
                that.canvas.forEachObject(function(temp){
                    if(temp.id == object.id){
                        that.canvas.fxRemove(temp);
                    }
                });
            }
            else if(action== 'delete'){
                var object = obj.object;
                if(object.type != "group"){
                    that.addObject(object,0,0,1,1);
                }
                else{
                    $.each(object.objects,function(index,obj){
                        that.addObject(obj,object.left+object.width/2,object.top+object.height/2,object.scaleX,object.scaleY);
                    });
                }
            }
            that.canvas.renderAll();
        }
        else{
            current_state = 0;
        }
    };
    this.redo = function(){
        if(current_state<0)
            return;
        that.canvas.discardActiveObject();
        that.canvas.discardActiveGroup();
        if((current_state < canvas_state.length)){
            var state=canvas_state;
            var obj = state[current_state];
            var action = obj.action;
            if(action == 'background'){
                var color = obj.after;
                that.canvas.backgroundColor = color;
                that.canvas.renderAll();
            }
            if(action == 'modified'){
                var object = obj.after;
                if(object.type != "group"){
                    that.canvas.forEachObject(function(temp){
                        if(temp.id == object.id){
                            that.canvas.remove(temp);
                            setTimeout(function(){
                                that.addObject(object,0,0,1,1);
                            },10);
                        }
                    });
                }
                else{
                    $.each(object.objects,function(index,obj){
                        that.canvas.forEachObject(function(temp){
                            if(temp.id == obj.id){
                                that.canvas.remove(temp);
                                setTimeout(function(){
                                    that.addObject(obj,object.left+object.width/2,object.top+object.height/2,object.scaleX,object.scaleY);
                                },10);
                            }
                        });
                    });
                }
            }
            else if(action == 'add'){
                var object = obj.object;
                if(object.type != "group"){
                    that.addObject(object,0,0,1,1);
                }
                else{
                    $.each(object.objects,function(index,obj){
                        that.addObject(obj,object.left+object.width/2,object.top+object.height/2,object.scaleX,object.scaleY);
                    });
                }
            }
            else if(action=="delete"){
                var object = obj.object;
                if(object.type != "group"){
                    that.canvas.forEachObject(function(temp){
                        if(temp.id == object.id){
                            that.canvas.fxRemove(temp);
                        }
                    });
                }
                else{
                    $.each(object.objects,function(index,obj){
                        that.canvas.forEachObject(function(temp){
                            if(temp.id == obj.id){
                                that.canvas.fxRemove(temp);
                            }
                        });
                    });
                }
            }
            that.canvas.renderAll();
            current_state++;
        }
    };
	this.disableImgOpts = function(){
		$("#Up-imageUpload").attr("disabled", "disabled");
        $("#modal-click").attr("disabled", "disabled");
	};
	this.enableImgOpts = function(){
		$("#Up-imageUpload").removeAttr("disabled");
        $("#modal-click").removeAttr("disabled");
	};
    this.savestate = function(type,object,object1){
        var obj = {
            action:type,
            object:object,
            before:object,
            after:object1
        };
        canvas_state.splice(current_state,0,obj);
        current_state++;
    };
    this.addObject = function(obj,offsetLeft,offsetTop,scaleX,scaleY) {
        console.log(obj);
        if (!obj) return;
        if (obj.class == "text"){
            text = new fabric.Textbox(obj.text, {
                fontSize: obj.fontSize,
                fontFamily: obj.fontFamily,
                fill: obj.fill,
                class:obj.class,
                textDecoration:obj.textDecoration,
                fontStyle:obj.fontStyle,
                fontWeight:obj.fontWeight,
                originX: obj.originX,
                originY: obj.originY,
                id:obj.id,
                alignment:obj.alignment,
                angle:obj.angle,
                textAlign:obj.textAlign,
                index:obj.index
            });
            text.set({
                left:obj.left+offsetLeft,
                top:obj.top+offsetTop,
                scaleY:obj.scaleY*scaleY,
                scaleX:obj.scaleX*scaleX,
                width:obj.width,
                height:obj.height,
                lockMovementX     : true,
                lockMovementY	  : true,
                lockRotation 	  : true,
                lockScalingX 	  : true,
                lockScalingY 	  : true,
                hasControls       : false
            });
            if(obj.shadow)
            {
                text.setShadow({
                    blur: obj.shadow.blur,
                    color: obj.shadow.color,
                    offsetX: obj.shadow.offsetX,
                    offsetY: obj.shadow.offsetY
                });
            }
            if(obj.stroke)
            {
                text.set({
                    stroke:obj.stroke,
                    strokeWidth : obj.strokeWidth
                });
            }
            text.on('editing:entered', function(obj) {
                $("textarea#text_area").val(text.text);
            });
            text.on('editing:exited', function(obj) {
                $("textarea#text_area").val(text.text);
            });
            that.canvas.add(text);
            that.canvas.renderAll();
        }
        else if (obj.class == "svg"){
            var group = [];
            fabric.loadSVGFromURL(obj.src, function(objects, options) {
                var loadedObjects = new fabric.util.groupSVGElements(objects, options);
                loadedObjects.src = obj.src;
                loadedObjects.class = obj.class;
                loadedObjects.set({
                    originX: 'center',
                    originY: 'center',
                    id:obj.id,
                    fill:obj.fill,
                    class: 'svg',
                    top: obj.top+offsetTop,
                    left: obj.left+offsetLeft,
                    scaleX: obj.scaleX*scaleX,
                    scaleY: obj.scaleY*scaleY,
                    opacity:obj.opacity,
                    angle:obj.angle,
                    alignment : obj.alignment,
                    index:obj.index,
                    hasControls : false
                });
                if(obj.paths)
                {
                    if(obj.paths[0].stroke)
                    {
                        $.each(loadedObjects.paths,function(index,value){
                            value.set({
                                stroke: obj.paths[0].stroke
                            });
                        });
                    }
                    if(obj.paths[0].strokeWidth)
                    {
                        $.each(loadedObjects.paths,function(index,value){
                            value.set({
                                strokeWidth:obj.paths[0].strokeWidth
                            });
                        });
                    }
                    if(obj.paths[0].shadow)
                    {
                        $.each(loadedObjects.paths,function(index,value){
                            value.setShadow({
                                blur: obj.paths[0].shadow.blur,
                                color: obj.paths[0].shadow.color,
                                offsetX: obj.paths[0].shadow.offsetX,
                                offsetY: obj.paths[0].shadow.offsetY
                            });
                        });
                    }
                }
                else
                {
                    if(obj.stroke)
                    {
                        $.each(loadedObjects.paths,function(index,value){
                            value.set({
                                stroke: obj.stroke
                            });
                        });
                    }
                    if(obj.strokeWidth)
                    {
                        $.each(loadedObjects.paths,function(index,value){
                            value.set({
                                strokeWidth:obj.strokeWidth
                            });
                        });
                    }
                    if(obj.shadow)
                    {
                        $.each(loadedObjects.paths,function(index,value){
                            value.setShadow({
                                blur: obj.shadow.blur,
                                color: obj.shadow.color,
                                offsetX: obj.shadow.offsetX,
                                offsetY: obj.shadow.offsetY
                            });
                        });
                    }
                }
                that.canvas.add(loadedObjects);
                that.canvas.moveTo(loadedObjects,obj.index);
                that.canvas.renderAll();
            }, function(item, object)
            {
                object.set('id', item.getAttribute('id'));
                group.push(object);
            }, {
                crossOrigin: 'anonymous'
            });
        }
        else if(obj.type == "image"){
            var ImageObj = new Image();
            ImageObj.onload = function() {
                image = new fabric.Image(ImageObj);
                image.top  = obj.top+offsetTop;
                image.left = obj.left+offsetLeft;
                image.width = obj.width;
                image.height = obj.height;
                image.scaleX = obj.scaleX*scaleX;
                image.scaleY = obj.scaleY*scaleY;
                image.src = obj.src;
                image.original_src = obj.original_src;
                image.class="image";
                image.angle = obj.angle;
                image.originX = obj.originX;
                image.originY = obj.originY;
                image.id = obj.id;
                image.alignment = obj.alignment;
                image.index = obj.index;
                image.lockMovementX  = true;
                image.lockMovementY  = true;
                image.lockRotation  = true;
                image.lockScalingX  = true;
                image.lockScalingY  = true;
                image.hasControls = false;
                that.canvas.add(image);
                that.canvas.moveTo(image,obj.index);
                that.canvas.bringForward(image);
                that.canvas.renderAll();
            }
            ImageObj.src = obj.src;
        }
    }
};
