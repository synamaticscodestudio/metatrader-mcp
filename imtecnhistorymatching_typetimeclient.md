# TypeTimeClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ TypeTimeClient | [](imtecnhistorymatching_typetime.md "TypeTime") [](imtecnhistorymatching_price.md "Price") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::TypeTimeClient
Get the expiration type in the original client order.
C++
UINT IMTECNHistoryMatching::TypeTimeClient() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.TypeTimeClient()  
---  
Return Value
A value of the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
IMTECNHistoryMatching::TypeTimeClient
Set the expiration type in the original client order.
C++
MTAPIRES IMTECNHistoryMatching::TypeTimeClient( const UINT type // expiration type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.TypeTimeClient( uint type // expiration type )  
---  
Parameters
state
[in] The expiration type of the matching order. The type is passed using the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.