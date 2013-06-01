$('#profile').hover(function(event){    
    $('.user-nav').slideToggle("fast");  
});

var $add_comment = $(".add_comment").clone();

$('footer a').click(function(event){
   	event.stopPropagation();
    var $comment = $(this).parent().parent();
	var list = $comment.find('.add_comment');
	if (list.length == 0)
	{
        $add_comment.children("textarea").val('');
		$add_comment.appendTo($(this));
        $add_comment.hide();
        $add_comment.show("fast");
        $add_comment.addClass("clicked")
    }
    else
        if ($add_comment.hasClass("clicked"))
            $add_comment.show("fast");
   
});

$(function(){
	$(document).click(function(event) {
    	if ($(event.target).closest($add_comment).length) 
    		return;
    	$add_comment.hide("fast");
    	event.stopPropagation();
  });
});