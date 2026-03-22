# FormatDateTime (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatDateTime | [](smtformat_formatsizeorder.md "FormatSizeOrder") [](smtformat_formatdatetimemsc.md "FormatDateTimeMsc") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatDateTime
Format date and time in the SYSTEMTIME format to a string.
static LPCWSTR SMTFormat::FormatDateTime( CMTStr &str, // Reference to a string object const SYSTEMTIME &st, // Reference to SYSTEMTIME bool useTime=true, // Flag of hours and minutes bool useSec=false // Flag of seconds )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
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
useTime=true
[in] The flag of hours and minutes. If true, hours and minutes are shown in the summary line.
useSec=false
[in] The flag of seconds. If true, seconds are shown in the summary line. Seconds are not shown if hours and minutes are not shown.
Return Value
Returns a constant pointer to a string in the str object.
Note
Time is shown in the YYYY.MM.DD HH:MM:SS format.
SMTFormat::FormatDateTime
Format date and time to a string.
static LPCWSTR SMTFormat::FormatDateTime( CMTStr &str, // Reference to a string object INT64 ctm, // Date and time bool useTime=true, // Flag of hours and minutes bool useSec=false // Flag of seconds )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
ctm
[in] Date and time in seconds that have elapsed since 01.01.1970.
useTime=true
[in] The flag of hours and minutes. If true, hours and minutes are shown in the summary line.
useSec=false
[in] The flag of seconds. If true, seconds are shown in the summary line. Seconds are not shown if hours and minutes are not shown.
Return Value
Returns a constant pointer to a string in the str object.
Note
Time is shown in the YYYY.MM.DD HH:MM:SS format.