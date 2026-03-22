# VolumeInitial (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ VolumeInitial | [](imtorder_pricetp.md "PriceTP") [](imtorder_volumeinitialext.md "VolumeInitialExt") |
| --- | --- | --- |
| --- | --- |

IMTOrder::VolumeInitial
Gets the initial value requested in the order.
C++
UINT64 IMTOrder::VolumeInitial() const  
---  
.NET (Gateway/Manager API)
ulong CIMTOrder.VolumeInitial()  
---  
Python
MTOrder.VolumeInitial  
---  
Return Value
The initial volume requested in the order in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTOrder::VolumeInitialExt](imtorder_volumeinitialext.md "VolumeInitialExt") method.
IMTOrder::VolumeInitial
Sets the initial volume of an order.
C++
MTAPIRES IMTOrder::VolumeInitial( const UINT64 volume // Initial volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.VolumeInitial( ulong volume // Initial volume )  
---  
Python
MTOrder.VolumeInitial  
---  
Parameters
volume
[in] The initial volume requested in the order in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTOrder::VolumeInitialExt](imtorder_volumeinitialext.md "VolumeInitialExt") method.