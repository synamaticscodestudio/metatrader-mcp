# FormatPositionType (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatPositionType | [](smtformat_formatip.md "FormatIP") [](smtformat_formatordertype.md "FormatOrderType") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatPositionType
Format the type of a position in a string with a text description.
static LPCWSTR SMTFormat::FormatPositionType( CMTStr &str, // Reference to a string object const UINT type // Position type )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
type
[in] Position type. Specified by a value of the [IMTPosition::EnPositionAction](imtposition_enum.htm#enpositionaction) enumeration:
  * IMTPosition::POSITION_BUY \- "buy";
  * IMTPosition::POSITION_SELL \- "sell".

Return Value
Returns a constant pointer to a string in the str object.