# DealsRangeShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ DealsRangeShift | [](imtconservertrade_dealsrangeclear.md "DealsRangeClear") [](imtconservertrade_dealsrangetotal.md "DealsRangeTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::DealsRangeShift
Move the range of [deals](trading_deal.md "Deals") in the list.
C++
MTAPIRES IMTConServerTrade::DealsRangeShift( const UINT pos, // Position of the range const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.DealsRangeShift( uint pos, // Position of the range int shift // Shift )  
---  
Python (Manager API)
MTConServerTrade.DealsRangeShift( pos, # Position of the range shift # Shift )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.