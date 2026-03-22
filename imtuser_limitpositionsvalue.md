# LimitPositionsValue (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ LimitPositionsValue | [](imtuser_limitorders.md "LimitOrders") [](imtuser_apidataset.md "APIDataSet") |
| --- | --- | --- |
| --- | --- |

IMTUser::LimitPositionsValue
Get the maximum value of open positions allowed on the account.
C++
UINT IMTUser::LimitPositionsValue() const  
---  
.NET (Gateway/Manager API)
uint CIMTUser.LimitPositionsValue()  
---  
Return Value
The maximum value of positions in the deposit currency.
IMTUser::LimitPositionsValue
Set the maximum value of open positions allowed on the account.
C++
MTAPIRES IMTUser::LimitPositionsValue( const double limit // Limit on positions )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.LimitPositionsValue( double limit // Limit on positions )  
---  
Parameters
limit
[in] The maximum value of positions in the deposit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
The positions are evaluated as follows:
For each symbol, the total value of positions and active pending orders is determined separately for each direction, i.e., separately for buy and sell operations. The difference in the values of these direction is calculated. A similar analysis is performed for all instruments for which the account has open positions and orders.
The obtained values are summed up and the result is compared with the specified limit. Once the limit is reached, the platform will disable the placing of new orders if their execution may increase the total value of open positions.
Each position/order value calculation depends on the symbol's margin/profit calculation mode ([IMTConSymbol::CalcMode](imtconsymbol_calcmode.md "CalcMode")).
For the symbols with the Forex calculation type, the value is calculated in the base symbol currency and is equal to the product of the contract size and the volume. For example, for EURUSD with the contract size of 100,000, the value of 1 lot is equal to 100,000 EUR.
For the symbols with the CFD, CFD Leverage, CFD Index and Futures calculation type, the value is also calculated in the deposit currency. Since the contract size of such instruments is not expressed in money (it can be expressed, for example, in the amount of assets), the contract size is additionally multiplied by the instrument price to obtain the value in monetary terms. For Futures symbols, the final value is additionally multiplied by the ratio of tick price to tick size. For example, if some Futures symbol has USD as the base currency, the contract size is equal to 100, the cost is 33, and the tick price to tick size ratio is 1/0.1, the value of one lot of the position is equal to 100*33*10 = 33,000 USD. For a CFD symbol with the same parameters, one lot size would be 100*33 = 3,300 USD.
If the symbol base currency differs from the account deposit currency (specified after the field), the calculated value will be additionally converted using the relevant exchange rate.