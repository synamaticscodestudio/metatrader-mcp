# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Symbol | [](imtecnhistorydeal_timemsc.md "TimeSetupMsc") [](imtecnhistorydeal_action.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Symbol
Get the name of the trading symbol for which the deal was executed.
C++
LPCWSTR IMTECNHistoryDeal::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTECNHistoryDeal.Symbol()  
---  
Return Value
The name of the trading symbol for which the deal was executed.
Note
A pointer to the resulting string is valid for the [IMTECNHistoryDeal](imtecnhistorydeal.md "IMTECNFilling") object lifetime.
To use the string after object deletion (by a call of the [IMTECNHistoryDeal::Release](imtecnhistorydeal_release.md "Release") method of this object), a copy of it should be created.
IMTECNHistoryDeal::Symbol
Set the name of the trading symbol for which the deal was executed.
C++
MTAPIRES IMTECNHistoryDeal::Symbol( LPCWSTR symbol // symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Symbol( string symbol // symbol )  
---  
Parameters
symbol
[in] The name of the trading symbol for which the deal was executed.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The symbol name length is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to the specified length.