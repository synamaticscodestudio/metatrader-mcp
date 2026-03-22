# TimeDoneMsc (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ TimeDoneMsc | [](imtecnhistoryfilling_timesetupmsc.md "TimeSetupMsc") [](imtecnhistoryfilling_externalid.md "ExternalID") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::TimeDoneMsc
Get order execution time in the ECN.
C++
INT64 IMTECNHistoryFilling::TimeDoneMsc() const  
---  
.NET (Gateway/Manager API)
long CIMTECNHistoryFilling.TimeDoneMsc()  
---  
Return Value
Time of order execution in the ECN, in milliseconds since 01.01.1970.
IMTECNHistoryFilling::TimeDoneMsc
Set order execution time in the ECN.
C++
MTAPIRES IMTECNHistoryFilling::TimeDoneMsc( const INT64 time // execution time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.TimeDoneMsc( long time // execution time )  
---  
Parameters
time
[in] Time of order execution in the ECN, in milliseconds since 01.01.1970.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.