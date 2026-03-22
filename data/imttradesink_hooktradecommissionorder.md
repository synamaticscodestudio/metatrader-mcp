# HookTradeCommissionOrder (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeCommissionOrder | [](imttradesink_hooktradeinterestchargedeal.md "HookTradeInterestChargeDeal") [](imttradesink_hooktradecommissiondeal.md "HookTradeCommissionDeal") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeCommissionOrder
A hook of the calculation of commission, which is blocked on an account during the placing of an order.
virtual MTAPIRES IMTTradeSink::HookTradeCommissionOrder( const IMTConCommission* commission, // A pointer to the commission object const IMTConGroup* group, // A pointer to the group object const IMTConSymbol*  symbol, // A pointer to the object of the symbol configuration const IMTOrder* order, // A pointer to the order object const double original_value, // Initial value double& new_value // Update value )  
---  
Parameters
commission
[in] A pointer to the [object of commission configuration](imtconcommission.md "IMTConCommission"), in accordance with which the amount to lock is calculated.
group
[in] A pointer to the object of the [configuration of the group](config_group.md "Groups") of a client, for whom the locked commission is calculated.
symbol
[in] [The object of the symbol](imtconsymbol.md "IMTConSymbol"), for which a trade operation whose commission is being calculated, has been requested.
order
[in] [The object of the symbol](imtorder.md "IMTOrder"), for which a trade operation whose commission is being calculated, has been requested.
original_value
[in] The initial value of commission that will be locked.
new_value
[out] The modified value of commission that will be locked.
Return Value
In case of confirmation [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned, otherwise, the request will be rejected with a response code returned from the hook. Thus, if the response code is different from MT_RET_OK, the commission will not be blocked.
Note
Initially, the values of original_value and new_value are equal. If the values are different, then the interest value has been changed (new_value) by one of the previous [hook handlers](serverapi_hooks.md "Hooks").
Regardless of [commission type](imtconcommission_enum.htm#encommmode) (standard or agent) original_value is always negative. However, during the standard commission operation, the specified amount is deduced from the traders account (so the final value is negative), while the agent commission is added to the agent account (the final value is positive). When you modify the commission amount, specify a negative value in the new_value field.
This hook is not called for immediate commission ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)), because this type of commission only applies to deals, but not to orders. To manage immediate commissions use [IMTTradeSink::HookTradeCommissionDeal](imttradesink_hooktradecommissiondeal.md "HookTradeCommissionDeal"). Hooks for end-of-day/month commissions are called in the following order:
  * Once an order is created, a commission is calculated for this order, and IMTTradeSink::HookTradeCommissionOrder is called.
  * The appropriate commission value is blocked on the client's account.
  * A deal is performed based on that order. Commission is recalculated for the actually executed deal (its volume) and IMTTradeSink::HookTradeCommissionDeal is called.
  * The previously blocked commission amount is updated.
