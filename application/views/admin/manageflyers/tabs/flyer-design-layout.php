<div class="row">
    <div class=" col-md-6 col-xs-12">
        <p>Choose your Flyre Size :</p>
        <div class="btn-group" role="group" aria-label="..." style="margin-left: 30%; margin-top: -8%;">
            <button type="button" class="btn btn-default">8.5*11</button>
            <button type="button" class="btn btn-default">8.5*11</button>
            <button type="button" class="btn btn-default">8.5*11</button>
            <button type="button" class="btn btn-default">11*17</button>
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
            <div class="col-md-6 col-xs-12">
                <button type="button" class="btn btn-warning" style="margin-left: 6%;">Undo</button>
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
    <div class=" col-md-6 col-xs-12">
        <div>
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Add Text</a></li>
                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Add Image</a></li>
                <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Add Object</a></li>
                <li role="presentation"><a href="#settings1" aria-controls="settings1" role="tab" data-toggle="tab">Set Colors</a></li>
            </ul>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane" id="profile">
                    <div class="row" style="width: 85%;margin-left: 0.5%;" >
                        <div class="input-group" style="width: 100%;">
                            <textarea id="address" type="textbox" placeholder="" class="form-control"style="height: 150px;"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class=" col-md-6 col-xs-12">
                            <button class="btn btn-default" type="submit">Add Text</button>
                            <button class="btn btn-default" type="submit">Delete Text</button>
                            <button  class="btn btn-danger" type="submit" style="width : 72%; color : white;">Roolover</button>
                            <div class="btn-group" role="group" aria-label="..." style="width : 71%;">
                                <button type="button" class="btn btn-default" style="width: 25%;" ><span class="glyphicon glyphicon-link" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-right" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-center" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></button>
                            </div>
                            <div class="btn-group btn-group-xs" role="group" aria-label="..."style="    width: 124%;">
                                <p><small><B>lock/unlock :</B></small></p>
                                <button type="button" class="btn btn-primary btn-xs" style="width: 15%;  border-radius: 3px; padding: 5px;"><span class="glyphicon glyphicon-lock" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default btn-xs" style="width: 15%; padding: 5px;"><span class="glyphicon glyphicon-lock" aria-hidden="true"></button>
                            </div>
                        </div>
                        <div class=" col-md-6 col-xs-12">
                            <p><small><B>Font size :</B></small></p>
                            <select class="form-control" id="text-transform" style="width: 30%; font-size: 11px; padding: 0px;">
                                <option value="none"><small>font  size</small></option>
                                <option value="capitalize"><small>capitalize</small></option>
                                <option value="uppercase"><small>uppercase</small></option>
                                <option value="lowercase"><small>lowercase</small></option>
                                <option value="initial"><small>initial</small></option>
                                <option value="inherit"><small>inherit</small></option>
                            </select>
                            <p style="margin-left: 40%;margin-top: -25%;"><small><B>Font Family :</B></small></p>
                            <select class="form-control" id="text-transform" style="width: 30%; font-size: 11px; padding: 0px;margin-left: 40%;">
                                <option value="none"><small>font  family</small></option>
                                <option value="capitalize"><small>capitalize</small></option>
                                <option value="uppercase"><small>uppercase</small></option>
                                <option value="lowercase"><small>lowercase</small></option>
                                <option value="initial"><small>initial</small></option>
                                <option value="inherit"><small>inherit</small></option>
                            </select>
                            <div class="btn-group" role="group" aria-label="..." style="width : 71%;">
                                <p><small><B>Alignment :</B></small></p>
                                <button type="button" class="btn btn-default" style="width: 25%;" ><span class="glyphicon glyphicon-align-left" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-right" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-center" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></button>
                            </div>
                            <div class="btn-group" role="group" aria-label="..." style="    width: 71%;">
                                <p><small><b>Style :</b></small></p>
                                <button type="button" class="btn btn-default" style="width: 25%;" ><span class="glyphicon glyphicon-bold" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-italic" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-magnet" aria-hidden="true"></button>
                                <button type="button" class="btn btn-default" style="width: 25%;"><span class="glyphicon glyphicon-list" aria-hidden="true"></button>
                            </div>
                            <button type="button" class="btn btn-default"  style="margin-left: 40%;"><i class="fa fa-eyedropper"></i></button>
                            <div class="colordiv8"></div> <p style="margin-top: -9%;"><small></small><B>Color : </B></small></p>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 5%;padding-left: 15px;">
                        <button type="button" class="btn btn-primary btn-sm">Property info</button>
                        <button type="button" class="btn btn-default">Agent 1</button>
                        <button type="button" class="btn btn-default">Agent 2</button>
                        <button type="button" class="btn btn-default">Company 1</button>
                        <button type="button" class="btn btn-default">Company 2</button>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="messages">
                    <div class="row" style="margin-top: 5%;">
                        <div class="col-md-6 col-xs-12">
                            <p style="margin-left: 11%;"><B>Select Image Number To Input</B></p>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <button type="button" class="btn btn-primary btn-sm">Add Image</button>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 5%;">
                        <div class="col-md-6 col-xs-12">
                            <div class="btn-group btn-group-xs" role="group" aria-label="..."style="    width: 124%; border-radious:3px;">
                                <p><small>lock/unlock :</small></p>
                                <button type="button" class="btn btn-default" style="width: 15%; border-radious:3px"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></button>
                                <button type="button" class="btn btn-default" style="width: 15%;  border-radious:3px"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></button>
                            </div>
                            
                            
                            <div class="btn-group btn-group-xs" role="group" aria-label="..." style="margin-left: 4%;">
                                <img src="layer.png">
                                <img src="layer1.png">
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="col-md-3 col-xs-12" style="width: 40%;">
                                <p><B>Width :</B></p>
                                <input class="form-control input-sm" id="inputsm" type="text">
                            </div>
                            
                            <div class="col-md-3 col-xs-12" style="width: 40%;">
                                <p><B>Width :</B></p>
                                <input class="form-control input-sm" id="inputsm" type="text">
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="row" style="border: 1px solid #ccc;">
                        
                        <div class= "row" style="    margin-left: 10%; width: 97.5%;">
                            <a href="#" class="btn btn-default btn-circle"style="margin-left: 4%;"></i> 1</a>
                            <a href="#" class="btn btn-default btn-circle"style="margin-left: 4%;"></i> 2</a>
                            <a href="#" class="btn btn-default btn-circle"style="margin-left: 4%;"></i> 3</a>
                            <a href="#" class="btn btn-default btn-circle"style="margin-left: 4%;"></i> 4</a>
                            <a href="#" class="btn btn-default btn-circle"style="margin-left: 4%;"></i> 5</a>
                            
                            
                            <a href="#" class="btn btn-default btn-circle" style="margin-left: 4%;"></i> 6</a>
                            <a href="#" class="btn btn-default btn-circle" style="margin-left: 4%;"></i> 7</a>
                            <a href="#" class="btn btn-default btn-circle" style="margin-left: 4%;"></i> 8</a>
                            <a href="#" class="btn btn-default btn-circle" style="margin-left: 4%;"></i> 9</a>
                            <a href="#" class="btn btn-default btn-circle" style="margin-left: 4%;"></i> 0</a>
                            <div class="btn-group" role="group" aria-label="..." style=" margin-top: 5%;margin-left: 3%;">
                            </div>
                            
                            
                        </div>
                    </div>
                    <button type="button" class="btn btn-default" style="background-color: blue;color: white;margin-left: 93%;margin-top: 0.5%;">save</button>
                </div>
                <!--  3rd Nav tab -->
                <div role="tabpanel" class="tab-pane" id="settings">
                    
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
                <!--  4rth Nav tab -->
                <div role="tabpanel" class="tab-pane" id="settings1">
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
            <button type="button" class="btn btn-default" style="background-color: blue;color: white;margin-left: 87.5%;;margin-top: 0.5%;">save</button>
        </div>
    </div>
</div>
</div>
