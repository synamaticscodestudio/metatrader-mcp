# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProvider ](imtecnprovider.md "IMTECNProvider")/ Assign | [](imtecnprovider_release.md "Release") [](imtecnprovider_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNProvider::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNProvider::Assign( const IMTECNProvider* provider // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProvider.Assign( CIMTECNProvider provider // source object )  
---  
Parameters
provider
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.