# FormatOrderPrice (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatOrderPrice | [](smtformat_formatordertypereason.md "FormatOrderTypeReason") [](smtformat_formatdealaction.md "FormatDealAction") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatOrderPrice
Format the order price and its triggering price (if any) in a string with a text description.
static LPCWSTR SMTFormat::FormatOrderPrice( CMTStr &str, // Reference to a string object const double price_order, // Order placing price const double price_trigger, // Order triggering price const UINT digits // Number of decimal place )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
price_order
[in] Order placing price.
price_trigger
[in] Order triggering price. This price is specified for Stop-Limit orders ([IMTOrder::OP_BUY_STOP_LIMIT](imtorder_enum.htm#enordertype) and [IMTOrder::OP_SELL_STOP_LIMIT](imtorder_enum.htm#enordertype)).
digits
[in] Number of decimal places in prices.
Return Value
Returns a constant pointer to a string in the str object.