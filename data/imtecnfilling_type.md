# Type (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ Type | [](imtecnfilling_symbol.md "Symbol") [](imtecnfilling_typefill.md "TypeFill") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::Type
Get the type of the order created for sending to the external system.
C++
UINT IMTECNFilling::Type() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNFilling.Type()  
---  
Return Value
A value of the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
IMTECNFilling::Type
Set the type of the order created for sending to the external system.
C++
MTAPIRES IMTECNFilling::Type( const UINT type // order type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Type( uint type // order type )  
---  
Parameters
type
[in] Order type. The type is passed using the [EnOrderType](imtorder_enum.htm#enordertype) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.