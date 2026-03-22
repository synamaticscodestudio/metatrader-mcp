# Day (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTTime ](smttime.md "SMTTime")/ Day | [](smttime_month.md "Month") [](smttime_hour.md "Hour") |
| --- | --- | --- |
| --- | --- |

SMTTime::Day
Get the day from the date passed in the Unix time format.
C++
static UINT SMTTime::Day( const INT64 ctm // Date )  
---  
.NET (Gateway/Manager API)
static uint SMTTime.Day( long ctm // Date )  
---  
Parameters
ctm
[in] The date for which you want to get a day. Passed as a number of seconds that have elapsed since 01.01.1970.
Return Value
Day.
Note
Example: for the date 1329310800 (15.02.2012 13:00:00) the method returns 15.