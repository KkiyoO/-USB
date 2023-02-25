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
//今日の日付は〇〇ですというのを表示してくれる機能を追加
function getNow() {
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth()+1; //１を足すこと
    var day = now.getDate();
    
   
    //出力用
    var s = year + "年" + mon + "月" + day + "日"; 
    return s;
   }

//var object=document.getElementById("day")
//object.innerText=month_date(Last_date(2023,2))
//var object=document.getElementById("id")
//object.innerText=month_day(2023,2,First_date(2023,2),Last_date(2023,2))
//先月の最後の週
//曜日を書く
const weeks = ['日', '月', '火', '水', '木', '金', '土']
//当年、当月を指定。本日の日付と年にしています.

//現在の日にち、時刻、曜日をひとまとめにしているもの
var now=new Date()
//本日の日付
var today_date=now.getDate()
//本日の曜日（番号）
var today_day_number=now.getDay()
//今年の年（西暦）
var year=now.getFullYear()
//本日の月
var month=now.getMonth()+1
//今の時間【時｝
var hour=now.getHours()
//今の時刻「分」
var minute=now.getMinutes()


//当付きの流れのカレンダーを作るために一連の流れを関数化。
function flow_chart(year,month,weeks){
    //当月初めの曜日の番号[0]が日曜日で[6]が土曜日
    var add_before=month_day_number(year,month,First_date(year,month),Last_date(year,month))[0]
//当月の日付
    var Feb=month_date(Last_date(year,month))
//〇月×日が例えば水曜日から始まる時もあるため日曜日から始まるように調整
    var Jan_add=[]
//先月の最終日
    const Jan_last_date=Last_date(year,month-1)
    for (j=0;j<add_before;j++){
        Jan_add[j]=Jan_last_date-add_before+j+1
    }
//次の月の最初の週
//当付きの最後の日の曜日
//var add_after=month_day_number(2023,2,First_date(2023,2),Last_date(2023,2))
    var add_after=month_day_number(year,month,First_date(year,month),Last_date(year,month))[Last_date(year,month)-1]
////〇月×日が例えば水曜日でおわる時もあるためどようびでおわれるに調整
    var Mar_add=[]
//当月の最終日
//const Feb_last_day=Last_date(2023,2)
//次の月の最初の日
    const Mar_1st_date=First_date(year,month+1)
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


//Htmlを使ってカレンダーを表記
    let calendarHtml = '' // HTMLを組み立てる変数

    calendarHtml += '<h1>' + year + '/' + month +'</h1>'
    calendarHtml += '<br>'
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
    
   // calendarHtml += '</table>'
    calendarHtml += '</table>'

    return calendarHtml
}
//hint for 文を使うと1年間出る。
//hint 2 [calendarHtml +=a]はもともとはいってたものにaを追加するという意味です。
//hint 3はfor 文のループで１つでok.
//hint 4は以下の3つが法則性のヒント。変えるべきはmonthである。
//calendarHtml=flow_chart(year,month,weeks)
//calendarHtml+=flow_chart(year,month+1,weeks)
//calendarHtml+=flow_chart(year,month+2,weeks)

let calendarHtml=getNow()
calendarHtml+=flow_chart(year,month,weeks)
document.querySelector('#calendar').innerHTML = calendarHtml