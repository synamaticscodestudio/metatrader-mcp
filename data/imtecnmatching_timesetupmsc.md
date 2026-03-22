# TimeSetupMsc (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ TimeSetupMsc | [](imtecnmatching_flags.md "Flags") [](imtecnmatching_timeexpiration.md "TimeExpiration") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::TimeSetupMsc
Get order placing time in the ECN.
C++
INT64 IMTECNMatching::TimeSetupMsc() const  
---  
.NET (Gateway/Manager API)
long CIMTECNMatching.TimeSetupMsc()  
---  
Return Value
Time when the order was placed in the ECN, in milliseconds since 01.01.1970.
IMTECNMatching::TimeSetupMsc
Set order placing time in the ECN.
C++
MTAPIRES IMTECNMatching::TimeSetupMsc( const INT64 time // order placing time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.TimeSetupMsc( long time // order placing time )  
---  
Parameters
time
[in] Time of order placing in the ECN, in milliseconds since 01.01.1970.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.