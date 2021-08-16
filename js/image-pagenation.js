
$(function() {
	$('.p-pagination').paginathing({//親要素のclassを記述
		firstLast :false,
		perPage: 3,//1ページあたりの表示件数
		prevText:'<< Prev',
		nextText:'Next>>',//1つ次のページへ移動するボタンのテキスト
		ulClass: 'p-pagination__class',
		containerClass:'p-pagination__container',
	
	})

	$('.p-pagination__other').paginathing({//親要素のclassを記述
		firstLast :false,
		perPage: 1,//1ページあたりの表示件数
		prevText:'<< Prev',
		nextText:'Next>>',//1つ次のページへ移動するボタンのテキスト
		ulClass: 'p-pagination__class',
		containerClass:'p-pagination__container',
	
	})

});

