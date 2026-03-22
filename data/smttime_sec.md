# Sec (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTTime ](smttime.md "SMTTime")/ Sec | [](smttime_min.md "Min") [](cmtfile.md "CMTFile") |
| --- | --- | --- |
| --- | --- |

SMTTime::Sec
Get seconds from the date passed in the Unix time format.
C++
static UINT SMTTime::Sec( const INT64 ctm // Date )  
---  
.NET (Gateway/Manager API)
static uint SMTTime.Sec( long ctm // Date )  
---  
Parameters
ctm
[in] The date for which you want to get seconds. Passed as a number of seconds that have elapsed since 01.01.1970.
Note
Example: for the date 1329310800 (15.02.2012 13:00:00) the method returns 0.