# ExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ ExternalID | [](imtecnfilling_timesetupmsc.md "TimeSetupMsc") [](imtecnfilling_state.md "State") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::ExternalID
Get the filling order identifier in the external system.
C++
LPCWSTR IMTECNFilling::ExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTECNFilling.ExternalID()  
---  
Return Value
Filling order identifier in the external system.
Note
The ID is filled by the gateway through which the order is forwarded.
A pointer to the resulting string is valid for the [IMTECNFilling](imtecnfilling.md "IMTECNFilling") object lifetime.
To use the string after object deletion (by a call of the [IMTECNFilling::Release](imtecnfilling_release.md "Release") method of this object), a copy of it should be created.
IMTECNFilling::ExternalID
Set the filling order identifier in the external system.
C++
MTAPIRES IMTECNFilling::ExternalID( LPCWSTR id // identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.ExternalID( string id // identifier )  
---  
Parameters
id
[in] Filling order identifier in the external system.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The ID length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to the specified length.