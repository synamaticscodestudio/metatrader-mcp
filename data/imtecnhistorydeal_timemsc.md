# TimeSetupMsc (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ TimeMsc | [](imtecnhistorydeal_externalid.md "ExternalID") [](imtecnhistorydeal_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::TimeMsc
Get deal execution time at the gateway.
C++
INT64 IMTECNHistoryDeal::TimeMsc() const  
---  
.NET (Gateway/Manager API)
long CIMTECNHistoryDeal.TimeMsc()  
---  
Return Value
The time of deal execution on the gateway, in milliseconds since 01.01.1970.
IMTECNHistoryDeal::TimeMsc
Set deal execution time at the gateway.
C++
MTAPIRES IMTECNHistoryDeal::TimeMsc( const INT64 time // execution time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.TimeMsc( long time // execution time )  
---  
Parameters
time
[in] The time of deal execution on the gateway, in milliseconds since 01.01.1970.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.