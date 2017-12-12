$(document).ready(function() {

	//存登入的一坨html
	var sign_in_html = "<label class='sign-label'>帳號</label><input class='sign-input'><label class='sign-label'>密碼</label><input class='sign-input'><button class='sign-button'>登入</button><button class='sign-button fb'>fb登入</button>";

	//存註冊的一坨html
	var sign_up_html = "<label class='sign-label up'>帳號</label><input class='sign-input'><label class='sign-label up'>電子信箱</label><input class='sign-input'><label class='sign-label up'>密碼</label><input class='sign-input'><label class='sign-label up'>確認密碼</label><input class='sign-input'><button class='sign-button up'>註冊</button><button class='sign-button fb up'>fb註冊</button>";

	var inup;//登入或註冊判斷用

	var toggle_slide = 0 //判斷切換
	
	show_in_or_up("in");
	show_focus_affect();
	
	$(".sign-up").click(function(){
		$(".title").text("登入");
		toggle_slide++;
		$(".pintour-sign-slide").css("right",toggle_slide*5+"0%");
		
		if(toggle_slide>1){
			$(".pintour-sign-slide").css("right","0%");
			toggle_slide = 0;
		}

		if(toggle_slide==1){
			$(".pintour-sign-slide").addClass('up');
			$(".forget").hide();
			show_in_or_up("up");
			show_focus_affect();
		}else if(toggle_slide==0){
			$(".pintour-sign-slide").removeClass('up');
			$(".forget").show();
			show_in_or_up("in");
			show_focus_affect();
			
		}

	});


	$(".sign-up.in").click(function(event) {
		$(".title").text("註冊");
	});


	// 判斷塞入html為登入或註冊的function 
	function show_in_or_up(inup){
		if(inup == "in"){
			$(".input-g").html(""); //把裡面東西清空
			$(".input-g").append(sign_in_html);
		}else if(inup == "up"){
			$(".input-g").html(""); //把裡面東西清空
			$(".input-g").append(sign_up_html);
		}
		
	}

	//底線特效
	function show_focus_affect(){
		$(".sign-input").focus(function(event) {
		$(this).addClass('focus-click');
		});

		$(".sign-input").focusout(function(){
			$(this).removeClass('focus-click');
		});
	}

	//pinker頁面

	var isFollow = 1;

	$(".follow_button ").click(function(event) {
		if(isFollow == 1){
			$(this).text("已追蹤").css({
				backgroundColor: '#ad5958',
				color: 'white',
				border: 'none'
			});;
			isFollow = 0;
		}else if(isFollow == 0){
			$(this).text("追蹤").css({
				backgroundColor: '',
				color: '',
				border: ''
			});;
			isFollow = 1;
		}
		
	});

	$(".keep").mouseenter(function(event) {
		$(".keep span").removeClass("fa-heart").delay(1000).addClass("fa-times").css({
			fontSize: '18pt',
			marginTop: '-1px'
		});
	});

	$(".keep").mouseleave(function(event) {
		$(".keep span").removeClass("fa-times").delay(1000).addClass("fa-heart").css({
			fontSize: '',
			marginTop: ''
		});
		
	});

	$(".keep").click(function(){
		$(".puzzle-box").html("")
		.removeClass('puzzle-box');
	});


	// //puzzle 頁面
	// $(".add_box").click(function(event){
	// 	if(isFollow == 1){
	// 		$(this).text("已加入行程").css({
	// 			backgroundColor: '#068fbf',
	// 			color: 'white',
	// 			border: 'none'
	// 		});
	// 		isFollow = 0;
	// 	}else if(isFollow == 0){
	// 		$(this).text("加入行程").css({
	// 			backgroundColor: '',
	// 			color: '',
	// 			border: ''
	// 		});;
	// 		isFollow = 1;
	// 	}
		
	// }); 



	


});