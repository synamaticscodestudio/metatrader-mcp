# VolumeInitialClientExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ VolumeInitialClientExt | [](imtecnhistorymatching_volumeinitialext.md "VolumeInitialExt") [](imtecnhistorymatching_volumecurrentext.md "VolumeCurrentExt") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::VolumeInitialExt
Get the initial volume of the request created by the client.
C++
UINT64 IMTECNHistoryMatching::VolumeInitialExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryMatching.VolumeInitialExt()  
---  
Return Value
The initial volume of the request created by the client. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
IMTECNHistoryMatching::VolumeInitialExt
Set the initial volume of the request created by the client.
C++
MTAPIRES IMTECNHistoryMatching::VolumeInitialExt( const UINT64 volume // volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.VolumeInitialExt( ulong volume // volume )  
---  
Parameters
volume
[in] The initial volume of the request created by the client. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.