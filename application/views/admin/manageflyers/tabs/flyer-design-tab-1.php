<?php
echo $error['insert'];
unset($error['insert']);
echo $success;
unset($success);
?>
<form method="post" id="flayer_form" enctype="multipart/form-data" name="flayer_form">
    <h3>Step 1:</h3>
    <h4>Select Flyer to add</h4>
    <span class="error"><?php echo $error['error'];?></span>
    <input type="file" id="fileinput" name="fileinput"/>
    <hr>
    <h3>Step 2:</h3>
    <h4>Select Flyer Size</h4>
    <span class="error"><?php echo form_error('flyer_size');?></span>
    <div id="select-flyer-size">
        <?php
        if (is_array($flyerSize)) {
            ?>
<!--            <input type="hidden" name="hidden_flayer_images_id" id="hidden_flayer_images_id" value="">-->
            <?php
            foreach ($flyerSize as $key => $value) {
                ?>
                <label class="box-radio">
                    <input type="radio" name="flyer_size" value="<?php echo $value['pk_flyer_size'] ?>" id="size-<?php echo $value['pk_flyer_size'] ?>" /><?php echo $value['flyer_size_title'] ?>
                </label>
                <?php
            }
        }
        ?>
    </div>
    <hr>
    <h3>Step 3:</h3>
    <h4>Select buttons and tags for flyer</h4>
    <div class="row">
        <?php if (!empty($buttontags)) { ?>
            <div class="checkbox-3-col col-md-6">
                <div class="input-wrap clearfix">
                    <h4 class="col-heading">Button Tags</h4>
                    <span class="error"><?php echo form_error('btn_tags');?></span>
                    <?php foreach ($buttontags as $btn) { ?>
                        <label class="box-checkbox">
                            <input type="checkbox" name="btn_tags[]" value="<?php echo $btn['pk_button_tags']; ?>" > <?php echo $btn['button_tags_title']; ?>
                        </label>
                    <?php } ?>
                </div>
            </div>
        <?php } ?>
        <?php if (!empty($flyertags)) { ?>
            <div class="checkbox-3-col col-md-6">
                <div class="input-wrap clearfix">
                    <h4 class="col-heading">Flyer Tags</h4>
                    <span class="error"><?php echo form_error('flyer_tags');?></span>
                    <?php foreach ($flyertags as $flyer) { ?>
                        <label class="box-checkbox">
                            <input type="checkbox" name="flyer_tags[]" value="<?php echo $flyer['pk_flyer_tags']; ?>"> <?php echo $flyer['flyer_tags_title']; ?>
                        </label>
                    <?php } ?>
                </div>
            </div>
        <?php } ?>
    </div>
    <hr>
    <h3>Step 4:</h3>
    <hr>
    <input type="submit" name="submit" class="btn btn-primary" value="Upload" />
</form>