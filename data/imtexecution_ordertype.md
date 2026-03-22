# OrderType (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderType | [](imtexecution_orderexternalid.md "OrderExternalID") [](imtexecution_ordervolume.md "OrderVolume") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderType
Get the order type.
C++
UINT IMTExecution::OrderType() const  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.OrderType()  
---  
Return Value
A value of the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
IMTExecution::OrderType
Set the order type.
C++
MTAPIRES IMTExecution::OrderType( const UINT type // Order type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderType( uint type // Order type )  
---  
Parameters
type
[in] Order type. To pass the type, the [EnOrderType](imtorder_enum.htm#enordertype) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.