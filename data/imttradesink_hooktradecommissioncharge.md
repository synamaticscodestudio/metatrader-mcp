# HookTradeCommissionCharge (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeCommissionCharge | [](imttradesink_hooktradecommissiondeal.md "HookTradeCommissionDeal") [](imttradesink_hooktradeexecution.md "HookTradeExecution") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeCommissionCharge
Hook of final adding/withdrawal of commissions from an account at the end of a day/month.
virtual MTAPIRES IMTTradeSink::HookTradeCommissionCharge( const INT64 period_start, // Beginning of period const INT64 period_end, // End of period const IMTConCommission* commission, // A pointer to the commission object const IMTConGroup* group, // A pointer to the group object const IMTUser* user, // A pointer to the user object const double original_value, // Initial value double& new_value // Update value )  
---  
Parameters
period_start
[in] The beginning of the period for which the final commission amount is added/withdrawn, in seconds that have elapsed since 01.01.1970.
period_end
[in] The end of the period for which the final commission amount is added/withdrawn, in seconds that have elapsed since 01.01.1970.
commission
[in] A pointer to the [commission configuration object](imtconcommission.md "IMTConCommission"), in accordance with which the commission amount is added/withdrawn.
group
[in] A pointer to the object of the [configuration of the group](config_group.md "Groups") of a client, for whom the commission is added/withdrawn.
user
[in] A pointer to the [object of the client record](imtuser.md "IMTUser"), for which the commission is added/withdrawn.
original_value
[in] The initial value of commissions that will be added/withdrawn.
new_value
[out] The modified value of commissions that will be added/withdrawn.
Return Value
In case of confirmation [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned, otherwise, the request will be rejected with a response code returned from the hook. Thus, if the response code is different from MT_RET_OK, the commission is not charged.
Note
Initially, the values of original_value and new_value are equal. If the values are different, then the interest value has been changed (new_value) by one of the previous [hook handlers](serverapi_hooks.md "Hooks").
Regardless of [commission type](imtconcommission_enum.htm#encommmode) (standard or agent) original_value is always negative. However, during the standard commission operation, the specified amount is deduced from the traders account (so the final value is negative), while the agent commission is added to the agent account (the final value is positive). When you modify the commission amount, specify a negative value in the new_value field.