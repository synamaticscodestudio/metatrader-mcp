# Symbol (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Symbol | [](imtconfund_name.md "Name") [](imtconfund_symbolperfomance.md "SymbolPerfomance") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Symbol
Get the name of the symbol used for displaying the value of one share.
C++
LPCWSTR IMTConFund::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTConFund.Symbol()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the symbol. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFund](imtconfund.md "IMTConFund") object.
To use the string after the object removal (call of the [IMTConFund::Release](imtconfund_release.md "Release") method of this object), a copy of it should be created.
IMTConFund::Symbol
Set the name of the symbol used for displaying the value of one share.
C++
MTAPIRES IMTConFund::Symbol( LPCWSTR symbol // Symbol name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Symbol( srting symbol // Symbol name )  
---  
Parameters
name
[in] The name of the symbol used for displaying the value of one share.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name length is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.