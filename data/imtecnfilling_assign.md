# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ Assign | [](imtecnfilling_release.md "Release") [](imtecnfilling_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNFilling::Assign( const IMTECNFilling* order // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Assign( CIMTECNFilling order // source object )  
---  
Parameters
order
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.