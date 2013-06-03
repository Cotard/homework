var $add_comment = $("#hidden_add_comment");

$('.validation_error').hide();
$add_comment.hide();

$('#profile').hover(function(event){    
    $('.user-nav').slideToggle("fast");  
});

$('textarea').focus(function(){
    $(this).parent().children('.validation_error').hide();
});


$('footer a').click(function(event){
   	event.stopPropagation();
    var $comment = $(this).parent().parent();
	var list = $comment.find($add_comment);
	if (list.length == 0)
	{
        $add_comment.children("textarea").val('');
		$add_comment.appendTo($(this).parent().children('div'));
        $add_comment.hide();
        $add_comment.show("fast");
        $add_comment.addClass("clicked");
        $('.validation_error').hide();
    }
    else
        if ($add_comment.hasClass("clicked"))
        {
            $('.validation_error').hide();
            $add_comment.show("fast");
        }        
});

$(function(){
	$(document).click(function(event) {
    	if ($(event.target).closest($add_comment).length) 
    		return;
    	$add_comment.hide("fast");
    	event.stopPropagation();
  });
});


$('button').click(function(event){ 
    var val1 = $(this).parent().children('.author'),
        val2 = $(this).parent().children('.comment');
    if (val1.val() == '' || val2.val() == '')
    {
        $(this).parent().children('.validation_error').show();  
    }
    else
        $(this).parent().children('.validation_error').hide();  
});
