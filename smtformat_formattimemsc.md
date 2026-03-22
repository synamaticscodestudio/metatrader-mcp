# FormatTimeMsc (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatTimeMsc | [](smtformat_formattime.md "FormatTime") [](smtformat_formatip.md "FormatIP") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatTimeMsc
Format time into a string with an indication of milliseconds.
static LPCWSTR SMTFormat::FormatTimeMsc( CMTStr &str, // Reference to a string object INT64 ctm, // Time bool useSec=false // Flag of seconds )  
---  
Program Parameters
&str
[out] Reference to the [CMTStr](cmtstr.md "CMTStr") string object, into which information is placed.
ctm
[in] Time in milliseconds since 01.01.1970.
useSec=false
[in] The flag of seconds. If true, seconds are shown in the summary line.
Return Value
Returns a constant pointer to a string in the str object.