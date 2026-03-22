# VolumeCurrent (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ VolumeCurrent | [](imtrequest_volumeext.md "VolumeExt") [](imtrequest_volumecurrentext.md "VolumeCurrentExt") |
| --- | --- | --- |
| --- | --- |

IMTRequest::VolumeCurrent
Get the current unfilled (remaining) order volume specified in the request.
C++
UINT64 IMTRequest::VolumeCurrent() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.VolumeCurrent()  
---  
Return Value
Remaining order volume in UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lot).
Note
The method is used for requests to modify partially filled orders, where it specifies the remaining order volume.
The method works with [standard-precision volumes](features.htm#volume) (4 decimal places). For increased-precision volumes, please use the [IMTRequest::VolumeCurrentExt](imtrequest_volumecurrentext.md "VolumeCurrentExt") method.
IMTRequest::VolumeCurrent
Set the current unfilled (remaining) order volume in the request.
C++
MTAPIRES IMTRequest::VolumeCurrent( const UINT64 volume // Volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.VolumeCurrent( ulong volume // Volume )  
---  
Parameters
volume
[in] Remaining order volume in UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lot).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is used for requests to modify partially filled orders, where it specifies the remaining order volume.
The method works with [standard-precision volumes](features.htm#volume) (4 decimal places). For increased-precision volumes, please use the [IMTRequest::VolumeCurrentExt](imtrequest_volumecurrentext.md "VolumeCurrentExt") method.