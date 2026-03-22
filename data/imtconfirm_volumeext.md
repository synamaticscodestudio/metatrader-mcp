# VolumeExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ VolumeExt | [](imtconfirm_volume.md "Volume") [](imtconfirm_price.md "Price") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::VolumeExt
Gets the extended accuracy volume in which the trade request was confirmed.
C++
UINT64 IMTConfirm::VolumeExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConfirm.VolumeExt()  
---  
Return Value
The volume in which the trade request was confirmed, in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConfirm::Volume](imtconfirm_volume.md "Volume") method.
IMTConfirm::VolumeExt
Sets the extended accuracy volume in which the trade request was confirmed.
C++
MTAPIRES IMTConfirm::VolumeExt( const UINT64 volume // Confirmation volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.VolumeExt( ulong volume // Confirmation volume )  
---  
Program Parameters
volume
[in] Trade request confirmation volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTConfirm::Volume](imtconfirm_volume.md "Volume") method.