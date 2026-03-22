# VolumeExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ VolumeExt | [](imtposition_volume.md "Volume") [](imtposition_profit.md "Profit") |
| --- | --- | --- |
| --- | --- |

IMTPosition::VolumeExt
Gets the trade position volume with an extended accuracy.
C++
UINT64 IMTPosition::VolumeExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTPosition.VolumeExt()  
---  
Return Value
The trade position volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTPosition::Volume](imtposition_volume.md "Volume") method.
IMTPosition::VolumeExt
Sets the trade position volume with an extended accuracy.
C++
MTAPIRES IMTPosition::VolumeExt( const UINT64 volume // Position volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.VolumeExt( ulong volume // Position volume )  
---  
Program Parameters
volume
[in] The trade position volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTPosition::Volume](imtposition_volume.md "Volume") method.