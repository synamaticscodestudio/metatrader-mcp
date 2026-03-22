# IMTConSymbol (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols")/ IMTConSymbol | [](config_symbol.md "Symbols") [](imtconsymbol_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol
The IMTConSymbol class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconsymbol_release.md "Release") | Delete the current object. |
| [Assign](imtconsymbol_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconsymbol_clear.md "Clear") | Clear an object. |
| [Symbol](imtconsymbol_symbol.md "Symbol") | Get and set the name of the symbol. |
| [Path](imtconsymbol_path.md "Path") | Get and set the path to the symbol. |
| [ISIN](imtconsymbol_isin.md "ISIN") | Get and set the international identification code (ISIN) of the symbol. |
| [Description](imtconsymbol_description.md "Description") | Get and set the description of the symbol. |
| [International](imtconsymbol_international.md "International") | Get and set the international name of the symbol. |
| [Category](imtconsymbol_category.md "Category") | Get and set the symbol category. |
| [Exchange](imtconsymbol_exchange.md "Exchange") | Get and set the name of the exchange in which the symbol is traded. |
| [CFI](imtconsymbol_cfi.md "CFI") | Get and set instrument classification in accordance with the ISO 10962 standard. |
| [Sector](imtconsymbol_sector.md "Sector") | Get and set the economic sector the instrument belongs to. |
| [Industry](imtconsymbol_industry.md "Industry") | Get and set the industry branch the instrument belongs to. |
| [Country](imtconsymbol_country.md "Country") | Get and set the country of the company whose shares are traded on the stock exchange. |
| [Basis](imtconsymbol_basis.md "Basis") | Get and set the basic asset of a derivative financial instrument. |
| [Source](imtconsymbol_source.md "Source") | Get and set the name of the source symbol whose quotes should be used for the current financial instrument. |
| [Page](imtconsymbol_page.md "Page") | Get and set the address of a web page of the symbol. |
| [CurrencyBase](imtconsymbol_currencybase.md "CurrencyBase") | Get and set the base currency of a symbol. |
| [CurrencyBaseDigits](imtconsymbol_currencybasedigits.md "CurrencyBaseDigits") | Get the accuracy of conversion into the base currency. |
| [CurrencyBaseDigitsSet](imtconsymbol_currencybasedigitsset.md "CurrencyBaseDigitsSet") | Set the accuracy of conversion into the base currency. |
| [CurrencyProfit](imtconsymbol_currencyprofit.md "CurrencyProfit") | Get and set the profit currency for the symbol. |
| [CurrencyProfitDigits](imtconsymbol_currencyprofitdigits.md "CurrencyProfitDigits") | Get the accuracy of conversion into the profit currency. |
| [CurrencyProfitDigitsSet](imtconsymbol_currencyprofitdigitsset.md "CurrencyProfitDigitsSet") | Set the accuracy of conversion into the profit currency. |
| [CurrencyMargin](imtconsymbol_currencymargin.md "CurrencyMargin") | Get and set the symbol margin currency. |
| [CurrencyMarginDigits](imtconsymbol_currencymargindigits.md "CurrencyMarginDigits") | Get the accuracy of conversion into the margin currency. |
| [CurrencyMarginDigitsSet](imtconsymbol_currencymargindigitsset.md "CurrencyMarginDigitsSet") | Set the accuracy of conversion into the margin currency. |
| [Color](imtconsymbol_color.md "Color") | Get and set the color of the symbol in the "Market Watch" window of the terminals. |
| [ColorBackground](imtconsymbol_colorbackground.md "ColorBackground") | Get and set the color of the symbol background in the "Market Watch" window of the terminals. |
| [Digits](imtconsymbol_digits.md "Digits") | Get and set the number of decimal places in the price of the symbol. |
| [Point](imtconsymbol_point.md "Point") | Get the size of the point. |
| [Multiply](imtconsymbol_multiply.md "Multiply") | Get the value to multiply the price to, to get the number of points. |
| [TickFlags](imtconsymbol_tickflags.md "TickFlags") | Get and set the settings of working with tick data. |
| [TickBookDepth](imtconsymbol_tickbookdepth.md "TickBookDepth") | Get and set the range of the Depth of Market. |
| [FilterSoft](imtconsymbol_filtersoft.md "FilterSoft") | Get and set the soft level of price filtering. |
| [FilterSoftTicks](imtconsymbol_filtersoftticks.md "FilterSoftTicks") | Get and set the value of the ticks counter for the soft filtering. |
| [FilterHard](imtconsymbol_filterhard.md "FilterHard") | Get and set the hard level of price filtering. |
| [FilterHardTicks](imtconsymbol_filterhardticks.md "FilterHardTicks") | Get and set the value of the ticks counter for the hard filtering. |
| [FilterDiscard](imtconsymbol_filterdiscard.md "FilterDiscard") | Get and set the discard level of price filtering. |
| [FilterSpreadMax](imtconsymbol_filterspreadmax.md "FilterSpreadMax") | Get and set the maximum allowed spread value. |
| [FilterSpreadMin](imtconsymbol_filterspreadmin.md "FilterSpreadMin") | Get and set the minimum allowed spread value. |
| [FilterGap](imtconsymbol_filtergap.md "FilterGap") | Get and set the difference between the previous and the next quote, starting from which a gap is considered to be formed. |
| [FilterGapTicks](imtconsymbol_filtergapticks.md "FilterGapTicks") | Get and set the number of ticks for disabling the gap mode. If no new gap occurs within the specified number of quotes, the mode is disabled. |
| [SubscriptionsDelay](imtconsymbol_subscriptionsdelay.md "SubscriptionsDelay") | Get and set the delay for the quotes provided by subscription. |
| [TradeMode](imtconsymbol_trademode.md "TradeMode") | Get and set the symbol trading mode. |
| [CalcMode](imtconsymbol_calcmode.md "CalcMode") | Get and set the mode of margin and profit calculation. |
| [ExecMode](imtconsymbol_execmode.md "ExecMode") | Get and set the symbol execution mode. |
| [GTCMode](imtconsymbol_gtcmode.md "GTCMode") | Get and set the mode of keeping orders at a trade day change. |
| [FillFlags](imtconsymbol_fillflags.md "FillFlags") | Get and set the types of filling allowed for the symbol. |
| [ExpirFlags](imtconsymbol_expirflags.md "ExpirFlags") | Get and set the available types of order execution for the symbol. |
| [Spread](imtconsymbol_spread.md "Spread") | Get and set the symbol spread size. |
| [SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance") | Get and set the symbol spread balance. |
| [SpreadDiff](imtconsymbol_spreaddiff.md "SpreadDiff") | Get and set the symbol spread difference. |
| [SpreadDiffBalance](imtconsymbol_spreaddiffbalance.md "SpreadDiffBalance") | Get and set the balance of spread difference. |
| [TickValue](imtconsymbol_tickvalue.md "TickValue") | Get and set the price of one tick of the symbol. |
| [TickSize](imtconsymbol_ticksize.md "TickSize") | Get and set the size of one tick of the symbol. |
| [ContractSize](imtconsymbol_contractsize.md "ContractSize") | Get and set the contract size of the symbol. |
| [StopsLevel](imtconsymbol_stopslevel.md "StopsLevel") | Get and set the price band, within which placing stop orders is not allowed. |
| [FreezeLevel](imtconsymbol_freezelevel.md "FreezeLevel") | Get and set the price band, within which it is not allowed to modify orders and positions. |
| [QuotesTimeout](imtconsymbol_quotestimeout.md "QuotesTimeout") | Get and set the time to wait for quotes, after which trading is automatically disabled for the symbol. |
| [VolumeMin](imtconsymbol_volumemin.md "VolumeMin") | Get and set the minimum volume of trade operations for the symbol. |
| [VolumeMinExt](imtconsymbol_volumeminext.md "VolumeMinExt") | Get and set the minimum volume of trade operations for the symbol for the group with extended accuracy. |
| [VolumeMax](imtconsymbol_volumemax.md "VolumeMax") | Get and set the maximum volume of trade operations for the symbol. |
| [VolumeMaxExt](imtconsymbol_volumemaxext.md "VolumeMaxExt") | Get and set the maximum volume of trade operations for the symbol for the group with extended accuracy. |
| [VolumeStep](imtconsymbol_volumestep.md "VolumeStep") | Get and set the volume change step for trade operations for the symbol. |
| [VolumeStepExt](imtconsymbol_volumestepext.md "VolumeStepExt") | Get and set the volume change step allowed for trade operations for the symbol, with extended accuracy. |
| [VolumeLimit](imtconsymbol_volumelimit.md "VolumeLimit") | Get and set the maximum aggregate volume of positions and orders for the symbol in one direction. |
| [VolumeLimitExt](imtconsymbol_volumelimitext.md "VolumeLimitExt") | Get and set the maximum aggregate volume (with extended accuracy) of positions and orders for the symbol in one direction. |
| [MarginFlags](imtconsymbol_marginflags.md "MarginFlags") | Get and set the additional margin check modes. |
| [MarginInitial](imtconsymbol_margininitial.md "MarginInitial") | Get and set the size of the initial margin. |
| [MarginMaintenance](imtconsymbol_marginmaintenance.md "MarginMaintenance") | Get and set the size of the maintenance margin. |
| [MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") | Get and set the initial margin rate for orders of the specified type. |
| [MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance") | Get and set the maintenance margin rate for orders of the specified type. |
| [MarginLong](imtconsymbol_marginlong.md "MarginLong") | Get and set the margin ratio for long positions and orders. The method is obsolete. |
| [MarginShort](imtconsymbol_marginshort.md "MarginShort") | Get and set the margin ratio for short positions and orders. The method is obsolete. |
| [MarginLimit](imtconsymbol_marginlimit.md "MarginLimit") | Get and set the margin ratio for limit orders. The method is obsolete. |
| [MarginStop](imtconsymbol_marginstop.md "MarginStop") | Get and set the margin ratio for stop orders. The method is obsolete. |
| [MarginStopLimit](imtconsymbol_marginstoplimit.md "MarginStopLimit") | Get and set the margin ratio for stop-limit orders. The method is obsolete. |
| [MarginHedged](imtconsymbol_marginhedged.md "MarginHedged") | Get and set the value of the hedged margin. |
| [MarginRateCurrency](imtconsymbol_marginratecurrency.md "MarginRateCurrency") | Get and set the margin currency rate. |
| [MarginRateLiquidity](imtconsymbol_marginrateliquidity.md "MarginRateLiquidity") | Get and set the liquidity rate of the symbol. |
| [SwapMode](imtconsymbol_swapmode.md "SwapMode") | Get and set the swap calculation mode for the symbol. |
| [SwapLong](imtconsymbol_swaplong.md "SwapLong") | Get and set the swap size for long positions. |
| [SwapShort](imtconsymbol_swapshort.md "SwapShort") | Get and set the swap size for short positions. |
| [Swap3Day](imtconsymbol_swap3day.md "Swap3Day") | Get and set the triple swap day. The method is obsolete. |
| [SwapYearDays](imtconsymbol_swapyeardays.md "SwapYearDays") | Get and set the number of days in a year used in calculating swap percent. |
| [SwapFlags](imtconsymbol_swapflags.md "SwapFlags") | Get and set additional swap settings. |
| [SwapRateSunday](imtconsymbol_swapratesunday.md "SwapRateSunday") | Get and set swap multiplier for Sundays. |
| [SwapRateMonday](imtconsymbol_swapratemonday.md "SwapRateMonday") | Get and set swap multiplier for Mondays. |
| [SwapRateTuesday](imtconsymbol_swapratetuesday.md "SwapRateTuesday") | Get and set swap multiplier for Tuesdays. |
| [SwapRateWednesday](imtconsymbol_swapratewednesday.md "SwapRateWednesday") | Get and set swap multiplier for Wednesdays. |
| [SwapRateThursday](imtconsymbol_swapratethursday.md "SwapRateThursday") | Get and set swap multiplier for Thursdays. |
| [SwapRateFriday](imtconsymbol_swapratefriday.md "SwapRateFriday") | Get and set swap multiplier for Fridays. |
| [SwapRateSaturday](imtconsymbol_swapratesaturday.md "SwapRateSaturday") | Get and set swap multiplier for Saturdays. |
| [TimeStart](imtconsymbol_timestart.md "TimeStart") | Get and set the symbol trading start date. |
| [TimeExpiration](imtconsymbol_timeexpiration.md "TimeExpiration") | Get and set the date of trading expiration for the symbol. |
| [SessionQuoteAdd](imtconsymbol_sessionquoteadd.md "SessionQuoteAdd") | Add a quoting session for a symbol. |
| [SessionQuoteUpdate](imtconsymbol_sessionquoteupdate.md "SessionQuoteUpdate") | Update a quoting session of a symbol by the day and index. |
| [SessionQuoteDelete](imtconsymbol_sessionquotedelete.md "SessionQuoteDelete") | Delete a quoting session of a symbol by the day and index. |
| [SessionQuoteClear](imtconsymbol_sessionquoteclear.md "SessionQuoteClear") | Clear the list of quoting sessions of a symbol. |
| [SessionQuoteShift](imtconsymbol_sessionquoteshift.md "SessionQuoteShift") | Move a quoting session of a symbol. |
| [SessionQuoteTotal](imtconsymbol_sessionquotetotal.md "SessionQuoteTotal") | Get the number of symbol quoting sessions for a specified day. |
| [SessionQuoteNext](imtconsymbol_sessionquotenext.md "SessionQuoteNext") | Get a quoting session of the symbol by the day and index. |
| [SessionTradeAdd](imtconsymbol_sessiontradeadd.md "SessionTradeAdd") | Add a trading session for the symbol. |
| [SessionTradeUpdate](imtconsymbol_sessiontradeupdate.md "SessionTradeUpdate") | Update a trading session of a symbol by the day and index. |
| [SessionTradeDelete](imtconsymbol_sessiontradedelete.md "SessionTradeDelete") | Delete a trading session of a symbol by the day and index. |
| [SessionTradeClear](imtconsymbol_sessiontradeclear.md "SessionTradeClear") | Clear the list of all trading sessions of a symbol. |
| [SessionTradeShift](imtconsymbol_sessiontradeshift.md "SessionTradeShift") | Move a trading session of a symbol. |
| [SessionTradeTotal](imtconsymbol_sessiontradetotal.md "SessionTradeTotal") | Get the number of symbol trading sessions for a specified day. |
| [SessionTradeNext](imtconsymbol_sessiontradenext.md "SessionTradeNext") | Get a trading session of a symbol by the day and index. |
| [REFlags](imtconsymbol_reflags.md "REFlags") | Get and set the flags of request execution ([IMTConSymbol::EXECUTION_REQUEST](imtconsymbol_enum.htm#enexecutionmode)). |
| [RETimeout](imtconsymbol_retimeout.md "RETimeout") | Get and set the time during which the price issued by a dealer in the request execution mode is valid. |
| [IECheckMode](imtconsymbol_iecheckmode.md "IECheckMode") | Get and set the check mode for instant execution. |
| [IETimeout](imtconsymbol_ietimeout.md "IETimeout") | Get and set the maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price. |
| [IESlipProfit](imtconsymbol_ieslipprofit.md "IESlipProfit") | Get and set the maximum allowed slippage in the profitable direction during instant execution. |
| [IESlipLosing](imtconsymbol_iesliplosing.md "IESlipLosing") | Get and set the maximum allowed slippage in the loss direction during instant execution. |
| [IEVolumeMax](imtconsymbol_ievolumemax.md "IEVolumeMax") | Get and set the maximum volume of a trade operation that can be executed in the instant execution mode. |
| [IEVolumeMaxExt](imtconsymbol_ievolumemaxext.md "IEVolumeMaxExt") | Get and set the maximum volume (with extended accuracy) of a trade operation that can be executed in the instant execution mode. |
| [IEFlags](imtconsymbol_ieflags.md "IEFlags") | Get and set flags for the instant execution mode ([IMTConSymbol::EXECUTION_INSTANT](imtconsymbol_enum.htm#enexecutionmode)). |
| [PriceSettle](imtconsymbol_pricesettle.md "PriceSettle") | Get the clearing price of the previous session. |
| [PriceLimitMax](imtconsymbol_pricelimitmax.md "PriceLimitMax") | Get and set the maximum allowed price of the symbol. |
| [PriceLimitMin](imtconsymbol_pricelimitmin.md "PriceLimitMin") | Get and set the minimum allowed price of the symbol. |
| [TradeFlags](imtconsymbol_tradeflags.md "TradeFlags") | Get and set the trade flags of the symbol. |
| [OrderFlags](imtconsymbol_orderflags.md "OrderFlags") | Get and set the flags of order types allowed for the symbol. |
| [FaceValue](imtconsymbol_facevalue.md "FaceValue") | Get and set the face value of a bond. |
| [AccruedInterest](imtconsymbol_accruedinterest.md "AccruedInterest") | Get and set the accrued interest of a bond. |
| [SpliceType](imtconsymbol_splicetype.md "SpliceType") | Get and set the futures contract splicing type. |
| [SpliceTimeType](imtconsymbol_splicetimetype.md "SpliceTimeType") | Get and set the date of splicing of the futures contracts. |
| [SpliceTimeDays](imtconsymbol_splicetimedays.md "SpliceTimeDays") | Get and set the offset of splicing of the futures contracts. |
| [ChartMode](imtconsymbol_chartmode.md "ChartMode") | Get and set the symbol charting mode. |
| [OptionsMode](imtconsymbol_optionsmode.md "OptionsMode") | Get and set the option type and style. |
| [PriceStrike](imtconsymbol_pricestrike.md "PriceStrike") | Get and set the option's strike price. |

The IMTConSymbol class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnFillingFlags](imtconsymbol_enum.htm#enfillingflags) | Order filling methods for a symbol. |
| [EnExpirationFlags](imtconsymbol_enum.htm#enexpirationflags) | Symbol order types. |
| [EnTradeMode](imtconsymbol_enum.htm#entrademode) | Trading modes. |
| [EnExecutionMode](imtconsymbol_enum.htm#enexecutionmode) | Execution types. |
| [EnCalcMode](imtconsymbol_enum.htm#encalcmode) | Margin and profit calculation types. |
| [EnGTCMode](imtconsymbol_enum.htm#engtcmode) | Order expiration types. |
| [EnTickFlags](imtconsymbol_enum.htm#entickflags) | Options for working with tick data. |
| [EnMarginFlags](imtconsymbol_enum.htm#enmarginflags) | Margin check modes. |
| [EnSwapMode](imtconsymbol_enum.htm#enswapmode) | Swap charging modes. |
| [EnInstantMode](imtconsymbol_enum.htm#eninstantmode) | Check types in the instant execution mode. |
| [EnRequestFlags](imtconsymbol_enum.htm#enrequestflags) | The options of the request execution mode. |
| [EnTradeFlags](imtconsymbol_enum.htm#entradeflags) | Trade flags of a symbol. |
| [EnOrderFlags](imtconsymbol_enum.htm#entradeflags) | Flags of order types that are allowed for the symbol. |
| [EnMarginRateTypes](imtconsymbol_enum.htm#enmarginratetypes) | Types of orders for specifying margin rates. |
| [EnSpliceType](imtconsymbol_enum.htm#ensplicetype) | Types of splicing of futures contracts. |
| [EnSpliceTimeType](imtconsymbol_enum.htm#ensplicetimetype) | Dates of splicing of futures contracts. |
| [EnChartMode](imtconsymbol_enum.htm#enchartmode) | Charting modes. |
| [EnOptionMode](imtconsymbol_enum.htm#enoptionmode) | Option types and styles. |