# VolumeInitialClientExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ VolumeInitialClientExt | [](imtecnmatching_volumecurrentext.md "VolumeCurrentExt") [](imtecnmatching_volumecurrentclientext.md "VolumeCurrentClientExt") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::VolumeInitialExt
Get the initial volume of the request created by the client.
C++
UINT64 IMTECNMatching::VolumeInitialExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNMatching.VolumeInitialExt()  
---  
Return Value
The initial volume of the request created by the client. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
IMTECNMatching::VolumeInitialExt
Set the initial volume of the request created by the client.
C++
MTAPIRES IMTECNMatching::VolumeInitialExt( const UINT64 volume // volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.VolumeInitialExt( ulong volume // volume )  
---  
Parameters
volume
[in] The initial volume of the request created by the client. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.