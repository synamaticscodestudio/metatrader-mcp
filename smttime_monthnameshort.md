# MonthNameShort (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTTime ](smttime.md "SMTTime")/ MonthNameShort | [](smttime_monthname.md "MonthName") [](smttime_weekbegin.md "WeekBegin") |
| --- | --- | --- |
| --- | --- |

SMTTime::MonthNameShort
Get the short name of a month by its number.
static LPCWSTR SMTTime::MonthNameShort( const UCHAR month // Month number )  
---  
Parameters
month
[in] The number of the month starting with 0. The value 0 corresponds to Jan, 11 - to Dec.
Return Value
Short name of the month.
Note
If a number outside the range 0-11 is given, the Unk value is returned.