# SymbolClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ SymbolClient | [](imtecnhistorymatching_symbol.md "Symbol") [](imtecnhistorymatching_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::SymbolClient
Get the name of the trading symbol, for which the matching order is placed on the client side.
C++
LPCWSTR IMTECNHistoryMatching::SymbolClient() const  
---  
.NET (Gateway/Manager API)
string CIMTECNHistoryMatching.SymbolClient()  
---  
Return Value
The name of the trading symbol, for which the matching order is placed on the client side.
Note
A pointer to the resulting string is valid for the [IMTECNHistoryMatching](imtecnhistorymatching.md "IMTECNMatching") object lifetime.
To use the string after object deletion (by a call of the [IMTECNHistoryMatching::Release](imtecnhistorymatching_release.md "Release") method of this object), a copy of it should be created.
IMTECNHistoryMatching::SymbolClient
Set the name of the trading symbol, for which the matching order is placed on the client side.
C++
MTAPIRES IMTECNHistoryMatching::SymbolClient( LPCWSTR symbol // symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.SymbolClient( string symbol // symbol )  
---  
Parameters
symbol
[in] The name of the trading symbol, for which the matching order is placed on the client side.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The symbol name length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to the specified length.