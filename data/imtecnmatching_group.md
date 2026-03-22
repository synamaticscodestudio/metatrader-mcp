# Group (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Group | [](imtecnmatching_server.md "Server") [](imtecnmatching_state.md "State") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::Group
Get the group of the client who has placed the matching order.
C++
UINT64 IMTECNMatching::Group() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNMatching.Group()  
---  
Return Value
The group of the client who has placed the matching order.
IMTECNMatching::Group
Set the group of the client who has placed the matching order.
C++
MTAPIRES IMTECNMatching::Group( const UINT64 group // group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Group( ulong group // group )  
---  
Parameters
group
[in] The group of the client who has placed the matching order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.