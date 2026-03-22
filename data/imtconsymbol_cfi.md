# CFI (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ CFI | [](imtconsymbol_exchange.md "Exchange") [](imtconsymbol_sector.md "Sector") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::CFI
Get instrument classification in accordance with the [ISO 10962](44799.md) standard.
C++
LPCWSTR IMTConSymbol::CFI() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.CFI()  
---  
Python (Manager API)
MTConSymbol.CFI  
---  
Return Value
If successful, it returns a pointer to a string with the symbol CFI. Otherwise, NULL is returned.
Note
Information from the CFI field is used for [EMIR reports](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_reports/emir_report).
IMTConSymbol::CFI
Set instrument classification in accordance with the [ISO 10962](44799.md) standard.
C++
MTAPIRES IMTConSymbol::CFI( LPCWSTR cfi // Instrument classification )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.CFI( string cfi // Instrument classification )  
---  
Python (Manager API)
MTConSymbol.CFI  
---  
Program Parameters
cfi
[in] Instrument classification.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Information from the CFI field is used for [EMIR reports](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_reports/emir_report).
The name length is limited to 8 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.