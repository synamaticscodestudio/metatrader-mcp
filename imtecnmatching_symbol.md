# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Symbol | [](imtecnmatching_timeexpiration.md "TimeExpiration") [](imtecnmatching_symbolclient.md "SymbolClient") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::Symbol
Get the name of the trading symbol, for which the matching order is placed on the ECN side.
C++
LPCWSTR IMTECNMatching::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTECNMatching.Symbol()  
---  
Return Value
The name of the trading symbol, for which the matching order is placed on the ECN side.
Note
A pointer to the resulting string is valid for the [IMTECNMatching](imtecnmatching.md "IMTECNMatching") object lifetime.
To use the string after object deletion (by a call of the [IMTECNMatching::Release](imtecnmatching_release.md "Release") method of this object), a copy of it should be created.
IMTECNMatching::Symbol
Set the name of the trading symbol, for which the matching order is placed on the ECN side.
C++
MTAPIRES IMTECNMatching::Symbol( LPCWSTR symbol // symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Symbol( string symbol // symbol )  
---  
Parameters
symbol
[in] The name of the trading symbol, for which the matching order is placed on the ECN side.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The symbol name length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to the specified length.