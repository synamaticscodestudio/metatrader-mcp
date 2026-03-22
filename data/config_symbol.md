# Symbols (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Symbols | [](imtconfirewallsink_onfirewallsync.md "OnFirewallSync") [](imtconsymbol.md "IMTConSymbol") |
| --- | --- | --- |
| --- | --- |

Configuration of Symbols
The MetaTrader 5 API allows to manage Symbols in the trading platform — add new groups, modify and delete existing ones.
The following symbol interfaces are available:
  * [IMTConSymbol](config_symbol.htm#imtconsymbol)
  * [IMTConSymbolSession](config_symbol.htm#imtconsymbolsession)
  * [IMTConSymbolArray](imtconsymbolarray.md "IMTConSymbolArray")
  * [IMTConSymbolSink](config_symbol.htm#imtsymbolsink)

The below figure shows different elements of symbol configuration in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [Symbol name](imtconsymbol_symbol.md "Symbol").
  2. [Symbol description](imtconsymbol_description.md "Description").
  3. [Symbol type](imtconsymbol_calcmode.md "CalcMode") (type of profit and margin calculation).
  4. [Symbol execution type](imtconsymbol_execmode.md "ExecMode").
  5. [Number of decimal places in the symbol price](imtconsymbol_digits.md "Digits").

Below is a detailed description of the correspondence of methods and symbol settings in the MetaTrader 5 Administrator.
IMTConSymbol
The [IMTConSymbol](imtconsymbol.md "IMTConSymbol") interface provides access to configuration of all the symbol parameters. In MetaTrader 5 Administrator, symbol settings are divided into several tabs:
  * [Common](config_symbol.htm#common)
  * [Quotes](config_symbol.htm#quotes)
  * [Trade](config_symbol.htm#trade)
  * [Execution](config_symbol.htm#execution)
  * [Margin](config_symbol.htm#margin)
  * [Swaps](config_symbol.htm#swaps)
  * [Sessions](config_symbol.htm#sessions)

Common
The following elements are shown above:
  1. [Symbol name](imtconsymbol_symbol.md "Symbol").
  2. International Securities Identification Number ([ISIN](imtconsymbol_isin.md "ISIN")).
  3. [Underlying asset](imtconsymbol_basis.md "Basis").
  4. [The source of quotes for the symbol](imtconsymbol_source.md "Source").
  5. [The background color of the symbol](imtconsymbol_colorbackground.md "ColorBackground").
  6. [The amount of spread](imtconsymbol_spread.md "Spread").
  7. [Spread balance](imtconsymbol_spreadbalance.md "SpreadBalance").
  8. [Symbol description](imtconsymbol_description.md "Description").
  9. [International Securities Identification Number](imtconsymbol_international.md "International").
  10. [The address of the symbol web page](imtconsymbol_page.md "Page").
  11. [Number of decimal places in the symbol price](imtconsymbol_digits.md "Digits").
  12. [The range of the Depth of Market](imtconsymbol_tickbookdepth.md "TickBookDepth").
  13. [Base currency](imtconsymbol_currencybase.md "CurrencyBase").
  14. [Profit currency](imtconsymbol_currencyprofit.md "CurrencyProfit").
  15. [Margin currency](imtconsymbol_currencymargin.md "CurrencyMargin").

Quotes
The following elements are shown above:
  1. [Allow real time quotes from data feeds](imtconsymbol_tickflags.md "TickFlags").
  2. [Keep original prices](imtconsymbol_tickflags.md "TickFlags").
  3. [Receive market statistics from data feeds](imtconsymbol_tickflags.md "TickFlags").
  4. [Soft filtration level](imtconsymbol_filtersoft.md "FilterSoft").
  5. [The number of quotes to set a new level](imtconsymbol_filtersoftticks.md "FilterSoftTicks").
  6. [Hard filtration level](imtconsymbol_filterhard.md "FilterHard").
  7. [The number of quotes to set a new level](imtconsymbol_filterhardticks.md "FilterHardTicks").
  8. [Discard filtration level](imtconsymbol_filterdiscard.md "FilterDiscard").
  9. [Minimum spread](imtconsymbol_filterspreadmin.md "FilterSpreadMin").
  10. [Maximum spread](imtconsymbol_filterspreadmax.md "FilterSpreadMax").

Trade
The following elements are shown above:
  1. [Contract size](imtconsymbol_contractsize.md "ContractSize").
  2. [Method of profit and margin calculation](imtconsymbol_calcmode.md "CalcMode").
  3. [Trade settings](imtconsymbol_trademode.md "TradeMode").
  4. [Mode of keeping orders at a trade day change](imtconsymbol_gtcmode.md "GTCMode").
  5. [Filling types](imtconsymbol_fillflags.md "FillFlags").
  6. [Expiration types](imtconsymbol_expirflags.md "ExpirFlags").
  7. [Allowed types of order](imtconsymbol_orderflags.md "OrderFlags").
  8. [Stop and Limit levels](imtconsymbol_stopslevel.md "StopsLevel").
  9. [Freeze level](imtconsymbol_freezelevel.md "FreezeLevel").
  10. [Maximum delay of quotes](imtconsymbol_quotestimeout.md "QuotesTimeout").
  11. [Mode of profit conversion for Forex symbols](imtconsymbol_enum.htm#entradeflags).
  12. [Minimal volume](imtconsymbol_volumemin.md "VolumeMin").
  13. [Volume change step](imtconsymbol_volumestep.md "VolumeStep").
  14. [Maximal volume](imtconsymbol_volumemax.md "VolumeMax").

Execution
The following elements are shown above:
  1. [Execution type](imtconsymbol_execmode.md "ExecMode").
  2. [Maximum time deviation](imtconsymbol_ietimeout.md "IETimeout").
  3. [Maximum price deviation in the profitable direction](imtconsymbol_ieslipprofit.md "IESlipProfit").
  4. [Maximum price deviation in the losing direction](imtconsymbol_iesliplosing.md "IESlipLosing").
  5. [Maximal volume](imtconsymbol_ievolumemax.md "IEVolumeMax").

Margin
The following elements are shown above:
  1. [The size of the initial margin](imtconsymbol_margininitial.md "MarginInitial").
  2. [The size of the maintenance margin](imtconsymbol_marginmaintenance.md "MarginMaintenance").
  3. [The mode of checking margin](imtconsymbol_marginflags.md "MarginFlags").
  4. [The initial margin rate](imtconsymbol_marginrateinitial.md "MarginRateInitial").
  5. [The maintenance margin rate](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").

Swaps
The following elements are shown above:
  1. [An option for enabling/disabling swap charging](imtconsymbol_swapmode.md "SwapMode").
  2. [Type of swap charging](imtconsymbol_swapmode.md "SwapMode").
  3. [The swap size for long positions](imtconsymbol_swaplong.md "SwapLong").
  4. [The swap size for short positions](imtconsymbol_swapshort.md "SwapShort").
  5. [The day to charge triple swap](imtconsymbol_swap3day.md "Swap3Day").

Sessions
The following elements are shown above:
  1. [Quoting sessions](imtconsymbol_sessionquoteadd.md "SessionQuoteAdd").
  2. [Trading sessions](imtconsymbol_sessiontradeadd.md "SessionTradeAdd").
  3. [The start date of a symbol's validity period](imtconsymbol_timestart.md "TimeStart").
  4. [The end date of a symbol's validity period](imtconsymbol_timeexpiration.md "TimeExpiration").

IMTConSymbolSession
The [IMTConSymbolSession](imtconsymbolsession.md "IMTConSymbolSession") interface provides access to the parameters of trading and quoting sessions of a symbol.
The figure shows the sessions configuration dialog in MetaTrader 5 Administrator:
  1. [Session beginning](imtconsymbolsession_open.md "Open").
  2. [Session end](imtconsymbolsession_close.md "Close").

IMTConSymbolSink
The [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface contains the handlers of he events of symbol configuration changes.