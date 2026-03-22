# SymbolPerfomance (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ SymbolPerfomance | [](imtconfund_symbol.md "Symbol") [](imtconfund_symbolassets.md "SymbolAssets") |
| --- | --- | --- |
| --- | --- |

IMTConFund::SymbolPerfomance
Get the name of the symbol used for displaying the current value of assets.
C++
LPCWSTR IMTConFund::SymbolPerfomance() const  
---  
.NET (Gateway/Manager API)
string CIMTConFund.SymbolPerfomance()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the symbol. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFund](imtconfund.md "IMTConFund") object.
To use the string after the object removal (call of the [IMTConFund::Release](imtconfund_release.md "Release") method of this object), a copy of it should be created.
IMTConFund::SymbolPerfomance
Set the name of the symbol used for displaying the current value of assets.
C++
MTAPIRES IMTConFund::SymbolPerfomance( LPCWSTR symbol // Symbol name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.SymbolPerfomance( srting symbol // Symbol name )  
---  
Parameters
name
[in] The name of the symbol used for displaying the current value of assets.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name length is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.