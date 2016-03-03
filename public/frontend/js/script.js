var _selectedFile = "";
var _FlyerType = "";
var _FlyerXsize = 0;
var _FlyerYsize = 0;
var i = 1;
var _lockFlag = 1;
var _randomID = 1;
var _flag = 0;
var obj;
var t_id="";
var _zoomMenu=0;

var tabs = ['prop-info', 'agent-info', 'agent-2-info', 'company-info', 'company-2-info'];
$(document).ready(function($) {
    var _Fonts = "http://fonts.googleapis.com/css?family=Open";
    var _FontArray = ['Times New Roman',
        'Open Sans',
        'Verdana',
        'Roboto',
        'Lato',
        'Oswald',
        'Lora',
        'Source Sans Pro',
        'Montserrat',
        'Raleway',
        'Ubuntu',
        'Droid Serif',
        'Merriweather',
        'Indie Flower',
        'Titillium Web',
        'Poiret One',
        'Oxygen',
        'Yanone Kaffeesatz',
        'Lobster',
        'Playfair Display',
        'Fjalla One',
        'Inconsolata'];

    for(var i=0;i<_FontArray.length;i++)
    {
        $('#textfont').append($('<option>', {
            value: _FontArray[i],
            text: _FontArray[i]
        }));
    }
    var _json = window._json;
    console.log(_json);
    proFabric.import.json(_json);
    var _options = {
        maxValue: 999,
        minValue: -999,
        step: 1,
        start: 1,
        inputWidth: 40,
        plusClick: function(element, val) {// callbacks
            return true;
        },
        minusClick: function(element, val) {
            return true;
        },
        exceptionFun: function(exp) {
            return true;
        },
        valueChanged: function(element, val) {
            return true;
        }
    }
    $(".demo").WanSpinner(_options);


    sets = {
        0: {
            0: {
                id: 'set-id-1',
                color: '#FF8000'
            },
            1: {
                id: 'set-id-2',
                color: '#B8CC00'
            },
            2: {
                id: 'set-id-3',
                color: '#336600'
            },
            3: {
                id: 'set-id-4',
                color: '#00FFB3'
            },
            4: {
                id: 'set-id-5',
                color: '#00CCFF'
            },
            5: {
                id: 'set-id-6',
                color: '#007ACC'
            }
        },
        1: {
            0: {
                id: 'set-id-1',
                color: '#99006B'
            },
            1: {
                id: 'set-id-2',
                color: '#CC0052'
            },
            2: {
                id: 'set-id-3',
                color: '#FF001A'
            },
            3: {
                id: 'set-id-4',
                color: '#99002E'
            },
            4: {
                id: 'set-id-5',
                color: '#808000'
            },
            5: {
                id: 'set-id-6',
                color: '#90EE90'
            }
        },
        2: {
            0: {
                id: 'set-id-1',
                color: '#B22222'
            },
            1: {
                id: 'set-id-2',
                color: '#C71585'
            },
            2: {
                id: 'set-id-3',
                color: '#D2691E'
            },
            3: {
                id: 'set-id-4',
                color: '#D8BFD8'
            },
            4: {
                id: 'set-id-5',
                color: '#DB7093'
            },
            5: {
                id: 'set-id-6',
                color: '#DEB887'
            }
        },
        3: {
            0: {
                id: 'set-id-1',
                color: '#F0E68C'
            },
            1: {
                id: 'set-id-2',
                color: '#F4A460'
            },
            2: {
                id: 'set-id-3',
                color: '#FA8072'
            },
            3: {
                id: 'set-id-4',
                color: '#FF0000'
            },
            4: {
                id: 'set-id-5',
                color: '#191970'
            },
            5: {
                id: 'set-id-6',
                color: '#FFFF00'
            }
        },
        4: {
            0: {
                id: 'set-id-1',
                color: '#696969'
            },
            1: {
                id: 'set-id-2',
                color: '#708090'
            },
            2: {
                id: 'set-id-3',
                color: '#7B68EE'
            },
            3: {
                id: 'set-id-4',
                color: '#808080'
            },
            4: {
                id: 'set-id-5',
                color: '#8A2BE2'
            },
            5: {
                id: 'set-id-6',
                color: '#2E8B57'
            }
        },
        5: {
            0: {
                id: 'set-id-1',
                color: '#4B0082'
            },
            1: {
                id: 'set-id-2',
                color: '#6A5ACD'
            },
            2: {
                id: 'set-id-3',
                color: '#FF69B4'
            },
            3: {
                id: 'set-id-4',
                color: '#006400'
            },
            4: {
                id: 'set-id-5',
                color: '#DAA520'
            },
            5: {
                id: 'set-id-6',
                color: '#00FFFF'
            }
        }
    }
    var j = 1;
    i = 1;
    $.each(sets, function (index, obj) {
        $.each(obj, function (index, obj1) {
            $('#C' + i + j).css("background-color", obj1.color);
            ++j;
        });
        j = 1;
        ++i;
    });

    $('#col-picker').hide();
    $('#col-picker').colorpicker(
        {color:'#31859b', defaultPalette:'web',showOn:'button'}
    )
    .on('change.color', function(event, color){
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("width", "64px");
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("height", "24px");
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("border-radius", "3px");
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("border", "");
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("float", "left");
            if(color)
                proFabric.text.set({
                    fill: color
                });col_flag
    });
    setTimeout(function(){
       $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("width", "64px");
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("height", "24px");
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("border-radius", "3px");
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("border", "");
        $('body').find('.evo-colorind, .evo-colorind-ie, .evo-colorind-ff').css("float", "left")
    },1000);

    $('body').delegate('.color-pallet-row','click',function(){
        $.each($('body').find('.txt'),function(index,obj){
            $(obj).removeClass('textalignactive');
        });
        $.each($('body').find('.colorRow'),function(index,obj){
            $(obj).removeClass('colorRowhover');
        });
        $(this).addClass('colorRowhover');
        $(this).find('.txt').addClass('textalignactive');
    });
    $("body").delegate('#Ccol-1', 'click', function(event) {
        i=1;
        $.each(sets, function (index, obj) {
            if (i == '1') {
                proFabric.text.setGroupTextColor(obj);
            }
            ++i;
        });
    });
    $("body").delegate('#Ccol-2', 'click', function(event) {
        i=1;
        $.each(sets, function (index, obj) {
            if (i == '2') {
                proFabric.text.setGroupTextColor(obj);
            }
            ++i;
        });
    });
    $("body").delegate('#Ccol-3', 'click', function(event) {
        i=1;
        $.each(sets, function (index, obj) {
            if (i == '3') {
                proFabric.text.setGroupTextColor(obj);
            }
            ++i;
        });
    });
    $("body").delegate('#Ccol-4', 'click', function(event) {
        i=1;
        $.each(sets, function (index, obj) {
            if (i == '4') {
                proFabric.text.setGroupTextColor(obj);
            }
            ++i;
        });
    });
    $("body").delegate('#Ccol-5', 'click', function(event) {
        i=1;
        $.each(sets, function (index, obj) {
            if (i == '5') {
                proFabric.text.setGroupTextColor(obj);
            }
            ++i;
        });
    });
    $("body").delegate('#Ccol-6', 'click', function(event) {
        i=1;
        $.each(sets, function (index, obj) {
            if (i == '6') {
                proFabric.text.setGroupTextColor(obj);
            }
            ++i;
        });
    });


    $("body").delegate('.divbtnImgs', 'click', function(event) {
        proFabric.unselectSelected();
        proFabric.setActiveId($(this).attr('id'));
        console.log($(this).attr('id'));
        //console.log($(this).attr('id'));
    });

    $("body").delegate('.btnImgs', 'click', function(event) {
        t_id = $(this).attr('id');
        proFabric.unselectSelected();
        proFabric.setActiveId(t_id);
        alert(t_id);
        $( "#imageUpload" ).trigger( "click" );
    });


    $('#imageUpload').change(function(){
        readURL(this)
    });
    var readURL = function(input) {
        alert("HERE");
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //console.log(e.target.result);
                //console.log(t_id);
                proFabric.replaceImg(e.target.result,t_id);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("body").delegate('#Up-imageUpload', 'click', function(event) {
        $( "#imageUpload" ).trigger( "click" );
    });

    $("body").delegate('#crop-Done-btn', 'click', function(event) {
        proFabric.newImg(obj);
        $('#crop-End-btn').trigger('click');
    });

    $("body").delegate('#modal-click', 'click', function(event) {
        var img = new Image();
        var _src = proFabric.getEditImg();
        $('.cropper-container>img').css("width", "300px");
        $('.cropper-container>img').css("height", "300px");
        img.onload = function() {
            $('#img-Edit').html(img);
            setTimeout(function(){
                $('#img-Edit').find('img').cropper({
                    aspectRatio: 9 / 10,
                    viewMode :3,
                    responsive:true,
                    scalable:true,
                    movable: true,
                    crop: function(e) {
                        obj = {//JSON
                            x: e.x,
                            y: e.y,
                            width: e.width,
                            height: e.height,
                            rotate : e.rotate,
                            scaleX : e.scaleX,
                            scaleY : e.scaleY,
                            src : _src,
                            imgHeight : img.height,
                            imgWidth : img.width
                        }
                    }
                });
                img.style.width = '100%';
                img.style.marginBottom = '10px';
                $("#myModal").modal('show');
            },1500);
        };

        img.src = _src;

    });

    $("body").delegate('#settingbtn', 'click', function(event) {
        proFabric.unselectSelected();
        $("#colorStyleOpt").show();
        $("#settingOpt").fadeOut();
        $("#imageOpt").fadeOut();
        $("#settingOpt").fadeOut();
        $("#textOpt").fadeOut();
        proFabric.getcolorObjects();
        proFabric.selectfalseColor();
    });
    /*$('#text-area').bind('keyup', function(e) {col_flag
        console()
        if(e.keyCode == 8)
        {
            prototypefabric.removeObj();
            return;
        }
    });*/
    $( "#text-area" ).keyup(function(e){
        console.log(e.keyCode);
        var _num=0;
        if(e.keyCode == 8)
        {
            //alert(e.keyCode);
            _num=proFabric.text.getNextLinesCount();
        }
        var _txt = $("#text-area").val();
        var _count = 0;
        for(var k=0;k<_txt.length;k++)
        {
            if(_txt[k]=='\n')_count++;
        }
        //console.log(proFabric.text.getNextLinesCount());
        //console.log(_count);
        if(proFabric.text.getNextLinesCount()>=_count) {
            proFabric.text.SetText(_txt);
            if (_num)
            {
                proFabric.setNextLinesCount(_num);
            }
            return;
        }
        if (_num)
        {
            proFabric.text.setNextLinesCount(_num);
        }
        $("#text-area").val(proFabric.text.get("text"));
    });
    $("body").delegate('#ColorPicker', 'click', function(event) {
        event.preventDefault();
        proFabric.disableSelection();
        proFabric.droper();
        proFabric.enableSelection();
    });
    $('#fontSize').change(function() {
        var value = $("#fontSize option:selected").val();
        proFabric.text.set({
            fontSize: parseInt(value)
        });
    });
    $('#textfont').change(function() {
        var family = $("#textfont option:selected").val();
        //console.log(family);
        proFabric.text.set({
            fontFamily: family
        });
    });
    $("body").delegate('#bold', 'click', function() {
        var col = proFabric.rgb2hex($('#bold').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#bold').css("border-color"));
        if( !$('#bold').hasClass("btn-primary")) {
            $('#bold').addClass("btn-primary");
            proFabric.text.set({
                fontWeight: 'bold'
            });
        }
        else
        {
            $('#bold').removeClass("btn-primary");
            proFabric.text.set({
                fontWeight: 'normal'
            });
        }
    });
    $("body").delegate('#italic', 'click', function() {
        var col = proFabric.rgb2hex($('#italic').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#italic').css("border-color"));
        if(!$('#italic').hasClass("btn-primary")) {
            $('#italic').addClass("btn-primary");
            proFabric.text.set({
                fontStyle: 'italic'
            });
        }
        else
        {
            $('#italic').removeClass("btn-primary");
            proFabric.text.set({
                fontStyle: 'normal'
            });
        }
    });
    $("body").delegate('#underline', 'click', function() {
        var col = proFabric.rgb2hex($('#underline').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#underline').css("border-color"));
        if(!$('#underline').hasClass("btn-primary")) {
            $('#underline').addClass("btn-primary");
            proFabric.text.set({
                textDecoration: 'underline'
            });
        }
        else
        {
            $('#underline').removeClass("btn-primary");
            proFabric.text.set({
                textDecoration: 'normal'
            });
        }
    });
    $('body').delegate('.zoom-class','click',function(){
        var _id = $(this).attr('id');
        if(_id=="zoom-50")
        {
            $("#zoom").val("50");
            proFabric.zoomcanvas("50");
        }
        else if(_id=="zoom-75")
        {
            $("#zoom").val("75");
            proFabric.zoomcanvas("75");
        }
        else if(_id=="zoom-100")
        {
            $("#zoom").val("100");
            proFabric.zoomcanvas("100");
        }
        else if(_id=="zoom-120")
        {
            $("#zoom").val("120");
            proFabric.zoomcanvas("120");
        }
        else if(_id=="zoom-125")
        {
            $("#zoom").val("125");
            proFabric.zoomcanvas("125");
        }
        else if(_id=="zoom-150")
        {
            $("#zoom").val("150");
            proFabric.zoomcanvas("150");
        }
        else if(_id=="zoom-200")
        {
            $("#zoom").val("200");
            proFabric.zoomcanvas("200");
        }
    });
    $('body').delegate('#zoom','click',function(){
        var _display = $( this ).css( "display" );
        _zoomMenu=1;
        console.log(_display);
        //if(_display=="none")
        $('#zoom-menu').css("display", "block");
    });
    $("body").delegate('.minus', 'click', function() {
        var value = $("#zoom").val();

        var decreament = 10;
        value=value-decreament;
        $("#zoom").val("");
        $("#zoom").val(value);
        proFabric.zoomcanvas(value);
        //console.log("===========>> "+value);
    });
    $('body').click(function(){
        var _display = $( this ).css( "display" );
        var id = $( this).id;
        console.log(id +"----"+_display);
        if(_display=="block"&&id!="zoom"&&_zoomMenu==0) {
            $('#zoom-menu').css("display", "none");
        }
        _zoomMenu=0;
    });
	//$("body").delegate('body', 'click', function() {
     //   var _display = $( this ).css( "display" );
     //   console.log(_display);
     //   if($( this ).css( "display" )!="none")
	//	$('#zoom-menu').css("display", "none");
	//	});
	$('#zoom-menu li').click(function(){
		var value = $(this).val();
		$("#zoom").val(value);
		$('#zoom-menu').css("display", "none");
        _zoomMenu=0;
		 proFabric.zoomcanvas(value);
	});
    $("body").delegate('.plus', 'click', function() {
        var value = $("#zoom").val();
        var increament = 10;
        if(value<=0) {
            value = -Math.abs(value) + Math.abs(increament);
        }
        else {
            value = Math.abs(value) + Math.abs(increament);
        }
        //$("#zoom").val("");
        $("#zoom").val(value);
        //console.log("===========>> "+value);
        proFabric.zoomcanvas(value);
    });
    $("body").delegate('#left', 'click', function() {
        var col = proFabric.rgb2hex($('#left').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#left').css("border-color"));
        if(!$('#left').hasClass("btn-primary")) {
            $('#left').addClass("btn-primary");
            proFabric.text.set({
                textAlign: 'left'
            });
        }
        $('#right').removeClass("btn-primary");
        $('#center').removeClass("btn-primary");
        $('#justify').removeClass("btn-primary");
    });
    $("body").delegate('#right', 'click', function() {
        var col = proFabric.rgb2hex($('#right').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#right').css("border-color"));
        if(!$('#right').hasClass("btn-primary")) {
            $('#right').addClass("btn-primary");
            proFabric.text.set({
                textAlign: 'right'
            });
        }
        $('#left').removeClass("btn-primary");
        $('#center').removeClass("btn-primary");
        $('#justify').removeClass("btn-primary");
    });
    $("body").delegate('#center', 'click', function() {
        var col = proFabric.rgb2hex($('#center').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#center').css("border-color"));
        if(!$('#center').hasClass("btn-primary")) {
            $('#center').addClass("btn-primary");
            proFabric.text.set({
                textAlign: 'center'
            });
        }
        $('#left').removeClass("btn-primary");
        $('#right').removeClass("btn-primary");
        $('#justify').removeClass("btn-primary");
    });
    $("body").delegate('#justify', 'click', function() {
        var col = proFabric.rgb2hex($('#justify').css("background-color"));
        var bodCol = proFabric.rgb2hex($('#justify').css("border-color"));
        if(!$('#justify').hasClass("btn-primary")) {
            $('#justify').addClass("btn-primary");
            proFabric.text.set({
                textAlign: 'justify'
            });
        }
        $('#left').removeClass("btn-primary");
        $('#right').removeClass("btn-primary");
        $('#center').removeClass("btn-primary");
    });
    $(document).delegate('#undobtn','click',function(event){
        event.preventDefault();
        proFabric.undo();
    });
    $(document).delegate('#redobtn','click',function(event){
        event.preventDefault();
        proFabric.redo();
    });
});


function removeclasses(obj){
    $(obj).removeClass('colorRowhover');
    $(obj).removeClass('textalignactive');
    $(obj).removeClass('colorRowhover');
}


    function addColorSet() {
        var sample = '<div id="color-sample-1"> <h3 class="center-text">Set Flyer Color Option 1</h3> <div class="col-wrap"> <div class="row"> <div class="col-three"> <div class="set-color-box mb-10"> Color 1 </div> </div> <div class="col-three"> <div class="color-box mb-10" style="background-color: #ffe59b"> &nbsp </div> </div> <div class="col-three last"> <div class="color-rgb-box mb-10"> R 255, G 229, B 156 </div> </div> </div> </div> </div>';
    }

(function($) {

    if (typeof _wpcf7 == 'undefined' || _wpcf7 === null) {
        _wpcf7 = {};
    }

    _wpcf7 = $.extend({
        cached: 0
    }, _wpcf7);

    $.fn.wpcf7InitForm = function() {
        this.ajaxForm({
            beforeSubmit: function(arr, $form, options) {
                $form.wpcf7ClearResponseOutput();
                $form.find('[aria-invalid]').attr('aria-invalid', 'false');
                $form.find('img.ajax-loader').css({ visibility: 'visible' });
                return true;
            },
            beforeSerialize: function($form, options) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val('');
                });
                return true;
            },
            data: { '_wpcf7_is_ajax_call': 1 },
            dataType: 'json',
            success: $.wpcf7AjaxSuccess,
            error: function(xhr, status, error, $form) {
                var e = $('<div class="ajax-error"></div>').text(error.message);
                $form.after(e);
            }
        });

        if (_wpcf7.cached) {
            this.wpcf7OnloadRefill();
        }

        this.wpcf7ToggleSubmit();

        this.find('.wpcf7-submit').wpcf7AjaxLoader();

        this.find('.wpcf7-acceptance').click(function() {
            $(this).closest('form').wpcf7ToggleSubmit();
        });

        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();

        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();

        this.find('[placeholder]').wpcf7Placeholder();

        if (_wpcf7.jqueryUi && ! _wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }

        if (_wpcf7.jqueryUi && ! _wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }

        this.find('.wpcf7-character-count').wpcf7CharacterCount();

        this.find('.wpcf7-validates-as-url').change(function() {
            $(this).wpcf7NormalizeUrl();
        });
    };

    $.wpcf7AjaxSuccess = function(data, status, xhr, $form) {
        if (! $.isPlainObject(data) || $.isEmptyObject(data)) {
            return;
        }

        var $responseOutput = $form.find('div.wpcf7-response-output');

        $form.wpcf7ClearResponseOutput();

        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');

        if (data.captcha) {
            $form.wpcf7RefillCaptcha(data.captcha);
        }

        if (data.quiz) {
            $form.wpcf7RefillQuiz(data.quiz);
        }

        if (data.invalids) {
            $.each(data.invalids, function(i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            });

            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');

            $(data.into).trigger('wpcf7:invalid');
            $(data.into).trigger('invalid.wpcf7'); // deprecated

        } else if (1 == data.spam) {
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');

            $(data.into).trigger('wpcf7:spam');
            $(data.into).trigger('spam.wpcf7'); // deprecated

        } else if (1 == data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');

            if (data.onSentOk) {
                $.each(data.onSentOk, function(i, n) { eval(n) });
            }

            $(data.into).trigger('wpcf7:mailsent');
            $(data.into).trigger('mailsent.wpcf7'); // deprecated

        } else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');

            $(data.into).trigger('wpcf7:mailfailed');
            $(data.into).trigger('mailfailed.wpcf7'); // deprecated
        }

        if (data.onSubmit) {
            $.each(data.onSubmit, function(i, n) { eval(n) });
        }

        $(data.into).trigger('wpcf7:submit');
        $(data.into).trigger('submit.wpcf7'); // deprecated

        if (1 == data.mailSent) {
            $form.resetForm();
        }

        $form.find('[placeholder].placeheld').each(function(i, n) {
            $(n).val($(n).attr('placeholder'));
        });

        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role', 'alert');

        $.wpcf7UpdateScreenReaderResponse($form, data);
    };

    $.fn.wpcf7ExclusiveCheckbox = function() {
        return this.find('input:checkbox').click(function() {
            var name = $(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
    };

    $.fn.wpcf7Placeholder = function() {
        if (_wpcf7.supportHtml5.placeholder) {
            return this;
        }

        return this.each(function() {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');

            $(this).focus(function() {
                if ($(this).hasClass('placeheld'))
                    $(this).val('').removeClass('placeheld');
            });

            $(this).blur(function() {
                if ('' == $(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            });
        });
    };

    $.fn.wpcf7AjaxLoader = function() {
        return this.each(function() {
            var loader = $('<img class="ajax-loader" />')
                .attr({ src: _wpcf7.loaderUrl, alt: _wpcf7.sending })
                .css('visibility', 'hidden');

            $(this).after(loader);
        });
    };

    $.fn.wpcf7ToggleSubmit = function() {
        return this.each(function() {
            var form = $(this);

            if (this.tagName.toLowerCase() != 'form') {
                form = $(this).find('form').first();
            }

            if (form.hasClass('wpcf7-acceptance-as-validation')) {
                return;
            }

            var submit = form.find('input:submit');
            if (! submit.length) return;

            var acceptances = form.find('input:checkbox.wpcf7-acceptance');
            if (! acceptances.length) return;

            submit.removeAttr('disabled');
            acceptances.each(function(i, n) {
                n = $(n);
                if (n.hasClass('wpcf7-invert') && n.is(':checked')
                    || ! n.hasClass('wpcf7-invert') && ! n.is(':checked')) {
                    submit.attr('disabled', 'disabled');
                }
            });
        });
    };

    $.fn.wpcf7ToggleCheckboxFreetext = function() {
        return this.each(function() {
            var $wrap = $(this).closest('.wpcf7-form-control');

            if ($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            } else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }

            $wrap.find(':checkbox, :radio').change(function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext = $(':input.wpcf7-free-text', $wrap);

                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
    };

    $.fn.wpcf7CharacterCount = function() {
        return this.each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);

            var updateCount = function($target) {
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);

                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }

                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };

            $count.closest('form').find(':input[name="' + name + '"]').each(function() {
                updateCount($(this));

                $(this).keyup(function() {
                    updateCount($(this));
                });
            });
        });
    };

    $.fn.wpcf7NormalizeUrl = function() {
        return this.each(function() {
            var val = $.trim($(this).val());

            if (val && ! val.match(/^[a-z][a-z0-9.+-]*:/i)) { // check the scheme part
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }

            $(this).val(val);
        });
    };

    $.fn.wpcf7NotValidTip = function(message) {
        return this.each(function() {
            var $into = $(this);

            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');

            if ($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function() {
                    $(this).wpcf7FadeOut();
                });

                $(':input', $into).focus(function() {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                });
            }
        });
    };

    $.fn.wpcf7FadeOut = function() {
        return this.each(function() {
            $(this).animate({
                opacity: 0
            }, 'fast', function() {
                $(this).css({'z-index': -100});
            });
        });
    };

    $.fn.wpcf7OnloadRefill = function() {
        return this.each(function() {
            var url = $(this).attr('action');

            if (0 < url.indexOf('#')) {
                url = url.substr(0, url.indexOf('#'));
            }

            var id = $(this).find('input[name="_wpcf7"]').val();
            var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();

            $.getJSON(url,
                { _wpcf7_is_ajax_call: 1, _wpcf7: id, _wpcf7_request_ver: $.now() },
                function(data) {
                    if (data && data.captcha) {
                        $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
                    }

                    if (data && data.quiz) {
                        $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
                    }
                }
            );
        });
    };

    $.fn.wpcf7RefillCaptcha = function(captcha) {
        return this.each(function() {
            var form = $(this);

            $.each(captcha, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        });
    };

    $.fn.wpcf7RefillQuiz = function(quiz) {
        return this.each(function() {
            var form = $(this);

            $.each(quiz, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        });
    };

    $.fn.wpcf7ClearResponseOutput = function() {
        return this.each(function() {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('img.ajax-loader').css({ visibility: 'hidden' });
        });
    };

    $.wpcf7UpdateScreenReaderResponse = function($form, data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');

        if (data.message) {
            var $response = $form.siblings('.screen-reader-response').first();
            $response.append(data.message);

            if (data.invalids) {
                var $invalids = $('<ul></ul>');

                $.each(data.invalids, function(i, n) {
                    if (n.idref) {
                        var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                    } else {
                        var $li = $('<li></li>').append(n.message);
                    }

                    $invalids.append($li);
                });

                $response.append($invalids);
            }

            $response.attr('role', 'alert').focus();
        }
    };

    $.wpcf7SupportHtml5 = function() {
        var features = {};
        var input = document.createElement('input');

        features.placeholder = 'placeholder' in input;

        var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];

        $.each(inputTypes, function(index, value) {
            input.setAttribute('type', value);
            features[value] = input.type !== 'text';
        });

        return features;
    };

    $(function() {
        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    });

})(jQuery);
