# VolumeCurrentExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ VolumeCurrentExt | [](imtrequest_volumecurrent.md "VolumeCurrent") [](imtrequest_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTRequest::VolumeCurrentExt
Get the current unfilled (remaining) increased-precision volume of an order specified in the request.
C++
UINT64 IMTRequest::VolumeCurrentExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.VolumeCurrentExt()  
---  
Return Value
Remaining order volume in UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lot).
Note
The method is used for requests to modify partially filled orders, where it specifies the remaining order volume.
The method works with [increased-precision volumes](features.htm#volume) (8 decimal places). For standard-precision volumes, please use the [IMTRequest::VolumeCurrent](imtrequest_volumecurrent.md "VolumeCurrent") method.
IMTRequest::VolumeCurrentExt
Set the current unfilled (remaining) order volume in the request as an increased-precision value.
C++
MTAPIRES IMTRequest::VolumeCurrentExt( const UINT64 volume // Volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.VolumeCurrentExt( ulong volume // Volume )  
---  
Parameters
volume
[in] Remaining order volume in UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lot).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is used for requests to modify partially filled orders, where it specifies the remaining order volume.
The method works with [increased-precision volumes](features.htm#volume) (8 decimal places). For standard-precision volumes, please use the [IMTRequest::VolumeCurrent](imtrequest_volumecurrent.md "VolumeCurrent") method.