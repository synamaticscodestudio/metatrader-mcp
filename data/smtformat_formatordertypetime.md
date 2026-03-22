# FormatOrderTypeTime (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatOrderTypeTime | [](smtformat_formatordertypefilling.md "FormatOrderTypeFilling") [](smtformat_formatordertypereason.md "FormatOrderTypeReason") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatOrderTypeTime
Format order expiration type in a string with a text description.
static LPCWSTR SMTFormat::FormatOrderTypeTime( CMTStr &str, // Reference to a string object const UINT type // Expiration type )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
type
[in] Order expiration type. Specified by a value of the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration:
  * IMTOrder::ORDER_TIME_GTC \- "gtc";
  * IMTOrder::ORDER_TIME_DAY \- "day";
  * IMTOrder::ORDER_TIME_SPECIFIED \- "specified".

Return Value
Returns a constant pointer to a string in the str object.