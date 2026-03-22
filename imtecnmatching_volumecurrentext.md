# VolumeCurrentExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ VolumeCurrentExt | [](imtecnmatching_volumeinitialext.md "VolumeInitialExt") [](imtecnmatching_volumeinitialclientext.md "VolumeInitialClientExt") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::VolumeCurrentExt
Get the current filled volume of the request created in the ECN for the filling of the client order.
C++
UINT64 IMTECNMatching::VolumeCurrentExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNMatching.VolumeCurrentExt()  
---  
Return Value
The current filled volume of the request created in the ECN for the filling of the client order. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
IMTECNMatching::VolumeCurrentExt
Set the current filled volume of the request created in the ECN for the filling of the client order.
C++
MTAPIRES IMTECNMatching::VolumeCurrentExt( const UINT64 volume // volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.VolumeCurrentExt( ulong volume // volume )  
---  
Parameters
volume
[in] The current filled volume of the request created in the ECN for the filling of the client order. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.