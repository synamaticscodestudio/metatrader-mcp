# FormatVolumeDouble (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatVolumeDouble | [](smtformat_formatvolume.md "FormatVolume") [](smtformat_formatvolumeext.md "FormatVolumeExt") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatVolumeDouble
Formats size in lots to a string.
static LPCWSTR SMTFormat::FormatVolumeDouble( CMTStr &str, // Reference to the string object const double volume, // Volume const bool compact // Compact view flag )  
---  
Program Parameters
&str
[out] Reference to the [CMTStr](cmtstr.md "CMTStr") string object, into which information is placed.
volume
[in] Size in lots.
compact
[in] Flag of the compact volume view. If this flag is enabled (true):
  * Volume over 1 000 000 lots will be shown with millions replaced by letter "M" and with the up to 5-digit accuracy. For example, 1 500 000 lots will be displayed as 1.5M.
  * Volume over 1 000 lots will be shown with thousands replaced by letter "K" and with the up to 8-digit accuracy. For example, 1 500 lots will be displayed as 1.5K.

Return Value
Returns a constant pointer to a string in the str object.