# DealVolume (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ DealVolume | [](imtexecution_dealaction.md "DealAction") [](imtexecution_dealvolumeext.md "DealVolumeExt") |
| --- | --- | --- |
| --- | --- |

IMTExecution::DealVolume
Gets the deal volume in lots.
C++
UINT64 IMTExecution::DealVolume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTExecution.DealVolume()  
---  
Return Value
The deal volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTExecution::DealVolumeExt](imtexecution_dealvolumeext.md "DealVolumeExt") method.
IMTExecution::DealVolume
Sets the deal volume in lots.
C++
MTAPIRES IMTExecution::DealVolume( const UINT64 volume // Deal volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.DealVolume( ulong volume // Deal volume )  
---  
Parameters
volume
[in] The deal volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTExecution::DealVolumeExt](imtexecution_dealvolumeext.md "DealVolumeExt") method.
If the order is created with the Fill or Kill ([IMTOrder::ORDER_FILL_FOK](imtorder_enum.htm#enorderfilling)) fill policy and with the Instant ([IMTConSymbol::EXECUTION_INSTANT](imtconsymbol_enum.htm#enexecutionmode)) or Request ([IMTConSymbol::EXECUTION_REQUEST](imtconsymbol_enum.htm#enexecutionmode)) execution mode, this order can only be filled in the specified volume and at the specified price. If you specify a smaller volume in the trade execution, the trading platform will reject the operation. In the Market ([IMTConSymbol::EXECUTION_MARKET](imtconsymbol_enum.htm#enexecutionmode)) and Exchange ([IMTConSymbol::EXECUTION_EXCHANGE](imtconsymbol_enum.htm#enexecutionmode)) execution modes, the price is not specified in the order and the required volume can be made up of several offers from the order book. Therefore, you can specify a lower volume in the trade execution for these modes.