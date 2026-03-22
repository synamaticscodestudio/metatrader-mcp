# SMTTime (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools")/ SMTTime | [](cmtthread_priority.md "Priority") [](smttime_macros.md "Macros") |
| --- | --- | --- |
| --- | --- |

SMTTime
This class is used for working with dates and times. It contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [ParseTime](smttime_parsetime.md "ParseTime") | Parse a date in the Unix time format into a tm structure. |
| [MakeTime](smttime_maketime.md "MakeTime") | Form a date in the Unix time format from a passed tm structure. |
| [MonthName](smttime_monthname.md "MonthName") | Get the name of a month by its number. |
| [MonthNameShort](smttime_monthnameshort.md "MonthNameShort") | Get the short name of a month by its number. |
| [WeekBegin](smttime_weekbegin.md "WeekBegin") | Get the week beginning by the passed date. |
| [DayBegin](smttime_daybegin.md "DayBegin") | Get the day beginning by the passed date. |
| [MonthBegin](smttime_monthbegin.md "MonthBegin") | Get the month beginning by the passed date. |
| [YearBegin](smttime_yearbegin.md "YearBegin") | Get the year beginning by the passed date. |
| [STToTime](smttime_sttotime.md "STToTime") | Converting a date in the SYSTEMTIME structure to the Unix time format. |
| [TimeToST](smttime_timetost.md "TimeToST") | Converting a date in the Unix time format into the SYSTEMTIME structure. |
| [Year](smttime_year.md "Year") | Get the year from the date passed in the Unix time format. |
| [Month](smttime_month.md "Month") | Get the month from the date passed in the Unix time format. |
| [Day](smttime_day.md "Day") | Get the day from the date passed in the Unix time format. |
| [Hour](smttime_hour.md "Hour") | Get the hour from the date passed in the Unix time format. |
| [Min](smttime_min.md "Min") | Get minutes from the date passed in the Unix time format. |
| [Sec](smttime_sec.md "Sec") | Get seconds from the date passed in the Unix time format. |

The include file MT5APITime.h contains definitions of the [macros](smttime_macros.md "Macros") of minutes and seconds that improve the readability of the code by replacing numeric expressions by clear identifiers.