# VolumeCurrentExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ VolumeCurrentExt | [](imtorder_volumecurrent.md "VolumeCurrent") [](imtorder_expertid.md "ExpertID") |
| --- | --- | --- |
| --- | --- |

IMTOrder::VolumeCurrentExt
Gets the current unfilled order volume with an extended accuracy.
C++
UINT64 IMTOrder::VolumeCurrentExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTOrder.VolumeCurrentExt()  
---  
Python
MTOrder.VolumeCurrentExt  
---  
Return Value
The current unfilled order volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent") method.
IMTOrder::VolumeCurrentExt
Sets the current unfilled order volume with an extended accuracy.
C++
MTAPIRES IMTOrder::VolumeCurrentExt( const UINT64 volume // Current volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.VolumeCurrentExt( ulong volume // Current volume )  
---  
Python
MTOrder.VolumeCurrentExt  
---  
Program Parameters
volume
[in] The current unfilled order volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent") method.