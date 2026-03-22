# VolumeCurrent (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ VolumeCurrent | [](imtorder_volumeinitialext.md "VolumeInitialExt") [](imtorder_volumecurrentext.md "VolumeCurrentExt") |
| --- | --- | --- |
| --- | --- |

IMTOrder::VolumeCurrent
Gets the current unfilled volume of an order.
C++
UINT64 IMTOrder::VolumeCurrent() const  
---  
.NET (Gateway/Manager API)
ulong CIMTOrder.VolumeCurrent()  
---  
Python
MTOrder.VolumeCurrent  
---  
Return Value
Current unfilled volume of the order in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTOrder::VolumeCurrentExt](imtorder_volumecurrentext.md "VolumeCurrentExt") method.
IMTOrder::VolumeCurrent
Sets the current unfilled volume of an order.
C++
MTAPIRES IMTOrder::VolumeCurrent( const UINT64 volume // Current volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.VolumeCurrent( ulong volume // Current volume )  
---  
Python
MTOrder.VolumeCurrent  
---  
Parameters
volume
[in] Current unfilled volume of the order in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTOrder::VolumeCurrentExt](imtorder_volumecurrentext.md "VolumeCurrentExt") method.