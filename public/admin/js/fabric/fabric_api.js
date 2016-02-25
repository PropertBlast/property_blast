proFabric;
var _pickerFlag = 0;
var _selectionflag=0;
var _pickerFlag = 0;
var _selectionflag=0;
var _img_num=1;
var undo_redo_tmp_obj=[],canvas_state = new Array(), current_state=0;
var proFabric = new function(){
	var that = this; // refrence for proFabric
	this.canvasWidth = 510;
	this.canvasHeight = 650;
	this.zoom = 100, this.defaultZoom = 100;

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

	this.canvas = new fabric.Canvas('myCanvas',{backgroundColor:'#fff'});
	this.canvas.setWidth(this.canvasWidth);
	this.canvas.setHeight(this.canvasHeight);
	this.canvas.on('mouse:down', function(o){
        if(_pickerFlag==1) {
            // get the current mouse position
            var ctx = that.canvas.getContext("2d");
            var mouse = that.canvas.getPointer(o.e);
            var x = parseInt(mouse.x);
            var y = parseInt(mouse.y);

            // get the color array for the pixel under the mouse
            var px = ctx.getImageData(x, y, 1, 1).data;
            var rgb_val = px[0] + ':' + px[1] + ':' + px[2] + ':' + px[3];
            // report that pixel data
            _pickerFlag = 0;
            var rgba = 'rgba(' + px[0] + ',' + px[1] + ',' + px[2] + ',' + px[3] + ')';
            var hex = proFabric.rgb2hex( rgba );
            //$('#picker').colpickSetColor(hex);
            var button = $('#editor-cpicker.btn-primary');
            if(button){
                proFabric.enableSelection();
                that.canvas.setCursor("default");
                $('div.canvas-container, canvas').css('cursor', 'default');
                that.set.setActiveobj($(button).attr('data-id'));
                $(button).removeClass('btn-primary');
                var type = $(button).attr('data-type');
                var el = $('.colorpicker[data-type='+type+']');
                $(el).css('backgroundColor',hex);
                var hexHash = hex.split('#')[1];
                colorPickerSubmit('', hexHash, '', el);
            }
        }
    });
	this.canvas.on('mouse:move', function(o){});
	this.canvas.on('mouse:up', function(o){});
	this.canvas.on('selection:cleared', function(o){
        var object = o.target;
        if(!object){
            proFabric.text.updateUI('');
            proFabric.image.updateUI('');
            proFabric.shapes.shapeSelected('');
            proFabric.color.colorSelected('');
        }
    });
	this.canvas.on('selection:created', function(o){});
	this.canvas.on('object:added', function(o){});
	this.canvas.on('object:remove', function(o){});
	this.canvas.on('object:modified', function(o){
        var object = o.target;
        if(object.class=="text"){
            that.text.updateUI(object);
        }
        else if(object.class == 'image'){
            that.image.updateUI(object);
        }
        else if(object.class=='shape'){
            proFabric.shapes.shapeSelected(object);
        }
        else if(object.class=='color'){
            proFabric.color.colorSelected(object);
        }
    });
	this.canvas.on('object:rotating', function(o){
        var obj = o.target;
        if(obj.angle>=350 || obj.angle<=10){
            obj.angle=0;
        }
        else if(obj.angle>=80 && obj.angle<=100){
            obj.angle=90;
        }
        else if(obj.angle>=260 && obj.angle<=280){
            obj.angle=270;
        }
        else if(obj.angle>=170 && obj.angle<=190){
            obj.angle=180;
        }
        console.log(obj.angle);
    });
	this.canvas.on('object:scaling', function(o){});
	this.canvas.on('object:moving', function(o){
        var object = o.target;
        if(object){
            object.set({
                original_scaleX : object.scaleX / (that.zoom/100),
                original_scaleY : object.scaleY / (that.zoom/100),
                original_left   : object.left / (that.zoom/100),
                original_top    : object.top / (that.zoom/100)
            });
        }
    });
	this.canvas.on('object:selected', function(o){
		var object = o.target;
        if(object.class=="text"){
            $('#editor-mainTabs a[href="#text"]').tab('show');
            that.text.updateUI(object);
        }
		else if(object.class == 'image'){
            $('#editor-mainTabs a[href="#image"]').tab('show');
			that.image.updateUI(object);
		}
        else if(object.class=='shape'){
            $('#editor-mainTabs a[href="#object"]').tab('show');
            proFabric.shapes.shapeSelected(object);
        }
        else if(object.class=='color'){
            $('#editor-mainTabs a[href="#color"]').tab('show');
            proFabric.color.colorSelected(object);
        }
		console.log(object);
		var dataId=object.class;
		$("#tabs li" ).each(function() {
			if($(this).data('id')==object.class){
				$(this).trigger('click');
				//console.log($(this).data('id'));
				/*$(this).siblings('li').removeClass('.ui-tabs-active ui-state-active');
				$(this).addClass('.ui-tabs-active ui-state-active');*/
			}
		});
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
			return 'xxxxxx-xxxx-xxxxxx'.replace(/[xy]/g, function (c) {
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
                    console.log("Here Locked !! ------- "+obj.lockMovementX);
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
                    console.log("Here Un-Locked !! ------ "+obj.lockMovementX);
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
                //console.log('ID Assigning : ' + id);
                //console.log("Here");
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
                        console.log("id already assigned to button");
                    }
                    selectionflag = 0;
                    //console.log("Here2");
                    //console.log(obj);
                }
            }
        },
		canvas_size: function(w, h) {
            that.canvas.setWidth(w || that.canvas.getWidth());
			that.canvas.setHeight(h || that.canvas.getHeight());
            this.width(w || that.canvas.getWidth());
            this.height(h || that.canvas.getHeight())
			that.canvas.renderAll();
		},
		setActiveobj:function(id){
			that.canvas.forEachObject(function(obj) {
				if (obj.id == id) {
                    console.log(obj);
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
            return that.canvas.toJSON(['id','original_scaleX','original_scaleY','original_left','original_top','class']);
		}
	};
	this.import = {
		svg : function(svg){
		},
		json : function(json){
		}
	};
    this.move = {
        up : function(){
            var obj = that.canvas.getActiveObject();
            if(!obj) return;
            obj.set({
                top : (obj.top-5)
            });
            that.canvas.renderAll();
        },
        down : function(){
            var obj = that.canvas.getActiveObject();
            if(!obj) return;
            obj.set({
                top : (obj.top+5)
            });
            that.canvas.renderAll();
        },
        left : function(){
            var obj = that.canvas.getActiveObject();
            if(!obj) return;
            obj.set({
                left : (obj.left-5)
            });
            that.canvas.renderAll();
        },
        right : function(){
            var obj = that.canvas.getActiveObject();
            if(!obj) return;
            obj.set({
                left : (obj.left+5)
            });
            that.canvas.renderAll();
        }
    };
    this.randBtnSelection = function(id) {
        that.canvas.forEachObject(function(obj){
            console.log(obj+"  ::  "+id);
            if (obj.btnID) {
                console.log(obj.btnID);
                if (id == obj.btnID) {
                    console.log('Selected');
                    that.canvas.setActiveObject(obj);
                    _selectionflag = 1;
                    if(_txtSelectionFlag==1)
                    _txtSelectionFlag = 0;
                    else
                        _txtSelectionFlag=1;
                    return;
                }
            }
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HERE WE ARE");
        });
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
        console.log(zoom);
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
				var scale_X= typeof obj.original_scaleX === "undefined" ? obj.scaleX : obj.original_scaleX,
				scale_Y    = typeof obj.original_scaleY === "undefined" ? obj.scaleY : obj.original_scaleY,
				left       = typeof obj.original_left === "undefined"   ? obj.left   : obj.original_left,
				top        = typeof obj.original_top === "undefined"    ? obj.top    : obj.original_top;

				obj.original_scaleX = typeof obj.original_scaleX === "undefined" ? obj.scaleX : obj.original_scaleX;
				obj.original_scaleY = typeof obj.original_scaleY === "undefined" ? obj.scaleY : obj.original_scaleY;
				obj.original_left   = typeof obj.original_left === "undefined"   ? obj.left   : obj.original_left;
				obj.original_top    = typeof obj.original_top === "undefined"    ? obj.top    : obj.original_top;

                console.log(scale_X , (zoom/100))

				obj.scaleX = scale_X * (zoom/100);
				obj.scaleY = scale_Y * (zoom/100);
				obj.left   = left   * (zoom/100);
				obj.top    = top    * (zoom/100);
			}
			obj.setCoords();
		});
        console.log(this.canvasWidth, this.canvasHeight)
		this.canvas.setWidth(this.canvasWidth * (zoom/100)).setHeight(this.canvasHeight * (zoom/100));
		this.canvas.renderAll();
	};
	this.getCanvasPixelData = function(x, y) {
		var ctx = that.canvas.getContext('2d');
		var pixel = ctx.getImageData(x, y, that.canvasWidth, that.canvasHeight);
		var data = pixel.data;
		return 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';
	};
    this.delete = function() {
        var o = that.canvas.getActiveObject();
        that.canvas.remove(o);
    };
    this.droper = function(){
        that.canvas.setCursor("crosshair");
        $('div.canvas-container,canvas').css('cursor', 'crosshair');
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
        console.log(that.canvas);
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
                height:obj.height
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
        else if (obj.class == "svg"||obj.class == "shape"){
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
                that.canvas.add(image);
                that.canvas.moveTo(image,obj.index);
                that.canvas.bringForward(image);
                that.canvas.renderAll();
            }
            ImageObj.src = obj.src;
        }
    }
};
