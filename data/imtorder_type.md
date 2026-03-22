# Type (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ Type | [](imtorder_timedonemsc.md "TimeDoneMsc") [](imtorder_typefill.md "TypeFill") |
| --- | --- | --- |
| --- | --- |

IMTOrder::Type
Get the order type.
C++
UINT IMTOrder::Type() const  
---  
.NET (Gateway/Manager API)
uint CIMTOrder.Type()  
---  
Python
MTOrder.Type  
---  
Return Value
A value of the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
IMTOrder::Type
Set the order type.
C++
MTAPIRES IMTOrder::Type( const UINT type // Order type ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.Type( uint type // Order type )  
---  
Python
MTOrder.Type  
---  
Parameters
type
[in] Order type. To pass the order type, the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration is used..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.