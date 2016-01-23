<div class="container">

<div class="row">
<div class="col-md-8 col-xs-12">
    <div class="row" style="border: 1px solid black; height: 550px; width: 100%;margin-left: 0%; background-image: url('bg1.jpg');  background-size:cover; opacity:0.5;">
        <canvas id="myCanvas" style="border:1px solid #000000;">
        </canvas>
    </div>
    <div class="row" style="margin-top: 2%;">
        <div class="col-md-6 col-xs-12">
            <div class="col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="wan-spinner wan-spinner-1">
                    <a href="javascript:void(0)" class="minus" style="line-height: 0em;padding: 14px;">
                        -
                    </a>
                    <input type="text" value="1" style="width: 100px; padding: 14px;"/>
                    <a href="javascript:void(0)" class="plus" style="line-height: 0em;padding: 15px; width:0%;">
                        +
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xs-12" align="right" style = "padding: 0px;margin: 0px;">
            <div class="btn-group" role="group" aria-label="..." style="    width: 71%;">
                <div class="col-md-8 col-xs-12">
                    <div class="col-md-12 col-xs-12"  style="padding: 0px;margin: 0px;">
                        <button type="button" class="btn btn-warning" style="">
                            Undo
                        </button>
                        <button type="button" class="btn btn-warning" style="">
                            Redo
                        </button>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="col-md-12 col-xs-12"  style="padding: 0px;margin: 0px;">
                        <button type="button" class="btn btn-primary" style="">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-md-4 col-xs-12">
<div id="settingOpt" align="right" style="display: none;">
    <button type="button" id="settingbtn" class="btn btn-primary">Settings</button>
</div>
<div id="textOpt" style="display: none;">
    <div style="font-size: 16px;margin: 0px;padding: 0px;font-weight: bold;margin-top: 10px;">
    TEXT:
    </div>
    <hr style="width: 100%;margin: 0px;padding: 0px;">
    <div class="input-group "style="width: 100%; margin-top:5%;">
        <textarea id="addText" type="textbox" placeholder="" class="form-control"style="height: 200px; margin-top: 10px;border-radius: 5px;"></textarea>
    </div>
    <div class="row mtop" >
        <div class="col-md-6" style="margin: 0px;padding: 0px;">
            <div class="col-md-12 col-xs-12">
                <div class="textalign" style="font-weight: bold;">
                    SIZE:
                </div>
            </div>
            <div class="col-md-12 col-xs-12">
                <input id="fontSize" class="form-control" type="number" min="0" step="1" value ="12"/>
            </div>
        </div>
        <div class="col-md-6"  style="margin: 0px;padding: 0px;">
            <div class="col-md-12 col-xs-12">
                <div class="textalign" style="font-weight: bold;">
                    FONT:
                </div>
            </div>
            <div class="col-md-12">
                <select class="form-control" id="text-transform" style="width: 100%;">
                    <option value="none">
                        font  size
                    </option>
                    <option value="capitalize">

                        capitalize

                    </option>
                    <option value="uppercase">

                        uppercase

                    </option>
                    <option value="lowercase">

                        lowercase

                    </option>
                    <option value="initial">

                        initial

                    </option>
                    <option value="inherit">

                        inherit

                    </option>
                </select>
            </div>
        </div>
    </div>
    <div class="row mtop" >
        <div class="col-md-2 col-xs-12">
            <div class=" col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="textalign" style="font-weight: bold;">
                    STYLE:
                </div>
            </div>
        </div>
        <div class="col-md-10 col-xs-12">
            <div class=" col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="btn-group" role="group" aria-label="..." style="width : 100%;">
                    <button type="button" id="bold" class="btn btn-default" style="width: 25%;" ><span class="glyphicon glyphicon-bold" aria-hidden="true"></button>
                    <button type="button" id="italic" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-italic" aria-hidden="true"></button>
                    <button type="button" id="underline" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-magnet" aria-hidden="true"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="row mtop" >
        <div class="col-md-2 col-xs-12">
            <div class=" col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="textalign" style="font-weight: bold;">
                    ALIGN:
                </div>
            </div>
        </div>
        <div class="col-md-10 col-xs-12">
            <div class=" col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="btn-group" role="group" aria-label="..." style="width : 100%;">
                    <button type="button" id="left" class="btn btn-default" style="width: 25%;" ><span class="glyphicon glyphicon-align-left" aria-hidden="true"></button>
                    <button type="button" id="right" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-right" aria-hidden="true"></button>
                    <button type="button" id="center" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-center" aria-hidden="true"></button>
                    <button type="button" id="justify" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="row mtop" >
        <div class="col-md-2 col-xs-2 " style="font-weight: bold;padding-top: 3px;margin-right: 15px;">
            FILL:
        </div>
        <div class="col-md-9 col-xs-9" style="padding: 0px;margin: 0px;font-weight: bold;">
            <div id="picker"></div>
        </div>
    </div>
</div>
<div id="imageOpt" style="display: none;">
<div class="row mtop" >
    <div class=" col-md-12 col-xs-12">
        <div style="font-size: 16px;margin: 0px;padding: 0px;font-weight: bold;">
            IMAGE:
        </div>
        <hr style="width: 100%;margin: 0px;padding: 0px;">
    </div>
    <div class="col-md-12 col-xs-12">
        <div class="rect1" style="width: 100%;margin-top: 10px;">
            <div class="col-md-4 col-xs-12" style="padding: 0px;margin: 0px;">
                <button type="button" id="Up-imageUpload" class="btn btn-primary btn-sm" style="font-size: 16px;">Choose File</button>
            </div>
            <div class="col-md-8 col-xs-12">
                <div class="textalign" style="font-size: 14px;margin-right: 5px;">
                    No file choosen
                </div>
            </div>
        </div>
    </div>

    <div  class="col-md-12 col-xs-12" align="center" style="margin-top: 10px;">
        <button type="button" id="editImage" class="btn btn-primary btn-sm" style="font-size: 16px;">Edit Image</button>
    </div>

</div>
</div>
<div id="colorStyleOpt">
<div class="row" >
    <div class="col-md-12 col-xs-12">
        <div style="font-size: 16px;margin: 0px;padding: 0px;font-weight: bold;margin-top: 15px;">
            COLOR STYLES:
        </div>
        <hr style="width: 100%;margin: 0px;padding: 0px; margin-bottom: 10px;">
    </div>
</div>
<div class="row">
    <div class="col-md-9 col-xs-12" >
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div class="square1"></div>
        </div>
    </div>
    <div class="col-md-3 col-xs-12"style="margin:0px;padding:0px;">
        <div class="col-md-12 col-xs-12">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE1
            </label>
        </div>
    </div>
</div>
<div class="row mtop1">
    <div class="col-md-9 col-xs-12"style="margin:0px;padding:0px;">
        <div class="col-md-12 col-xs-12"style="magin-bottom:10px">
            <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-xs-12"style="margin:0px;padding:0px;">
        <div class="col-md-12">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE2
            </label>
        </div>
    </div>
</div>
<div class="row mtop1">
    <div class="col-md-9"style="margin:0px;padding:0px;">
        <div class="col-md-12 col-xs-12"style="magin-bottom:10px">
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-xs-12"style="margin:0px;padding:0px;">
        <div class="col-md-12 col-xs-12">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE3
            </label>
        </div>
    </div>
</div>
<div class="row mtop1">
    <div class="col-md-9 col-xs-12" style="margin:0px;padding:0px;">
        <div class="col-md-12 col-xs-12"style="magin-bottom:10px">
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-xs-12" style="margin:0px;padding:0px;">
        <div class="col-md-12 col-xs-12">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE4
            </label>
        </div>
    </div>
</div>
<div class="row mtop1">
    <div class="col-md-9 col-xs-12" style="margin:0px;padding:0px;">
        <div class="col-md-12 col-xs-12"style="magin-bottom:10px">
            <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div class="square1"></div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-xs-12" style="margin:0px;padding:0px;">
        <div class="col-md-12">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE5
            </label>
        </div>
    </div>
</div>
</div>
</div>
</div>

<div class="row mtop">
    <div class="col-md-6 col-xs-12" style="margin:0px;padding :0px;">
        <button type="button" class="btn btn-primary">GO BACK</button>
    </div>
    <div class="col-md-6 col-xs-12"align="right" style="margin:0px;padding:0px;">
        <button type="button" class="btn btn-primary">SAVE&CONTINUE</button>
    </div>
</div>
</div>
<input type="hidden" id="base_url" value ="<?php echo base_url() ?>">
<div style="display: none;">
<input type = "file" style="display:none;" id="imageUpload">
</div>