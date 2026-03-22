# FormatTime (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatTime | [](smtformat_formatdatetimemsc.md "FormatDateTimeMsc") [](smtformat_formattimemsc.md "FormatTimeMsc") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatTime
Format time into a string.
static LPCWSTR SMTFormat::FormatTime( CMTStr &str, // Reference to a string object INT64 ctm, // Time bool useSec=false // Flag of seconds )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
ctm
[in] Time in seconds that have elapsed since 01.01.1970.
useSec=false
[in] The flag of seconds. If true, seconds are shown in the summary line.
Return Value
Returns a constant pointer to a string in the str object.