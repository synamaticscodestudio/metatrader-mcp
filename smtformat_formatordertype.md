# FormatOrderType (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatOrderType | [](smtformat_formatpositiontype.md "FormatPositionType") [](smtformat_formatorderstatus.md "FormatOrderStatus") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatOrderType
Format the type of an order in a string with a text description.
static LPCWSTR SMTFormat::FormatOrderType( CMTStr &str, // Reference to a string object const UINT type // Order type )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
type
[in] Order type. Specified by a value of the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration:
  * IMTOrder::OP_BUY -"buy";
  * IMTOrder::OP_SELL \- "sell";
  * IMTOrder::OP_BUY_LIMIT \- "buy limit";
  * IMTOrder::OP_SELL_LIMIT \- "sell limit";
  * IMTOrder::OP_BUY_STOP \- "buy stop";
  * IMTOrder::OP_SELL_STOP \- "sell stop";
  * IMTOrder::OP_BUY_STOP_LIMIT \- "buy stop limit";
  * IMTOrder::OP_SELL_STOP_LIMIT \- "sell stop limit".

Return Value
Returns a constant pointer to a string in the str object.