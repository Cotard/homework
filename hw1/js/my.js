var $add_comment = $(".add_comment").clone();


function answer(id) {
	var $block = "#" + id;
	$add_comment.children("textarea").val('');
	$add_comment.appendTo($($block));
}