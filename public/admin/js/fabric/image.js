proFabric.image = {
	parent: proFabric,
	canvas: proFabric.get.canvas(),
	add: function(src, _options){
        var self = this;
        var _left   = (_options && _options.left) || (self.parent.get.width()/2)/(self.parent.get.zoom() / 100),
            _top    = (_options && _options.top) || (self.parent.get.height()/4)/(self.parent.get.zoom() / 100),
            _scaleX = (_options && _options.scaleX) || (1/(self.parent.get.zoom() / 100)),
            _scaleY = (_options && _options.scaleY) || (1/(self.parent.get.zoom() / 100));
        fabric.Image.fromURL(src, function(image) {
            image.set({
                left                : _left,
                top                 : _top,
                scaleX              : _scaleX,
                scaleY              : _scaleY,
                class               : 'image',
                linkid              : '',
                width               : (_options && _options.width) || 150,
                height              : (_options && _options.height) || 150,
                id                  : (_options && _options.id) || self.parent.get.guid(),
                opacity             : (_options && _options.opacity) || 1,
                target              : (_options && _options.target) || false,
                selectable          : (_options && _options.selectable) || true,
                hasControls         : (_options && _options.opacity) || true,
                hasRotatingPoint    : (_options && _options.hasRotatingPoint) || true,
                lockMovementX       : (_options && _options.lockMovementX) || false,
                lockMovementY       : (_options && _options.lockMovementY) || false,
                lockRotation        : (_options && _options.lockRotation) || false,
                lockScalingX        : (_options && _options.lockScalingX) || false,
                lockScalingY        : (_options && _options.lockScalingY) || false
            });
            image.set({
                original_scaleX : image.scaleX,
                original_scaleY : image.scaleY,
                original_left   : image.left,
                original_top    : image.top
            });

            image.setCoords();
            self.canvas.add(image);
            self.canvas.setActiveObject(image);
            self.canvas.renderAll();
        });
	},
    addBlob: function(src, _options){
        that = this;
        fabric.Image.fromURL(src, function(image) {
            var gcanvas=document.createElement('canvas');
            var myCanvas = new fabric.Canvas(gcanvas, { width: image.width, height: image.height});
            image.set({
                top:0,
                left:0
            });
            myCanvas.add(image);
            var base64 = myCanvas.toDataURL('image/jpeg');
            that.add(base64, _options);
        });
    },
    set: function(options) {
        var obj = this.canvas.getActiveObject();
        if(obj && obj.class !== 'image') return;
        obj.set(options);
        obj.setCoords();
        this.canvas.renderAll();
    },
    updateUI: function(obj){
        $('#editor-imageList').children().removeClass('btn-primary')
        $('#editor-imageList').find('button[data-id='+obj.id+']').addClass('btn-primary');
        $("#editor-imageWidth").val(Math.ceil(obj.width));
        $("#editor-imageHeight").val(Math.ceil(obj.height));
        if(obj.lockMovementX){
            $("#image").find("#editor-lockGroup").find('button[data-type=lock]').addClass('btn-primary').siblings().removeClass('btn-primary');
        }
        else{
            $("#image").find("#editor-lockGroup").find('button[data-type=unlock]').addClass('btn-primary').siblings().removeClass('btn-primary');
        }
        $('body').find('button#editor-textAssign').removeClass('btn-primary');
        $('body').find('button#editor-textAssign[data-id='+obj.id+']').addClass('btn-primary');
    }
};