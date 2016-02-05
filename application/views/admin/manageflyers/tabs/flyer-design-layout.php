<div class="row" id="editor">
    <div class="col-md-7 col-xs-12">
        <div class="row">
            <div class=" col-md-12 col-xs-12">
                <h5>Choose your Flyre Size :</h5>
            </div>
            <div class=" col-md-12 col-xs-12">
                <div class="btn-group" role="group">
                    <button type="button" id="editor-canvasSize" data-width="8.5" data-height="11" class="btn btn-default btn-primary">8.5 X 11</button>
                    <button type="button" id="editor-canvasSize" data-width="5" data-height="5" class="btn btn-default">5 X 5</button>
                    <button type="button" id="editor-canvasSize" data-width="8" data-height="4" class="btn btn-default">8 X 4</button>
                    <button type="button" id="editor-canvasSize" data-width="6" data-height="9" class="btn btn-default">6 X 9</button>
                </div>
            </div>
        </div>
        <div class="canvasBig" style="border:1px solid;border-color:#F1F1F1;margin-top:2%;margin-bottom:4%;overflow:auto;max-height:600px;background:#F1F1F1">
            <center><canvas id="myCanvas"></canvas></center>
        </div>
        <div class="row" style="margin-top: -2%;">
            <div class="col-md-5 col-xs-12">
                <div class="wan-spinner wan-spinner-1">
                    <a href="javascript:void(0)" class="minus"><i class="fa fa-minus"></i></a>
                    <input type="text" value="100">
                    <a href="javascript:void(0)" class="plus"><i class="fa fa-plus"></i></a>
                </div>
            </div>
            <div class="col-md-7 col-xs-12 text-right">
                <button type="button" id="fullScreenEditor" class="btn btn-success">Full Screen</button>
                <div class="btn-group" role="group">
                    <button data-type="redo" type="button" class="btn btn-default">Redo</button>
                    <button data-type="undo" type="button" class="btn btn-default">Undo</button>
                </div>
                <button type="button" id="save" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
    <div class="col-md-5 col-xs-12 right-col">
        <ul class="nav nav-tabs editor-tabs" role="tablist" id="editor-mainTabs">
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
                                <button class="btn btn-default" id="editor-delete" data-type="text" type="button">Delete</button>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12">
                                <button type="button" class="btn btn-default" id="editor-bringFront">
                                    <img src="<?php echo base_url('public/admin/img/layered-bottom.png') ?>" class="imageIcon">
                                </button>
                                <button type="button" class="btn btn-default" id="editor-sendBack">
                                    <img src="<?php echo base_url('public/admin/img/layered-top.png') ?>" class="imageIcon">
                                </button>
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
                                    <select class="form-control" id="editor-fontSize" style="width:90%;">
                                        <option value="8">8px</option>
                                        <option value="9">9px</option>
                                        <option value="10">10px</option>
                                        <option value="12">12px</option>
                                        <option value="14">14px</option>
                                        <option value="16">16px</option>
                                        <option value="18">18px</option>
                                        <option value="20">20px</option>
                                        <option value="22">22px</option>
                                        <option value="24">24px</option>
                                        <option value="26">26px</option>
                                        <option value="28">28px</option>
                                        <option value="36">36px</option>
                                        <option value="48">48px</option>
                                        <option value="72">72px</option>
                                    </select>
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
                                <button type="button" id="editor-cpicker" data-type="text" data-id="" class="btn btn-default"><i class="fa fa-eyedropper"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="image">
                <div class="row mt-10">
                    <div class="col-md-9 col-xs-12 text-center">
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
                                <button type="button" class="btn btn-default" data-type="image" id="editor-delete">
                                    <span class="glyphicon glyphicon-trash editor-fa"></span>
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
                    <div class="col-md-12" id="editor-imageList">
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="object">
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
                                <button type="button" class="btn btn-default" data-type="shape" id="editor-delete">
                                    <span class="glyphicon glyphicon-trash editor-fa"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="editor-svgWidth">Width</label>
                                <input type="email" class="form-control" id="editor-svgWidth" placeholder="Width">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="editor-svgHeight">Height</label>
                                <input type="email" class="form-control" id="editor-svgHeight" placeholder="Height">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-20 editor-objectsBox">
                    <div class="col-md-12">
                        <img class="svgImage" id="editor-svgImage" src="<?php echo base_url('public/admin/img/svg/check56.svg')?>">
                        <img class="svgImage" id="editor-svgImage" src="<?php echo base_url('public/admin/img/svg/circle111.svg')?>">
                        <img class="svgImage" id="editor-svgImage" src="<?php echo base_url('public/admin/img/svg/heart13.svg')?>">
                        <img class="svgImage" id="editor-svgImage" src="<?php echo base_url('public/admin/img/svg/plain.svg')?>">
                    </div>
                </div>
                <div class="row pt-10">
                    <div class="col-md-3 col-xs-12 nopad pl-20">
                        <label>Fill</label>
                    </div>
                    <div class="col-md-5 col-xs-12 nopad pl-20">
                        <div class="color-div large colorpicker" id="editor-svgFill" data-type="svgFill"></div>
                    </div>
                    <div class="col-md-4 col-xs-12 nopad text-right pr-20">
                        <button type="button" id="editor-cpicker" data-type="svgFill" data-id="" class="btn btn-default"><i class="fa fa-eyedropper"></i></button>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="color">
                <div class="row mt-20 mb-30">
                    <div class="col-md-6 col-xs-12">
                        <div class="row mt-10">
                            <div class="col-md-12 col-xs-12">
                                <button type="button" class="btn btn-default" id="editor-bringFront">
                                    <img src="<?php echo base_url('public/admin/img/layered-bottom.png') ?>" class="imageIcon">
                                </button>
                                <button type="button" class="btn btn-default" id="editor-sendBack">
                                    <img src="<?php echo base_url('public/admin/img/layered-top.png') ?>" class="imageIcon">
                                </button>
                                <button type="button" class="btn btn-default" data-type="color" id="editor-delete">
                                    <span class="glyphicon glyphicon-trash editor-fa"></span>
                                </button>
                            </div>
                        </div>
                        <div class="row mt-10">
                            <div class="col-md-12 col-xs-12">
                                <button type="button" class="btn btn-default" id="editor-addSets">
                                    Add Color Set
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="editor-colorWidth">Width</label>
                                <input type="email" class="form-control" id="editor-colorWidth" placeholder="Width">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="editor-colorHeight">Height</label>
                                <input type="email" class="form-control" id="editor-colorHeight" placeholder="Height">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-20 editor-objectsBox">
                    <div class="col-md-12">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/check56.svg')?>">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/circle111.svg')?>">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/heart13.svg')?>">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/plain.svg')?>">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/right11.svg')?>">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/square_2.svg')?>">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/square61.svg')?>">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/star129.svg')?>">
                        <img class="svgImage" id="editor-setsImage" src="<?php echo base_url('public/admin/img/svg/triangle36.svg')?>">
                    </div>
                </div>
                <div class="row pt-10">
                    <div class="col-md-12 col-xs-12">
                        <ul class="nav nav-tabs" role="tablist" id="cs-tablist">
                            <li class="active"><a href="#cs-sample1" data-toggle="tab">Sample 1</a></li>
                        </ul>
                        <div class="tab-content" id="cs-tabContent">
                            <div role="tabpanel" class="tab-pane active" id="cs-sample1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="nav nav-tabs small-tabs mt-50" role="tablist" id="editor-infoTabs">
            <li class="active"><a href="#propertyinfo" role="tab" data-toggle="tab">Property info</a></li>
            <li><a href="#agent1" role="tab" data-toggle="tab">Agent 1</a></li>
            <li><a href="#agent2" role="tab" data-toggle="tab">Agent 2</a></li>
            <li><a href="#company1" role="tab" data-toggle="tab">Company 1</a></li>
            <li><a href="#company2" role="tab" data-toggle="tab">Company 2</a></li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane pt-20 active" id="propertyinfo">
                <div class="row">
                    <div class="col-md-6">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Address</button>
                    </div>
                    <div class="col-md-6">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Body 1</button>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Price</button>
                    </div>
                    <div class="col-md-6">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Body 2</button>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Main Header</button>
                    </div>
                    <div class="col-md-6">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Body 3</button>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Headline</button>
                    </div>
                    <div class="col-md-6">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Call to Action</button>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="agent1">
                <div class="row">
                    <div class="col-md-8">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Agent Contact Info</button>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">License #</button>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="agent2">
                <div class="row">
                    <div class="col-md-8">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Agent Contact Info</button>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">License #</button>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="company1">
                <div class="row">
                    <div class="col-md-8">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Company Contact Info</button>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">License #</button>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="company2">
                <div class="row">
                    <div class="col-md-8">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">Company Contact Info</button>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <button id="editor-textAssign" data-id="" class="btn btn-default fullwidth">License #</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>