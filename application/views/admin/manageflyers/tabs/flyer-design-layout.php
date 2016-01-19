<div class="row">
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
            <div class="col-md-6 col-xs-12">
                <div class="wan-spinner wan-spinner-1"  >
                    <a href="javascript:void(0)" class="minus" style="line-height: 0em;padding: 14px;">-</a>
                    <input type="text" value="1" style="width: 100px; padding: 14px;">
                    <a href="javascript:void(0)" class="plus" style="line-height: 0em;padding: 15px; width:0%;">+</a>
                </div>
            </div>
            <div class="col-md-6 col-xs-12 text-right">
                <button type="button" class="btn btn-warning" style="margin-left: 6%;">Undo</button>
                <button type="button" class="btn btn-primary">Save</button>
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
                                <button class="btn btn-default" type="button">Add Text</button>
                                <button class="btn btn-default" type="button">Delete Text</button>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12">
                                <button class="btn btn-danger btn-block">Roolover</button>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default">
                                        <i class="fa fa-link"></i>
                                    </button>
                                    <button type="button" class="btn btn-default">
                                        <i class="fa fa-chain-broken"></i>
                                    </button>
                                    <button type="button" class="btn btn-default">
                                        <span class="glyphicon glyphicon-align-center" aria-hidden="true"></span>
                                    </button>
                                    <button type="button" class="btn btn-default">
                                        <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-20">
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
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                                <div class="row"><label class="control-label">Font size</label></div>
                                <div class="row">
                                    <select class="form-control" id="text-transform" style="font-size:11px; padding: 0px;">
                                        <option value="none"><small>font  size</small></option>
                                        <option value="capitalize"><small>capitalize</small></option>
                                        <option value="uppercase"><small>uppercase</small></option>
                                        <option value="lowercase"><small>lowercase</small></option>
                                        <option value="initial"><small>initial</small></option>
                                        <option value="inherit"><small>inherit</small></option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <div class="row"><label class="control-label">Font Family</label></div>
                                <div class="row">
                                    <select class="form-control" id="text-transform" style="font-size:11px; padding: 0px;">
                                        <option value="capitalize"><small>capitalize</small></option>
                                        <option value="uppercase"><small>uppercase</small></option>
                                        <option value="lowercase"><small>lowercase</small></option>
                                        <option value="initial"><small>initial</small></option>
                                        <option value="inherit"><small>inherit</small></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12 nopad">
                                <label class="control-label">Alignment</label>
                            </div>
                            <div class="col-md-12 col-xs-12 nopad">
                                <div class="btn-group" role="group" style="">
                                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-left" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-right" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-center" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></button>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-12 col-xs-12 nopad">
                                <label class="control-label">Style</label>
                            </div>
                            <div class="col-md-12 col-xs-12 nopad">
                                <div class="btn-group" role="group" style="">
                                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-bold" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-italic" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-magnet" aria-hidden="true"></button>
                                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-list" aria-hidden="true"></button>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-10">
                            <div class="col-md-8 col-xs-12 nopad">
                                <label>Color</label>
                                <div class="color-div"></div>
                            </div>
                            <div class="col-md-3 col-xs-12 nopad text-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-eyedropper"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-50">
                    <div class="col-md-12 col-xs-12">
                        <button type="button" class="btn btn-primary">Property info</button>
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
                        <button type="button" class="btn btn-primary">Add Image</button>
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
                <div class="row pt-20 mt-20" style="border-top:1px solid #ccc;">
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
            </div>
            <div role="tabpanel" class="tab-pane" id="object">
                <div class = "row">
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-sm" style="margin-left: 3%;">Add Image</button>
                        
                        <p style="margin-left: 11%;"><B>Select Image Number To Input</B></p>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <div class="btn-group btn-group-xs" role="group" aria-label="...">
                                <p><small>lock/unlock :</small></p>
                                <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></button>
                                <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></button>
                            </div>
                            
                            
                            <div class="btn-group btn-group-xs" role="group" aria-label="...">
                                <img src="layer.png">
                                <img src="layer1.png">
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <select class="form-control" id="text-transform" style="width: 33%;margin-left: 31%;">
                                <option value="none"><small><B>Width</B></small></option>
                                <option value="capitalize"><small>capitalize</small></option>
                                <option value="uppercase"><small>uppercase</small></option>
                                <option value="lowercase"><small>lowercase</small></option>
                                <option value="initial"><small>initial</small></option>
                                <option value="inherit"><small>inherit</small></option>
                            </select>
                            <select class="form-control" id="text-transform" style="width: 33%;margin-left: 69%;margin-top: -13%;">
                                <option value="none"><small><B>height</B></small></option>
                                <option value="capitalize"><small>capitalize</small></option>
                                <option value="uppercase"><small>uppercase</small></option>
                                <option value="lowercase"><small>lowercase</small></option>
                                <option value="initial"><small>initial</small></option>
                                <option value="inherit"><small>inherit</small></option>
                            </select>
                            
                            
                            <div class="btn-group btn-group-xs" role="group" aria-label="..." style="margin-left: 50%;">
                                <p style="margin-left: -34%;"><small>Color : </small></p>
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
                    
                    
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-sm">Small button</button>
                        <button type="button" class="btn btn-default">Left</button>
                        <button type="button" class="btn btn-default">right</button>
                        <button type="button" class="btn btn-default">Right</button>
                        <button type="button" class="btn btn-default">Middl</button>
                        <button type="button" class="btn btn-default">Middl</button>
                        <button type="button" class="btn btn-default">Right</button>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-4 col-xs-12">
                            <div class="btn-group-vertical" role="group" aria-label="...">
                                <div class="btn-group" role="group" aria-label="...">
                                    <button type="button" class="btn btn-default">Color 1</button>
                                    <button type="button" class="btn btn-default">Color 2</button>
                                    <button type="button" class="btn btn-default">Color 3</button>
                                    <button type="button" class="btn btn-default">Color 4</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <div class="colordiv1"></div>
                            <div class="colordiv2"></div>
                            <div class="colordiv3"></div>
                            <div class="colordiv4"></div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <div class="btn-group-vertical" role="group" aria-label="...">
                                <div class="btn-group" role="group" aria-label="..." >
                                    <button type="button" class="btn btn-default">Color 1</button>
                                    <button type="button" class="btn btn-default">Color 2</button>
                                    <button type="button" class="btn btn-default">Color 3</button>
                                    <button type="button" class="btn btn-default">Color 4</button>
                                </div>
                            </div>
                            
                            
                            <div class="btn-group btn-group-xs" role="group" aria-label="...">
                                <p style="margin-left:-65%;"><small>Color : </small></p>
                                <button type="button" class="btn btn-default" style="width: 80px;height: 24px;margin-top: -40%; border : 2px solid black; background-color : blue;"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-default" style="background-color: blue;color: white;margin-left: 87.5%;;margin-top: 0.5%;">save</button>
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