# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Symbol | [](imtecnhistoryfilling_externalid.md "ExternalID") [](imtecnhistoryfilling_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Symbol
Get the name of the trading instrument for which the filling order was created.
C++
LPCWSTR IMTECNHistoryFilling::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTECNHistoryFilling.Symbol()  
---  
Return Value
The name of the financial symbol for which the filling order is created.
Note
A pointer to the resulting string is valid for the [IMTECNFilling](imtecnfilling.md "IMTECNFilling") object lifetime.
To use the string after object deletion (by a call of the [IMTECNFilling::Release](imtecnfilling_release.md "Release") method of this object), a copy of it should be created.
IMTECNHistoryFilling::Symbol
Set the name of the trading instrument for which the filling order was created.
C++
MTAPIRES IMTECNHistoryFilling::Symbol( LPCWSTR symbol // symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Symbol( string symbol // symbol )  
---  
Parameters
symbol
[in] The name of the financial symbol for which the filling order is created.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The symbol name length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to the specified length.