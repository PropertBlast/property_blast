proFabric;
var _pickerFlag = 0;
var _selectionflag=0;
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
            $('#picker').colpickSetColor(hex);
        }
    });
	this.canvas.on('mouse:move', function(o){});
	this.canvas.on('mouse:up', function(o){});
	this.canvas.on('selection:cleared', function(o){});
	this.canvas.on('selection:created', function(o){});
	this.canvas.on('object:added', function(o){});
	this.canvas.on('object:remove', function(o){});
	this.canvas.on('object:modified', function(o){});
	this.canvas.on('object:rotating', function(o){});
	this.canvas.on('object:scaling', function(o){});
	this.canvas.on('object:moving', function(o){});
	this.canvas.on('object:selected', function(o){
		var object = o.target;
        if(object.class=="text")
        that.text.updateUI(object);
		else if(object.class){
			proFabric.image.imageSelected(object);
		}
        else if(object.class=='shape'){
            proFabric.shapes.shapeSelected(object);
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
		if(object.class=="text"){

		}
		else if(object.class=='image'){
			proFabric.image.imageSelected(object);
		}
		else if(object.class=='shape'){
			proFabric.shapes.shapeSelected(object);
		}
		else if(object.class=='color'){
			proFabric.color.colorSelected(object);
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
			that.canvas.setHeight(h || that.canvas.getHeight());
			that.canvas.setWidth(w || that.canvas.getWidth());

			that.canvas.renderAll();
		},
		setActiveobj:function(id){
			that.canvas.forEachObject(function(obj) {
				console.log(obj);
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
		}
	};
    this.randBtnSelection = function(id) {
        //var objectList = that.canvas.getObjects();
        /*for (var i = 0; i < objectList._objects.length; i++) {
            if (objectList._objects[i].class == "text") {
                if (objectList._objects[i].btnID) {
                    if (id == objectList._objects[i].btnID) {
                        that.canvas.setActiveObject(objectList._objects[i]);
                        return;
                    }
                }
            }
        }*/
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
	this.import = {
		svg : function(svg){
		},
		json : function(json){
		}
	};/*,
    remove:function(){
       //Latest Modified Ahmad
        var obj = this.canvas.getActiveObject();
        if(obj == null){
            obj = canvas.getActiveGroup();
            for(var i = 0 ; i < obj._objects.length ; i++) {
                console.log(obj._objects[i]);
                canvas.fxRemove(obj._objects[i]);
            }
            canvas.discardActiveGroup();
            canvas.renderAll();
        }
        else{
            canvas.fxRemove(obj);
            canvas.renderAll();
        }
        canvas.renderAll();
    }*/
//}
	//};
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
		//this.deselectcanvas();
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
                //that.canvas.getActiveGroup().forEachObject(function(o){ canvas.remove(o) });
                //that.canvas.discardActiveGroup().renderAll();
                var obj = that.canvas.getActiveGroup();
                for(var i = 0 ; i < obj._objects.length ; i++) {
                    console.log(obj._objects[i]);
                    if(obj._objects[i].class=="text") {
                        console.log("TEXT");
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
            console.log("IMAGE");
            if(that.canvas.getActiveGroup()){
                //that.canvas.getActiveGroup().forEachObject(function(o){ canvas.remove(o) });
                //that.canvas.discardActiveGroup().renderAll();
                var obj = that.canvas.getActiveGroup();
                for(var i = 0 ; i < obj._objects.length ; i++) {
                    console.log(obj._objects[i]);
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
            console.log("OTHER");
            if(that.canvas.getActiveGroup()){
                //that.canvas.getActiveGroup().forEachObject(function(o){ canvas.remove(o) });
                //that.canvas.discardActiveGroup().renderAll();
                var obj = that.canvas.getActiveGroup();
                for(var i = 0 ; i < obj._objects.length ; i++) {
                    console.log(obj._objects[i]);
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
        //alert('I am disable');
    };
};
