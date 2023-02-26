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

//当月の日数
function month_day_number(year ,month,first_date,last_date){
    var month_day_number=[]
    for (j=first_date;j<=last_date;j++){
        var dt_month=new Date(year,month-1,j)
        month_day_number[j-1]=dt_month.getDay()
    }
    return month_day_number
}

//今日の日付は〇〇ですというのを表示してくれる機能を追加
function getNow() 
{
    const weeks = ['日', '月', '火', '水', '木', '金', '土']
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth()+1; //１を足すこと
    var day = now.getDate();
    var week = weeks[now.getDay()]
    //出力用
    var s ="今日は"+ year + "年" + mon + "月" + day + "日"+"("+ week +")" +"です"; 
    return s;
}

//先月の最後の週
//曜日を書く

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
/// 表示用の日付
var showDate = new Date(now.getFullYear(), now.getMonth(), 1);


//当付きの流れのカレンダーを作るために一連の流れを関数化。
function create_table(year,month){
    const weeks = ['日', '月', '火', '水', '木', '金', '土']
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

    let numOfElements =weeks.length;

    for(let i = 0; 0 < Feb.length; i){
         second.push(Feb.splice(i, numOfElements));
        }



//Htmlを使ってカレンダーを表記
    let calendarHtml = '' // HTMLを組み立てる変数

    calendarHtml += '<h1>' + year + '/' + month +'</h1>'
    calendarHtml +='<h1>' + getNow() +'</h1>'
    calendarHtml += '<br>'
    calendarHtml += '<table>'

// 曜日の行を作成
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>'
    }

//日付の表示
    for(let j = 0; j <second.length; j++){
    calendarHtml += '<tr>'
    //先月の日付の表示 class 
    //今月の日付の表示 class 
    //当日の表示 class today
    //終日の表示 class ""
        for (let i = 0; i < weeks.length; i++) {
            calendarHtml += '<td>' + second[j][i] + '</td>'
        }

        calendarHtml += '</tr>'
    }
   // calendarHtml += '</table>'
    calendarHtml += '</table>'
    return calendarHtml
}

//カレンダーデータをHTMLに反映
function Show_Calendar(dt){
//表示の日付
   var date=dt.getDate()
//表示の曜日（番号）
    var day_number=dt.getDay()
//表示の年（西暦）
    var year=dt.getFullYear()
//表示の月
    var month=dt.getMonth()+1
//表示の時間【時｝
    var hour=dt.getHours()
//表示の時刻「分」
    var minute=dt.getMinutes()

//表示の月のカレンダーを表示
var calendar_table=create_table(year,month)
document.querySelector('#calendar').innerHTML = calendar_table
}

//今月の表示
showDate.setMonth(showDate.getMonth());
Show_Calendar(showDate)

//今月の表示関数
function return_month() {
var now=new Date()
Show_Calendar(now)
showDate = new Date(now.getFullYear(), now.getMonth(), 1);
}

//先月の表示
function pre_month() {
    showDate.setMonth(showDate.getMonth()-1);
    Show_Calendar(showDate)
}

//次月の表示
function next_month() {
   showDate.setMonth(showDate.getMonth()+1);
    Show_Calendar(showDate)
}

//半年月の表示
function half_before_month() {
    showDate.setMonth(showDate.getMonth()-6);
    Show_Calendar(showDate)
}

//半年後の表示
function half_after_month() {
   showDate.setMonth(showDate.getMonth()+6);
    Show_Calendar(showDate)
}

//1年前の表示
function half_before_year() {
    showDate.setMonth(showDate.getMonth()-12);
    Show_Calendar(showDate)
}

//1年後の表示
function half_after_year() {
   showDate.setMonth(showDate.getMonth()+12);
    Show_Calendar(showDate)
}