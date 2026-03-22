# VolumeExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ VolumeExt | [](imtdeal_volume.md "Volume") [](imtdeal_volumeclosed.md "VolumeClosed") |
| --- | --- | --- |
| --- | --- |

IMTDeal::VolumeExt
Gets the deal volume with an extended accuracy.
C++
UINT64 IMTDeal::VolumeExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.VolumeExt()  
---  
Python
MTDeal.VolumeExt  
---  
Return Value
Deal volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTDeal::Volume](imtdeal_volume.md "Volume") method.
IMTDeal::VolumeExt
Sets the deal volume with an extended accuracy.
C++
MTAPIRES IMTDeal::VolumeExt( const UINT64 volume // Deal volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.VolumeExt( ulong volume // Deal volume )  
---  
Python
MTDeal.VolumeExt  
---  
Program Parameters
volume
[in] Deal volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTDeal::Volume](imtdeal_volume.md "Volume") method.