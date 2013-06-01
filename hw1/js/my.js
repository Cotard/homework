var $add_comment = $(".add_comment").clone();

$('.foot_comments a').click(function(event){
   	event.stopPropagation();
   	$add_comment.children("textarea").val('');
	$add_comment.appendTo($(this).parent().parent());
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