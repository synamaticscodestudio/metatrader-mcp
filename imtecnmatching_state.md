# State (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ State | [](imtecnmatching_group.md "Group") [](imtecnmatching_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::State
Get the current state of the matching order.
C++
UINT IMTECNMatching::State() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNMatching.State()  
---  
Return Value
[IMTECNMatching::ENCMatchingState](imtecnmatching_enum.htm#encmatchingstate) enumeration value.
IMTECNMatching::State
Set the state of the matching order.
C++
MTAPIRES IMTECNMatching::StateSet( const UINT state // order state )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.StateSet( uint state // order state )  
---  
Parameters
state
[in] Order state. The state is passed using the [IMTECNMatching::ENCMatchingState](imtecnmatching_enum.htm#enecnmatchingorderflags) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.