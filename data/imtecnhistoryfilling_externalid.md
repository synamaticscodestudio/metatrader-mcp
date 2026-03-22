# ExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ ExternalID | [](imtecnhistoryfilling_timedonemsc.md "TimeDoneMsc") [](imtecnhistoryfilling_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::ExternalID
Get the filling order identifier in the external system.
C++
LPCWSTR IMTECNHistoryFilling::ExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTECNHistoryFilling.ExternalID()  
---  
Return Value
Filling order identifier in the external system.
Note
The ID is filled by the gateway through which the order is forwarded.
A pointer to the resulting string is valid for the [IMTECNHistoryFilling](imtecnhistoryfilling.md "IMTECNFilling") object lifetime.
To use the string after object deletion (by a call of the [IMTECNHistoryFilling::Release](imtecnhistoryfilling_release.md "Release") method of this object), a copy of it should be created.
IMTECNHistoryFilling::ExternalID
Set the filling order identifier in the external system.
C++
MTAPIRES IMTECNHistoryFilling::ExternalID( LPCWSTR id // identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.ExternalID( string id // identifier )  
---  
Parameters
id
[in] Filling order identifier in the external system.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The ID length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to the specified length.