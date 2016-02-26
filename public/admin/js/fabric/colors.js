proFabric.color = {
	parent : proFabric,
	canvas: proFabric.get.canvas(),
	add: function(src, _options) {
		var self = this;
		var _id = (_options && _options.id) || self.parent.get.guid();
		console.log(_id);
		fabric.loadSVGFromURL(src, function (objects, options) {
			for (var i = 0; i < objects.length; i++) {
				objects[i].set({stroke: 'black', strokeWidth: 1});
			}
			var obj = fabric.util.groupSVGElements(objects, options);
			obj.set({
				left: (_options && _options.left) || self.parent.get.width() / 2,
				top: (_options && _options.top) || self.parent.get.height() / 4,
				class: 'color',
				id: _id,
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
			obj.set({
				original_scaleX: obj.scaleX / (self.parent.get.zoom() / 100),
				original_scaleY: obj.scaleY / (self.parent.get.zoom() / 100),
				original_left: obj.left / (self.parent.get.zoom() / 100),
				original_top: obj.top / (self.parent.get.zoom() / 100)
			});
			obj.setCoords();
			self.parent.canvas.add(obj);
			self.parent.savestate('add', obj.toJSON(['id','class']), obj.toJSON(['id','class']));
			self.parent.canvas.setActiveObject(obj);
			self.canvas.renderAll();
			self.scaleToWidth(120);
			self.scaleToHeight(120);
			if(_options.callback){
				_options.callback();
			}
		}, function (item, object) {
			object.set('id', item.getAttribute('id'));
			object.set('class', item.getAttribute('class'));
			object.set('original_scaleX', item.getAttribute('original_scaleX'));
			object.set('original_scaleY', item.getAttribute('original_scaleY'));
			object.set('original_left', item.getAttribute('original_left'));
			object.set('original_top', item.getAttribute('original_top'));
		});
		return _id;
	},
	stroke_color: function(color) {
		var obj = this.canvas.getActiveObject();
		var before = obj.toJSON(['id','class']);
		if(!obj || obj.class !== 'color') return;

		obj.paths.forEach(function(i) { i.set({stroke: color}); });
		this.parent.savestate('modified',before,obj.toJSON(['id','class']));
		obj.setCoords();
		this.canvas.renderAll();
	},
	stroke_width: function(width) {
		var obj = this.canvas.getActiveObject();
		var before = obj.toJSON(['id','class']);
		if(!obj || obj.class !== 'color') return;

		obj.paths.forEach(function(i) { i.set({strokeWidth: width}); });
		this.parent.savestate('modified',before,obj.toJSON(['id','class']));
		obj.setCoords();
		this.canvas.renderAll();
	},
	scaleToWidth: function(width) {
		var obj = this.canvas.getActiveObject();
		var before = obj.toJSON(['id','class']);
		if(!obj || obj.class !== 'color') return;

		var boundingRectFactor = obj.getBoundingRect().width / obj.getWidth();
		obj.set({scaleX : width / obj.width / boundingRectFactor});	
		this.parent.savestate('modified',before,obj.toJSON(['id','class']));
        //obj.scaleToWidth(width / sx);
        obj.setCoords();
        this.canvas.renderAll();
    },
    scaleToHeight: function(height) {
    	var obj = this.canvas.getActiveObject();
    	var before = obj.toJSON(['id','class']);
    	if(!obj || obj.class !== 'color') return;

    	var boundingRectFactor = obj.getBoundingRect().height / obj.getHeight();
    	obj.set({scaleY : height / obj.height / boundingRectFactor});
    	this.parent.savestate('modified',before,obj.toJSON(['id','class']));
        //obj.scaleToHeight(height / sy);
        obj.setCoords();
        console.log(obj.getHeight());
        this.canvas.renderAll();
    },
	fill: function(id,color) {
		var self = this;
		this.canvas.forEachObject(function(obj) {
			if (obj.id == id) {
				var before = obj.toJSON(['id','class']);
				if (obj.isSameColor && obj.isSameColor() || !obj.paths) {
					obj.setFill(color);
					obj.paths.forEach(function(i) { i.set({stroke: color}); });
				}
				else if (obj.paths) {
					obj.paths.forEach(function(i) {
						i.setFill(color);
						i.set({stroke: color});
					});
				}
				self.parent.savestate('modified',before,obj.toJSON(['id','class']));
				obj.setCoords();
			}
		});
		this.canvas.renderAll();
	},
	set: function(option) {
		var obj = this.canvas.getActiveObject();
		var before = obj.toJSON(['id','class']);
		if(!obj || obj.class !== 'color') return;

		obj.paths.forEach(function(i) { i.set(option) });
		this.parent.savestate('modified',before,obj.toJSON(['id','class']));
		obj.setCoords();
		this.canvas.renderAll();
	},
	colorSelected: function(obj){
		$("#editor-colorWidth").val(Math.ceil(obj.width));
		$("#editor-colorHeight").val(Math.ceil(obj.height));
		if(obj.lockMovementX){
			$("#lock_color").addClass('ui-state-active');
			$("#unlock_color").removeClass('ui-state-active');
		}
		else{
			$("#lock_color").removeClass('ui-state-active');
			$("#unlock_color").addClass('ui-state-active');
		}
        $('body').find('button#editor-textAssign').removeClass('btn-primary');
    }

};