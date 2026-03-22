# ContractSize (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ ContractSize | [](imtconsymbol_ticksize.md "TickSize") [](imtconsymbol_stopslevel.md "StopsLevel") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::ContractSize
Get the contract size for the symbol.
C++
double IMTConSymbol::ContractSize() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.ContractSize()  
---  
Python (Manager API)
MTConSymbol.ContractSize  
---  
Return Value
The contract size for the symbol.
IMTConSymbol::ContractSize
Set the contract size for the symbol.
C++
MTAPIRES IMTConSymbol::ContractSize( const double size // Contract size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.ContractSize( double size // Contract size )  
---  
Python (Manager API)
MTConSymbol.ContractSize  
---  
Parameters
size
[in] The contract size for the symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.