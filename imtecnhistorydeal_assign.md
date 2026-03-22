# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Assign | [](imtecnhistorydeal_release.md "Release") [](imtecnhistorydeal_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNHistoryDeal::Assign( const IMTECNHistoryDeal* deal // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Assign( CIMTECNHistoryDeal deal // source object )  
---  
Parameters
deal
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.