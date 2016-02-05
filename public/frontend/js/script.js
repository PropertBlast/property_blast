var _selectedFile = "";
var _FlyerType = "";
var _FlyerXsize = 0;
var _FlyerYsize = 0;
var i = 1;
var _lockFlag = 1;
var _randomID = 1;
var _flag = 0;
var obj;

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
    var _json = {"objects":[{"type":"path-group","index":"0","id":"set-id-1","class":"color","originX":"left","originY":"top","left":-11,"top":-5,"width":361.96,"height":361.96,"fill":"#525252","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1.7,"scaleY":0.61,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","index":"1","originX":"left","originY":"top","left":0.01,"top":0.01,"width":361.95,"height":361.95,"fill":"#525252","stroke":"#525252","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"evenodd","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",361.961,0.28],["c",0,120.563,0,241.114,0,361.681],["c",-120.635,0,-241.291,0,-361.921,0],["C",0.2,241.401,-0.28,120.195,0.28,0.04],["C",120.754,0.2,241.891,-0.28,361.961,0.28],["z"]],"pathOffset":{"x":180.98668028233456,"y":180.98668028233453}}]},{"type":"textbox","index":"2","originX":"left","originY":"top","left":73,"top":28,"width":436.5,"height":73.4,"fill":"#ededed","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"05604b-057f-1998e5","class":"text","text":"ILL SELL YOUR HOME - FAST\nITS TIME TO MOVE ON","fontSize":28,"fontWeight":"normal","fontFamily":"Open Sans","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","index":"3","originX":"left","originY":"top","left":97,"top":123,"width":370.49,"height":28.84,"fill":"#f0f0f0","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"e4076d-49ec-6cc653","class":"text","text":"Your last agent failed you.\nIts time to move on with an expert seasoned real estate agent.","fontSize":11,"fontWeight":"normal","fontFamily":"Verdana","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"path-group","index":"4","id":"set-id-2","class":"color","originX":"left","originY":"top","left":-39,"top":214,"width":185,"height":185,"fill":"#28485e","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":3.41,"scaleY":1.81,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","index":"5","originX":"left","originY":"top","left":0,"top":0,"width":185,"height":185,"fill":"#28485e","stroke":"#28485e","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",0,0],["h",185],["v",185],["H",0],["V",0],["z"]],"pathOffset":{"x":92.5,"y":92.5}}]},{"type":"textbox","index":"6","originX":"left","originY":"top","left":19,"top":323,"width":297.5,"height":94.38,"fill":"#e8e8e8","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"45b41a-62e1-043293","class":"text","text":"Top agents sell homes for more money and faster than any other agent. \n\nWas your last agent a top agent?","fontSize":18,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"path-group","index":"7","id":"set-id-3","class":"color","originX":"left","originY":"top","left":26,"top":548,"width":29.11,"height":29.11,"fill":"#f03232","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":7.78,"scaleY":7.78,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","index":"8","originX":"left","originY":"top","left":0,"top":0,"width":29.11,"height":29.11,"fill":"#f03232","stroke":"#f03232","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",14.554,0],["C",6.561,0,0,6.562,0,14.552],["c",0,7.996,6.561,14.555,14.554,14.555],["c",7.996,0,14.553,-6.559,14.553,-14.555],["C",29.106,6.562,22.55,0,14.554,0],["z"]],"pathOffset":{"x":14.5535,"y":14.5535}}]},{"type":"path-group","index":"9","id":"set-id-4","class":"color","originX":"left","originY":"top","left":294.2,"top":548,"width":29.11,"height":29.11,"fill":"#355770","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":7.4,"scaleY":7.4,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","index":"10","originX":"left","originY":"top","left":0,"top":0,"width":29.11,"height":29.11,"fill":"#355770","stroke":"#355770","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",14.554,0],["C",6.561,0,0,6.562,0,14.552],["c",0,7.996,6.561,14.555,14.554,14.555],["c",7.996,0,14.553,-6.559,14.553,-14.555],["C",29.106,6.562,22.55,0,14.554,0],["z"]],"pathOffset":{"x":14.5535,"y":14.5535}}]},{"type":"textbox","index":"11","originX":"left","originY":"top","left":319,"top":573,"width":166.51,"height":52.43,"fill":"#d1d1d1","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"75865f-6683-f3fdb1","class":"text","text":"More Eyes On Your Home","fontSize":20,"fontWeight":"bold","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","index":"12","originX":"left","originY":"top","left":308,"top":629,"width":195.52,"height":102.24,"fill":"#cc423d","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"f4a4ff-0725-c22060","class":"text","text":"I have a huge buyer network that you can have access to the second we start working together. This along with superior online and offline marketing will get your home sold.","fontSize":13,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","index":"13","originX":"left","originY":"top","left":72,"top":577,"width":135.51,"height":44.57,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"616a78-07ce-388335","class":"text","text":"More Money In Your Pocket","fontSize":17,"fontWeight":"bold","fontFamily":"Times New Roman","fontStyle":"italic","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","index":"14","originX":"left","originY":"top","left":52.49,"top":627,"width":186.51,"height":110.11,"fill":"#999999","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"c25f95-23ea-04a199","class":"text","text":"To get more money for your home you have to market it well. Something as small as the flyers can effect potential buyers perspectives. I can do this better than anyone else.","fontSize":14,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"image","index":"15","originX":"left","originY":"top","left":-1,"top":749.3,"width":128,"height":128,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.9,"scaleY":0.9,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"c39271-89c1-ee43b4","class":"image","original_scaleX":1,"original_scaleY":1,"original_left":288,"original_top":216,"class":"image","src":"http://localhost:90/property_blast/abc.jpg","lockMovementX": "true","lockMovementY": "true","lockRotation": "true","lockScalingX": "true","lockScalingY": "true","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"},{"type":"textbox","index":"16","originX":"left","originY":"top","left":228.5,"top":773,"width":349,"height":28.84,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"7056f3-efc5-009ac6","class":"text","text":"Call Today For a FREE Consultation","fontSize":22,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","index":"17","originX":"left","originY":"top","left":354,"top":796,"width":200,"height":62.92,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"9e459f-ec04-2fc55a","class":"text","text":"Emily Stanfield\nRealtor\n714 350 8290\nsupport@flyerco.com","fontSize":12,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"right","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"path-group","index":"18","id":"set-id-5","class":"color","originX":"left","originY":"top","left":346.7,"top":282,"width":352.62,"height":352.62,"fill":"#a3a31c","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.55,"scaleY":0.55,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","index":"19","originX":"left","originY":"top","left":0,"top":20.57,"width":353.23,"height":311.49,"fill":"#a3a31c","stroke":"#a3a31c","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",337.222,22.952],["c",-15.912,-8.568,-33.66,7.956,-44.064,17.748],["c",-23.867,23.256,-44.063,50.184,-66.708,74.664],["c",-25.092,26.928,-48.348,53.856,-74.052,80.173],["c",-14.688,14.688,-30.6,30.6,-40.392,48.96],["c",-22.032,-21.421,-41.004,-44.677,-65.484,-63.648],["c",-17.748,-13.464,-47.124,-23.256,-46.512,9.18],["c",1.224,42.229,38.556,87.517,66.096,116.28],["c",11.628,12.24,26.928,25.092,44.676,25.704],["c",21.42,1.224,43.452,-24.48,56.304,-38.556],["c",22.645,-24.48,41.005,-52.021,61.812,-77.112],["c",26.928,-33.048,54.468,-65.485,80.784,-99.145],["C",326.206,96.392,378.226,44.983,337.222,22.952],["z"],["M",26.937,187.581],["c",-0.612,0,-1.224,0,-2.448,0.611],["c",-2.448,-0.611,-4.284,-1.224,-6.732,-2.448],["l",0,0],["C",19.593,184.52,22.653,185.132,26.937,187.581],["z"]],"pathOffset":{"x":176.61637020435143,"y":176.31065391630545}}]},{"type":"path-group","index":"20","id":"set-id-6","class":"color","originX":"left","originY":"top","left":364,"top":289.3,"width":492.72,"height":492.72,"fill":"#fc1225","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.14,"scaleY":0.14,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","index":"21","originX":"left","originY":"top","left":0,"top":32.95,"width":492.72,"height":426.82,"fill":"#fc1225","stroke":"#fc1225","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",492.719,166.008],["c",0,-73.486,-59.573,-133.056,-133.059,-133.056],["c",-47.985,0,-89.891,25.484,-113.302,63.569],["c",-23.408,-38.085,-65.332,-63.569,-113.316,-63.569],["C",59.556,32.952,0,92.522,0,166.008],["c",0,40.009,17.729,75.803,45.671,100.178],["l",188.545,188.553],["c",3.22,3.22,7.587,5.029,12.142,5.029],["c",4.555,0,8.922,-1.809,12.142,-5.029],["l",188.545,-188.553],["C",474.988,241.811,492.719,206.017,492.719,166.008],["z"]],"pathOffset":{"x":246.3595,"y":246.36}}]}],"background":"#fff"};
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

    $('#col-picker').colorpicker({color:'#31859b', defaultPalette:'web'});
    $('#col-picker').colorpicker({showOn:'button'});
    $("#col-picker").trigger();

	$('body').delegate('#zoom','click',function(){
		$('#zoom-menu').css("display", "block");
	});
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


    $('#imageUpload').change(function(){
        readURL(this)
    });
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                proFabric.replaceImg(e.target.result);
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
    $("body").delegate('#addTextbtn', 'click', function() {
        var obj;
        var hex_Col = proFabric.rgb2hex($('#picker').css('borderBottomColor'));
        var txt = "Hello World";
        obj = {
            text: txt,
            color: hex_Col,
            fontSize: $("#FontSize").val(),
            fontFamily: $("#FontFamily").val()
        };
        proFabric.text.add(obj);
        event.preventDefault();
        var txt = $("#addText").val();
        proFabric.text.add(txt);
    });
    $('#addText').bind('input', function() {
        proFabric.text.SetText($("#addText").val());
    });
    $( "#addText" ).keyup(function() {
        proFabric.text.SetText($("#addText").val());
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
    $("body").delegate('.minus', 'click', function() {
        var value = $("#zoom").val();

        var decreament = 20;
        value=value-decreament;
        $("#zoom").val("");
        $("#zoom").val(value);
        console.log("===========>> "+value);
        proFabric.zoomcanvas(value);
    });
	$("body").delegate('body', 'click', function() {
		$('#zoom-menu').css("display", "none");
		});
	$('#zoom-menu li').click(function(){
		var value = $(this).val();
		$("#zoom").val(value);
		$('#zoom-menu').css("display", "none");
		 proFabric.zoomcanvas(value);
	});
    $("body").delegate('.plus', 'click', function() {
        var value = $("#zoom").val();
        var increament = 20;
        if(value<=0) {
            value = -Math.abs(value) + Math.abs(increament);
        }
        else {
            value = Math.abs(value) + Math.abs(increament);
        }
        $("#zoom").val("");
        $("#zoom").val(value);
        console.log("===========>> "+value);
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
