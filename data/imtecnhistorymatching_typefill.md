# TypeFill (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ TypeFill | [](imtecnhistorymatching_typeclient.md "TypeClient") [](imtecnhistorymatching_typefillclient.md "TypeFillClient") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::TypeFill
Get the fill policy of the matching order created in the ECN.
C++
UINT IMTECNHistoryMatching::TypeFill() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.TypeFill()  
---  
Return Value
A value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
IMTECNHistoryMatching::TypeFill
Set the fill policy of the matching order created in the ECN.
C++
MTAPIRES IMTECNHistoryMatching::Type( const UINT type // fill policy )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.Type( uint type // fill policy )  
---  
Parameters
state
[in] The fill policy of a matching order. The fill policy is passed using the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.