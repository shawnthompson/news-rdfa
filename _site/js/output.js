$(document).ready(function() {

var MaxInputs       = 8; //maximum input boxes allowed
var InputsWrapper   = $("#quoteBox"); //Input boxes wrapper ID
var AddButton       = $("#AddMoreQuoteBox"); //Add button ID

var x = InputsWrapper.length; //initlal text box count
var FieldCount=1; //to keep track of text box added

$(AddButton).click(function (e)  //on add input button click
{
        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++; //text box added increment
            //add input box
            $(InputsWrapper).append('<div class="form-group"><label class="col-sm-2 control-label" for="citation'+ FieldCount +'">Quote '+ FieldCount +'</label><div class="col-sm-10"><textarea class="form-control full-width" id="citation'+ FieldCount +'" name="citation'+ FieldCount +'"></textarea></div></div><fieldset class="col-sm-11 col-sm-offset-1"><legend>Person</legend><div class="form-group"><label class="col-sm-2 control-label" for="honorificPrefix'+ FieldCount +'">Prefix</label><div class="col-sm-10"><input class="form-control" id="honorificPrefix'+ FieldCount +'" name="honorificPrefix'+ FieldCount +'" type="text" placeholder="honorificPrefix"></div></div><div class="form-group"><label class="col-sm-2 control-label" for="givenName'+ FieldCount +'">Given name</label><div class="col-sm-10"><input class="form-control" id="givenName'+ FieldCount +'" name="givenName'+ FieldCount +'" type="text" placeholder="givenName"></div></div><div class="form-group"><label class="col-sm-2 control-label" for="familyName'+ FieldCount +'">Family name</label><div class="col-sm-10"><input class="form-control" id="familyName'+ FieldCount +'" name="familyName'+ FieldCount +'" type="text" placeholder="familyName"></div></div><div class="form-group"><label class="col-sm-2 control-label" for="jobTitle'+ FieldCount +'">Job title</label><div class="col-sm-10"><input class="form-control" id="jobTitle'+ FieldCount +'" name="jobTitle'+ FieldCount +'" type="text" placeholder="jobTitle"></div></div><div class="form-group"><label class="col-sm-2 control-label" for="affiliation'+ FieldCount +'">Affiliation</label><div class="col-sm-10"><input class="form-control" id="affiliation'+ FieldCount +'" name="affiliation'+ FieldCount +'" type="text" placeholder="affiliation"></div></div></fieldset>');
            x++; //text box increment
        }
return false;
});

$("body").on("click",".removeclass", function(e){ //user click on remove text
        if( x > 1 ) {
                $(this).parent('div').remove(); //remove text box
                x--; //decrement textbox
        }
return false;
})

});
