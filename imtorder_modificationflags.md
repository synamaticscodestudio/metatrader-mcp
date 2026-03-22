# ModificationFlags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ ModificationFlags | [](imtorder_ratemargin.md "RateMargin") [](imtorderarray.md "IMTOrderArray") |
| --- | --- | --- |
| --- | --- |

IMTOrder::ModificationFlags
Gets the order modification flags. The flags allow defining if an order was changed manually by an administrator, manager or API.
C++
UINT IMTOrder::ModificationFlags() const  
---  
.NET (Gateway/Manager API)
uint CIMTOrder.ModificationFlags()  
---  
Python
MTOrder.ModificationFlags  
---  
Return Value
[IMTOrder::EnTradeModifyFlags](imtorder_enum.htm#entrademodifyflags) enumeration value.