# TypeFill (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ TypeFill | [](imtecnfilling_type.md "Type") [](imtecnfilling_typetime.md "TypeTime") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::TypeFill
Get the fill policy used for the filling order.
C++
UINT IMTECNFilling::TypeFill() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNFilling.TypeFill()  
---  
Return Value
A value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
IMTECNFilling::TypeFill
Set the fill policy used for the filling order.
C++
MTAPIRES IMTECNFilling::Type( const UINT type // fill policy )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Type( uint type // fill policy )  
---  
Parameters
type
[in] Fill policy. The fill policy is passed using the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.