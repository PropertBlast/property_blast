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
    var _json = {"objects":[{"type":"path-group","id":"set-id-1","class":"color","originX":"left","originY":"top","left":-11,"top":-5,"width":361.96,"height":361.96,"fill":"#525252","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1.7,"scaleY":0.61,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","originX":"left","originY":"top","left":0.01,"top":0.01,"width":361.95,"height":361.95,"fill":"#525252","stroke":"#525252","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"evenodd","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",361.961,0.28],["c",0,120.563,0,241.114,0,361.681],["c",-120.635,0,-241.291,0,-361.921,0],["C",0.2,241.401,-0.28,120.195,0.28,0.04],["C",120.754,0.2,241.891,-0.28,361.961,0.28],["z"]],"pathOffset":{"x":180.98668028233456,"y":180.98668028233453}}]},{"type":"textbox","originX":"left","originY":"top","left":73,"top":28,"width":436.5,"height":73.4,"fill":"#ededed","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"05604b-057f-1998e5","class":"text","text":"ILL SELL YOUR HOME - FAST\nITS TIME TO MOVE ON","fontSize":28,"fontWeight":"normal","fontFamily":"Open Sans","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","originX":"left","originY":"top","left":97,"top":123,"width":370.49,"height":28.84,"fill":"#f0f0f0","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"e4076d-49ec-6cc653","class":"text","text":"Your last agent failed you.\nIts time to move on with an expert seasoned real estate agent.","fontSize":11,"fontWeight":"normal","fontFamily":"Verdana","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"path-group","id":"set-id-2","class":"color","originX":"left","originY":"top","left":-39,"top":214,"width":185,"height":185,"fill":"#28485e","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":3.41,"scaleY":1.81,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","originX":"left","originY":"top","left":0,"top":0,"width":185,"height":185,"fill":"#28485e","stroke":"#28485e","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",0,0],["h",185],["v",185],["H",0],["V",0],["z"]],"pathOffset":{"x":92.5,"y":92.5}}]},{"type":"textbox","originX":"left","originY":"top","left":19,"top":323,"width":297.5,"height":94.38,"fill":"#e8e8e8","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"45b41a-62e1-043293","class":"text","text":"Top agents sell homes for more money and faster than any other agent. \n\nWas your last agent a top agent?","fontSize":18,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"path-group","id":"set-id-3","class":"color","originX":"left","originY":"top","left":26,"top":548,"width":29.11,"height":29.11,"fill":"#f03232","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":7.78,"scaleY":7.78,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","originX":"left","originY":"top","left":0,"top":0,"width":29.11,"height":29.11,"fill":"#f03232","stroke":"#f03232","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",14.554,0],["C",6.561,0,0,6.562,0,14.552],["c",0,7.996,6.561,14.555,14.554,14.555],["c",7.996,0,14.553,-6.559,14.553,-14.555],["C",29.106,6.562,22.55,0,14.554,0],["z"]],"pathOffset":{"x":14.5535,"y":14.5535}}]},{"type":"path-group","id":"set-id-4","class":"color","originX":"left","originY":"top","left":294.2,"top":548,"width":29.11,"height":29.11,"fill":"#355770","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":7.4,"scaleY":7.4,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","originX":"left","originY":"top","left":0,"top":0,"width":29.11,"height":29.11,"fill":"#355770","stroke":"#355770","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",14.554,0],["C",6.561,0,0,6.562,0,14.552],["c",0,7.996,6.561,14.555,14.554,14.555],["c",7.996,0,14.553,-6.559,14.553,-14.555],["C",29.106,6.562,22.55,0,14.554,0],["z"]],"pathOffset":{"x":14.5535,"y":14.5535}}]},{"type":"textbox","originX":"left","originY":"top","left":319,"top":573,"width":166.51,"height":52.43,"fill":"#d1d1d1","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"75865f-6683-f3fdb1","class":"text","text":"More Eyes On Your Home","fontSize":20,"fontWeight":"bold","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","originX":"left","originY":"top","left":308,"top":629,"width":195.52,"height":102.24,"fill":"#cc423d","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"f4a4ff-0725-c22060","class":"text","text":"I have a huge buyer network that you can have access to the second we start working together. This along with superior online and offline marketing will get your home sold.","fontSize":13,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","originX":"left","originY":"top","left":72,"top":577,"width":135.51,"height":44.57,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"616a78-07ce-388335","class":"text","text":"More Money In Your Pocket","fontSize":17,"fontWeight":"bold","fontFamily":"Times New Roman","fontStyle":"italic","lineHeight":1.16,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","originX":"left","originY":"top","left":52.49,"top":627,"width":186.51,"height":110.11,"fill":"#999999","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"c25f95-23ea-04a199","class":"text","text":"To get more money for your home you have to market it well. Something as small as the flyers can effect potential buyers perspectives. I can do this better than anyone else.","fontSize":14,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"image","originX":"left","originY":"top","left":-1,"top":749.3,"width":128,"height":128,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.9,"scaleY":0.9,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"c39271-89c1-ee43b4","class":"image","original_scaleX":1,"original_scaleY":1,"original_left":288,"original_top":216,"class":"image","src":"http://localhost:90/property_blast/abc.jpg","lockMovementX": "true","lockMovementY": "true","lockRotation": "true","lockScalingX": "true","lockScalingY": "true","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"},{"type":"textbox","originX":"left","originY":"top","left":228.5,"top":773,"width":349,"height":28.84,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"7056f3-efc5-009ac6","class":"text","text":"Call Today For a FREE Consultation","fontSize":22,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"textbox","originX":"left","originY":"top","left":354,"top":796,"width":200,"height":62.92,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":"9e459f-ec04-2fc55a","class":"text","text":"Emily Stanfield\nRealtor\n714 350 8290\nsupport@flyerco.com","fontSize":12,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"right","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"path-group","id":"set-id-5","class":"color","originX":"left","originY":"top","left":346.7,"top":282,"width":352.62,"height":352.62,"fill":"#a3a31c","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.55,"scaleY":0.55,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","originX":"left","originY":"top","left":0,"top":20.57,"width":353.23,"height":311.49,"fill":"#a3a31c","stroke":"#a3a31c","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",337.222,22.952],["c",-15.912,-8.568,-33.66,7.956,-44.064,17.748],["c",-23.867,23.256,-44.063,50.184,-66.708,74.664],["c",-25.092,26.928,-48.348,53.856,-74.052,80.173],["c",-14.688,14.688,-30.6,30.6,-40.392,48.96],["c",-22.032,-21.421,-41.004,-44.677,-65.484,-63.648],["c",-17.748,-13.464,-47.124,-23.256,-46.512,9.18],["c",1.224,42.229,38.556,87.517,66.096,116.28],["c",11.628,12.24,26.928,25.092,44.676,25.704],["c",21.42,1.224,43.452,-24.48,56.304,-38.556],["c",22.645,-24.48,41.005,-52.021,61.812,-77.112],["c",26.928,-33.048,54.468,-65.485,80.784,-99.145],["C",326.206,96.392,378.226,44.983,337.222,22.952],["z"],["M",26.937,187.581],["c",-0.612,0,-1.224,0,-2.448,0.611],["c",-2.448,-0.611,-4.284,-1.224,-6.732,-2.448],["l",0,0],["C",19.593,184.52,22.653,185.132,26.937,187.581],["z"]],"pathOffset":{"x":176.61637020435143,"y":176.31065391630545}}]},{"type":"path-group","id":"set-id-6","class":"color","originX":"left","originY":"top","left":364,"top":289.3,"width":492.72,"height":492.72,"fill":"#fc1225","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.14,"scaleY":0.14,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","originX":"left","originY":"top","left":0,"top":32.95,"width":492.72,"height":426.82,"fill":"#fc1225","stroke":"#fc1225","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"id":null,"class":null,"original_scaleX":null,"original_scaleY":null,"original_left":null,"original_top":null,"path":[["M",492.719,166.008],["c",0,-73.486,-59.573,-133.056,-133.059,-133.056],["c",-47.985,0,-89.891,25.484,-113.302,63.569],["c",-23.408,-38.085,-65.332,-63.569,-113.316,-63.569],["C",59.556,32.952,0,92.522,0,166.008],["c",0,40.009,17.729,75.803,45.671,100.178],["l",188.545,188.553],["c",3.22,3.22,7.587,5.029,12.142,5.029],["c",4.555,0,8.922,-1.809,12.142,-5.029],["l",188.545,-188.553],["C",474.988,241.811,492.719,206.017,492.719,166.008],["z"]],"pathOffset":{"x":246.3595,"y":246.36}}]}],"background":"#fff"};
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
    //console.log(sets);
    var j = 1;
    i = 1;
    $.each(sets, function (index, obj) {
        $.each(obj, function (index, obj1) {
            $('#C' + i + j).css("background-color", obj1.color);
            //console.log(obj1.color + " :: " + 'C' + i + j);
            ++j;
        });
        //console.log(">>>>><<<<<<");
        j = 1;
        ++i;
    });

    /*var width = proFabric.get.width();
    var height = proFabric.get.height();
    for (var i = 0; i < 6; i++) {
        obj = {
            left: (width/15) +(i*90),
            top: (height/ 4) +(i*30),
            id: 'set-id-'+(i+1)
        };
        proFabric.text.add("Colorful Text",obj);
    }*/
    //$("#Ccol-1").hover(function () {
    //    //$(this).find( "#C11" ).removeClass('square1');
    //    $(this).find( "#C11" ).addClass('square2');
    //},function () {
    //    //$(this).find( "#C12" ).removeClass('square1');
    //    $(this).find( "#C12" ).addClass('square2');
    //},function () {
    //    //$(this).find( "#C13" ).removeClass('square1');
    //    $(this).find( "#C13" ).addClass('square2');
    //},function () {
    //    //$(this).find( "#C14" ).removeClass('square1');
    //    $(this).find( "#C14" ).addClass('square2');
    //},function () {
    //    //$(this).find( "#C15" ).removeClass('square1');
    //    $(this).find( "#C15" ).addClass('square2');
    //},function () {
    //    //$(this).find( "#C16" ).removeClass('square1');
    //    $(this).find( "#C16" ).addClass('square2');
    //});
    //$("#Ccol-2").hover(function () {
    //    $(this).addClass('square2');
    //});
    //$("#Ccol-3").hover(function () {
    //    $(this).addClass('square2');
    //});
    //$("#Ccol-4").hover(function () {
    //    $(this).addClass('square2');
    //});
    //$("#Ccol-5").hover(function () {
    //    $(this).addClass('square2');
    //});
    //$("#Ccol-6").hover(function () {
    //    $(this).addClass('square2');
    //});
    $('body').delegate('.color-pallet-row','click',function(){
        $.each($('body').find('.square1'),function(index,obj){
            $(obj).removeClass('square1active');
        });
        $.each($(this).find('.square1'),function(index,obj){
            $(obj).addClass('square1active');
        });
        $.each($('body').find('.textalign'),function(index,obj){
            $(obj).removeClass('textalignactive');
        });
        $.each($(this).find('.textalign'),function(index,obj){
            $(obj).addClass('textalignactive');
        });
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
                //console.log(e.target.result);
                proFabric.replaceImg(e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("body").delegate('#Up-imageUpload', 'click', function(event) {
        $( "#imageUpload" ).trigger( "click" );
    });

    $("body").delegate('#crop-Done-btn', 'click', function(event) {
        console.log('x : '+obj.x);
        console.log('y : '+obj.y);
        console.log('Width : '+obj.width);
        console.log('Height : '+obj.height);
        console.log('Rotate : '+obj.rotate);
        console.log('ScaleX : '+obj.scaleX);
        console.log('ScaleY : '+obj.scaleY);
        console.log('Src : '+obj.src);
        console.log('Image Height : '+obj.imgHeight);
        console.log('Image Width : '+obj.imgWidth);
        proFabric.newImg(obj);
        $('#crop-End-btn').trigger('click');
        //$('#modal').modal('toggle');
        //console.log(' I AM HERE IN CROP ');
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
            //proFabric.text.SetTextColor('#' + hex);
            proFabric.text.set({
                fill: '#' + hex
            });
            // if(!bySetColor) $(el).val(hex);
        }
    });
    /*.keyup(function(){
        $(this).colpickSetColor(this.value);
    });*/

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
    $("body").delegate('_dummy_', 'click', function() {
        proFabric.set.lock();
    });
    $("body").delegate('_dummy_', 'click', function() {
        proFabric.text.bringTextToFront();
        console.log("#bringToFront");
    });
    $("body").delegate('_dummy_', 'click', function() {
        proFabric.text.bringTextToBack();
        console.log("#bringToBack");
    });
    $("body").delegate('_dummy_', 'click', function() {
        proFabric.delete('text');
    });
    $(document).delegate("_dummy_", "click", function() {
        var id = proFabric.color.add($(this).attr("src"));
    });
    $(document).delegate("_dummy_", "click", function() {
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


