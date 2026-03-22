# TypeTime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ TypeTime | [](imtecnmatching_typefill.md "TypeFill") [](imtecnmatching_price.md "Price") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::TypeTime
Get the matching order expiration type.
C++
UINT IMTECNMatching::TypeTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNMatching.TypeTime()  
---  
Return Value
A value of the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
IMTECNMatching::TypeTime
Set the matching order expiration type.
C++
MTAPIRES IMTECNMatching::TypeTime( const UINT type // expiration type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.TypeTime( uint type // expiration type )  
---  
Parameters
state
[in] The expiration type of the matching order. The type is passed using the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.