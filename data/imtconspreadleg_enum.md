# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadLeg ](imtconspreadleg.md "IMTConSpreadLeg")/ Enumerations | [](imtconspreadleg.md "IMTConSpreadLeg") [](imtconspreadleg_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The class contains the following enumerations:
  * [IMTConSpreadleg::EnLegMode](imtconspreadleg_enum.htm#enlegmode)

IMTConSpreadLeg::EnLegMode
Symbol specification methods for a spread leg are listed in IMTConSpreadLeg::EnLegMode.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| LEG_MODE_SYMBOL | 0 | Specifying trade symbols for a spread leg as a specific symbol. |
| LEG_MODE_FUTURES | 1 | Specifying trade symbols for a spread leg as a basic asset. If a basic asset is specified for the leg, all symbols with this basic asset are considered ([IMTConSymbol::Basis](imtconsymbol_basis.md "Basis") field). In this case, symbols can be additionally filtered by the time of their operation (specified in [IMTConSymbol::TimeStart](imtconsymbol_timestart.md "TimeStart") and [IMTConSymbol::TimeExpiration](imtconsymbol_timeexpiration.md "TimeExpiration")). To do this, specify the time interval in [IMTConSpreadLeg::TimeFrom](imtconspreadleg_timefrom.md "TimeFrom") and [IMTConSpreadLeg::TimeTo](imtconspreadleg_timeto.md "TimeTo"). To be able to use the symbol, its expiration date ([IMTConSymbol::TimeExpiration](imtconsymbol_timeexpiration.md "TimeExpiration")) should be in the specified interval. |
| LEG_MODE_FIRST |  | Beginning of enumeration. It corresponds to LEG_MODE_SYMBOL. |
| LEG_MODE_LAST |  | End of enumeration. It corresponds to LEG_MODE_FUTURES. |

This enumeration is used in [IMTConSpreadLeg::Mode](imtconspreadleg_mode.md "Mode") method.