# TypeClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ TypeClient | [](imtecnhistorymatching_type.md "Type") [](imtecnhistorymatching_typefill.md "TypeFill") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::TypeClient
Get the type of the order placed on the client side.
C++
UINT IMTECNHistoryMatching::TypeClient() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.TypeClient()  
---  
Return Value
A value of the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
IMTECNHistoryMatching::TypeClient
Set the type of the order placed on the client side.
C++
MTAPIRES IMTECNHistoryMatching::TypeClient( const UINT type // order type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.TypeClient( uint type // order type )  
---  
Parameters
state
[in] Order type. The type is passed using the [EnOrderType](imtorder_enum.htm#enordertype) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.