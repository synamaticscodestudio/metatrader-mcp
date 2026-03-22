# FormatSizeOrder (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatSizeOrder | [](smtformat_formatvolumeextorder.md "FormatVolumeExtOrder") [](smtformat_formatdatetime.md "FormatDateTime") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatSizeOrder
Format order size in units to a string.
static LPCWSTR SMTFormat::FormatSizeOrder( CMTStr &str, // Reference to a string object const double size_initial, // Initial size const double size_current // Current size )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
size_initial
[in] Initial (requested) order size in units.
size_current
[in] Current (unfilled) order size in units. The filled size that is output as a second value in a string is calculated as size_initial - size_current.
Return Value
Returns a constant pointer to a string in the str object.