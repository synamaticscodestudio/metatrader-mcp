# TimeSetupMsc (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ TimeSetupMsc | [](imtecnhistoryfilling_server.md "Server") [](imtecnhistoryfilling_timedonemsc.md "TimeDoneMsc") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::TimeSetupMsc
Get order creation time in the ECN.
C++
INT64 IMTECNHistoryFilling::TimeSetupMsc() const  
---  
.NET (Gateway/Manager API)
long CIMTECNHistoryFilling.TimeSetupMsc()  
---  
Return Value
Time of filling order creation in the ECN, in milliseconds since 01.01.1970.
IMTECNHistoryFilling::TimeSetupMsc
Set order creation time in the ECN.
C++
MTAPIRES IMTECNHistoryFilling::TimeSetupMsc( const INT64 time // order placing time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.TimeSetupMsc( long time // order placing time )  
---  
Parameters
time
[in] Time of order creation in the ECN, in milliseconds since 01.01.1970.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.