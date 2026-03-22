# TimeDoneMsc (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ TimeDoneMsc | [](imtecnhistorymatching_timesetupmsc.md "TimeSetupMsc") [](imtecnhistorymatching_timeexpiration.md "TimeExpiration") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::TimeDoneMsc
Get order execution time in the ECN.
C++
INT64 IMTECNHistoryMatching::TimeDoneMsc() const  
---  
.NET (Gateway/Manager API)
long CIMTECNHistoryMatching.TimeDoneMsc()  
---  
Return Value
Time of order execution in the ECN, in milliseconds since 01.01.1970.
IMTECNHistoryMatching::TimeDoneMsc
Set order execution time in the ECN.
C++
MTAPIRES IMTECNHistoryMatching::TimeDoneMsc( const INT64 time // execution time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.TimeDoneMsc( long time // execution time )  
---  
Parameters
time
[in] Time of order execution in the ECN, in milliseconds since 01.01.1970.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.