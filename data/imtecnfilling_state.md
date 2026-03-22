# State (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ State | [](imtecnfilling_externalid.md "ExternalID") [](imtecnfilling_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::State
Get the current state of the filling order.
C++
UINT IMTECNFilling::State() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNFilling.State()  
---  
Return Value
[IMTECNMatching::ENCMatchingState](imtecnmatching_enum.htm#encmatchingstate) enumeration value.
IMTECNMatching::State
Set the state of the filling order.
C++
MTAPIRES IMTECNFilling::StateSet( const UINT state // order state )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.StateSet( uint state // order state )  
---  
Parameters
state
[in] Order state. The state is passed using the [IMTECNMatching::ENCMatchingState](imtecnmatching_enum.htm#enecnmatchingorderflags) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.