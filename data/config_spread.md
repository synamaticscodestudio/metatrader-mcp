# Spreads (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Spreads | [](imtconsymbolsink_hooksymboldelete.md "HookSymbolDelete") [](imtconspread.md "IMTConSpread") |
| --- | --- | --- |
| --- | --- |

Configuration of Spreads
MetaTrader 5 API allows users to configure the charging of the margin in case client's trading positions are in a spread to one another. The spread is defined as the presence of the oppositely directed positions at related symbols. Reduced margin requirements provide more trading opportunities for traders.
The following symbol interfaces are available:
  * [IMTConSpreadLeg](config_spread.htm#imtconspreadleg)
  * [IMTConSpread](config_spread.htm#imtconspread)
  * [IMTConSpreadSink](config_spread.htm#imtconspreadsink)

For better understanding the purpose of the interfaces, the figure below shows different elements of spread configuration in MetaTrader 5 Administrator:
The following elements are shown above:
  1. [Spread A leg](imtconspread_alegadd.md "ALegAdd")
  2. [Spread B leg](imtconspread_blegadd.md "BLegAdd")
  3. [Charged margin](imtconspread_margintype.md "MarginType")

Below is a detailed description of the correspondence of methods and spread settings in the MetaTrader 5 Administrator.
IMTConSpreadLeg
[IMTConSpreadLeg](imtconspreadleg.md "IMTConSpreadLeg") interface provides access to configuration of spread legs.
The figure shows the sessions configuration dialog in MetaTrader 5 Administrator:
  1. [Weight](imtconspreadleg_ratio.md "Ratio")
  2. [Leg specification mode](imtconspreadleg_mode.md "Mode")
  3. [Symbol or basic asset](imtconspreadleg_symbol.md "Symbol")
  4. [Beginning of the period (for a basic asset)](imtconspreadleg_timefrom.md "TimeFrom")
  5. [End of the period (for a basic asset)](imtconspreadleg_timeto.md "TimeTo")

IMTConSpread
[IMTConSpread](imtconspread.md "IMTConSpread") interface provides access to configuration of spread settings.
The figure shows the spread configuration dialog in MetaTrader 5 Administrator:
  1. [Margin charging type](imtconspread_margintype.md "MarginType")
  2. [Initial margin](imtconspread_margininitial.md "MarginInitial")
  3. [Maintenance margin](imtconspread_marginmaintenance.md "MarginMaintenance")
  4. [Adding a spread leg](imtconspread_alegadd.md "ALegAdd")
  5. [Changing a spread leg](imtconspread_alegupdate.md "ALegUpdate")
  6. [Deleting a spread leg](imtconspread_alegdelete.md "ALegDelete")

IMTConSpreadSink
[IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface contains the handlers of the events of spread configuration changes.