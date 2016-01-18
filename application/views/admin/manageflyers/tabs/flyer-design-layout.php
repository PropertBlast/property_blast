<div class="row">
	<div class="col-md-6">
		<ul class="list-inline inline-buttons centered" id="canvas_size">
			<li>Choose Your Flyer Size : </li>
			<li><a class="btn-btn btn-small yes" >8.5 x 11</a>
			</li>
			<li><a class="btn-btn btn-small yes" >8.5 x 14</a>
			</li>
			<li><a class="btn-btn btn-small yes" >8.5 x 11</a>
			</li>
			<li><a class="btn-btn btn-small yes" >11 x 17</a>
			</li>
		</ul>
		<div class="canvasBig" style="border:1px solid;border-color:#000000;margin-top:2%;margin-bottom:4%;overflow-x:auto;">
			<center><canvas id="myCanvas"></canvas></center>
		</div>
		<div class="pull-left">
			<div id="zoom-spinner" class="zoom-spinner wan-spinner deom mt_5">
			    <a href="javascript:void(0)" id="zoomminus" class="minus">-</a>
			    <input type="text" id="zoomValue" value="50">
			    <a href="javascript:void(0)" id="zoomplus" class="plus">+</a>
			</div>
		</div>
		<div class="pull-right">
			<input type="submit" class="btn btn-primary" value="Save">
			<input type="submit" class="btn btn-warning" value="Undo">
		</div>
	</div>
	<div class="col-md-6">
		<div class="cols-container" style="margin-top: 50px;">
		    <div class="cols-wrap clearfix">
		        <div class="two-cols last">
		            <div id="tabs" class="clearfix mb-10">
		                <ul>
		                    <li data-id="text"><a href="#tabs-1">Add Text</a>
		                    </li>
		                    <li data-id="image" id="imageclick"><a href="#tabs-2">Add Image</a>
		                    </li>
		                    <li data-id="shape"><a href="#tabs-3">Add Object</a>
		                    </li>
		                    <li data-id="colors"><a href="#tabs-4">Set Colors</a>
		                    </li>
		                    <li data-id="finish"><a href="#tabs-5">Finish</a>
		                    </li>
		                </ul>
		                <div id="tabs-1" class="clearfix mt-10">
		                    <textarea name="add-text" id="addText"></textarea>
		                    <div class="row">
		                        <div class="col-md-5" style="height: auto;">
		                            <div class="col-md-6" style="padding: 0px;margin: 0px;">
		                                <a class="btn-btn btn-small yes button-ui mt-10 ui-button ui-widget ui-state-default ui-corner-all" id="addTextbtn" href="#tab-1" style="padding:3px !important;font-size: 11px; width: 95%;text-align: center; ">Add Text</a>
		                            </div>
		                            <div class="col-md-6" style="padding: 0px;margin: 0px;">
		                                <a class="btn-btn btn-small yes button-ui mt-10 ui-button ui-widget ui-state-default ui-corner-all" id="delete" href="#tab-1" style="padding:3px !important;font-size: 11px; width: 95%;text-align: center;">Delete Text</a>
		                            </div>
		                        </div>
		                        <div class="col-md-7">
		                            <div class="col-md-6" style="padding: 0px;margin: 0px;">
		                                <div class="col-md-12" style="padding: 0px;margin: 0px; display: inline; margin-top: 8px;">
		                                    <span style="font-size: 12px;font-weight: bold;">Font Size :</span>
		                                </div>
		                                <div class="col-md-12" style="padding: 0px;margin: 0px;">
		                                    <select name="size" id="FontSize" style="font-size: 11px;width: 90%;">
		                                        <option value="12">12px</option>
		                                        <option value="14">14px</option>
		                                        <option value="16" selected="selected">16px</option>
		                                        <option value="18">18px</option>
		                                        <option value="20">20px</option>
		                                        <option value="24">24px</option>
		                                        <option value="28">28px</option>
		                                        <option value="32">32px</option>
		                                        <option value="38">38px</option>
		                                    </select>
		                                </div>
		                            </div>
		                            <div class="col-md-6" style="padding: 0px;margin: 0px;">
		                                <div class="col-md-12" style="padding: 0px;margin: 0px; display: inline;margin-top: 8px;">
		                                    <span style="font-size: 12px;font-weight: bold;">Font Family&nbsp;:</span>
		                                </div>
		                                <div class="col-md-12" style="padding: 0px;margin: 0px;">
		                                    <select name="font" id="FontFamily" style="font-size: 11px;width: 90%;">
		                                        <option value="Arial">Arial</option>
		                                        <option value="Verdana">Verdana</option>
		                                        <option value="Open Sans" selected="selected">Open Sans</option>
		                                        <option value="Sans Serif">Sans Serif</option>
		                                    </select>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="row">
		                        <div class="col-md-5">
		                            <div class="col-md-12" style="padding: 0px;margin: 0px;"></div>
		                            <div class="col-md-12" style="padding: 0px;margin: 0px;">
		                                <a class="btn-btn btn-small yes button-ui mt-10 ui-button ui-widget ui-state-default ui-corner-all" id="addTextbtn" href="#tab-1" style="padding:3px !important; font-size: 11px; width: 100%;text-align: center;">Rool Over</a>
		                            </div>
		                        </div>
		                        <div class="col-md-7">
		                            <form>
		                                <div class="col-md-12" style="padding: 0px;margin: 0px;">
		                                    <span style="font-size: 12px;font-weight: bold;">Alignment&nbsp;:</span>
		                                </div>
		                                <div class="col-md-12" style="padding: 0px;margin: 0px;">
		                                    <div id="align">
		                                        <input type="radio" id="left" name="style" checked="checked">
		                                        <label for="left" id="text_left" style="width: 24%;"><i class="fa fa-align-left"></i>
		                                        </label>
		                                        <input type="radio" id="center" name="style">
		                                        <label for="center" id="text_center" style="width: 24%;"><i class="fa fa-align-center"></i>
		                                        </label>
		                                        <input type="radio" id="right" name="style">
		                                        <label for="right" id="text_right" style="width: 24%;"><i class="fa fa-align-right"></i>
		                                        </label>
		                                        <input type="radio" id="justify" name="style">
		                                        <label for="justify" id="text_justify" style="width: 24%;"><i class="fa fa-align-justify"></i>
		                                    </div>
		                                </div>
		                            </form>
		                        </div>
		                    </div>
		                    <div class="row">
		                        <div class="col-md-5">
		                            <div class="btn-group" role="group">
		                                <button type="button" style="width: 25%;" class="btn btn-default" align="center"><i class="fa fa-link"></i>
		                                </button>
		                                <button type="button" style="width: 25%;" class="btn btn-default" align="center"><i class="fa fa-chain-broken"></i>
		                                </button>
		                                <button type="button" id="bringToFront" style="width: 25%;" class="btn btn-default" align="center"><img src="images/layered-top.png" style="width: 16px;" />
		                                </button>
		                                <button type="button" id="bringToBack" style="width: 25%;" class="btn btn-default" align="center"><img src="images/layered-bottom.png" style="width: 16px;" />
		                                </button>
		                            </div>
		                        </div>
		                        <div class="col-md-7">
		                            <form>
		                                <div class="col-md-12" style="padding: 0px;">
		                                    <span style="font-size: 12px;font-weight: bold;">Style&nbsp;:</span>
		                                </div>
		                                <div class="col-md-12" style="padding: 0px;">
		                                    <div id="format">
		                                        <input type="checkbox" id="bold">
		                                        <label class="boldbutton" for="bold" id="text_bold" style="width: 24%;"><i class="fa fa-bold"></i>
		                                        </label>
		                                        <input type="checkbox" id="italic">
		                                        <label for="italic" id="text_italic" style="width: 24%;"><i class="fa fa-italic"></i>
		                                        </label>
		                                        <input type="checkbox" id="underline">
		                                        <label for="underline" id="text_underline" style="width: 24%;"><i class="fa fa-underline"></i>
		                                        </label>
		                                        <input type="checkbox" id="list">
		                                        <label for="list" style="width: 24%;"><i class="fa fa-list"></i>
		                                        </label>
		                                    </div>
		                                </div>
		                            </form>
		                        </div>
		                    </div>
		                    <div class="row">
		                        <div class="col-md-5">
		                            <div class="col-md-12" style="padding: 0px;">
		                                <span style="font-size: 12px;font-weight: bold;">Lock/Un-Lock&nbsp;:</span>
		                            </div>
		                            <div class="col-md-12" style="padding: 0px;">
		                                <form>
		                                    <div id="lock">
		                                        <input type="radio" id="lock" name="lock">
		                                        <label for="lock"><i class="fa fa-lock" id="text_lock"></i>
		                                        </label>
		                                    </div>
		                                </form>
		                            </div>
		                        </div>
		                        <div class="col-md-7">
		                            <div class="col-md-8" style="padding: 0px;">
		                                <div class="col-md-6" style="padding: 0px;">
		                                    <span style="font-size: 12px;font-weight: bold;">Color&nbsp;:</span>
		                                </div>
		                                <div class="col-md-6" style="padding: 0px;">
		                                    <div id="picker"></div>
		                                </div>
		                            </div>
		                            <div class="col-md-3" style="padding: 0px;margin-left: 2%;">
		                                <div id="ColorPicker"><img style=" display: inline-block;padding: 0px; margin:0px;width:30px;" src="images/color-picker.png" />
		                                </div>
		                            </div>
		                        </div>
		                    </div>

		                    <!-- <button id="picker"></button>-->



		                    <ul class="mt-50 clear">
		                        <li><a href="#tabs-01">Property Info</a>
		                        </li>
		                        <li><a href="#tabs-02">Agent 1</a>
		                        </li>
		                        <li><a href="#tabs-03">Agent 2</a>
		                        </li>
		                        <li><a href="#tabs-04">Company 1</a>
		                        </li>
		                        <li><a href="#tabs-05">Company 2</a>
		                        </li>
		                    </ul>
		                    <div id="tabs-01">
		                        <div id="prop-info" class="col-2">
		                            <h3 class="center-text">Select Property Text Box to Add.</h3>
		                        </div>
		                    </div>
		                    <div id="tabs-02">
		                        <div id="agent-info" class="col-2">
		                            <h3 class="center-text">Select Agent 1 Text Box to Add.</h3>
		                        </div>
		                    </div>
		                    <div id="tabs-03">
		                        <div id="agent-2-info" class="col-2">
		                            <h3 class="center-text">Select Agent 2 Text Box to Add.</h3>
		                        </div>
		                    </div>
		                    <div id="tabs-04">
		                        <div id="company-info" class="col-2">
		                            <h3 class="center-text">Select Company 1 Text Box to Add.</h3>
		                        </div>
		                    </div>
		                    <div id="tabs-05">
		                        <div id="company-2-info" class="col-2">
		                            <h3 class="center-text">Select Company 2 Text Box to Add.</h3>
		                        </div>
		                    </div>
		                </div>
		                <div id="tabs-2">
		                    <div class="two-cols-wrap image-edit-align clearfix">
		                        <a class="btn-btn btn-small yes" id="addimage" href="#tab-1" style="margin: 2%;">Add Image</a>
		                        <h3 class="center-text">Select Image Number to Input</h3>
		                        <div class="two-cols clearfix">
		                            <form class="inline left mr-5 mt-10 mb-10">
		                                <div id="lock-image">
		                                    <span class="label">Layer Lock</span>
		                                    <input type="radio" id="lock-img" name="lock-img" checked>
		                                    <label for="lock-img" id="lock_img"><i class="fa fa-lock"></i>
		                                    </label>
		                                    <input type="radio" id="unlock-img" name="lock-img">
		                                    <label for="unlock-img" id="unlock_img"><i class="fa fa-unlock"></i>
		                                    </label>
		                                </div>
		                            </form>
		                        </div>
		                        <div class="two-cols last">
		                            <div class="inline left mt-10 mb-10">
		                                <div class="width-input">
		                                    <label>Width</label>
		                                    <input type="number" name="width" value="350" id="img_width_input" placeholder="350px" class="ui-button">
		                                </div>
		                                <div class="width-input">
		                                    <label>Height</label>
		                                    <input type="number" name="height" value="150" id="img_height_input" placeholder="150px" class="ui-button">
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="two-cols-wrap">
		                        <div class="two-cols clearfix">
		                            <div class="clip-art-wrap-40">
		                                <img class="image-res" id="bringFrontImage" src="images/layered-top.png" />
		                                <img class="image-res" id="bringBackImage" src="images/layered-bottom.png" />
		                                <!--  <img class="image-res"  src="images/color-picker.png" /> -->
		                            </div>
		                        </div>
		                        <!--    <div class="two-cols last">
		            <h3 class="color-wrap">
		                Color :
		                <div class="color"></div>
		            </h3>
		        </div> -->
		                    </div>
		                    <hr class="sep">
		                    <form class=" mt-10 mb-10">
		                        <div id="image-count" class="clearfix">

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' id="img-count1" data-type="image_count1" for="img-count-1">1</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count2" for="img-count-2">2</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count3" for="img-count-3">3</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count4" for="img-count-4">4</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count5" for="img-count-5">5</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count6" for="img-count-6">6</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count7" for="img-count-7">7</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count8" for="img-count-8">8</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count9" for="img-count-9">9</div>

		                            <div class="round-label ui-button ui-widget ui-state-default ui-button-text-only" linkid='no' data-type="image_count0" for="img-count-0">0</div>
		                        </div>
		                    </form>
		                    <ul class="mt-50 clear">
		                        <li><a href="#sub-tabs-1">Property Info</a>
		                        </li>
		                        <li><a href="#sub-tabs-2">Agent 1</a>
		                        </li>
		                        <li><a href="#sub-tabs-3">Agent 2</a>
		                        </li>
		                        <li><a href="#sub-tabs-4">Company 1</a>
		                        </li>
		                        <li><a href="#sub-tabs-5">Company 2</a>
		                        </li>
		                    </ul>
		                    <div id="sub-tabs-1">
		                    </div>
		                    <div id="sub-tabs-2">
		                        <div id="agent-1-image" class="col-2">
		                            <h3 class="center-text">Select Agent 1 Image # to Add.</h3>
		                            <input type="checkbox" id="agent-1-image-1">
		                            <label for="agent-1-image-1">Image 1</label>
		                            <input type="checkbox" id="agent-1-image-2">
		                            <label for="agent-1-image-2">Image 2</label>
		                            <input type="checkbox" id="agent-1-image-3">
		                            <label for="agent-1-image-3">Image 3</label>
		                            <input type="checkbox" id="agent-1-image-4">
		                            <label for="agent-1-image-4">Image 4</label>
		                            <input type="checkbox" id="agent-1-image-5">
		                            <label for="agent-1-image-5">Image 5</label>
		                            <input type="checkbox" id="agent-1-image-6">
		                            <label for="agent-1-image-6">Image 6</label>
		                            <input type="checkbox" id="agent-1-image-7">
		                            <label for="agent-1-image-7">Image 7</label>
		                            <input type="checkbox" id="agent-1-image-8">
		                            <label for="agent-1-image-8">Image 8</label>
		                        </div>
		                    </div>
		                    <div id="sub-tabs-3">
		                        <div id="agent-2-image" class="col-2">
		                            <h3 class="center-text">Select Agent 2 Image # to Add.</h3>
		                            <input type="checkbox" id="agent-2-image-1">
		                            <label for="agent-2-image-1">Image 1</label>
		                            <input type="checkbox" id="agent-2-image-2">
		                            <label for="agent-2-image-2">Image 2</label>
		                            <input type="checkbox" id="agent-2-image-3">
		                            <label for="agent-2-image-3">Image 3</label>
		                            <input type="checkbox" id="agent-2-image-4">
		                            <label for="agent-2-image-4">Image 4</label>
		                            <input type="checkbox" id="agent-2-image-5">
		                            <label for="agent-2-image-5">Image 5</label>
		                            <input type="checkbox" id="agent-2-image-6">
		                            <label for="agent-2-image-6">Image 6</label>
		                            <input type="checkbox" id="agent-2-image-7">
		                            <label for="agent-2-image-7">Image 7</label>
		                            <input type="checkbox" id="agent-2-image-8">
		                            <label for="agent-2-image-8">Image 8</label>
		                        </div>
		                    </div>
		                    <div id="sub-tabs-4">
		                        <div id="company-1-image" class="col-2">
		                            <h3 class="center-text">Select Company 1 Image # to Add.</h3>
		                            <input type="checkbox" id="company-1-image-1">
		                            <label for="company-1-image-1">Image 1</label>
		                            <input type="checkbox" id="company-1-image-2">
		                            <label for="company-1-image-2">Image 2</label>
		                            <input type="checkbox" id="company-1-image-3">
		                            <label for="company-1-image-3">Image 3</label>
		                            <input type="checkbox" id="company-1-image-4">
		                            <label for="company-1-image-4">Image 4</label>
		                            <input type="checkbox" id="company-1-image-5">
		                            <label for="company-1-image-5">Image 5</label>
		                            <input type="checkbox" id="company-1-image-6">
		                            <label for="company-1-image-6">Image 6</label>
		                            <input type="checkbox" id="company-1-image-7">
		                            <label for="company-1-image-7">Image 7</label>
		                            <input type="checkbox" id="company-1-image-8">
		                            <label for="company-1-image-8">Image 8</label>
		                        </div>
		                    </div>
		                    <div id="sub-tabs-5">
		                        <div id="company-2-image" class="col-2">
		                            <h3 class="center-text">Select Company 2 Image # to Add.</h3>
		                            <input type="checkbox" id="company-2-image-1">
		                            <label for="company-2-image-1">Image 1</label>
		                            <input type="checkbox" id="company-2-image-2">
		                            <label for="company-2-image-2">Image 2</label>
		                            <input type="checkbox" id="company-2-image-3">
		                            <label for="company-2-image-3">Image 3</label>
		                            <input type="checkbox" id="company-2-image-4">
		                            <label for="company-2-image-4">Image 4</label>
		                            <input type="checkbox" id="company-2-image-5">
		                            <label for="company-2-image-5">Image 5</label>
		                            <input type="checkbox" id="company-2-image-6">
		                            <label for="company-2-image-6">Image 6</label>
		                            <input type="checkbox" id="company-2-image-7">
		                            <label for="company-2-image-7">Image 7</label>
		                            <input type="checkbox" id="company-2-image-8">
		                            <label for="company-2-image-8">Image 8</label>
		                        </div>
		                    </div>
		                </div>
		                <div id="tabs-3">
		                    <div class="two-cols-wrap image-edit-align clearfix">
		                        <a class="btn-btn btn-small yes" id="addshape" href="#tab-1" style="margin: 2%;">Add Shape</a>

		                        <h3 class="center-text">Select Shape Number to Input</h3>
		                        <div class="two-cols clearfix">
		                            <form class="inline left mr-10 mt-10 mb-10">
		                                <div id="object-lock-image">
		                                    <span class="label">Layer Lock</span>
		                                    <input type="radio" id="obj-lock-img" name="obj-img-lock" checked>
		                                    <label for="obj-lock-img" id="lock_shape"><i class="fa fa-lock"></i>
		                                    </label>
		                                    <input type="radio" id="obj-unlock-img" name="obj-img-lock">
		                                    <label for="obj-unlock-img" id="unlock_shape"><i class="fa fa-unlock"></i>
		                                    </label>
		                                </div>
		                            </form>
		                        </div>
		                        <div class="two-cols last">
		                            <div class="inline left mt-10 mb-10">
		                                <div class="width-input">
		                                    <label>Width</label>
		                                    <input type="number" name="width" value="350" id="shape_width_input" placeholder="350" class="ui-button">
		                                </div>
		                                <div class="width-input">
		                                    <label>Height</label>
		                                    <input type="number" name="height" value="150" id="shape_height_input" placeholder="150" class="ui-button">
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="two-cols-wrap">
		                        <div class="two-cols clearfix">
		                            <div class="clip-art-wrap-40">
		                                <img class="image-res" id="bringFrontShape" src="images/layered-top.png" />
		                                <img class="image-res" id="bringBackShape" src="images/layered-bottom.png" />

		                            </div>
		                        </div>
		                    </div>
		                    <hr class="sep">
		                    <div class="clip-art-wrap mt-20">
		                        <img class="image-res" src="images/circle.png" />
		                        <img class="image-res" src="images/square.png" />
		                        <img class="image-res" src="images/rounded.png" />
		                        <img class="image-res" src="images/rounded-dashed.png" />
		                        <img class="image-res" src="images/diagonal.png" />
		                        <img class="image-res" src="images/star.png" />
		                        <img class="image-res" src="images/triangle.png" />
		                        <img class="image-res" src="images/lasso-tool.png" />
		                    </div>
		                    <hr class="sep">
		                    <div class="clip-art-wrap mt-20">
		                        <ul class="list-inline list-4">
		                            <li class="width-20"><img class="image-res" src="images/color-bucket.png" />
		                            </li>
		                            <li class="width-20"><img class="image-res" src="images/color-chart.png" />
		                            </li>
		                            <li class="width-20"><img class="image-res" src="images/color-picker.png" />
		                            </li>
		                            <li class="width-40">
		                                <h3 class="color-wrap">
		                    Color :
		                    <div class="color colorpicker" id="svgFill" data-type="svgfill"></div>
		                </h3>
		                            </li>
		                        </ul>
		                    </div>
		                    <hr class="sep">
		                    <div class="clip-art-wrap mt-20">
		                        <ul class="list-inline list-4">
		                            <li class="width-20"><img class="image-res" src="images/color-bucket.png" />
		                            </li>
		                            <li class="width-20"><img class="image-res" src="images/color-chart.png" />
		                            </li>
		                            <li class="width-20"><img class="image-res" src="images/color-picker.png" />
		                            </li>
		                            <li class="width-40">
		                                <h3 class="color-wrap">
		                    Color :
		                    <div class="color colorpicker" id="svgStroke" data-type="svgstroke"></div>
		                </h3>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		                <div id="tabs-4">
		                    <div class="two-cols-wrap image-edit-align clearfix">
		                        <h3 class="center-text">Select Image Number to Input</h3>
		                        <div class="two-cols clearfix">
		                            <form class="inline left mr-10 mt-10 mb-10">
		                                <div id="set-color-lock-image">
		                                    <span class="label">Layer Lock</span>
		                                    <input type="radio" id="set-col-lock-img" name="set-col-img-lock" checked>
		                                    <label for="set-col-lock-img" id="lock_color"><i class="fa fa-lock"></i>
		                                    </label>
		                                    <input type="radio" id="set-col-unlock-img" name="set-col-img-lock">
		                                    <label for="set-col-unlock-img" id="unlock_color"><i class="fa fa-unlock"></i>
		                                    </label>
		                                </div>
		                            </form>
		                        </div>
		                        <div class="two-cols last">
		                            <div class="inline left mt-10 mb-10">
		                                <div class="width-input">
		                                    <label>Width</label>
		                                    <input type="number" name="width" id="color_width_input" value="350" placeholder="350" class="ui-button">
		                                </div>
		                                <div class="width-input">
		                                    <label>Height</label>
		                                    <input type="number" name="height" id="color_height_input" value="150" placeholder="150" class="ui-button">
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="two-cols-wrap">
		                        <div class="two-cols clearfix">
		                            <div class="clip-art-wrap-40">
		                                <img class="image-res" id="bringFrontColor" src="images/layered-top.png" />
		                                <img class="image-res" id="bringFrontColor" src="images/layered-bottom.png" />
		                                <!-- <img class="image-res" id="" src="images/color-picker.png" /> -->
		                            </div>
		                        </div>
		                        <div class="two-cols last">
		                            <h3 class="color-wrap">
		            Color :
		            <div class="color"></div>
		        </h3>
		                        </div>
		                    </div>
		                    <hr class="sep">
		                    <div class="clip-art-wrap mt-20">
		                        <img class="image-res add_svg" src="images/svg/plain.svg" />
		                        <img class="image-res add_svg" src="images/svg/square_2.svg" />
		                        <img class="image-res add_svg" src="images/svg/plain.svg" />
		                        <img class="image-res add_svg" src="images/svg/plain.svg" />
		                        <img class="image-res add_svg" src="images/svg/plain.svg" />
		                        <img class="image-res add_svg" src="images/svg/plain.svg" />
		                        <img class="image-res add_svg" src="images/svg/plain.svg" />
		                        <img class="image-res" src="images/lasso-tool.png" />
		                    </div>
		                    <ul class="mt-50 clear" id="colortabs">
		                        <li><a href="#sample-1">Sample 1</a>
		                        </li>
		                        <li><a href="#sample-2">Sample 2</a>
		                        </li>
		                        <li><a href="#sample-3">Sample 3</a>
		                        </li>
		                        <li><a href="#sample-4">Sample 4</a>
		                        </li>
		                        <li><a href="#sample-5">Sample 5</a>
		                        </li>
		                        <li><a href="#sample-sets">SETS</a>
		                        </li>
		                    </ul>
		                    <div id="color-sample-area">
		                        <div id="sample-1">
		                            <h3 class="center-text">Set Flyer Color Option 1</h3>
		                        </div>
		                        <div id="sample-2">
		                            <h3 class="center-text">Set Flyer Color Option 2</h3>
		                        </div>
		                        <div id="sample-3">
		                            <h3 class="center-text">Set Flyer Color Option 3</h3>
		                        </div>
		                        <div id="sample-4">
		                            <h3 class="center-text">Set Flyer Color Option 4</h3>
		                        </div>
		                        <div id="sample-5">
		                            <h3 class="center-text">Set Flyer Color Option 5</h3>
		                            <div class="col-wrap">
		                                <div class="col-three">
		                                    <div class="set-color-box mb-10">Color 1</div>
		                                    <div class="set-color-box mb-10">Color 2</div>
		                                    <div class="set-color-box mb-10">Color 3</div>
		                                    <div class="set-color-box mb-10">Color 4</div>
		                                </div>
		                                <div class="col-three">
		                                    <div class="color-box mb-10" style="background-color: #ffe59b">&nbsp</div>
		                                    <div class="color-box mb-10" style="background-color: #03fbfb">&nbsp</div>
		                                    <div class="color-box mb-10" style="background-color: #9e5279">&nbsp</div>
		                                    <div class="color-box mb-10" style="background-color: #b85b0d">&nbsp</div>
		                                </div>
		                                <div class="col-three last">
		                                    <div class="color-rgb-box mb-10">R 255, G 229, B 156</div>
		                                    <div class="color-rgb-box mb-10">R 2, G 254, B 255</div>
		                                    <div class="color-rgb-box mb-10">R 164, G 79, B 121</div>
		                                    <div class="color-rgb-box mb-10">R 184, G 91, B 13</div>
		                                </div>
		                                <div class="clip-art-wrap mt-20 right">
		                                    <ul class="list-inline list-4">
		                                        <li class="color-picker-30"><img class="image-res" src="images/color-picker.png" />
		                                        </li>
		                                        <li>
		                                            <h3 class="color-wrap">
		                        Color :
		                        <div class="color"></div>
		                    </h3>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>
		                        <div id="sample-sets">
		                            <h3 class="center-text" id="setcolortitle">Set Flyer Color SETS</h3>
		                            <div class="col-wrap">
		                                <div class="col-three" id="setcolortext">
		                                </div>
		                                <div class="col-three" id="setcolorbackground">
		                                </div>
		                                <div class="col-three last" id="setcolorcode">
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div id="tabs-5">
		                    <h1>Finish</h1>
		                </div>
		            </div>
		            <input type="submit" id="savecolor" class="button-ui right mt-10" value="Save">
		        </div>
		    </div>
		</div>
	</div>
</div>