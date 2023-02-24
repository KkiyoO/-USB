//2023年2月の初日をを表示したいときは
//new_Date(2023,1(month-1),1).
//指定するときは月に要注意。
//月は0から始まるので番号をずらせば
//1～12月を表現できる
//月初めの日付の関数
function First_date(year,month){
    var dt_first_date=new Date(year,month-1,1)
    var first_date=dt_first_date.getDate()
    return first_date
}
//月末の日付の関数
function Last_date(year,month){
    var dt_last_date=new Date(year,month,0)
    var last_date=dt_last_date.getDate()
    return last_date
}
//月の日付
function  month_date(last_date){
    var j
    var Month_date=[]
    for (j=0;j<last_date;j++){
        Month_date[j]=j+1
    }
         
    return Month_date
}
//console.log(month_date(Last_date(2023,2)))
function month_day_number(year ,month,first_date,last_date){
    var month_day_number=[]
    for (j=first_date;j<=last_date;j++){
        var dt_month=new Date(year,month-1,j)
        month_day_number[j-1]=dt_month.getDay()
    }

    return month_day_number

}
//曜日
//function month_day(year ,month,first_date,last_date){
  //  const day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
   // var month_day=[]
    //for (j=first_date;j<=last_date;j++){
      //  var dt_month=new Date(year,month-1,j)
       // month_day[j-1]=day[dt_month.getDay()]
    //}

    //return month_day

//}


//var object=document.getElementById("day")
//object.innerText=month_date(Last_date(2023,2))
//var object=document.getElementById("id")
//object.innerText=month_day(2023,2,First_date(2023,2),Last_date(2023,2))
//先月の最後の週
//当月初めの曜日の番号[0]が日曜日で[6]が土曜日
var add_before=month_day_number(2023,2,First_date(2023,2),Last_date(2023,2))[0]
//当月の日付
var Feb=month_date(Last_date(2023,2))
//〇月×日が例えば水曜日から始まる時もあるため日曜日から始まるように調整
var Jan_add=[]
//先月の最終日
const Jan_last_date=Last_date(2023,1)
for (j=0;j<add_before;j++){
    Jan_add[j]=Jan_last_date-add_before+j+1
}
//次の月の最初の週
//当付きの最後の日の曜日
//var add_after=month_day_number(2023,2,First_date(2023,2),Last_date(2023,2))
var add_after=month_day_number(2023,2,First_date(2023,2),Last_date(2023,2))[Last_date(2023,2)-1]
////〇月×日が例えば水曜日でおわる時もあるためどようびでおわれるに調整
var Mar_add=[]
//当月の最終日
//const Feb_last_day=Last_date(2023,2)
//次の月の最初の日
const Mar_1st_date=First_date(2023,3)
//
for (j=0;j<6-add_after;j++){
    if(add_after==6){}
    else{
    Mar_add[j]=Mar_1st_date+j
    }
}
//先月の最終週と当月と来月の最初の週
var Feb=Jan_add.concat(Feb, Mar_add);
let second = [];

let numOfElements = 7;

for(let i = 0; 0 < Feb.length; i){
  second.push(Feb.splice(i, numOfElements));
}
//var object3=document.getElementById("id3")
//for(let i=0;i<4;i++){

    //for(let j=0;j<7;j++){
    //    object3.innerText=second[i][j]
    //}
//}
//object3.innerText=second


const weeks = ['日', '月', '火', '水', '木', '金', '土']
let calendarHtml = '' // HTMLを組み立てる変数
calendarHtml += '<h1>' + 2023 + '/' + 2 + '</h1>'
calendarHtml += '<table>'

// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td>' + weeks[i] + '</td>'
}
calendarHtml += '<tr>'
calendarHtml += '</tr>'


calendarHtml += '<tr>'
calendarHtml += '</tr>'


//日付の表示
for(let j = 0; j < 5; j++){
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + second[j][i] + '</td>'
    }
    calendarHtml += '<tr>'
    calendarHtml += '</tr>'
    }
    
    calendarHtml += '</table>'
    
calendarHtml += '</table>'


// 曜日の行を作成
document.querySelector('#calendar').innerHTML = calendarHtml
