# HookTradeInterestCharge (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeInterestCharge | [](imttradesink_hooktradeinterest.md "HookTradeInterest") [](imttradesink_hooktradeinterestchargedeal.md "HookTradeInterestChargeDeal") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeInterestCharge
A hook of adding the [calculated amount](imttradesink_hooktradeinterest.md "HookTradeInterest") of the annual interest to a client's account.
virtual MTAPIRES IMTTradeSink::HookTradeInterestCharge( const INT64 datetime, // Time of interest adding const IMTConGroup* group, // A pointer to the confirmation object const double original_value, // Initial value double& new_value // Changed value )  
---  
Parameters
datetime
[in] The time of interest charging in seconds that have elapsed since 01.01.1970.
group
[in] A pointer to the object of the [configuration of the group](config_group.md "Groups") of a client, for whom the interest is added.
original_value
[in] The initial value of annual interest calculated by the server.
new_value
[out] The new value of added annual interest.
Return Value
In case of confirmation [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned, otherwise, the request will be rejected with a response code returned from the hook. Thus, if the response code is different from MT_RET_OK, the interest is not added.
Note
Initially, the values of original_value and new_value are equal. If the values are different, then the interest value has been changed (new_value) by one of the previous [hook handlers](serverapi_hooks.md "Hooks").
After the hook, the [IMTTradeSink::HookTradeInterestChargeDeal](imttradesink_hooktradeinterestchargedeal.md "HookTradeInterestChargeDeal") hook is called immediately prior to executing an interest charge deal.