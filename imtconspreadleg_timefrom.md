# TimeFrom (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadLeg ](imtconspreadleg.md "IMTConSpreadLeg")/ TimeFrom | [](imtconspreadleg_symbol.md "Symbol") [](imtconspreadleg_timeto.md "TimeTo") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadLeg::TimeFrom
Getting the beginning of a period for filtering symbols by expiration time when specifying a basic asset for a spread leg.
C++
INT64 IMTConSpreadLeg::TimeFrom() const  
---  
.NET (Gateway/Manager API)
long CIMTConSpreadLeg.TimeFrom()  
---  
Python (Manager API)
MTConSpreadLeg.TimeFrom  
---  
Return Value
The beginning of a period for filtering symbols by expiration time when specifying a basic asset for a spread leg. The date is specified in seconds since January 1, 1970.
IMTConSpreadLeg::TimeFrom
Setting the beginning of a period for filtering symbols by expiration time when specifying a basic asset for a spread leg.
C++
MTAPIRES IMTConSpreadLeg::TimeFrom( const INT64 from // Beginning of the period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpreadLeg.TimeFrom( long from // Beginning of the period )  
---  
Python (Manager API)
MTConSpreadLeg.TimeFrom  
---  
Parameters
from
[in] The beginning of a period for filtering symbols by expiration time when specifying a basic asset for a spread leg. The date is specified in seconds since January 1, 1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is used when specifying trade symbols for a spread leg as a basic asset ([IMTConSpreadLeg::LEG_MODE_FUTURES](imtconspreadleg_enum.htm#enlegmode)).
If a basic asset is specified for the leg, all symbols with this basic asset are considered ([IMTConSymbol::Basis](imtconsymbol_basis.md "Basis") field). In this case, symbols can be additionally filtered by the time of their operation (specified in [IMTConSymbol::TimeStart](imtconsymbol_timestart.md "TimeStart") and [IMTConSymbol::TimeExpiration](imtconsymbol_timeexpiration.md "TimeExpiration")). To do this, specify the time interval in [IMTConSpreadLeg::TimeFrom](imtconspreadleg_timefrom.md "TimeFrom") and [IMTConSpreadLeg::TimeTo](imtconspreadleg_timeto.md "TimeTo"). To be able to use the symbol, its expiration date ([IMTConSymbol::TimeExpiration](imtconsymbol_timeexpiration.md "TimeExpiration")) should be in the specified interval.