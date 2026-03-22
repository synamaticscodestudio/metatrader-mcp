# TypeFill (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ TypeFill | [](imtecnhistoryfilling_type.md "Type") [](imtecnhistoryfilling_typetime.md "TypeTime") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::TypeFill
Get the fill policy used for the filling order.
C++
UINT IMTECNHistoryFilling::TypeFill() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryFilling.TypeFill()  
---  
Return Value
A value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
IMTECNHistoryFilling::TypeFill
Set the fill policy used for the filling order.
C++
MTAPIRES IMTECNHistoryFilling::Type( const UINT type // fill policy )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Type( uint type // fill policy )  
---  
Parameters
type
[in] Fill policy. The fill policy is passed using the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.