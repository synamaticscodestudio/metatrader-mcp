# Deviation (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Deviation | [](imtecnhistoryfilling_digits.md "Digits") [](imtecnhistoryfilling_provider.md "Provider") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Deviation
Get the allowable deviation for the filling order.
C++
UINT IMTECNHistoryFilling::Deviation() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryFilling.Deviation()  
---  
Return Value
Allowable deviation for the filling order. The value is specified in points.
Note
The allowable deviation is set in the [ECN settings](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_execution#filling).
IMTECNHistoryFilling::Deviation
Set the allowable deviation for the filling order.
C++
MTAPIRES IMTECNHistoryFilling::Deviation( const UINT deviation // deviation )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Deviation( uint  deviation // deviation )  
---  
Parameters
deviation
[in] Allowable deviation for the filling order. The value is specified in points.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The allowable deviation is set in the [ECN settings](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_execution#filling).