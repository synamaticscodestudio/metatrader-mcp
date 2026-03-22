# TypeFill (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ TypeFill | [](imtecnmatching_type.md "Type") [](imtecnmatching_typetime.md "TypeTime") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::TypeFill
Get the fill policy used for the matching order.
C++
UINT IMTECNMatching::TypeFill() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNMatching.TypeFill()  
---  
Return Value
A value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
IMTECNMatching::TypeFill
Set the fill policy used for the matching order.
C++
MTAPIRES IMTECNMatching::Type( const UINT type // fill policy )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Type( uint type // fill policy )  
---  
Parameters
state
[in] The fill policy of a matching order. The fill policy is passed using the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.