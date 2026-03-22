# State (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ State | [](imtecnhistorymatching_server.md "Server") [](imtecnhistorymatching_timesetupmsc.md "TimeSetupMsc") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::State
Get the current state of the matching order.
C++
UINT IMTECNHistoryMatching::State() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.State()  
---  
Return Value
[IMTECNMatching::ENCMatchingState](imtecnmatching_enum.htm#encmatchingstate) enumeration value.
IMTECNHistoryMatching::State
Set the state of the matching order.
C++
MTAPIRES IMTECNHistoryMatching::StateSet( const UINT state // order state )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.StateSet( uint state // order state )  
---  
Parameters
state
[in] Order state. The state is passed using the [IMTECNMatching::ENCMatchingState](imtecnmatching_enum.htm#enecnmatchingorderflags) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.