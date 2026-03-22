# Volume (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Volume | [](imtconfirm_retcode.md "Retcode") [](imtconfirm_volumeext.md "VolumeExt") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::Volume
Gets the volume in which the trade request was confirmed.
C++
UINT64 IMTConfirm::Volume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConfirm.Volume()  
---  
Return Value
The volume in which the trade request was confirmed. Volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConfirm::VolumeExt](imtconfirm_volumeext.md "VolumeExt") method.
IMTConfirm::Volume
Sets the volume in which the trade request was confirmed.
C++
MTAPIRES IMTConfirm::Volume( const UINT64 volume // Confirmation volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.Volume( ulong volume // Confirmation volume )  
---  
Parameters
volume
[in] The volume in which the trade request was confirmed. Volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConfirm::VolumeExt](imtconfirm_volumeext.md "VolumeExt") method.