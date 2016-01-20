<div class="row" id="editor">
    <div class="col-md-6 col-xs-12">
        <div class="row">
            <div class=" col-md-12 col-xs-12">
                <h5>Choose your Flyre Size :</h5>
            </div>
            <div class=" col-md-12 col-xs-12">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default">8.5*11</button>
                    <button type="button" class="btn btn-default">8.5*11</button>
                    <button type="button" class="btn btn-default">8.5*11</button>
                    <button type="button" class="btn btn-default">11*17</button>
                </div>
            </div>
        </div>
        <div class="canvasBig" style="border:1px solid;border-color:#000000;margin-top:2%;margin-bottom:4%;overflow:auto;">
            <center><canvas id="myCanvas"></canvas></center>
        </div>
        <div class="row" style="margin-top: -2%;">
            <div class="col-md-5 col-xs-12">
                <div class="wan-spinner wan-spinner-1"  >
                    <a href="javascript:void(0)" class="minus" style="line-height: 0em;padding: 14px;">-</a>
                    <input type="text" value="1" style="width: 100px; padding: 14px;">
                    <a href="javascript:void(0)" class="plus" style="line-height: 0em;padding: 15px; width:0%;">+</a>
                </div>
            </div>
            <div class="col-md-7 col-xs-12 text-right">
                <button type="button" id="fullScreenEditor" class="btn btn-success">Full Screen</button>
                <button type="button" class="btn btn-warning" style="margin-left: 6%;">Undo</button>
                <button type="button" id="save" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xs-12 right-col">
        <ul class="nav nav-tabs" role="tablist">
            <li class="active"><a href="#text" role="tab" data-toggle="tab">Add Text</a></li>
            <li><a href="#image" role="tab" data-toggle="tab">Add Image</a></li>
            <li><a href="#object" role="tab" data-toggle="tab">Add Object</a></li>
            <li><a href="#color" role="tab" data-toggle="tab">Set Colors</a></li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="text">
                <div class="row pt-10">
                    <div class="col-md-12 col-xs-12">
                        <textarea id="editor-textarea" type="textbox" placeholder="Add New Text" class="form-control editor-textarea"></textarea>
                    </div>
                </div>
                <div class="row pt-10">
                    <div class="col-md-6 col-xs-12">
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12">
                                <button class="btn btn-default" id="editor-addText" type="button">Add Text</button>
                                <button class="btn btn-default" id="editor-delete" type="button">Delete Text</button>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default" id="editor-textLink">
                                        <i class="fa fa-link editor-fa"></i>
                                    </button>
                                    <button type="button" class="btn btn-default" id="editor-textUnlink">
                                        <i class="fa fa-chain-broken editor-fa"></i>
                                    </button>
                                    <button type="button" class="btn btn-default" id="editor-bringFront">
                                        <img src="<?php echo base_url('public/admin/img/layered-bottom.png') ?>" class="imageIcon">
                                    </button>
                                    <button type="button" class="btn btn-default" id="editor-sendBack">
                                        <img src="<?php echo base_url('public/admin/img/layered-top.png') ?>" class="imageIcon">
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-20">
                            <div class="col-md-12 col-xs-12">
                                <label class="control-label">lock/unlock</label>
                            </div>
                            <div class="col-md-12 col-xs-12">
                                <div class="btn-group" role="group" id="editor-lockGroup">
                                    <button data-type="lock" type="button" class="btn btn-default"><i class="fa fa-lock"></i></button>
                                    <button data-type="unlock" type="button" class="btn btn-default btn-primary"><i class="fa fa-unlock"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                                <div class="row"><label class="control-label">Font size</label></div>
                                <div class="row">
                                    <input type="number" class="form-control" id="editor-fontSize" style="width:90%;" value="11">
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <div class="row"><label class="control-label">Font Family</label></div>
                                <div class="row">
                                    <select class="form-control" id="editor-fontFamily" style="font-size:11px; padding: 0px;">
                                        <option value="Arial">Arial</option>
                                        <option value="Verdana">Verdana</option>
                                        <option value="Open Sans">Open Sans</option>
                                        <option value="Sans Serif">Sans Serif</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12 nopad">
                                <label class="control-label">Alignment</label>
                            </div>
                            <div class="col-md-12 col-xs-12 nopad">
                                <div class="btn-group" role="group" id="editor-textAlign">
                                    <button type="button" class="btn btn-default" data-type="left"><span class="glyphicon glyphicon-align-left" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default" data-type="center"><span class="glyphicon glyphicon-align-center" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default" data-type="right"><span class="glyphicon glyphicon-align-right" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default" data-type="justify"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></button>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12 nopad">
                                <label class="control-label">Style</label>
                            </div>
                            <div class="col-md-12 col-xs-12 nopad">
                                <div class="btn-group" role="group" style="">
                                    <button id="editor-textBold" class="btn btn-default"><span class="glyphicon glyphicon-bold" aria-hidden="true"></button>
                                    <button id="editor-textItalic" class="btn btn-default"><span class="glyphicon glyphicon-italic" aria-hidden="true"></button>
                                    <button id="editor-textUnderline" class="btn btn-default"><i class="fa fa-underline"></i></button>
                                    <button id="editor-textList" class="btn btn-default"><span class="glyphicon glyphicon-list" aria-hidden="true"></button>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-8 col-xs-12 nopad">
                                <label>Color</label>
                                <div class="color-div colorpicker" id="editor-textColor" data-type="text"></div>
                            </div>
                            <div class="col-md-3 col-xs-12 nopad text-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-eyedropper"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-50">
                    <div class="col-md-12 col-xs-12">
                        <button type="button" class="btn btn-default">Property info</button>
                        <button type="button" class="btn btn-default">Agent 1</button>
                        <button type="button" class="btn btn-default">Agent 2</button>
                        <button type="button" class="btn btn-default">Company 1</button>
                        <button type="button" class="btn btn-default">Company 2</button>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="image">
                <div class="row mt-10">
                    <div class="col-md-9 col-xs-12">
                        <h4 class="mt-0">Select Image Number To Input</h4>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <button type="button" id="editor-addImage" class="btn btn-primary">Add Image</button>
                    </div>
                </div>
                <div class="row mt-20 mb-30">
                    <div class="col-md-6 col-xs-12">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <label class="control-label">lock/unlock</label>
                            </div>
                            <div class="col-md-12 col-xs-12">
                                <div class="btn-group" role="group" id="editor-lockGroup">
                                    <button data-type="lock" type="button" class="btn btn-default"><i class="fa fa-lock"></i></button>
                                    <button data-type="unlock" type="button" class="btn btn-default btn-primary"><i class="fa fa-unlock"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-10">
                            <div class="col-md-12 col-xs-12">
                                <button type="button" class="btn btn-default" id="editor-bringFront">
                                    <img src="<?php echo base_url('public/admin/img/layered-bottom.png') ?>" class="imageIcon">
                                </button>
                                <button type="button" class="btn btn-default" id="editor-sendBack">
                                    <img src="<?php echo base_url('public/admin/img/layered-top.png') ?>" class="imageIcon">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="Editor-imageWidth">Width</label>
                                <input type="number" class="form-control" id="editor-imageWidth" placeholder="Width">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="Editor-imageHeight">Height</label>
                                <input type="number" class="form-control" id="editor-imageHeight" placeholder="Height">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-20 mt-20" style="border-top:1px solid #ccc;">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">2</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">3</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">4</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">5</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">6</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">7</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">8</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">9</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">10</button>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="object">
                <div class="row mt-10">
                    <div class="col-md-9 col-xs-12">
                        <h4 class="mt-0">Select Image Number To Input</h4>
                    </div>
                </div>
                <div class="row mt-20 mb-30">
                    <div class="col-md-6 col-xs-12">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <label class="control-label">lock/unlock</label>
                            </div>
                            <div class="col-md-12 col-xs-12">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-primary"><i class="fa fa-lock"></i></button>
                                    <button type="button" class="btn btn-default"><i class="fa fa-unlock"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-10">
                            <div class="col-md-12 col-xs-12">
                                <button type="button" class="btn btn-default"><i class="fa fa-lock"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-unlock"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Width</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Height</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-20 mt-20" style="border:1px solid #ccc;">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                    </div>
                </div>
                <div class="row mt-20">
                    <div class="col-md-8">
                    </div>
                    <div class="col-md-4">
                    </div>
                </div>
                <div class="row mt-20">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                        <button type="button" class="btn btn-default btn-circle imagetextbold">1</button>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="color">
                <div class="row">
                    <button type="button" class="btn btn-primary btn-sm" style="margin-left: 3%;">Add Image</button>
                    <p style="margin-left: 15%;"><B>Select Shape Number To Input</B></p>
                </div>
                
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <p><small>lock/unlock :</small></p>
                        <div class="btn-group btn-group-xs" role="group" aria-label="..." style="    margin-left: 28%;margin-top: -23%;">
                            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></button>
                            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></button>
                        </div>
                        
                        
                        <div class="btn-group btn-group-xs" role="group" aria-label="..." style= "margin-top: -12%; margin-left: 10%;">
                            <img src="layer.png">
                            <img src="layer1.png">
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <select class="form-control" id="text-transform" style="width: 33%;margin-left: 0%;">
                            <option value="none"><small><B>Width</B></small></option>
                            <option value="capitalize"><small>capitalize</small></option>
                            <option value="uppercase"><small>uppercase</small></option>
                            <option value="lowercase"><small>lowercase</small></option>
                            <option value="initial"><small>initial</small></option>
                            <option value="inherit"><small>inherit</small></option>
                        </select>
                        <select class="form-control" id="text-transform" style="width: 33%;margin-left: 35%;margin-top: -13%;">
                            <option value="none"><small><B>height</B></small></option>
                            <option value="capitalize"><small>capitalize</small></option>
                            <option value="uppercase"><small>uppercase</small></option>
                            <option value="lowercase"><small>lowercase</small></option>
                            <option value="initial"><small>initial</small></option>
                            <option value="inherit"><small>inherit</small></option>
                        </select>
                        <p style=""><small>Color : </small></p>
                        <div class="btn-group btn-group-xs" role="group" aria-label="..." style="    margin-left: 17%;margin-top: 31%;">
                            <button type="button" class="btn btn-default" style="width: 80px;height: 24px;margin-top: -40%;margin-left:  69%; border : 2px solid black; background-color : blue;"></button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <img src="icon.svg" style="width: 5%; margin-left: 10%;">
                    <img src="icon.svg" style="width: 5%; margin-left: 10%;">
                    <img src="icon.svg" style="width: 5%; margin-left: 10%;">
                    <img src="icon.svg" style="width: 5%; margin-left: 10%;">
                    
                    
                    <img src="icon.svg" style="width: 5%; margin-left: 10%;">
                    <img src="icon.svg" style="width: 5%; margin-left: 10%;">
                    <img src="icon.svg" style="width: 5%; margin-left: 10%;">
                    <img src="icon.svg" style="width: 5%; margin-left: 10%;">
                </div>
                
                
                <div class="row" style="width: 80%;">
                    <div class="col-md-3 col-md-3"> <img src="col.svg"> </div>
                    <div class="col-md-3 col-md-3"><img src="3.png" style="width: 60%;"></div>
                    <div class="col-md-3 col-md-3"> <img src="col.svg"></div>
                    <div class="col-md-3 col-md-3"> <div class="btn-group btn-group-xs" role="group" aria-label="...">
                        <p style=""><small>Color : </small></p>
                        <button type="button" class="btn btn-default" style="width: 80px;height: 24px; border : 2px solid black; background-color : blue;" ></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>