# Flags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Flags | [](imtecnmatching_state.md "State") [](imtecnmatching_timesetupmsc.md "TimeSetupMsc") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::Flags
Get matching order flags.
C++
UINT64 IMTECNMatching::Flags() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNMatching.Flags()  
---  
Return Value
[IMTECNMatching::ENCMatchingOrderFlags](imtecnmatching_enum.htm#enecnmatchingorderflags) enumeration value.
IMTECNMatching::Flags
Set matching order flags.
C++
MTAPIRES IMTECNMatching::Flags( const UINT64 flags // flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Flags( ulong flags // flags )  
---  
Parameters
state
[in] Matching order flags. Flags are passed using the [IMTECNMatching::ENCMatchingOrderFlags](imtecnmatching_enum.htm#enecnmatchingorderflags) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.