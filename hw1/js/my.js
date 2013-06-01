$('.comment')
.focus(function() {
	$(this).addClass('comment_active');
})
.blur(function() {
	$(this).removeClass('comment_active');
});