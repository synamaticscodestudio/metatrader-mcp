# FormatDealEntry (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatDealEntry | [](smtformat_formatdealaction.md "FormatDealAction") [](smtmath.md "SMTMath") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatDealEntry
Format the type of action performed by a deal relative to a position, to a string with a text description.
static LPCWSTR SMTFormat::FormatDealEntry( CMTStr &str, // Reference to a string object const UINT entry // Type of action relative to a position )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
entry
[in] Type of action performed by a deal relative to a position. Specified by a value of the [IMTDeal::EnDealEntry](imtdeal_enum.htm#endealentry) enumeration:
  * IMTDeal::ENTRY_IN \- "in";
  * IMTDeal::ENTRY_OUT \- "out";
  * IMTDeal::ENTRY_INOUT \- "in/out";

Return Value
Returns a constant pointer to a string in the str object.