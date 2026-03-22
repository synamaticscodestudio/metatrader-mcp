# TimeExpiration (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ TimeExpiration | [](imtecnmatching_timesetupmsc.md "TimeSetupMsc") [](imtecnmatching_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::TimeExpiration
Get order expiration time in the ECN.
C++
INT64 IMTECNMatching::TimeExpiration() const  
---  
.NET (Gateway/Manager API)
long CIMTECNMatching.TimeExpiration()  
---  
Return Value
Order expiration time in the ECN, in milliseconds since 01.01.1970.
IMTECNMatching::TimeExpiration
Set order expiration time in the ECN.
C++
MTAPIRES IMTECNMatching::TimeExpiration( const INT64 time // expiration time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.TimeExpiration( long time // expiration time )  
---  
Parameters
time
[in] Order execution time in the ECN, in milliseconds since 01.01.1970.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.