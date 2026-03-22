# TypeTime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ TypeTime | [](imtorder_typefill.md "TypeFill") [](imtorder_priceorder.md "PriceOrder") |
| --- | --- | --- |
| --- | --- |

IMTOrder::TypeTime
Get the order expiration type.
C++
UINT IMTOrder::TypeTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTOrder.TypeTime()  
---  
Python
MTOrder.TypeTime  
---  
Return Value
A value of the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
IMTOrder::TypeTime
Set the order expiration type.
C++
MTAPIRES IMTOrder::TypeTime( const UINT type // Expiration type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.TypeTime( uint type // Expiration type )  
---  
Python
MTOrder.TypeTime  
---  
Parameters
type
[in] Order expiration type. To pass the type, the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.