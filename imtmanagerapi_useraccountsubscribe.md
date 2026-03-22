# UserAccountSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserAccountSubscribe | [](imtmanagerapi_usercertconfirm.md "UserCertConfirm") [](imtmanagerapi_useraccountunsubscribe.md "UserAccountUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserAccountSubscribe
Subscribe to receive events related to changes in the account trading state.
C++
MTAPIRES IMTManagerAPI::UserAccountSubscribe( IMTAccountSink* sink // A pointer to the IMTAccountSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.UserAccountSubscribe( CIMTAccountSink obj // the CIMTAccountSink object )  
---  
Python
ManagerAPI.UserAccountSubscribe( sink # IMTAccountSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTAccountSink](imtaccountsink.md "IMTAccountSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Event subscriptions are thread safe. One and the same [IMTAccountSink](imtaccountsink.md "IMTAccountSink") interface cannot subscribe to an event twice. In this case, the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::UserAccountUnsubscribe](imtmanagerapi_useraccountunsubscribe.md "UserAccountUnsubscribe") or until the manager interface is deleted by using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
The method only works if the [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") PUMP_MODE_USERS, PUMP_MODE_ORDERS and PUMP_MODE_POSITIONS were specified when connecting.