# TypeTime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ TypeTime | [](imtecnhistoryfilling_typefill.md "TypeFill") [](imtecnhistoryfilling_volumeinitialext.md "VolumeInitialExt") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::TypeTime
Get the expiration type of the filling order.
C++
UINT IMTECNHistoryFilling::TypeTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryFilling.TypeTime()  
---  
Return Value
A value of the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
IMTECNHistoryFilling::TypeTime
Set the expiration type of the filling order.
C++
MTAPIRES IMTECNHistoryFilling::TypeTime( const UINT type // expiration type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.TypeTime( uint type // expiration type )  
---  
Parameters
type
[in] Filling order expiration type. The type is passed using the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.