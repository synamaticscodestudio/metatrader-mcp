# TypeFillClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ TypeFillClient | [](imtecnhistorymatching_typefill.md "TypeFill") [](imtecnhistorymatching_typetime.md "TypeTime") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::TypeFillClient
Get the fill policy used in the original client order.
C++
UINT IMTECNHistoryMatching::TypeFillClient() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.TypeFillClient()  
---  
Return Value
A value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
IMTECNHistoryMatching::TypeFillClient
Set the fill policy used in the original client order.
C++
MTAPIRES IMTECNHistoryMatching::TypeFillClient( const UINT type // fill policy )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.TypeFillClient( uint type // fill policy )  
---  
Parameters
state
[in] The fill policy of a matching order. The fill policy is passed using the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.