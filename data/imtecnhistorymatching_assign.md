# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ Assign | [](imtecnhistorymatching_release.md "Release") [](imtecnhistorymatching_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNHistoryMatching::Assign( const IMTECNHistoryMatching* order // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Assign( CIMTECNHistoryMatching order // source object )  
---  
Parameters
order
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.