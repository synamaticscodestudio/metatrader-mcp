# TimeSetupMsc (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ TimeSetupMsc | [](imtecnfilling_server.md "Server") [](imtecnfilling_externalid.md "ExternalID") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::TimeSetupMsc
Get the time when the filling order was placed in the external system.
C++
INT64 IMTECNFilling::TimeSetupMsc() const  
---  
.NET (Gateway/Manager API)
long CIMTECNFilling.TimeSetupMsc()  
---  
Return Value
Time when the order was placed in the external system, in milliseconds since 01.01.1970.
IMTECNFilling::TimeSetupMsc
Set the time when the filling order was placed in the external system.
C++
MTAPIRES IMTECNFilling::TimeSetupMsc( const INT64 time // order placing time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.TimeSetupMsc( long time // order placing time )  
---  
Parameters
time
[in] Time when the order was placed in the external system, in milliseconds since 01.01.1970.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.