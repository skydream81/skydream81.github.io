function onload() { 
	/////////////////////////
	// 2. 지출내역 목록 출력
	/////////////////////////
	
	let cat1amtwon=cat2amtwon=cat3amtwon=cat4amtwon=cat5amtwon=cat6amtwon=0;
	let keyarray=new Array();
	
	 $('#paytable > tbody > tr').remove();
	
	// localStorage 키 전체 목록 배열에 저장
	for(let i = 0; i < window.localStorage.length; i++) {
		keyarray[i] = window.localStorage.key(i); 		 // 키를 배열에 저장
	}
	keyarray.sort();  // 키(등록일시)를 기준으로 오름차순 정렬
	
	// 키의 value값 목록 추출
	for(let i = 0; i < keyarray.length; i++) {
		const key = keyarray[i]; 		 // 키 찾기
		const value = window.localStorage.getItem(key);  // value 찾기
		const valueObj = JSON.parse(value); 	 // JSON 문자열을 객체로 변환
		
		let paytable_data="";
		
		paytable_data+="<tr>";
		paytable_data+="<td>"+valueObj.paydate+"</td>";
		paytable_data+="<td>"+valueObj.category+"</td>";
		paytable_data+="<td>"+Number(valueObj.payamtaud).toLocaleString()+"</td>";
		paytable_data+="<td>"+Number(valueObj.payamtwon).toLocaleString()+"</td>";
		paytable_data+="<td>"+valueObj.paycause+"</td>";
		paytable_data+="<td>"+valueObj.elsetext+"</td>";
		paytable_data+="<td style=display:none;>"+valueObj.dateString+"</td>";
		paytable_data+="<td><a href=#>삭제</a></td>";
		paytable_data+="</tr>";
			
		$("#paytable").append(paytable_data);	

		
		switch (valueObj.category) {
		  case '일일생활비':
			cat1amtwon+=Number(valueObj.payamtwon);
			break;
		  case '입장료':
			cat2amtwon+=Number(valueObj.payamtwon);
			break;
		  case '교통비':
			cat3amtwon+=Number(valueObj.payamtwon);
			break;
		  case '기타잡비':
			cat4amtwon+=Number(valueObj.payamtwon);
			break;
		  case '선물':
			cat5amtwon+=Number(valueObj.payamtwon);
			break;
		  case 'ETC':
			cat6amtwon+=Number(valueObj.payamtwon);
			break;			
		}
		
	}
	
	
	/////////////////////////
	// 3. 카테고리별 지출 통계 출력
	/////////////////////////
	
	
	$('#stattable > tbody > tr').remove();
	
	let stattable_data="";
	let totamtwon=payamtwon=rmnamtwon=usepct=0;
	
	totamtwon=Math.round(2800000);
	payamtwon=Math.round(cat1amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>일일생활비</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(750000);
	payamtwon=Math.round(cat2amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>입장료</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(600000);
	payamtwon=Math.round(cat3amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>교통비</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(650000);
	payamtwon=Math.round(cat4amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>기타잡비</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(550000);
	payamtwon=Math.round(cat5amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>선물</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(0);
	payamtwon=Math.round(cat6amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>ETC</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
		
	$("#stattable").append(stattable_data);	
	
	
	
}






function regist() { 
	/////////////////////////
	// 1. 지출내역 등록 
	/////////////////////////
	var today = new Date();
	var year = today.getFullYear();
	var month = ('0' + (today.getMonth() + 1)).slice(-2);
	var day = ('0' + today.getDate()).slice(-2);
	var hours = ('0' + today.getHours()).slice(-2); 
	var minutes = ('0' + today.getMinutes()).slice(-2);
	var seconds = ('0' + today.getSeconds()).slice(-2); 
	var dateString = year + month + day + hours + minutes + seconds;
	
	console.log('dateString : ' + dateString);
	
	// Get form data 
    let paydate = document.getElementById('paydate').value; 
    let category = document.getElementById('category').value;
	let payamtaud = document.getElementById('payamtaud').value; 
	let payamtwon = document.getElementById('payamtwon').value; 
	let paycause = document.getElementById('paycause').value; 
	let elsetext = document.getElementById('elsetext').value; 
	
	if (payamtaud) {
		payamtwon = Math.round(payamtaud * 900);
	} else if (payamtwon) {
		payamtaud = Math.round(payamtwon / 900);
	}
	
	console.log('paydate : ' + paydate);
	console.log('category : ' + category);
	console.log('payamtaud : ' + payamtaud);
	console.log('payamtwon : ' + payamtwon);
	console.log('paycause : ' + paycause);
	console.log('elsetext : ' + elsetext);
	console.log('dateString : ' + dateString);
	
	const obj = { paydate : paydate
					, category : category
					, payamtaud : payamtaud
					, payamtwon : payamtwon
					, paycause : paycause
					, elsetext : elsetext
					, dateString : dateString
				}
	 
	console.log('obj.paydate : ' + obj.paydate);
	console.log('obj.category : ' + obj.category);
	console.log('obj.payamtaud : ' + obj.payamtaud);
	console.log('obj.payamtwon : ' + obj.payamtwon);
	console.log('obj.paycause : ' + obj.paycause);
	console.log('obj.elsetext : ' + obj.elsetext);
	console.log('obj.dateString : ' + obj.dateString);
	
	// 객체를 JSON 문자열로 변환
	const objString = JSON.stringify(obj);
		
	// setItem
	window.localStorage.setItem(dateString, objString);
	
	//console.log('key : ' + window.localStorage.key(0));
	
	
	
	
	/////////////////////////
	// 2. 지출내역 목록 UPDATE
	/////////////////////////
	//const list = document.getElementById('paylist');
	
	let cat1amtwon=cat2amtwon=cat3amtwon=cat4amtwon=cat5amtwon=cat6amtwon=0;
	let keyarray=new Array();
	
	 $('#paytable > tbody > tr').remove();
	
	// localStorage 키 전체 목록 배열에 저장
	for(let i = 0; i < window.localStorage.length; i++) {
		keyarray[i] = window.localStorage.key(i); 		 // 키를 배열에 저장
	}
	keyarray.sort();  // 키(등록일시)를 기준으로 오름차순 정렬
	
	// 키의 value값 목록 추출
	for(let i = 0; i < keyarray.length; i++) {
		const key = keyarray[i]; 		 // 키 찾기
		const value = window.localStorage.getItem(key);  // value 찾기
		const valueObj = JSON.parse(value); 	 // JSON 문자열을 객체로 변환
		
		let paytable_data="";
		
		paytable_data+="<tr>";
		paytable_data+="<td>"+valueObj.paydate+"</td>";
		paytable_data+="<td>"+valueObj.category+"</td>";
		paytable_data+="<td>"+Number(valueObj.payamtaud).toLocaleString()+"</td>";
		paytable_data+="<td>"+Number(valueObj.payamtwon).toLocaleString()+"</td>";
		paytable_data+="<td>"+valueObj.paycause+"</td>";
		paytable_data+="<td>"+valueObj.elsetext+"</td>";
		paytable_data+="<td style=display:none;>"+valueObj.dateString+"</td>";
		paytable_data+="<td><a href=#>삭제</a></td>";
		paytable_data+="</tr>";
			
		$("#paytable").append(paytable_data);			
		
		
		switch (valueObj.category) {
		  case '일일생활비':
			cat1amtwon+=Number(valueObj.payamtwon);
			break;
		  case '입장료':
			cat2amtwon+=Number(valueObj.payamtwon);
			break;
		  case '교통비':
			cat3amtwon+=Number(valueObj.payamtwon);
			break;
		  case '기타잡비':
			cat4amtwon+=Number(valueObj.payamtwon);
			break;
		  case '선물':
			cat5amtwon+=Number(valueObj.payamtwon);
			break;
		  case 'ETC':
			cat6amtwon+=Number(valueObj.payamtwon);
			break;			
		}
		
	}
	
	
	
	
	/////////////////////////
	// 3. 카테고리별 지출 통계 UPDATE
	/////////////////////////
	
	$('#stattable > tbody > tr').remove();
	
	let stattable_data="";
	let totamtwon=payamtwon=rmnamtwon=usepct=0;
	
	totamtwon=Math.round(2800000);
	payamtwon=Math.round(cat1amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>일일생활비</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(750000);
	payamtwon=Math.round(cat2amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>입장료</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(600000);
	payamtwon=Math.round(cat3amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>교통비</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(650000);
	payamtwon=Math.round(cat4amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>기타잡비</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(550000);
	payamtwon=Math.round(cat5amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>선물</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
	
	totamtwon=Math.round(0);
	payamtwon=Math.round(cat6amtwon);
	rmnamtwon=totamtwon-payamtwon;
	usepct=Math.round(payamtwon/totamtwon*100);
	stattable_data+="<tr>";
	stattable_data+="<td>ETC</td>";
	stattable_data+="<td>"+totamtwon.toLocaleString()+" / "+Math.round(totamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+payamtwon.toLocaleString()+" / "+Math.round(payamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+rmnamtwon.toLocaleString()+" / "+Math.round(rmnamtwon/900).toLocaleString()+"</td>";
	stattable_data+="<td>"+usepct+"</td>";
	stattable_data+="</tr>";
		
	$("#stattable").append(stattable_data);		
	
	
	
	console.log(window.localStorage.length);
	//window.localStorage.clear();
} 


$("#paytable").on('click','tr a',function(e){
//$('table').on('click','tr a',function(e){
	e.preventDefault();

	/*var strText = $(this).parent().text().split(' ')[0];

	if( confirm('[' + strText + '] 를 삭제할까요?') )
	{
		$(this).parents('tr').remove();
	}
	*/
	var paydate = $(this).parent().parent().children().eq(6).text();
	
	if( confirm('해당 건을 삭제할까요?') )
	{
		window.localStorage.removeItem(paydate);
		onload();
	}
});



// 다운로드 버튼 클릭 시
function download() { 
	if( confirm('전체 건을 일괄 다운로드 하실래요?') )
	{
		// localStorage에 저장된 데이터를 읽어와 JSON 형식으로 변환
		let data = {};
		for (let i = 0; i < localStorage.length; i++) {
		  const key = localStorage.key(i);
		  data[key] = localStorage.getItem(key);
		}
		const jsonData = JSON.parse(JSON.stringify(data));
		console.log(jsonData);
		
		// JSON 데이터를 파일로 저장
		const blob = new Blob([jsonData], {type: 'application/json'});
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'localStorage_backup.json';
		link.click();
		
	}
}	


// 업로드 버튼 클릭 시
function upload() { 
	if( confirm('전체 건을 일괄 업로드 하실래요?') )
	{
		import data from './test.json' assert{ type: "json"} ;
		 
	}
}



// 일괄삭제 버튼 클릭 시
function alldel() { 
	if( confirm('전체 건을 일괄적으로 삭제 하실래요?') )
	{
		window.localStorage.clear();
		onload();
	}
}
