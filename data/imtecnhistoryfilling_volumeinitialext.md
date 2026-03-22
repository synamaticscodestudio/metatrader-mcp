# VolumeInitialExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ VolumeInitialExt | [](imtecnhistoryfilling_typetime.md "TypeTime") [](imtecnhistoryfilling_volumecurrentext.md "VolumeCurrentExt") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::VolumeInitialExt
Get the initial volume of the request created in the ECN for the filling of the client order.
C++
UINT64 IMTECNHistoryFilling::VolumeInitialExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryFilling.VolumeInitialExt()  
---  
Return Value
The initial volume of the request created in the ECN for the filling of the client order. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Note
In fact, this is the original volume requested by the client.
IMTECNHistoryFilling::VolumeInitialExt
Set the initial volume of the request created in the ECN for the filling of the client order.
C++
MTAPIRES IMTECNHistoryFilling::VolumeInitialExt( const UINT64 volume // volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.VolumeInitialExt( ulong volume // volume )  
---  
Parameters
volume
[in] The initial volume of the request created in the ECN for the filling of the client order. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
In fact, this is the original volume requested by the client.