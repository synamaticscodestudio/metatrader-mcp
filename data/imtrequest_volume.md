# Volume (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Volume | [](imtrequest_flags.md "Flags") [](imtrequest_volumeext.md "VolumeExt") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Volume
Gets the operation volume specified in a request.
C++
UINT64 IMTRequest::Volume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.Volume()  
---  
Return Value
The operation volume specified in a request in the UINT64 format (one unit corresponds to 1/10,000 of a lot).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTRequest::VolumeExt](imtrequest_volumeext.md "VolumeExt") method.
IMTRequest::Volume
Sets the operation volume in a request.
C++
MTAPIRES IMTRequest::Volume( const UINT64 volume // Volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Volume( ulong volume // Volume )  
---  
Parameters
volume
[in] The operation volume specified in a request in the UINT64 format (one unit corresponds to 1/10,000 of a lot).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTRequest::VolumeExt](imtrequest_volumeext.md "VolumeExt") method.