# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Assign | [](imtecnmatching_release.md "Release") [](imtecnmatching_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNMatching::Assign( const IMTECNMatching* order // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Assign( CIMTECNMatching order // source object )  
---  
Parameters
order
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.