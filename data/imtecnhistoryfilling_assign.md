# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Assign | [](imtecnhistoryfilling_release.md "Release") [](imtecnhistoryfilling_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNHistoryFilling::Assign( const IMTECNHistoryFilling* order // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Assign( CIMTECNHistoryFilling order // source object )  
---  
Parameters
order
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.