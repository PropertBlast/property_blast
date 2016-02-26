proFabric.shapes = {
	parent : proFabric,
	canvas: proFabric.get.canvas(),
	get: {
		width: function() {
			var obj = this.canvas.getActiveObject();
			if(obj && obj.class !== 'shape') return;

			return obj.getWidth();
		},
		height: function() {
			var obj = this.canvas.getActiveObject();
			if(obj && obj.class !== 'shape') return;

			return obj.getHeight();
		}
	},
	add: function(src, _options) {
		var self = this;
        var _left   = (_options && _options.left) || (self.parent.get.width()/2)/(self.parent.get.zoom() / 100),
            _top    = (_options && _options.top) || (self.parent.get.height()/4)/(self.parent.get.zoom() / 100),
            _scaleX = (_options && _options.scaleX) || (1/(self.parent.get.zoom() / 100)),
            _scaleY = (_options && _options.scaleY) || (1/(self.parent.get.zoom() / 100));

		fabric.loadSVGFromURL(src, function (objects, options) {
			for (var i = 0; i < objects.length; i++) {
				objects[i].set({stroke: 'black', strokeWidth: 1});
			}
			var obj = fabric.util.groupSVGElements(objects, options);
			obj.set({
				left: _left,
				top: _top,
				scaleX: _scaleX,
				scaleY: _scaleY,
				class: 'shape',
				id: (_options && _options.id) || self.parent.get.guid(),
				opacity: (_options && _options.opacity) || 1,
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
			obj.setCoords();
			self.parent.canvas.add(obj);
			self.parent.canvas.setActiveObject(obj);
			self.scaleToWidth(120);
			self.scaleToHeight(120);
            
			obj.set({
				original_scaleX : obj.scaleX,
				original_scaleY : obj.scaleY,
				original_left 	: obj.left,
				original_top 	: obj.top
			});
			self.canvas.renderAll();

		}, function (item, object) {
			object.set('id', item.getAttribute('id'));
			object.set('class', item.getAttribute('class'));
			object.set('original_scaleX', item.getAttribute('original_scaleX'));
			object.set('original_scaleY', item.getAttribute('original_scaleY'));
			object.set('original_left', item.getAttribute('original_left'));
			object.set('original_top', item.getAttribute('original_top'));
			return object.id;
		}).bind(this);
	},
	stroke_color: function(color) {
		var obj = this.canvas.getActiveObject();
		if(obj && obj.class !== 'shape') return;

		obj.paths.forEach(function(i) { i.set({stroke: color}); });
		obj.setCoords();
		this.canvas.renderAll();
	},
	stroke_width: function(width) {
		var obj = this.canvas.getActiveObject();
		if(obj && obj.class !== 'shape') return;

		obj.paths.forEach(function(i) { i.set({strokeWidth: width}); });
		obj.setCoords();
		this.canvas.renderAll();
	},
	fill: function(color) {
		var obj = this.canvas.getActiveObject();
		if(!obj || obj.class !== 'shape') return;
		if (obj.isSameColor && obj.isSameColor() || !obj.paths) {
			obj.setFill(color);
			this.stroke_color(color);
		}
		else if (obj.paths) {
			obj.paths.forEach(function(i) {
				i.set({
					stroke 	: color,
					fill 	: color
				});
			});
			console.log('a_d_s_f');
		}
		obj.setCoords();
		this.canvas.renderAll();
	},
	set: function(option) {
		var obj = this.canvas.getActiveObject();
		if(obj && obj.class !== 'shape') return;
		obj.paths.forEach(function(i) { i.set(option) });
		obj.setCoords();
		this.canvas.renderAll();
	},
    scaleToWidth: function(width) {
        var obj = this.canvas.getActiveObject();
        if(obj && obj.class !== 'shape') return;

		var boundingRectFactor = obj.getBoundingRect().width / obj.getWidth();
		obj.set({scaleX : width / obj.width / boundingRectFactor});	
        //obj.scaleToWidth(width / sx);
        obj.setCoords();
        this.canvas.renderAll();
    },
    scaleToHeight: function(height) {
        var obj = this.canvas.getActiveObject();
        if(obj && obj.class !== 'shape') return;

		var boundingRectFactor = obj.getBoundingRect().height / obj.getHeight();
		obj.set({scaleY : height / obj.height / boundingRectFactor});
        //obj.scaleToHeight(height / sy);
        obj.setCoords();
        console.log(obj.getHeight());
        this.canvas.renderAll();
    },
    setScaleX: function(width) {
    	var obj = this.canvas.getActiveObject();
        if(obj && obj.class !== 'shape') return;

        obj.set({scaleX : width / obj.width});
        obj.setCoords();
        this.canvas.renderAll();
    },
    setScaleY: function(height) {
    	var obj = this.canvas.getActiveObject();
        if(obj && obj.class !== 'shape') return;

        obj.set({scaleY : height / obj.height});
        obj.setCoords();
        this.canvas.renderAll();
    },
    shapeSelected: function(obj){
    	$("#editor-svgWidth").val(Math.ceil(obj.width));
    	$("#editor-svgHeight").val(Math.ceil(obj.height));
        $('#coler-picker[data-type=svgFill]').next('.evo-colorind').css('backgroundColor', obj.fill || '#000');
    	if(obj.lockMovementX){
    		$("#object").find("#editor-lockGroup").find('button[data-type=lock]').addClass('btn-primary').siblings().removeClass('btn-primary');
    	}
    	else{
    		$("#object").find("#editor-lockGroup").find('button[data-type=unlock]').addClass('btn-primary').siblings().removeClass('btn-primary');
    	}
        $('body').find('button#editor-textAssign').removeClass('btn-primary');
    }
};