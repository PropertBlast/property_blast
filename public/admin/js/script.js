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
    $(document).delegate('#menuHider', 'click', function(event) {
        var navbar = $('.navbar-side');
        if(navbar.children('.sidebar-collapse').is(':visible')){
            navbar.children('.sidebar-collapse').hide();
            navbar.animate({width: '5px'}, 300);
            $(this).animate({left: '5px'}, 300);
            $('#page-wrapper').animate({marginLeft: '5px'}, 300);
        }
        else{
            navbar.children('.sidebar-collapse').show();
            navbar.animate({width: '260px'}, 300);
            $(this).animate({left: '260px'}, 300);
            $('#page-wrapper').animate({marginLeft: '260px'}, 300);
        }
    });
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

    $(document).delegate('#editor-mainTabs>li', 'mousedown', function(){
        if(!$(this).hasClass('active')){
            proFabric.deselectCanvas();
        }
    });
    $(document).delegate('#editor-delete', 'click', function() {
        type = $(this).attr('data-type');
        var obj = proFabric.get.currentObject();
        if(!obj) return;
        var _id = obj.id;
        if(type=="image"){
            $('#editor-imageList').find('button[data-id='+_id+']').remove();
        }
        else if(type=="color"){
            $('#cs-tabContent').find('.colorRow[data-id='+_id+']').remove();
        }
        $('#editor-textarea').val('');
        proFabric.delete();
        proFabric.deselectCanvas();
    });
    $(document).delegate('#editor-bringFront', 'click', function() {
        proFabric.set.bringFront();
    });
    $(document).delegate('#editor-sendBack', 'click', function() {
        proFabric.set.sendBack();
    });
    $(document).delegate('#editor-textarea', 'keyup', function() {
        var _text = $(this).val();
        var obj = proFabric.get.currentObject();
        if(obj && obj.class=='text' && obj.bullet){
            proFabric.text.set({text: _text});
            proFabric.text.bullet(true);
        }
        else
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
    $(document).delegate('button#editor-textList', 'click', function() {
        if ($(this).hasClass('btn-primary')) {
            $(this).removeClass('btn-primary');
            proFabric.text.bullet(false);
        }
        else{
            $(this).addClass('btn-primary');
            proFabric.text.bullet(true);
        }
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
        var size = $('#editor-imageList').children().size();
        var id = proFabric.get.guid();
        $('#editor-imageList').children().removeClass('btn-primary');
        $('#editor-imageList').append('<button type="button" class="btn btn-default btn-circle btn-primary imagetextbold" data-id="'+(id)+'">'+(size+1)+'</button>');
        proFabric.image.add('/property_blast/public/admin/img/find_user.png', {id:id});
    });
    $(document).delegate("#editor-imageList>button", "click", function() {
        var id = $(this).attr('data-id');
        if(!id)return;
        proFabric.set.setActiveobj(id);
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
            proFabric.color.fill($(el).attr('data-id'), $(el).find('.colorpicker').css('backgroundColor'));
        });
    });
    $(document).delegate('#editor-setsImage', 'click', function() {
        var src = $(this).attr('src');
        var id = proFabric.color.add(src);
        console.log(id);
        var size = $('#cs-sample1').children().size();
        var _html = '<div class="row pt-10 colorRow" data-id="'+id+'"><div class="col-md-4 col-xs-12">Color '+(size+ 1)+'</div><div class="col-md-4 col-xs-12"> <div class="color-div large colorpicker" id="editor-svgBorder" data-type="colorsFill"></div></div><div class="col-md-4 col-xs-12 nopad text-right pr-20"><button type="button" id="editor-cpicker" data-type="colorsFill" data-id="" class="btn btn-default"><i class="fa fa-eyedropper"></i></button></div></div>';
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
    $(document).delegate('button#editor-textAssign', 'click', function() {
        var _id = proFabric.get.guid();
        proFabric.text.add('Your Text Here', {id: _id});
        $(this).addClass('btn-primary').attr('data-id', _id);
    });
    $(document).delegate('button#editor-cpicker', 'click', function() {
        var obj = proFabric.get.currentObject();
        if(!obj) return;
        var _id = obj.id;
        $(this).addClass('btn-primary').attr('data-id', _id);
        event.preventDefault();
        proFabric.disableSelection();
        proFabric.droper();
    });

    $(document).delegate('#fullScreenEditor', 'click', function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
            $(this).val('Exit').html('Exit');
            $('#editor').css({
                position: 'fixed',
                top: 0,
                left: 0,
                padding: '25px',
                backgroundColor : '#fff',
                overflow: 'auto',
                width: '100vw',
                height: '100vh'
            });
            if(document.documentElement.requestFullscreen) {
                document.getElementById('editor').requestFullscreen();
            }
            else if(document.documentElement.msRequestFullscreen){
                document.getElementById('editor').msRequestFullscreen();
            }
            else if(document.documentElement.mozRequestFullScreen){
                document.getElementById('editor').mozRequestFullScreen();
            }
            else if(document.documentElement.webkitRequestFullscreen){
                document.getElementById('editor').webkitRequestFullscreen();
            }
        }
        else {
            $(this).val('Full Screen').html('Full Screen');
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

    $(".wan-spinner-1").WanSpinner({
        maxValue: 500,
        minValue: 40,
        step: 20,
        inputWidth: 70,
        start: 100,
        valueChanged: function(val) {
            var value = parseInt($(val).parent().find('input').val());
            if(value > 0)
                proFabric.zoomcanvas(value);
        }
    });

    
});
function colorPickerInit(){
    $('div.colorpicker').colpick({
        colorScheme : 'light',
        onSubmit: function(hsb, hex, rgb, el) {
            $(el).css('background-color', '#' + hex);
            $(el).colpickHide();
            colorPickerSubmit(hsb, hex, rgb, el);
        }
    });
}
function colorPickerSubmit(hsb, hex, rgb, el){
    var type = $(el).data('type');
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
