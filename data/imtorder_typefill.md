# TypeFill (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ TypeFill | [](imtorder_type.md "Type") [](imtorder_typetime.md "TypeTime") |
| --- | --- | --- |
| --- | --- |

IMTOrder::TypeFill
Get the order filling type.
C++
UINT IMTOrder::TypeFill() const  
---  
.NET (Gateway/Manager API)
uint CIMTOrder.TypeFill()  
---  
Python
MTOrder.TypeFill  
---  
Return Value
A value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
IMTOrder::TypeFill
Set the order filling type.
C++
MTAPIRES IMTOrder::TypeFill( const UINT type // Type of filling )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.TypeFill( uint type // Type of filling )  
---  
Python
MTOrder.TypeFill  
---  
Parameters
type
[in] Order filling type. To pass the type, the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration is used..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.