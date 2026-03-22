# MarginRateInitial (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginRateInitial | [](imtcongroupsymbol_marginmaintenancedefault.md "MarginMaintenanceDefault") [](imtcongroupsymbol_marginrateinitialdefault.md "MarginRateInitialDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginRateInitial
Get the initial margin rate for orders of the specified type for the given group.
C++
double IMTConGroupSymbol::MarginRateInitial( const UINT type // Order type )  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginRateInitial( uint type // Order type )  
---  
Python (Manager API)
MTConGroupSymbol.MarginRateInitial( type # Order type )  
---  
MTConGroupSymbol.MarginRateInitialGet()  
---  
Return Value
Margin rate for orders of the specified type.
Parameters
type
[in] Order type. Specified using the [IMTConSymbol::EnMarginRateTypes](imtconsymbol_enum.htm#enmarginratetypes) enumeration.
Note
The final size of the initial margin for orders of the specified type previously calculated according to the [symbol calculation type](imtconsymbol_calcmode.md "CalcMode") and converted to [deposit currency](imtcongroup_currency.md "Currency") is multiplied by this rate.
IMTConGroupSymbol::MarginRateInitial
Set the initial margin rate for orders of the specified type for the given group.
C++
MTAPIRES IMTConGroupSymbol::MarginRateInitial( const UINT type, // Type of order const double margin_rate // Margin rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.MarginRateInitial( uint type, // Type of order double margin_rate // Margin rate )  
---  
Python (Manager API)
MTConGroupSymbol.MarginRateInitial( type, # Order type margin_rate # Margin rate )  
---  
MTConGroupSymbol.MarginRateInitialSet( rate_dict # Margin rate )  
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