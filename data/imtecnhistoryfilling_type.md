# Type (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Type | [](imtecnhistoryfilling_symbol.md "Symbol") [](imtecnhistoryfilling_typefill.md "TypeFill") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Type
Get the type of the order created for sending to the external system.
C++
UINT IMTECNHistoryFilling::Type() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryFilling.Type()  
---  
Return Value
A value of the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
IMTECNHistoryFilling::Type
Set the type of the order created for sending to the external system.
C++
MTAPIRES IMTECNHistoryFilling::Type( const UINT type // order type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Type( uint type // order type )  
---  
Parameters
type
[in] Order type. The type is passed using the [EnOrderType](imtorder_enum.htm#enordertype) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.