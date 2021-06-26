$(function() {
	$('.p-pagenation').paginathing({//親要素のclassを記述
		perPage: 3,//1ページあたりの表示件数
		prevText:'<< previous',
		nextText:'Next >>',//1つ次のページへ移動するボタンのテキスト
		ulClass: 'c-pagination__class',
	
	})
});