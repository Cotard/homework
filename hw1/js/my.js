var $add_comment = $(".add_comment").clone();

$('.foot_comments a').click(function(event){
   	event.stopPropagation();
   	$add_comment.children("textarea").val('');

	var list = $(this).find('div');
	if(list.length > 0)
		$add_comment.toggle("fast");
   	else
   		//$add_comment.hide());
		$add_comment.appendTo($(this).parent().parent());
   
});

$(function(){
	$(document).click(function(event) {
    	if ($(event.target).closest($add_comment).length) 
    		return;
    	$add_comment.hide("fast");
    	event.stopPropagation();
  });
});