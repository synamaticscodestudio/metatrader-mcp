# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadLeg ](imtconspreadleg.md "IMTConSpreadLeg")/ Mode | [](imtconspreadleg_clear.md "Clear") [](imtconspreadleg_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadLeg::Mode
Getting symbol specification mode for a spread leg.
C++
UINT IMTConSpreadLeg::Mode() const  
---  
.NET (Gateway/Manager API)
EnLegMode CIMTConSpreadLeg.Mode()  
---  
Python (Manager API)
MTConSpreadLeg.Mode  
---  
Return Value
[IMTConSpreadLeg::EnLegMode](imtconspreadleg_enum.htm#enlegmode) enumeration is used to pass a symbol specification mode.
IMTConSpreadLeg::Mode
Setting symbol specification mode for a spread leg.
C++
MTAPIRES IMTConSpreadLeg::Mode( const UINT mode // symbol specification mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpreadLeg.Mode( EnLegMode mode // symbol specification mode )  
---  
Python (Manager API)
MTConSpreadLeg.Mode  
---  
Parameters
open
[in] Symbol specification mode for a spread leg. It is passed as [IMTConSpreadLeg::EnLegMode](imtconspreadleg_enum.htm#enlegmode) enumeration value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.