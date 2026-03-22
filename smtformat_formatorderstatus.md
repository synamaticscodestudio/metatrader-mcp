# FormatOrderStatus (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatOrderStatus | [](smtformat_formatordertype.md "FormatOrderType") [](smtformat_formatordertypefilling.md "FormatOrderTypeFilling") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatOrderStatus
Format the state of an order in a string with a text description.
static LPCWSTR SMTFormat::FormatOrderStatus( CMTStr &str, // Reference to a string object const UINT status // Order state )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
status
[in] Order state. Specified by a value of the [IMTOrder::EnOrderState](imtorder_enum.htm#enorderstate) enumeration:
  * IMTOrder::ORDER_STATE_STARTED \- "started";
  * IMTOrder::ORDER_STATE_PLACED \- "placed";
  * IMTOrder::ORDER_STATE_CANCELED \- "canceled";
  * IMTOrder::ORDER_STATE_PARTIAL \- "partial";
  * IMTOrder::ORDER_STATE_FILLED \- "filled";
  * IMTOrder::ORDER_STATE_REJECTED \- "rejected";
  * IMTOrder::ORDER_STATE_EXPIRED \- "expired";
  * IMTOrder::ORDER_STATE_REQUEST_ADD \- "request adding";
  * IMTOrder::ORDER_STATE_REQUEST_MODIFY \- "request modification";
  * IMTOrder::ORDER_STATE_REQUEST_CANCEL \- "request cancelling".

Return Value
Returns a constant pointer to a string in the str object.