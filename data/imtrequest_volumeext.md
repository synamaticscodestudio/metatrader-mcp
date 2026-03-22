# VolumeExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ VolumeExt | [](imtrequest_volume.md "Volume") [](imtrequest_volumecurrent.md "VolumeCurrent") |
| --- | --- | --- |
| --- | --- |

IMTRequest::VolumeExt
Gets the operation volume in a request, with an extended accuracy.
C++
UINT64 IMTRequest::VolumeExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.VolumeExt()  
---  
Return Value
The operation volume set in the request, in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTRequest::Volume](imtrequest_volume.md "Volume") method.
IMTRequest::VolumeExt
Sets the operation volume in a request, with an extended accuracy.
C++
MTAPIRES IMTRequest::VolumeExt( const UINT64 volume // Volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.VolumeExt( ulong volume // Volume )  
---  
Program Parameters
volume
[in] The operation volume in the request, in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTRequest::Volume](imtrequest_volume.md "Volume") method.