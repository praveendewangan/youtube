window.addEventListener("DOMContentLoaded",createCalendar);

function createCalendar() {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDayOfCurrentMonthObj = new Date(y,m,1); // 1 January
    let lastDayOfCurrentMonthObj = new Date(y,m+1,0); // 31 January
    let currentMonthName = date.toLocaleDateString('default',{ month: 'long'}); // January
    let firstDayNumber = firstDayOfCurrentMonthObj.getDay(); // 0 for Sunday
    let lastDateOfCurrentMonth = lastDayOfCurrentMonthObj.getDate();// 31
    let data = '';
    let isTodayFirstDayOfCurrentMonth = false;
    let dateNumber = 1;

    for(let row = 0; row < 5; row++) {
        data += '<tr>';
        for(let day = 0; day < 7; day++) {
            if(day == firstDayNumber) {
                isTodayFirstDayOfCurrentMonth = true;
                // first day of current month will start from this day
            }
            if(isTodayFirstDayOfCurrentMonth
                && lastDateOfCurrentMonth >= dateNumber) {
                    if(dateNumber == date.getDate()) {
                        data += `<td style='border: 3px solid #3c8eef'>
                                ${dateNumber++} </td>`;
                        // highlight current day
                    } else {
                        data += `<td>${dateNumber++}</td>`;
                    }
            } else {
                data += '<td></td>';
            }
        }
        data += '</tr>';
    }
    const tbody = document.getElementsByClassName('calendar-body')[0];
    const monthAndYear = document.getElementsByClassName('year')[0];
    tbody.innerHTML += data;
    monthAndYear.innerHTML = `${currentMonthName} ${y}`;
}