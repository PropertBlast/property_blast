<div class="container">

<div class="row">
<div class="col-md-8 col-xs-12">
    <div class="row" align="center" style="border: 1px solid black; height: 866px; width: 100%;margin-left: 0%;  background-size:cover;">
        <canvas id="myCanvas" style="border:1px solid #000000;">
        </canvas>
    </div>
    <div class="row" style="margin-top: 2%;">
        <div class="col-md-4 col-xs-12" style = "margin-bottom: 5px;">
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
        <div class="col-md-8 col-xs-12" align="right" style = "padding: 0px;margin: 0px;margin-bottom: 5px;">
            <div class="btn-group" role="group" aria-label="..." >
                <div class="col-md-8 col-xs-12" align="center" style = "margin-bottom: 5px;">
                    <div class="col-md-6 col-xs-6"><button type="button" style="width: 80px" class="btn btn-warning btn-sm">
                        Undo
                    </button></div>
                    <div class="col-md-6 col-xs-6"><button type="button" style="width: 80px" class="btn btn-warning btn-sm">
                        Redo
                    </button></div>
                </div>
                <div class="col-md-4 col-xs-12" align="center">
                    <button type="button" class="btn btn-primary btn-sm">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-md-4 col-xs-12">
<div id="settingOpt" align="right" style="display: none;">
    <button type="button" id="settingbtn" class="btn btn-primary btn-sm">Settings</button>
</div>
<div id="textOpt" style="display: none;">
    <div style="font-size: 16px;margin: 0px;padding: 0px;font-weight: bold;margin-top: 10px;">
    TEXT:
    </div>
    <hr style="width: 100%;margin: 0px;padding: 0px;">
    <div class="input-group "style="width: 100%; margin-top:5%;">
        <textarea id="addText" type="textbox" placeholder="" class="form-control"style="height: 200px; margin-top: 10px;border-radius: 5px;"></textarea>
    </div>
    <div class="row" style="margin-top: 5px;">
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
    <div class="row" style="margin-top: 5px;">
        <div class="col-md-2 col-xs-12">
            <div class=" col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="textalign" style="font-weight: bold;">
                    STYLE:
                </div>
            </div>
        </div>
        <div class="col-md-10 col-xs-12">
            <div class=" col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="btn-group btn-sm" role="group" aria-label="..." style="width : 100%;">
                    <button type="button" id="bold" class="btn btn-default btn-sm" style="width: 25%;" ><span class="glyphicon glyphicon-bold" aria-hidden="true"></button>
                    <button type="button" id="italic" class="btn btn-default btn-sm" style="width: 25%;"><span class="glyphicon glyphicon-italic" aria-hidden="true"></button>
                    <button type="button" id="underline" class="btn btn-default btn-sm" style="width: 25%;"><span class="glyphicon glyphicon-magnet" aria-hidden="true"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="row" style="margin-top: 5px;">
        <div class="col-md-2 col-xs-12">
            <div class=" col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="textalign" style="font-weight: bold;">
                    ALIGN:
                </div>
            </div>
        </div>
        <div class="col-md-10 col-xs-12">
            <div class=" col-md-12 col-xs-12" style="padding: 0px;margin: 0px;">
                <div class="btn-group btn-sm" role="group" aria-label="..." style="width : 100%;">
                    <button type="button" id="left" class="btn btn-default btn-sm" style="width: 25%;" ><span class="glyphicon glyphicon-align-left" aria-hidden="true"></button>
                    <button type="button" id="right" class="btn btn-default btn-sm" style="width: 25%;"><span class="glyphicon glyphicon-align-right" aria-hidden="true"></button>
                    <button type="button" id="center" class="btn btn-default btn-sm" style="width: 25%;"><span class="glyphicon glyphicon-align-center" aria-hidden="true"></button>
                    <button type="button" id="justify" class="btn btn-default btn-sm" style="width: 25%;"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="row" style="margin-top: 6px;margin-bottom: 5px;">
        <div class="col-md-2 col-xs-2 " style="font-weight: bold;padding-top: 3px;margin-right: 15px;">
                FILL:
        </div>
        <div class="col-md-9 col-xs-9" style="padding: 0px;margin: 0px;font-weight: bold; margin-left: -5px;">
            <div class=" col-md-12 col-xs-12">
                <div id="picker"></div>
            </div>
        </div>
    </div>
</div>
<div id="imageOpt" style="display: none;">
<div class="row" >
    <div class=" col-md-12 col-xs-12">
        <div style="font-size: 16px;margin: 0px;padding: 0px;font-weight: bold;">
            IMAGE:
        </div>
        <hr style="width: 100%;margin: 0px;padding: 0px;">
    </div>
    <div class="col-md-12 col-xs-12">
        <div class="rect1" style="width: 100%;margin-top: 10px;">
            <div class="col-md-4 col-xs-4" style="padding: 0px;margin: 0px;">
                <button type="button" style="width:105px;"id="Up-imageUpload" class="btn btn-primary btn-sm" style="font-size: 12px;">Choose File</button>
            </div>
            <div class="col-md-8 col-xs-8">
                <div class="textalign" style="font-size: 14px;margin-left: 20%;">
                    No file choosen
                </div>
            </div>
        </div>
    </div>

    <div  class="col-md-12 col-xs-12" align="center" style="margin-top: 10px; margin-bottom: 10px;">
        <button type="button" id="modal-click" class="btn btn-info btn-sm">Edit Image</button>
    </div>

</div>
</div>
<div id="colorStyleOpt">
<div class="row" >
        <div style="font-size: 16px;margin: 0px;padding: 0px;font-weight: bold;margin-top: 15px;">
            COLOR STYLES:
        </div>
        <hr style="width: 100%;margin: 0px;padding: 0px; margin-bottom: 10px;">
</div>
<div class="row color-pallet-row" id="Ccol-1">
    <div class="col-md-9 col-xs-8" style="margin: 0px;padding: 0px;" >
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div id = "C11" class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div id = "C12" class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div id = "C13" class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div id = "C14" class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div id = "C15" class="square1"></div>
        </div>
        <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
            <div id = "C16" class="square1"></div>
        </div>
    </div>
    <div class="col-md-3 col-xs-4"style="margin:0px;padding:0px;">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE1
            </label>
    </div>
</div>
<div class="row color-pallet-row" id="Ccol-2">
    <div class="col-md-9 col-xs-8"style="margin:0px;padding:0px;">
            <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
                <div id = "C21" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C22" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C23" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C24" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C25" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C26" class="square1"></div>
            </div>
    </div>
    <div class="col-md-3 col-xs-4"style="margin:0px;padding:0px;">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE2
            </label>
    </div>
</div>
<div class="row color-pallet-row" id="Ccol-3">
    <div class="col-md-9 col-xs-8"style="margin:0px;padding:0px;">
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C31" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C32" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C33" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C34" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C35" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C36" class="square1"></div>
            </div>
    </div>
    <div class="col-md-3 col-xs-4"style="margin:0px;padding:0px;" >
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE3
            </label>
    </div>
</div>
<div class="row color-pallet-row" id="Ccol-4">
    <div class="col-md-9 col-xs-8" style="margin:0px;padding:0px;">
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C41" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C42" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C43" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C44" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C45" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C46" class="square1"></div>
            </div>
    </div>
    <div class="col-md-3 col-xs-4" style="margin:0px;padding:0px;">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE4
            </label>
    </div>
</div>
<div class="row color-pallet-row" id="Ccol-5" >
    <div class="col-md-9 col-xs-8" style="margin:0px;padding:0px;">
            <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
                <div id = "C51" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C52" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C53" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C54" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C55" class="square1"></div>
            </div>
            <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                <div id = "C56" class="square1"></div>
            </div>
    </div>
    <div class="col-md-3 col-xs-4" style="margin:0px;padding:0px;">
            <label class="textalign"for="exampleInputEmail1">
                SAMLPLE5
            </label>
    </div>
</div>
<div class="row color-pallet-row" id="Ccol-6">
        <div class="col-md-9 col-xs-8" style="margin:0px;padding:0px;">
                <div class="col-md-2  col-xs-2" style="border: 0px;padding: 0px;">
                    <div id = "C61" class="square1"></div>
                </div>
                <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                    <div id = "C62" class="square1"></div>
                </div>
                <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                    <div id = "C63" class="square1"></div>
                </div>
                <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                    <div id = "C64" class="square1"></div>
                </div>
                <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                    <div id = "C65" class="square1"></div>
                </div>
                <div class="col-md-2  col-xs-2"style="border: 0px;padding: 0px;">
                    <div id = "C66" class="square1"></div>
                </div>
        </div>
        <div class="col-md-3 col-xs-4" style="margin:0px;padding:0px;">
                <label class="textalign"for="exampleInputEmail1">
                    SAMLPLE6
                </label>
        </div>
    </div>
</div>
</div>
</div>

<div class="row">
    <div class="col-md-6 col-xs-5"  style="margin:0px;padding:0px;" align="left">
        <button type="button"  class="btn btn-primary btn-sm">GO BACK</button>
    </div>
    <div class="col-md-6 col-xs-6"  style="margin:0px;padding:0px;" align="right" >
        <button type="button"  class="btn btn-primary btn-sm">SAVE&CONTINUE</button>
    </div>
</div>
<input type="hidden" id="base_url" value ="<?php echo base_url() ?>">
<div style="display: none;">
<input type = "file" style="display:none;" id="imageUpload">
</div>
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Edit Picture</h4>
            </div>
            <div class="modal-body" style="min-height: 400px;"><!--Entered Here-->
                <div id="img-Edit">
                    <img src="" width="100%" height="400px">
                </div>
            </div>
            <div class="modal-footer">
                <div class="col-md-12 col-xs-12">
                <div class="col-md-6 col-xs-6" align="left"><button type="button" id="crop-Done-btn" class="btn btn-primary btn-sm">Done</button></div>
                <div class="col-md-6 col-xs-6" align="right"><button type="button" id="crop-End-btn" class="btn btn-default btn-sm" data-dismiss="modal">Close</button></div>
                </div>
            </div>
        </div>

    </div>
</div>
</div>