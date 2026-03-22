# OrderVolume (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderVolume | [](imtexecution_ordertype.md "OrderType") [](imtexecution_ordervolumeext.md "OrderVolumeExt") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderVolume
Gets the order volume in lots.
C++
UINT64 IMTExecution::OrderVolume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTExecution.OrderVolume()  
---  
Return Value
Order volume in the UINT64 format (one unit corresponds to 1/10000 of the lot).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTExecution::OrderVolumeExt](imtexecution_ordervolumeext.md "OrderVolumeExt") method.
IMTExecution::OrderVolume
Sets the order volume in lots.
C++
MTAPIRES IMTExecution::OrderVolume( const UINT64 volume // Order volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderVolume( ulong volume // Order volume )  
---  
Parameters
volume
[in] Order volume in the UINT64 format (one unit corresponds to 1/10000 of the lot).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTExecution::OrderVolumeExt](imtexecution_ordervolumeext.md "OrderVolumeExt") method.