# TypeTime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ TypeTime | [](imtecnhistorymatching_typefillclient.md "TypeFillClient") [](imtecnhistorymatching_typetimeclient.md "TypeTimeClient") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::TypeTime
Get the expiration type of the matching order created in the ECN.
C++
UINT IMTECNHistoryMatching::TypeTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.TypeTime()  
---  
Return Value
A value of the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
IMTECNHistoryMatching::TypeTime
Set the expiration type of the matching order created in the ECN.
C++
MTAPIRES IMTECNHistoryMatching::TypeTime( const UINT type // expiration type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.TypeTime( uint type // expiration type )  
---  
Parameters
state
[in] The expiration type of the matching order. The type is passed using the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.