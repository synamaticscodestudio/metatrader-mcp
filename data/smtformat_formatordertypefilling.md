# FormatOrderTypeFilling (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatOrderTypeFilling | [](smtformat_formatorderstatus.md "FormatOrderStatus") [](smtformat_formatordertypetime.md "FormatOrderTypeTime") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatOrderTypeFilling
Format order filling type in a string with a text description.
static LPCWSTR SMTFormat::FormatOrderTypeFilling( CMTStr &str, // Reference to a string object const UINT type // Type of filling )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
type
[in] Order filling type. Specified by a value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration:
  * IMTOrder::ORDER_FILL_FOK \- "fill or kill";
  * IMTOrder::ORDER_FILL_IOC \- "immediate or cancel";
  * IMTOrder::ORDER_FILL_RETURN \- "return".

Return Value
Returns a constant pointer to a string in the str object.