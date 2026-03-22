# Value (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Value | [](imtdeal_profit.md "Profit") [](imtdeal_storage.md "Storage") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Value
Get the deal value in client deposit currency.
C++
double IMTDeal::Value() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.Value()  
---  
Python
MTDeal.Value  
---  
Return Value
Deal value in client deposit currency
Note
The rate of conversion to deposit currency is shown in the [IMTDeal::RateMargin](imtdeal_ratemargin.md "RateMargin") field.
The field is used only for symbols of the [IMTConSymbol::TRADE_MODE_EXCH_*](imtconsymbol_enum.htm#encalcmode) calculation type and groups with the [IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode) risk management type.
In case of exchange risk accounting, each deal affects the account balance: the deal value is charged or deducted from the balance. In other words, the system uses the IMTDeal::Value field here (not [IMTDeal::Profit](imtdeal_profit.md "Profit"), as is the case with OTC accounting). The same applies to verifying the balance using the trading history: the values of deals (rather than their results) are verified. Thus, if you change the deal price for some reason, make sure to update the IMTDeal::Value field as well, since it is not recalculated automatically. Otherwise, the value change result is not displayed on the account balance after its verification and correction using the trading history.
IMTDeal::Value
Set the deal value in client deposit currency.
C++
MTAPIRES IMTDeal::Value( const double value // value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Value( double value // value )  
---  
Python
MTDeal.Value  
---  
Parameters
profit
[in] Deal value in client deposit currency
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The rate of conversion to deposit currency is shown in the [IMTDeal::RateMargin](imtdeal_ratemargin.md "RateMargin") field.
The field is used only for symbols of the [IMTConSymbol::TRADE_MODE_EXCH_*](imtconsymbol_enum.htm#encalcmode) calculation type and groups with the [IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode) risk management type.
In case of exchange risk accounting, each deal affects the account balance: the deal value is charged or deducted from the balance. In other words, the system uses the IMTDeal::Value field here (not [IMTDeal::Profit](imtdeal_profit.md "Profit"), as is the case with OTC accounting). The same applies to verifying the balance using the trading history: the values of deals (rather than their results) are verified. Thus, if you change the deal price for some reason, make sure to update the IMTDeal::Value field as well, since it is not recalculated automatically. Otherwise, the value change result is not displayed on the account balance after its verification and correction using the trading history.