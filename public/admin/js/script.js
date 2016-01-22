var _selectedFile = "";
var _FlyerType = "";
var _FlyerXsize = 0;
var _FlyerYsize = 0;
var i = 1;
var _lockFlag = 1;
var _randomID = 1;
var _flag = 0;
var button = [
    ['Address', 'Price', 'Main-header', 'Headline', 'Body-1', 'Body-2', 'Body-3', 'Call-action'],
    ['Agent-contect', 'Agent-license'],
    ['Agent-2-contect', 'Agent-2-license'],
    ['Company-contect', 'Company-license'],
    ['Company-2-contect', 'Company-2-license']
];
var tabs = ['prop-info', 'agent-info', 'agent-2-info', 'company-info', 'company-2-info'];
$(document).ready(function($) {
    /*for(int i=0;i<items.)
    var d = new Date();
    var tempid = d.getDate().toString()+d.getDay().toString()+d.getHours().toString()+d.getMinutes().toString()+d.getSeconds().toString()+d.getMilliseconds().toString();
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+tempid);
    add("button",tempid,'address');*/
    for (var i = 0; i < button.length; i++) {
        var btn = button[i];
        for (var j = 0; j < btn.length; j++) {
            var d = new Date();
            console.log('Button : ' + button[i][j] + ' ID >> ' + d.getTime() + _randomID);
            //add("button", (d.getTime() + _randomID), button[i][j], tabs[i]);
            _randomID = _randomID + 1;
        }
    }
    $('#picker').colpick({
        //flat:true,
        //flat:true,
        color: '#000000',
        layout: 'hex',
        colorScheme: 'dark',
        onChange: function(hsb, hex, rgb, el, bySetColor) {
            $(el).css('border-color', '#' + hex);
            //$(el).css('background-color','#'+hex);
            // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
            //alert('Here in color 1');
            if (!bySetColor) $(el).val(hex);
        },
        onSubmit: function(hsb, hex, rgb, el, bySetColor) {
            $(el).css('border-color', '#' + hex);
            //$(el).css('background-color','#'+hex);
            // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
            //function calling
            $(el).colpickHide();
            alert('Here in color 1');
            //proFabric.text.SetTextColor('#' + hex);
            // if(!bySetColor) $(el).val(hex);
        }
    });
    /*.keyup(function(){
        $(this).colpickSetColor(this.value);
    });*/
    $("#img-count1").removeClass('ui-state-active ui-widget-content');
    $("#uploadfile_1").change(function() {
        readURL(this);
        var file = this.files[0];
        var name = file.name;
        var size = file.size;
        var type = file.type;
        //console.log(file);
        console.log(name + " : " + size + " : " + type);
    });


    $(document).delegate('#editor-delete', 'click', function() {
        proFabric.delete();
    });
    $(document).delegate('#editor-bringFront', 'click', function() {
        proFabric.set.bringFront();
    });
    $(document).delegate('#editor-sendBack', 'click', function() {
        proFabric.set.sendBack();
    });
    $(document).delegate('#editor-addText', 'click', function() {
        proFabric.text.add('Your Text Here');
    });
    $(document).delegate('#editor-textarea', 'keyup', function() {
        var _text = $(this).val();
        proFabric.text.set({text: _text});
    });
    $(document).delegate('#editor-fontSize', 'change', function() {
        var value = $("#editor-fontSize").val();
        proFabric.text.set({
            fontSize: parseInt(value)
        });
    });
    $(document).delegate('#editor-fontFamily', 'change', function() {
        var value = $("#editor-fontFamily>option:selected").val();
        proFabric.text.set({
            fontFamily: value
        });
    });
    $(document).delegate('div#editor-textAlign>button', 'click', function() {
        var type = $(this).attr('data-type');
        $(this).addClass('btn-primary').siblings().removeClass('btn-primary');
        proFabric.text.set({
            textAlign: type
        });
    });
    $(document).delegate('button#editor-textBold', 'click', function() {
        if ($(this).hasClass('btn-primary')) {
            $(this).removeClass('btn-primary');
            proFabric.text.set({
                fontWeight: 'normal'
            });
        }
        else{
            $(this).addClass('btn-primary');
            proFabric.text.set({
                fontWeight: 'bold'
            });
        }
    });
    $(document).delegate('button#editor-textItalic', 'click', function() {
        if ($(this).hasClass('btn-primary')) {
            $(this).removeClass('btn-primary');
            proFabric.text.set({
                fontStyle: 'normal'
            });
        }
        else{
            $(this).addClass('btn-primary');
            proFabric.text.set({
                fontStyle: 'italic'
            });
        }
    });
    $(document).delegate('button#editor-textUnderline', 'click', function() {
        if ($(this).hasClass('btn-primary')) {
            $(this).removeClass('btn-primary');
            proFabric.text.set({
                textDecoration: 'none'
            });
        }
        else{
            $(this).addClass('btn-primary');
            proFabric.text.set({
                textDecoration: 'underline'
            });
        }
    });
    $(document).delegate('div#editor-lockGroup>button', 'click', function() {
        var type = $(this).attr('data-type');
        $(this).addClass('btn-primary').siblings().removeClass('btn-primary');
        if(type=='lock'){
            proFabric.set.lock();
        }
        else{
            proFabric.set.unlock();
        }
    });
    $(document).delegate("#editor-addImage", "click", function() {
        proFabric.image.add('/property_blast/public/admin/img/find_user.png');
    });
    $(document).delegate('#editor-imageWidth', 'change', function() {
        var value = $(this).val();
        proFabric.image.set({
            width: parseInt(value)
        });
    });
    $(document).delegate('#editor-imageHeight', 'change', function() {
        var value = $(this).val();
        proFabric.image.set({
            height: parseInt(value)
        });
    });
    $(document).delegate('#editor-svgImage', 'click', function() {
        var src = $(this).attr('src');
        proFabric.shapes.add(src);
    });
    $(document).delegate('#cs-tablist>li', 'click', function() {
        var href = $(this).children('a').attr('href');
        $(href).children().each(function(index, el) {
            console.log(index, el);
            proFabric.color.fill($(el).attr('data-id'), $(el).find('.colorpicker').css('backgroundColor'));
        });
    });
    $(document).delegate('#editor-setsImage', 'click', function() {
        var src = $(this).attr('src');
        var id = proFabric.color.add(src);
        console.log(id);
        var size = $('#cs-sample1').children().size();
        var _html = '<div class="row pt-10 colorRow" data-id="'+id+'"><div class="col-md-4 col-xs-12">Color '+(size+ 1)+'</div><div class="col-md-4 col-xs-12"> <div class="color-div large colorpicker" id="editor-svgBorder" data-type="colorsFill"></div></div><div class="col-md-4 col-xs-12 nopad text-right pr-20"><button type="button" class="btn btn-default"><i class="fa fa-eyedropper"></i></button></div></div>';
        $(_html).appendTo('#cs-sample1');
        colorPickerInit();
    });
    $(document).delegate('#editor-addSets', 'click', function() {
        var content = $('#cs-sample1').html();
        var size = $('#cs-tablist').children().size();
        var _html = '<div role="tabpanel" class="tab-pane" id="cs-sample'+(size+ 1)+'">'+content+'</div>';
        $(_html).prependTo('#cs-tabContent');

        var _tabs = '<li><a href="#cs-sample'+(size+ 1)+'" data-toggle="tab">Sample '+(size+ 1)+'</a></li>';
        $(_tabs).prependTo('#cs-tablist');
        colorPickerInit();
    });


    $(document).delegate('#fullScreenEditor', 'click', function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
            $(this).val('Exit');
            $('#editor').css({
                position: 'fixed',
                top: 0,
                left: 0,
                padding: '25px',
                overflow: 'auto',
                width: '100vw',
                height: '100vh'
            });
            if(document.documentElement.requestFullscreen) {
                document.getElementById('#editor').requestFullscreen();
            }
            else if(document.documentElement.msRequestFullscreen){
                document.getElementById('#editor').msRequestFullscreen();
            }
            else if(document.documentElement.mozRequestFullScreen){
                document.getElementById('#editor').mozRequestFullScreen();
            }
            else if(document.documentElement.webkitRequestFullscreen){
                document.getElementById('editor').webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
        else {
            $(this).val('Full Screen');
            $('#editor').removeAttr('style');
            if(document.exitFullscreen){
                document.exitFullscreen();
            }
            else if(document.msExitFullscreen){
                document.msExitFullscreen();
            }
            else if(document.mozCancelFullScreen){
                document.mozCancelFullScreen();
            }
            else if(document.webkitExitFullscreen){
                document.webkitExitFullscreen();
            }
        }
    });
    colorPickerInit();
    
});
function colorPickerInit(hsb, hex, rgb, el){
    $('div.colorpicker').colpick({
        colorScheme : 'light',
        onSubmit: function(hsb, hex, rgb, el) {
            var type = $(el).data('type');
            $(el).css('background-color', '#' + hex);
            $(el).colpickHide();
            if (type == "text") {
                proFabric.text.set({
                    fill : '#' + hex
                });
            }
            else if (type == "svgFill") {
                proFabric.shapes.fill('#' + hex);
            }
            else if (type == "colorsFill") {
                proFabric.color.fill($(el).parents('.colorRow').attr('data-id'), '#' + hex);
            }
        }
    });
}
function add(type, idToAppend, name, _tab) {
    var element = document.createElement("input");
    //Assign different attributes to the element.
    element.type = type;
    element.setAttribute("id", idToAppend);
    element.setAttribute('class', 'btn btn-default');
    element.value = name; // Really? You want the default value to be the type string?
    //element.name = type;  // And the name too?
    element.onclick = function (event) { // Note this is a function
        event.preventDefault();
        var val = proFabric.randBtnSelection(this.id);
        proFabric.set.ID(this.id, val);
    };
    console.log(element);
    console.log(_tab);
    var foo = document.getElementById(_tab);
    console.log(foo);
    //Append the element in page (in span).
    foo.appendChild(element);
    //document.getElementById("prop-info").innerHTML =
    //$( "#prop-info" ).append('<input type="'+type+'" class="ui-helper-hidden-accessible" id="'+idToAppend+'"><label for="'+idToAppend+'"  class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">Address</label>');
}

    function addColorSet() {
        var sample = '<div id="color-sample-1"> <h3 class="center-text">Set Flyer Color Option 1</h3> <div class="col-wrap"> <div class="row"> <div class="col-three"> <div class="set-color-box mb-10"> Color 1 </div> </div> <div class="col-three"> <div class="color-box mb-10" style="background-color: #ffe59b"> &nbsp </div> </div> <div class="col-three last"> <div class="color-rgb-box mb-10"> R 255, G 229, B 156 </div> </div> </div> </div> </div>';
    }
    /*$("body").delegate('#unlock','click',function(){
        proFabric.set.unlock();
    });*/
    /*$(document).delegate("img.add_svg", "click", function() {
        var id = new Date().getTime();
        proFabric.color.add($(this).attr("src"), id);
        if ($("#setcolortext div").last().html()) {
            i = i + 1;
            console.log(i);
        }
        $("#sample-sets #setcolortext").append('<div class="set-color-box mb-10">Color ' + i + '</div>');
        $("#sample-sets #setcolorbackground").append('<div id=' + id + ' class="color colorpicker color-box mb-10" style="background-color: #0036CC">&nbsp</div>');
        $("#sample-sets #setcolorcode").append('<div class="color-rgb-box mb-10">R 0, G 54, B 204</div>');
        colorpicker();
    });*/
    /*$(document).delegate("#colortabs li", "click", function() {
        var html = $('#color-sample-area div:has(:visible)').find('#setcolorbackground');
        $(html.children()).each(function() {
            proFabric.color.fill($(this).attr('id'), $(this).css('backgroundColor'));
        });
    });
    $(document).delegate("#savecolor ", "click", function() {
        var num = 1;
        $("#color-sample-area>div").each(function() {
            console.log($(this).attr('id'));
            if ($(this).children().length == 1) {
                $(this).html($("#sample-sets").html());
                $(this).children('#setcolortitle').html("Set Flyer Color Option " + num + "");
                return false;
            } else {
                num = num + 1;
            }
        });
        //colorpicker();
    });
    colorpicker();
    /*function updateText(Object)
    {
        $("#addText").val(Object);
    }*/
    /*
    var readURL = function(input) {left
        console.log(input.files);
        for(var i=0;i<input.files.length;i++)
        {
            if (input.files && input.files[i]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    prototypefabric.addImage(e.target.result);
                    setTimeout(function(){
                        $(".file-upload").val('');
                    },1000);
                }
                reader.readAsDataURL(input.files[i]);
            }
        }
    >>>>>>> d6bcd6275735aba2d3115ffd363602414c088c54
    }


    /*Umar's work*/
    /*$(document).delegate("#zoomminus", "click", function() {
        alert("msg");
        proFabric.set.zoom($("#zoomValue").val());
        console.log($("#zoomValue").val());
    });
    $(document).delegate("#zoomplus", "click", function() {
        proFabric.set.zoom($("#zoomValue").val());
    });
    $(document).delegate("#addimage", "click", function() {
        proFabric.image.add('images/images/test.jpg', {
            id: proFabric.get.guid()
        });
    });
    $(document).delegate("#lock_img", "click", function() {
        proFabric.set.lock();
    });
    $(document).delegate("#unlock_img", "click", function() {
        proFabric.set.unlock();
    });
    $(document).delegate("#bringFrontImage", "click", function() {
        proFabric.set.bringFront();
    });
    $(document).delegate("#bringBackImage", "click", function() {
        proFabric.set.sendBack();
    });
    $(document).delegate("#lock_color", "click", function() {
        proFabric.set.lock();
    });
    $(document).delegate("#unlock_color", "click", function() {
        proFabric.set.unlock();
    });
    $(document).delegate("#bringFrontColor", "click", function() {
        proFabric.set.bringFront();
    });
    $(document).delegate("#bringBackColor", "click", function() {
        proFabric.set.sendBack();
    });
    $('#color_width_input').change(function(event) {
        var width = $("#color_width_input").val();
        var height = $("#color_height_input").val();
        proFabric.color.scaleToWidth(width);
        //proFabric.shapes.setScaleX(width);
    });
    $('#color_height_input').change(function(event) {
        var width = $("#color_width_input").val();
        var height = $("#color_height_input").val();
        proFabric.color.scaleToHeight(height);
        //proFabric.shapes.setScaleY(height);
    });
    $('#img_width_input').change(function(event) {
        var width = $("#img_width_input").val();
        var height = $("#img_height_input").val();
        proFabric.image.set({
            width, height
        });
    });
    $('#img_height_input').change(function(event) {
        var width = $("#img_width_input").val();
        var height = $("#img_height_input").val();
        proFabric.image.set({
            width, height
        });
    });
    $('body').delegate('#image-count>div', 'click', function(event) {
        console.log($(this).attr('class'));
        var obj = proFabric.get.currentObject();
        var id = new Date().getTime();
        if ($(this).hasClass('ui-state-active')) {
            if ($(this).attr('uniqueId') == obj.linkid) {
                id = '';
                $(this).attr('uniqueId', id);
                proFabric.image.set({
                    'linkid': id
                });
                $(this).removeClass('ui-state-active');
            } else {
                event.preventDefault();
                proFabric.set.setActiveobj($(this).attr('uniqueId'));
                return;
            }
        } else {
            event.preventDefault();
            if (obj.linkid != '') {
                alert('object already linked');
                return;
            }
            $(this).attr('uniqueId', id);
            console.log('ja raha');
            $(this).addClass('ui-state-active');
            proFabric.image.set({
                'linkid': id
            });
        }
        console.log($(this).attr('class'));
    });
    $('#shape_width_input').change(function(event) {
        var width = $("#shape_width_input").val();
        var height = $("#shape_height_input").val();
        proFabric.shapes.scaleToWidth(width);
        //proFabric.shapes.setScaleX(width);
    });
    $('#shape_height_input').change(function(event) {
        var width = $("#shape_width_input").val();
        var height = $("#shape_height_input").val();
        proFabric.shapes.scaleToHeight(height);
        //proFabric.shapes.setScaleY(height);
    });
    $('body').delegate('#canvas_size li', 'click', function(event) {
        var values = $(this).children('a').html();
        var values = values.split('x');
        proFabric.set.canvas_size(proFabric.get.inchesToPixel(values[0]), proFabric.get.inchesToPixel(values[1]));
    });
    $(document).delegate("#addshape", "click", function() {
        proFabric.shapes.add('images/SVG/plain.svg');
    });
    $(document).delegate("#lock_shape", "click", function() {
        proFabric.set.lock();
    });
    $(document).delegate("#unlock_shape", "click", function() {
        proFabric.set.unlock();
    });
    $(document).delegate("#bringFrontShape", "click", function() {
        proFabric.set.bringFront();
    });
    $(document).delegate("#bringBackShape", "click", function() {
        proFabric.set.sendBack();
    });

    function addColorSet() {
        var sample = '<div id="color-sample-1"> <h3 class="center-text">Set Flyer Color Option 1</h3> <div class="col-wrap"> <div class="row"> <div class="col-three"> <div class="set-color-box mb-10"> Color 1 </div> </div> <div class="col-three"> <div class="color-box mb-10" style="background-color: #ffe59b"> &nbsp </div> </div> <div class="col-three last"> <div class="color-rgb-box mb-10"> R 255, G 229, B 156 </div> </div> </div> </div> </div>';
    }
    /*$('.colorpicker').colpick({
        color:'78A4BA',   
        onShow:function(el){
        },
        onChange:  function(hsb,hex,rgb,el) {

        },
        onSubmit:function(hsb,hex,rgb,el) {
          var type = $(el).data('type');
          if(type=="svgfill"){
            proFabric.shapes.fill('#'+hex);
                $('#svgFill').css('background-color', '#'+hex);
            }
            if(type=="svgstroke"){
                proFabric.shapes.stroke_color('#'+hex);
            }
            $('#svgStroke').css('background-color', '#'+hex);*/
    /*function colorpicker() {
        $('div.colorpicker').colpick({
            onShow: function(el) {},
            onChange: function(hsb, hex, rgb, el) {},
            onSubmit: function(hsb, hex, rgb, el) {
                var type = $(el).data('type');
                if (type == "svgfill") {
                    proFabric.shapes.fill('#' + hex);
                    $('#svgFill').css('background-color', '#' + hex);
                }
                if (type == "svgstroke") {
                    proFabric.shapes.stroke_color('#' + hex);
                    $('#svgStroke').css('background-color', '#' + hex);
                }
                $(el).css('background-color', '#' + hex);
                $(el).colpickHide();
            }
        });
    }*/


