# AccruedInterest (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ AccruedInterest | [](imtconsymbol_facevalue.md "FaceValue") [](imtconsymbol_splicetype.md "SpliceType") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::AccruedInterest
Get the accrued interest of a bond.
C++
double IMTConSymbol::AccruedInterest() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.AccruedInterest()  
---  
Python (Manager API)
MTConSymbol.AccruedInterest  
---  
Return Value
The accrued interest of a bond.
IMTConSymbol::AccruedInterest
Set the accrued interest of a bond.
C++
MTAPIRES IMTConSymbol::AccruedInterest( const double interest // Accrued interest )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.AccruedInterest( double interest // Accrued interest )  
---  
Python (Manager API)
MTConSymbol.AccruedInterest  
---  
Parameters
value
[in] The accrued interest of a bond.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.