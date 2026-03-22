# Type (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ Type | [](imtecnhistorymatching_symbolclient.md "SymbolClient") [](imtecnhistorymatching_typeclient.md "TypeClient") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::Type
Get the type of the order added into the ECN order book.
C++
UINT IMTECNHistoryMatching::Type() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.Type()  
---  
Return Value
A value of the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
IMTECNHistoryMatching::Type
Set the type of the order added into the ECN order book.
C++
MTAPIRES IMTECNHistoryMatching::Type( const UINT type // order type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.Type( uint type // order type )  
---  
Parameters
state
[in] Order type. The type is passed using the [EnOrderType](imtorder_enum.htm#enordertype) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.