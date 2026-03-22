# MarginType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ MarginType | [](imtconspread_id.md "ID") [](imtconspread_margininitial.md "MarginInitial") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::MarginType
Getting margin charging type.
C++
UINT IMTConSpread::MarginType() const  
---  
.NET (Gateway/Manager API)
EnSpreadMarginType CIMTConSpread.MarginType()  
---  
Python (Manager API)
MTConSpread.MarginType  
---  
Return Value
Margin charging type as [IMTConSpread::EnSpreadMarginType](imtconspread_enum.htm#enspreadmargintype) enumeration value.
IMTConSpread::MarginType
Setting margin charging type.
C++
MTAPIRES IMTConSpread::MarginType( const UINT type // Margin charging type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.MarginType( EnSpreadMarginType type // Margin charging type )  
---  
Python (Manager API)
MTConSpread.MarginType  
---  
Parameters
type
[in] Margin charging type. It is passed as [IMTConSpread::EnSpreadMarginType](imtconspread_enum.htm#enspreadmargintype) enumeration value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.