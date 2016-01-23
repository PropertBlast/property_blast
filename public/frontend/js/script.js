var _selectedFile = "";
var _FlyerType = "";
var _FlyerXsize = 0;
var _FlyerYsize = 0;
var i = 1;
var _lockFlag = 1;
var _randomID = 1;
var _flag = 0;

var tabs = ['prop-info', 'agent-info', 'agent-2-info', 'company-info', 'company-2-info'];
$(document).ready(function($) {

    $('#imageUpload').change(function(){
        readURL(this)
    });
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //console.log(e.target.result);
                proFabric.replaceImg(e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("body").delegate('#Up-imageUpload', 'click', function(event) {
        $( "#imageUpload" ).trigger( "click" );
    });

    $("body").delegate('#settingbtn', 'click', function(event) {
        $("#settingOpt").slideUp("slow");
        $("#colorStyleOpt").slideDown("slow");
        $("#imageOpt").slideUp("slow");
        $("#settingOpt").slideUp("slow");
        $("#textOpt").slideUp("slow");
    });
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

    proFabric.text.add();
    proFabric.text.add();

    $("body").delegate('#addTextbtn', 'click', function() {
        //event.preventDefault();
        var obj;
        //console.log(
        //var bgcol =
        console.log('I am here');
        console.log($('#picker').css('borderBottomColor'));
        var hex_Col = proFabric.rgb2hex($('#picker').css('borderBottomColor'));
        console.log(hex_Col);
        var txt = "Hello World";
        obj = {
            text: txt,
            color: hex_Col,
            fontSize: $("#FontSize").val(),
            fontFamily: $("#FontFamily").val()
        };
        proFabric.text.add(obj);
        //console.log(txt);
        event.preventDefault();
        var txt = $("#addText").val();
        proFabric.text.add(txt);
    });
    $('#addText').bind('input', function() {
        console.log("We are here !!");
        proFabric.text.SetText($("#addText").val());
    });
    $( "#addText" ).keyup(function() {
        proFabric.text.SetText($("#addText").val());
    });
    $("body").delegate('#ColorPicker', 'click', function(event) {
        event.preventDefault();
        console.log('I am here');
        proFabric.disableSelection();
        proFabric.droper();
        proFabric.enableSelection();
    });
    $('#fontSize').change(function() {
        var value = $("#fontSize").val();
        proFabric.text.set({
            fontSize: parseInt(value)
        });
    });
    $('#FontFamily').change(function() {
        var faimly = $("#FontFamily option:selected").val();
        proFabric.text.set({
            fontFamily: faimly
        });
    });
    $("body").delegate('#bold', 'click', function() {
        var col = proFabric.rgb2hex($('#bold').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#bold').css("border-color"));
        console.log(col);
        console.log(bodCol);
        if(col != "#337ab7") {
            $('#bold').css("background-color", "#337ab7");
            $('#bold').css("border-color", "darkgrey");
            proFabric.text.set({
                fontWeight: 'bold'
            });
        }
        else
        {
            $('#bold').css("background-color", "white");
            $('#bold').css("border-color", "#8c8c8c");
            proFabric.text.set({
                fontWeight: 'normal'
            });
        }
    });
    $("body").delegate('#italic', 'click', function() {
        var col = proFabric.rgb2hex($('#italic').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#italic').css("border-color"));
        console.log(col);
        console.log(bodCol);
        if(col != "#337ab7") {
            $('#italic').css("background-color", "#337ab7");
            $('#italic').css("border-color", "darkgrey");
            proFabric.text.set({
                fontStyle: 'italic'
            });
        }
        else
        {
            $('#italic').css("background-color", "white");
            $('#italic').css("border-color", "#8c8c8c");
            proFabric.text.set({
                fontStyle: 'normal'
            });
        }
    });
    $("body").delegate('#underline', 'click', function() {
        var col = proFabric.rgb2hex($('#underline').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#underline').css("border-color"));
        console.log(col);
        console.log(bodCol);
        if(col != "#337ab7") {
            $('#underline').css("background-color", "#337ab7");
            $('#underline').css("border-color", "darkgrey");
            proFabric.text.set({
                textDecoration: 'underline'
            });
        }
        else
        {
            $('#underline').css("background-color", "white");
            $('#underline').css("border-color", "#8c8c8c");
            proFabric.text.set({
                textDecoration: 'normal'
            });
        }
    });
    $("body").delegate('#left', 'click', function() {
        var col = proFabric.rgb2hex($('#left').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#left').css("border-color"));
        if(col != "#337ab7") {
            $('#left').css("background-color", "#337ab7");
            $('#left').css("border-color", "darkgrey");
            proFabric.text.set({
                textAlign: 'left'
            });
        }
        $('#right').css("background-color", "white");
        $('#right').css("border-color", "#8c8c8c");
        $('#center').css("background-color", "white");
        $('#center').css("border-color", "#8c8c8c");
        $('#justify').css("background-color", "white");
        $('#justify').css("border-color", "#8c8c8c");
    });
    $("body").delegate('#right', 'click', function() {
        var col = proFabric.rgb2hex($('#right').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#right').css("border-color"));
        if(col != "#337ab7") {
            $('#right').css("background-color", "#337ab7");
            $('#right').css("border-color", "darkgrey");
            proFabric.text.set({
                textAlign: 'right'
            });
        }
        $('#left').css("background-color", "white");
        $('#left').css("border-color", "#8c8c8c");
        $('#center').css("background-color", "white");
        $('#center').css("border-color", "#8c8c8c");
        $('#justify').css("background-color", "white");
        $('#justify').css("border-color", "#8c8c8c");
    });
    $("body").delegate('#center', 'click', function() {
        var col = proFabric.rgb2hex($('#center').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#center').css("border-color"));
        if(col != "#337ab7") {
            $('#center').css("background-color", "#337ab7");
            $('#center').css("border-color", "darkgrey");
            proFabric.text.set({
                textAlign: 'center'
            });
        }
        $('#left').css("background-color", "white");
        $('#left').css("border-color", "#8c8c8c");
        $('#right').css("background-color", "white");
        $('#right').css("border-color", "#8c8c8c");
        $('#justify').css("background-color", "white");
        $('#justify').css("border-color", "#8c8c8c");
    });
    $("body").delegate('#justify', 'click', function() {
        var col = proFabric.rgb2hex($('#justify').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#justify').css("border-color"));
        if(col != "#337ab7") {
            $('#justify').css("background-color", "#337ab7");
            $('#justify').css("border-color", "darkgrey");
            proFabric.text.set({
                textAlign: 'justify'
            });
        }
        $('#left').css("background-color", "white");
        $('#left').css("border-color", "#8c8c8c");
        $('#right').css("background-color", "white");
        $('#right').css("border-color", "#8c8c8c");
        $('#center').css("background-color", "white");
        $('#center').css("border-color", "#8c8c8c");
    });
    $("body").delegate('#lock', 'click', function() {
        proFabric.set.lock();
    });
    $("body").delegate('#bringToFront', 'click', function() {
        proFabric.text.bringTextToFront();
        console.log("#bringToFront");
    });
    $("body").delegate('#bringToBack', 'click', function() {
        proFabric.text.bringTextToBack();
        console.log("#bringToBack");
    });
    $("body").delegate('#delete', 'click', function() {
        proFabric.delete('text');
    });
    $(document).delegate("img.add_svg", "click", function() {
        var id = proFabric.color.add($(this).attr("src"));
    });
    $(document).delegate("img.add_svg", "click", function() {
        var id = proFabric.color.add($(this).attr("src"));
    });
});


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


