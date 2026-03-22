# SymbolAddPreliminary (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolAddPreliminary | [](imtgatewayapi_symbolunsubscribe.md "SymbolUnsubscribe") [](imtgatewayapi_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolAddPreliminary
Add or update a preliminary configuration of a symbol.
C++
MTAPIRES IMTGatewayAPI::SymbolAddPreliminary( IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTGatewayAPI.SymbolAddPreliminary( CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Parameters
symbol
[in] An object of the symbol configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Symbol Adding Features
Process of the importing the symbols into the trading platform using this method has several peculiarities:
  * When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated (the list of parameters that can be updated is given below), otherwise a new entry is added. A key field for comparison is the name of the symbol [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConSymbolSink::OnSymbolUpdate](imtconsymbolsink_onsymbolupdate.md "OnSymbolUpdate") notification method is not called.
  * All symbols are added to the \Preliminary\ symbols subgroup. For example, if the path 'Metals\Gold' ([IMTConSymol::Path](imtconsymbol_path.md "Path")) is indicated in the added symbol parameter, the symbol will be added to the \Preliminary\Metals\Gold group.
  * All symbols are imported with the trading possibility ([IMTConSymbol::TradeMode](imtconsymbol_trademode.md "TradeMode")) turned off.

Therefore, an administrator has to manually place a symbol into an appropriate group after the import and allow trading for it.
For full control over symbols, use [IMTGatewayAPI::SymbolUpdate](imtgatewayapi_symbolupdate.md "SymbolUpdate") method. It allows adding symbols to any group and changing any symbol parameters.  
---  
The below list includes all the symbol parameters that can be changed using this method. Other parameters cannot be modified.
  * [ISIN](imtconsymbol_isin.md "ISIN")
  * [Description](imtconsymbol_description.md "Description")
  * [International](imtconsymbol_international.md "International")
  * [Basis](imtconsymbol_basis.md "Basis")
  * [Source](imtconsymbol_source.md "Source")
  * [Page](imtconsymbol_page.md "Page")
  * [CurrencyBase](imtconsymbol_currencybase.md "CurrencyBase")
  * [CurrencyProfit](imtconsymbol_currencyprofit.md "CurrencyProfit")
  * [CurrencyMargin](imtconsymbol_currencymargin.md "CurrencyMargin")
  * [Color](imtconsymbol_color.md "Color")
  * [ColorBackground](imtconsymbol_colorbackground.md "ColorBackground")
  * [TickFlags](imtconsymbol_tickflags.md "TickFlags")
  * [TickBookDepth](imtconsymbol_tickbookdepth.md "TickBookDepth")
  * [FilterDiscard](imtconsymbol_filterdiscard.md "FilterDiscard")
  * [FilterSoft](imtconsymbol_filtersoft.md "FilterSoft")
  * [FilterSoftTicks](imtconsymbol_filtersoftticks.md "FilterSoftTicks")
  * [FilterHard](imtconsymbol_filterhard.md "FilterHard")
  * [FilterHardTicks](imtconsymbol_filterhardticks.md "FilterHardTicks")
  * [TradeFlags](imtconsymbol_tradeflags.md "TradeFlags")
  * [Spread](imtconsymbol_spread.md "Spread")
  * [SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance")
  * [TickValue](imtconsymbol_tickvalue.md "TickValue")
  * [TickSize](imtconsymbol_ticksize.md "TickSize")
  * [ContractSize](imtconsymbol_contractsize.md "ContractSize")
  * [GTCMode](imtconsymbol_gtcmode.md "GTCMode")
  * [CalcMode](imtconsymbol_calcmode.md "CalcMode")
  * [QuotesTimeout](imtconsymbol_quotestimeout.md "QuotesTimeout")
  * [PriceSettle](imtconsymbol_pricesettle.md "PriceSettle")
  * [PriceLimitMax](imtconsymbol_pricelimitmax.md "PriceLimitMax")
  * [PriceLimitMin](imtconsymbol_pricelimitmin.md "PriceLimitMin")
  * [TimeStart](imtconsymbol_timestart.md "TimeStart")
  * [TimeExpiration ](imtconsymbol_timeexpiration.md "TimeExpiration")
  * [FillFlags](imtconsymbol_fillflags.md "FillFlags")
  * [ExpirFlags](imtconsymbol_expirflags.md "ExpirFlags")
  * [VolumeMin](imtconsymbol_volumemin.md "VolumeMin")
  * [VolumeMax](imtconsymbol_volumemax.md "VolumeMax")
  * [VolumeStep](imtconsymbol_volumestep.md "VolumeStep")
  * [VolumeLimit ](imtconsymbol_volumelimit.md "VolumeLimit")
  * [MarginCheckMode](imtconsymbol_marginflags.md "MarginFlags")
  * [MarginInitial](imtconsymbol_margininitial.md "MarginInitial")
  * [MarginMaintenance](imtconsymbol_marginmaintenance.md "MarginMaintenance")
  * [MarginLong](imtconsymbol_marginlong.md "MarginLong")
  * [MarginShort](imtconsymbol_marginshort.md "MarginShort")
  * [MarginLimit](imtconsymbol_marginlimit.md "MarginLimit")
  * [MarginStop](imtconsymbol_marginstop.md "MarginStop")
  * [MarginStopLimit](imtconsymbol_marginstoplimit.md "MarginStopLimit")
