# MarginRateMaintenance (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ MarginRateMaintenance | [](imtconsymbol_marginrateinitial.md "MarginRateInitial") [](imtconsymbol_marginlong.md "MarginLong") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::MarginRateMaintenance
Get the maintenance margin rate for orders of the specified type.
C++
double IMTConSymbol::MarginRateMaintenance( const UINT type // Order type )  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.MarginRateMaintenance( uint type // Order type )  
---  
Python (Manager API)
MTConSymbol.MarginRateMaintenance( type # Order type )  
---  
MTConSymbol.MarginRateMaintenanceGet()  
---  
Return Value
Margin rate for orders of the specified type.
Parameters
type
[in] Order type. Specified using the [IMTConSymbol::EnMarginRateTypes](imtconsymbol_enum.htm#enmarginratetypes) enumeration.
Note
The final size of the maintenance margin for orders of the specified type previously calculated according to the [symbol calculation type](imtconsymbol_calcmode.md "CalcMode") and converted to [deposit currency](imtcongroup_currency.md "Currency") is multiplied by this rate.
IMTConSymbol::MarginRateMaintenance
Set the maintenance margin rate for orders of the specified type.
C++
MTAPIRES IMTConSymbol::MarginRateMaintenance( const UINT type, // Type of order const double margin_rate // Margin rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.MarginRateMaintenance( uint type, // Type of order double margin_rate // Margin rate )  
---  
Python (Manager API)
MTConSymbol.MarginRateMaintenance( type, # Order type margin_rate # Margin rate )  
---  
MTConSymbol.MarginRateMaintenanceSet()  
---  
Parameters
type
[in] Order type. Specified using the [IMTConSymbol::EnMarginRateTypes](imtconsymbol_enum.htm#enmarginratetypes) enumeration.
margin_rate
[in] Margin rate for orders of the specified type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The final size of the initial margin for orders of the specified type previously calculated according to the [symbol calculation type](imtconsymbol_calcmode.md "CalcMode") and converted to [deposit currency](imtcongroup_currency.md "Currency") is multiplied by this rate.