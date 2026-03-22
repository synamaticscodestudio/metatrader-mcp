# STToTime (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTTime ](smttime.md "SMTTime")/ STToTime | [](smttime_yearbegin.md "YearBegin") [](smttime_timetost.md "TimeToST") |
| --- | --- | --- |
| --- | --- |

SMTTime::STToTime
Converting a date in the SYSTEMTIME structure to the Unix time format.
C++
static INT64 SMTTime::STToTime( const SYSTEMTIME &st // The SYSTEMTIME structure )  
---  
.NET (Gateway/Manager API)
static long SMTTime.FromDateTime( DateTime dt // The DateTime structure )  
---  
Parameters
&st
[in] A reference to the SYSTEMTIME structure. The structure contains the following members:
  * wYear \- a value from 1601 to 30827 that indicates the year.
  * wMonth \- a value from 1 to 12 that indicates the month (1 corresponds to January).
  * wDayOfWeek \- a value from 0 to 6 that indicates the weekday (0 corresponds to Sunday).
  * wDay \- a value from 1 to 31 indicating the day of the month.
  * wHour \- a value from 0 to 23 indicating the number of hours since midnight..
  * wMinute \- a value from 0 to 59 indicating the number of minutes.
  * wSecond \- a value from 0 to 59 indicating the number of seconds.
  * wMilliseconds \- a value from 0 to 999 indicating the number of milliseconds.

A detailed description of the structure is available in [MSDN](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724950%28v=vs.85%29.aspx "Description of SYSTEMTIME in MSDN"). 
Return Value
Date in the number of seconds since 01.01.1970.