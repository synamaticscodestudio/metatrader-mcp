# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ Assign | [](imtorder_release.md "Release") [](imtorder_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTOrder::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTOrder::Assign( const IMTOrder* order // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.Assign( CIMTOrder order // Source object )  
---  
Parameters
order
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.