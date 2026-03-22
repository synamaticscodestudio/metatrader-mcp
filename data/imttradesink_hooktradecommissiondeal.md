# HookTradeCommissionDeal (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeCommissionDeal | [](imttradesink_hooktradecommissionorder.md "HookTradeCommissionOrder") [](imttradesink_hooktradecommissioncharge.md "HookTradeCommissionCharge") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeCommissionDeal
A hook of the calculation of commission, which is charged during the execution of a deal. It is called before the calculation and charging/blocking commission on the account, allowing to use an individual commission calculation algorithm.
virtual MTAPIRES IMTTradeSink::HookTradeCommissionDeal( const IMTConCommission* commission, // A pointer to the commission object const IMTConGroup* group, // A pointer to the group object const IMTConSymbol*  symbol, // A pointer to the object of the symbol configuration const IMTDeal* deal, // A pointer to the deal object const double original_value, // Initial value double& new_value // Update value )  
---  
Parameters
commission
[in] A pointer to the [object of commission configuration](imtconcommission.md "IMTConCommission"), in accordance with which the amount of commission to charge is calculated.
group
[in] A pointer to the object of the [configuration of the group](config_group.md "Groups") of a client, for whom the commission is calculated.
symbol
[in] [The object of the symbol](imtconsymbol.md "IMTConSymbol"), for which a trade operation whose commission is being calculated, has been requested.
deal
[in] [The object of the deal](imtdeal.md "IMTDeal"), for which the amount of commission to charge is being calculated.
original_value
[in] The initial value of commission that will be charged.
new_value
[out] The modified value of commission that will be charged.
Return Value
In case of confirmation [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned, otherwise, the request will be rejected with a response code returned from the hook. Thus, if the response code is different from MT_RET_OK, the interest is not added.
Note
Initially, the values of original_value and new_value are equal. If the values are different, then the interest value has been changed (new_value) by one of the previous [hook handlers](serverapi_hooks.md "Hooks").
Regardless of [commission type](imtconcommission_enum.htm#encommmode) (standard or agent) original_value is always negative, except for the turnover commission described [below](imttradesink_hooktradecommissiondeal.htm#turnover). However, during the standard commission operation, the specified amount is deduced from the traders account (so the final value is negative), while the agent commission is added to the agent account (the final value is positive). When you modify the commission amount, specify a negative value in the new_value field.
IMTTradeSink::HookTradeCommissionDeal is called in all [commission calculation modes](imtconcommission_enum.htm#encommchargemode): immediate, end-of-day and end-of-month. For immediate commissions, a commission for a specific deal is actually overridden in this hook. For end-of-day/month commissions, a commission for a specific deal as well as a turnover commission can be overridden in this hook. This depends on commission levels — [IMTConCommission::EnCommRangeMode](imtconcommission_enum.htm#encommrangemode).
Hooks for end-of-day/month commissions are called as follows:
  * Once an order is created, a commission is calculated for this order, and IMTTradeSink::HookTradeCommissionOrder is called.
  * The appropriate commission value is blocked on the client's account.
  * A deal is performed based on that order. Commission is recalculated for the actually executed deal (its volume) and IMTTradeSink::HookTradeCommissionDeal is called.
  * The previously blocked commission amount is updated.

If the commission is charged on turnover, the next deal may reduce the blocked amount on the account. This may happen when moving to the next commission level. The original_value will be positive in this case.