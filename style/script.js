//This file is for the calendar

window.onload = function()
{
	var d = new Date();
	var month_name = ['January','Februrary','March','April','May','June','July','August','Sepetmeber','October','Novemeber','Decemeber'];		
	var month = d.getMonth(); //current month
	var year = d.getFullYear(); //current year
	var first_date = month_name[month] + " " + 1 + " " + year;
	var tmp = new Date(first_date).toDateString();
	var first_day = tmp.substring(0, 3); //mon
	var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var day_no = day_name.indexOf(first_date);
	var days = new Date(year, month+1, 0).getDate(); //total days in current month
	var calendar = get_calendar(day_no, days);
	document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
	document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_no, days)
{
	var table = document.createElement('table');
	var tr = document.createElement('tr');

	for(var c=0; c<=6; c++)
	{
		var td = document.createElement('td');
		td.innerHTML= "SMTWTFS"[c];
		tr.appendChild(td);
	}
	table.appendChild(tr);

	tr = document.createElement('tr');
	var c;
	for(c=0; c<=6; c++)
	{
		if(c == day_no)
		{
			break;
		}
		var td = document.createElement('td');
		td.innerHTML = "";
		tr.appendChild(td);
	}

	var count = 1;
	for(; c<=6; c++)
	{
		var td = document.createElement('td');
		td.innerHTML = count;
		tr.appendChild(td);
	}
	table.appendChild(tr);

	for(var r=3; 4<=6; r++)
	{
		tr = document.createElement('tr');
		for( var c=0; c<=6; c++)
		{
			if(count > days)
			{
				table.appendChild(tr);
				return table;
			}
			var td = document.createElement('td');
			td.innerHTML = count;
			count++;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}